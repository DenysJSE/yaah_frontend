import './Header.css';
import XpLogo from '../../assets/Images/HeaderImages/expirience.png';
import XpLogoDark from '../../assets/Images/HeaderImages/expirience_dark.png';
import NotificationLogo from '../../assets/Images/HeaderImages/notif.png';
import NotificationLogoDark from '../../assets/Images/HeaderImages/notif_dark.png';
import UserLogo from '../../assets/Images/HeaderImages/userlogo.jpg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HeaderInterface {
  isDark: boolean;
}

function Header({ isDark }: HeaderInterface) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const routeToTitle: { [key: string]: string } = {
      '/': 'Home',
      '/lessons': 'Lessons',
      '/exams': 'Exams',
      '/achievements': 'Achievements',
      '/missions': 'Missions',
      '/leaderboard': 'LeaderBoard',
      '/profile': 'Profile'
    };

    setPageTitle(routeToTitle[location.pathname] || '');
  }, [location]);

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
              width={24}
              height={24}
              alt='xpLogo'
              className='header-xp-notification-image'
            />
            <span className='header-xp-amount'>500</span>
          </div>
          <div className='header-user-info-div notification'>
            <img
              src={isDark ? NotificationLogo : NotificationLogoDark}
              width={24}
              height={24}
              alt='Notification'
              className='header-xp-notification-image'
            />
          </div>
          <div className='header-user-info-div user'>
            <img
              src={UserLogo}
              width={40}
              height={40}
              alt='userLogo'
              className='header-user-logo'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
