import BackButton from 'assets/Images/ContentImages/left.png';
import UserLogo from 'assets/Images/HeaderImages/userlogo.jpg';
import ProfilePopUp from 'layouts/profile-popup-menu/ProfilePopUp.tsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useEffect(() => {
    const routeToTitle: { [key: string]: string } = {
      '/home': 'Home',
      '/lessons': 'Lessons',
      '/exams': 'Exams',
      '/profile': 'Profile'
    };

    setPageTitle(routeToTitle[location.pathname]);
  }, [location]);

  const handleProfileHover = () => {
    setIsProfileVisible(true);
  };

  const handleProfileLeave = () => {
    setIsProfileVisible(false);
  };

  return (
    <header className='header'>
      <div className='header-content-center'>
        <div className='header-title'>
          {location.pathname.startsWith('/lesson/') ? (
            <div onClick={() => history.back()}>
              <img
                src={BackButton}
                alt='backButton'
                className='header-lesson-back-button'
              />
            </div>
          ) : (
            <h1 className='header-title-text'>{pageTitle}</h1>
          )}
        </div>
        <div className='header-user-info'>
          <div
            className='header-user-info-div user'
            onMouseEnter={handleProfileHover}
            onMouseLeave={handleProfileLeave}
          >
            <img
              src={UserLogo}
              alt='userLogo'
              className='header-user-logo'
              onClick={() => setIsProfileVisible(!isProfileVisible)}
            />
          </div>
          {isProfileVisible && (
            <div
              onMouseEnter={handleProfileHover}
              onMouseLeave={handleProfileLeave}
            >
              <ProfilePopUp
                setIsProfileVisible={setIsProfileVisible}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
