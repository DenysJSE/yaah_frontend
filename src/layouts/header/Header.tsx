import XpLogo from '@assets/Images/HeaderImages/expirience.png';
import XpLogoDark from '@assets/Images/HeaderImages/expirience_dark.png';
import NotificationLogo from '@assets/Images/HeaderImages/notif.png';
import NotificationLogoDark from '@assets/Images/HeaderImages/notif_dark.png';
import UserLogo from '@assets/Images/HeaderImages/userlogo.jpg';
import BackButton from '@assets/Images/ContentImages/left.png'
import ProfilePopUp from '@layouts/profile popup menu/ProfilePopUp.tsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderInterface {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

interface IUser {
  id: number,
  nickname: string,
  email: string,
  coins: number,
  roles: {
    id: number,
    value: string,
    description: string
  }
}

function Header({ isDark, setIsDark }: HeaderInterface) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUserString = localStorage.getItem('user');
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

    setUser(storedUser)
  }, []);

  useEffect(() => {
    const routeToTitle: { [key: string]: string } = {
      '/home': 'Home',
      '/lessons': 'Lessons',
      '/exams': 'Exams',
      '/achievements': 'Achievements',
      '/missions': 'Missions',
      '/leaderboard': 'LeaderBoard',
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
              <img src={BackButton} alt='backButton' className='header-lesson-back-button'/>
            </div>
          ) : (
            <h1 className='header-title-text'>{pageTitle}</h1>
          )}
        </div>
        <div className='header-user-info'>
          <div className='header-user-info-div xp-count'>
            <img
              src={isDark ? XpLogo : XpLogoDark}
              alt='xpLogo'
              className='header-xp-notification-image'
            />
            <span className='header-xp-amount'>{user?.coins}</span>
          </div>
          <div className='header-user-info-div notification'>
            <img
              src={isDark ? NotificationLogo : NotificationLogoDark}
              alt='Notification'
              className='header-xp-notification-image'
            />
          </div>
          <div
            className='header-user-info-div user'
            onMouseEnter={handleProfileHover}
            onMouseLeave={handleProfileLeave}
          >
          <img src={UserLogo} alt='userLogo' className='header-user-logo' onClick={() => setIsProfileVisible(!isProfileVisible)} />
          </div>
          {isProfileVisible && (
            <div
              onMouseEnter={handleProfileHover}
              onMouseLeave={handleProfileLeave}
            >
              <ProfilePopUp isDark={isDark} setIsDark={setIsDark} setIsProfileVisible={setIsProfileVisible} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
