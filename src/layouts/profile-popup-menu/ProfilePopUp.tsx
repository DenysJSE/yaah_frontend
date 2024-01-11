import UserLogo from 'assets/Images/ContentImages/user.png';
import Logout from 'assets/Images/SideBarImages/logout.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IProfilePopUp } from 'types/types.ts';
import './ProfilePopUp.css';

function ProfilePopUp({ setIsProfileVisible }: IProfilePopUp) {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  const handlePopUpClose = () => {
    setIsProfileVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    handlePopUpClose();
    navigate('/');
  };

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
      <Link to={'/'} className='link'>
        <div className='profile-pop-up-link ppu-logout' onClick={handleLogout}>
          <img src={Logout} alt='logout' className='profile-pop-up-image' />
          <p className='profile-pop-up-title pput-logout'>
            {isLogged ? 'Logout' : 'Login'}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePopUp;
