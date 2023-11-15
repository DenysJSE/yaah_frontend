import LoginForm from '@pages/auth/LoginForm.tsx';
import './Auth.css';
import RegistrationForm from '@pages/auth/RegistrationForm.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, register } from '../../services/AuthService.ts';

export interface IUserData {
  nickname?: string,
  email: string,
  password: string
}

function AuthPage() {
  const [authMode, setAuthMode] = useState('login');
  const navigate = useNavigate();

  const handleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'registration' : 'login');
  }

  const handleLogin = async (userData: IUserData) => {
    try {
      const response = await login(userData);
      const { token } = response;
      localStorage.setItem('authToken', token)
      toast.success('Login successful')
      navigate('/home')
    } catch (e) {
      console.error('Login error: ', e)
      toast.error('Email or password are incorrect')
    }
  }

  const handleRegistration = async (userData: IUserData) => {
    try {
      const response = await register(userData);
      const { token } = response;
      localStorage.setItem('authToken', token)
      toast.success('Registration successful')
      navigate('/home')
    } catch (e) {
      console.error('Registration error: ', e);
      const errorMessage = e instanceof Error ? e.message : 'An error occurred';
      toast.error(errorMessage);

    }
  }

  return (
    <div className='auth-page'>
      {authMode === 'login' ? (
        <LoginForm handleAuthMode={handleAuthMode} onSubmit={handleLogin} />
      ) : (
        <RegistrationForm handleAuthMode={handleAuthMode} onSubmit={handleRegistration} />
      )}
    </div>
  );

}

export default AuthPage;
