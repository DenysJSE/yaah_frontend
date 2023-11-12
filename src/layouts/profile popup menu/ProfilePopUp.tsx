import UserLogo from '@assets/Images/ContentImages/user.png';
import DarkMode from '@assets/Images/SideBarImages/dark_mode.png';
import LightMode from '@assets/Images/SideBarImages/light_mode.png';
import Logout from '@assets/Images/SideBarImages/logout.png';
import { Link } from 'react-router-dom';
import './ProfilePopUp.css';

interface ProfilePopUp {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  setIsProfileVisible: (isProfileVisible: boolean) => void;
}

function ProfilePopUp({ isDark, setIsDark, setIsProfileVisible }: ProfilePopUp) {
  const isLogged = false
  
  const handlePopUpClose = () => {
    setIsProfileVisible(false)
  }

  return (
    <div className='profile-pop-up'>
      <Link to={'/profile'} className='link'>
        <div
          className='profile-pop-up-link ppu-profile'
          onClick={handlePopUpClose}
        >
          <img src={UserLogo} alt='userLogo' className='profile-pop-up-image' />
          <p className='profile-pop-up-title pput-profile'>My Profile</p>
        </div>
      </Link>
      <div
        className='profile-pop-up-link ppu-dark-mode'
        onClick={() => setIsDark(!isDark)}
      >
        <img
          src={isDark ? DarkMode : LightMode}
          alt='darkmode'
          className='profile-pop-up-image'
        />
        <p className='profile-pop-up-title pput-dark-mode'>Dark Mode</p>
      </div>
      <Link to={'/auth'} className='link'>
        <div
          className='profile-pop-up-link ppu-logout'
          onClick={handlePopUpClose}
        >
          <img src={Logout} alt='logout' className='profile-pop-up-image' />
            <p className='profile-pop-up-title pput-logout'>{isLogged ? 'Logout' : 'Login'}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePopUp;
