import { IUser } from '@pages/profile/Profile.tsx';
import { useEffect, useState } from 'react';
import UserService from '../services/UserService.ts';

export class InitialUser {
  id = 0;
  nickname = '';
  email = '';
  coins = 0;
  roles = {
    id: 0,
    value: '',
    description: '',
  };
}

export const useUser = () => {
  const [user, setUser] = useState<IUser>(new InitialUser());

  const getUser = async () => {
    try {
      const response = await UserService.getUser();
      setUser(response.data);
    } catch (error) {
      // Handle errors as needed
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user, getUser };
};