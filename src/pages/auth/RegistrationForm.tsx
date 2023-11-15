import './Auth.css';
import { IUserData } from '@pages/auth/AuthPage.tsx';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

interface IRegistrationForm {
  handleAuthMode: () => void;
  onSubmit: (userData: IUserData) => Promise<void>;
}

function RegistrationForm({handleAuthMode, onSubmit}: IRegistrationForm) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname || !email || !password) {
      toast.error('Nickname, email and password are required');
      return;
    }

    onSubmit({ nickname, email, password });
  };

  return (
    <div className='auth-form'>
      <div className='auth-form-title-subtitle'>
        <h1 className='auth-form-title'>Registration</h1>
        <p className='auth-form-subtitle'>Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='auth-form-inputs'>
          <div className='auth-form-inputs-input'>
            <label htmlFor='auth-form-input-nickname' className='auth-form-input-label'>Nickname</label>
            <input type='text' className='auth-form-input' id='auth-form-input-nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </div>
          <div className='auth-form-inputs-input'>
            <label htmlFor='auth-form-input-email' className='auth-form-input-label'>Email</label>
            <input type='text' className='auth-form-input' id='auth-form-input-email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='auth-form-inputs-input'>
            <label htmlFor='auth-form-input-password' className='auth-form-input-label'>Password</label>
            <input type='password' className='auth-form-input' id='auth-form-input-password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='auth-form-input-button'>
          <button type='submit' className={`button-component`}>Sign up</button>
        </div>
      </form>
      <p className='auth-form-signup'>
        Don't have an account?
        <span className='auth-form-signup-link' onClick={handleAuthMode}> Login</span>
      </p>
    </div>
  );
}

export default RegistrationForm;