import './Profile.css';
import UserIcon from '@assets/Images/HeaderImages/userlogo.jpg';
import Button from '@components/button.tsx';
import CloseButton from '@assets/Images/ContentImages/close.png';
import { useState } from 'react';

interface IUser {
  id: number
  nickname: string
  email: string
  coins: number
  roles: {
    id: number
    value: string
    description: string
  }
}

function Profile() {
  const [isShownEditProfile, setIsShownEditProfile] = useState(false);

  const userData = localStorage.getItem('user')
  const user: IUser = userData ? JSON.parse(userData) : null

  const handleShowEditProfile = () => {
    setIsShownEditProfile(true);
  };

  return (
    <div className='profile-page'>
      <div className='profile-page-card'>
        <img src={UserIcon} alt='userIcon' className='profile-page-user-icon' />
        <h1 className='profile-page-user-nickname'>
          {user.nickname}
        </h1>
        <p className='profile-page-member-date'>Member since 2023</p>
        <div onClick={handleShowEditProfile}>
          <Button text={'Edit Profile'} />
        </div>
      </div>
      {isShownEditProfile && (
        <div className='profile-page-edit-background'>
          <div className='profile-page-edit-form'>
            <div className='profile-page-edit-form-header'>
              <h1 className='profile-page-edit-form-header-title'>
                Edit Profile
              </h1>
              <img
                src={CloseButton}
                alt='closeButton'
                className='profile-page-edit-form-header-close-button'
                onClick={() => setIsShownEditProfile(false)}
              />
            </div>
            <div className='edit-profile-inputs'>
              <div className='edit-profile-input'>
                <label htmlFor='nickname' className='edit-profile-input-label'>
                  Nickname
                </label>
                <input
                  type='text'
                  id='nickname'
                  value={user.nickname}
                  className='edit-profile-input-field'
                />
              </div>
              <div className='edit-profile-input'>
                <label htmlFor='email' className='edit-profile-input-label'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={user.email}
                  className='edit-profile-input-field'
                />
              </div>
              <div className='edit-profile-input'>
                <label htmlFor='password' className='edit-profile-input-label'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='edit-profile-input-field'
                />
              </div>
              <div className='edit-profile-input'>
                <label
                  htmlFor='new_password'
                  className='edit-profile-input-label'
                >
                  New Password
                </label>
                <input
                  type='password'
                  id='new_password'
                  className='edit-profile-input-field'
                />
              </div>
            </div>
            <div
              className='edit-profile-button-save'
              onClick={() => setIsShownEditProfile(false)}
            >
              <Button text={'Save'} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
