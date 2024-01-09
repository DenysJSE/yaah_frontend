import UserIcon from '@assets/Images/HeaderImages/userlogo.jpg';
import Button from '@components/button.tsx';
import './Profile.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/UserService.ts';

export interface IUser {
  id: number;
  nickname: string;
  email: string;
  coins: number;
  roles: {
    id: number;
    value: string;
    description: string;
  };
}

function Profile() {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const response = await UserService.getUser()
    setUser(response.data)
  }

  return (
    <div className='profile-page'>
      <div className='profile-page-card'>
        <img src={UserIcon} alt='userIcon' className='profile-page-user-icon' />
        <h1 className='profile-page-user-nickname'>{user?.nickname}</h1>
        <p className='profile-page-member-date'>Member since 2023</p>
        <Link to='/edit-profile'>
          <Button text={'Edit Profile'} />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
