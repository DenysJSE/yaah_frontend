import UserLogo from '@assets/Images/ContentImages/user.png';
import DarkMode from '@assets/Images/SideBarImages/dark_mode.png';
import LightMode from '@assets/Images/SideBarImages/light_mode.png';
import Logout from '@assets/Images/SideBarImages/logout.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePopUp.css';
import { IProfilePopUp } from '../../types/types.ts';

function ProfilePopUp({ isDark, setIsDark, setIsProfileVisible }: IProfilePopUp) {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  
  const handlePopUpClose = () => {
    setIsProfileVisible(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
    handlePopUpClose()
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
      <Link to={'/'} className='link'>
        <div
          className='profile-pop-up-link ppu-logout'
          onClick={handleLogout}
        >
          <img src={Logout} alt='logout' className='profile-pop-up-image' />
          <p className='profile-pop-up-title pput-logout'>{isLogged ? 'Logout' : 'Login'}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePopUp;
