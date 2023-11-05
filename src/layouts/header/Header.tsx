import XpLogo from '@assets/Images/HeaderImages/expirience.png';
import XpLogoDark from '@assets/Images/HeaderImages/expirience_dark.png';
import NotificationLogo from '@assets/Images/HeaderImages/notif.png';
import NotificationLogoDark from '@assets/Images/HeaderImages/notif_dark.png';
import UserLogo from '@assets/Images/HeaderImages/userlogo.jpg';
import ProfilePopUp from '@layouts/profile popup menu/ProfilePopUp.tsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderInterface {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

function Header({ isDark, setIsDark }: HeaderInterface) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(false);

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

    setPageTitle(routeToTitle[location.pathname] || '');
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
          <h1 className='header-title-text'>{pageTitle}</h1>
        </div>
        <div className='header-user-info'>
          <div className='header-user-info-div xp-count'>
            <img
              src={isDark ? XpLogo : XpLogoDark}
              alt='xpLogo'
              className='header-xp-notification-image'
            />
            <span className='header-xp-amount'>500</span>
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
            <img src={UserLogo} alt='userLogo' className='header-user-logo' />
          </div>
          {isProfileVisible && (
            <div
              onMouseEnter={handleProfileHover}
              onMouseLeave={handleProfileLeave}
            >
              <ProfilePopUp isDark={isDark} setIsDark={setIsDark} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
