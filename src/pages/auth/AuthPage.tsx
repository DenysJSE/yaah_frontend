import LoginForm from '@pages/auth/LoginForm.tsx';
import './Auth.css';
import RegistrationForm from '@pages/auth/RegistrationForm.tsx';
import { useState } from 'react';

function AuthPage() {
  const [authMode, setAuthMode] = useState('login');

  const handleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'registration' : 'login');
  }


  if (authMode === 'login') {
    return (
      <div className='auth-page'>
        <LoginForm handleAuthMode={handleAuthMode} />
      </div>
    );
  }

  if (authMode === 'registration') {
    return (
      <div className='auth-page'>
        <RegistrationForm handleAuthMode={handleAuthMode} />
      </div>
    );
  }

}

export default AuthPage;
