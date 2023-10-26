import './Header.css'
import XpLogo from '../../assets/Images/HeaderImages/expirience.png'
import NotificationLogo from '../../assets/Images/HeaderImages/notif.png'
import UserLogo from '../../assets/Images/HeaderImages/userlogo.jpg'

function Header() {
  return (
    <div className='header'>
      <div className='title'>
        <h1 className='title-text'>Home</h1>
      </div>
      <div className='userInfo'>
        <div className='user-info-div xp-count'>
          <img src={XpLogo} alt="xpLogo" className='header-image'/>
          <span className='xp-amount'>500</span>
        </div>
        <div className='user-info-div notification'>
          <img src={NotificationLogo} alt="Notification" className='header-image'/>
        </div>
        <div className='user-info-div user'>
          <img src={UserLogo} alt="userLogo" className='user-logo'/>
        </div>
      </div>
    </div>
  );
}

export default Header;