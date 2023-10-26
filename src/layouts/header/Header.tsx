import './Header.css'
import XpLogo from '../../assets/Images/HeaderImages/expirience.png'
import XpLogoDark from '../../assets/Images/HeaderImages/expirience_dark.png'
import NotificationLogo from '../../assets/Images/HeaderImages/notif.png'
import NotificationLogoDark from '../../assets/Images/HeaderImages/notif_dark.png'
import UserLogo from '../../assets/Images/HeaderImages/userlogo.jpg'
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

interface HeaderInterface {
  isDark: boolean
}


function Header({isDark}: HeaderInterface) {

  const location = useLocation()
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    const routeToTitle: {[key: string]: string} ={
      '/': 'Home',
      '/lessons': 'Your Lessons',
      '/exams': 'Your Exams',
      '/achievements': 'Your Achievements',
      '/missions': 'Missions for you',
      '/leaderboard': 'Leader Board',
      '/profile': 'Your Profile'
    }

    setPageTitle(routeToTitle[location.pathname] || 'Page Not Found')

  }, [location]);

  return (
    <div className='header'>
      <div className='title'>
        <h1 className='title-text'>{pageTitle}</h1>
      </div>
      <div className='userInfo'>
        <div className='user-info-div xp-count'>
          <img src={isDark ? XpLogo : XpLogoDark} alt="xpLogo" className='header-image'/>
          <span className='xp-amount'>500</span>
        </div>
        <div className='user-info-div notification'>
          <img src={isDark ? NotificationLogo : NotificationLogoDark} alt="Notification" className='header-image'/>
        </div>
        <div className='user-info-div user'>
          <img src={UserLogo} alt="userLogo" className='user-logo'/>
        </div>
      </div>
    </div>
  );
}

export default Header;