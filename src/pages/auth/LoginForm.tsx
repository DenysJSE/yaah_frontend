import './Auth.css';
import { IUserData } from '@pages/auth/AuthPage.tsx';
import { FormEvent, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface ILoginForm {
  handleAuthMode: () => void;
  onSubmit: (userData: IUserData) => Promise<void>;
}

function LoginForm({handleAuthMode, onSubmit}: ILoginForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Email and password are required');
      return
    }

    onSubmit({ email, password });
  }

  return (
    <div className='auth-form'>
      <div className='auth-form-title-subtitle'>
        <h1 className='auth-form-title'>Login</h1>
        <p className='auth-form-subtitle'>Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='auth-form-inputs'>
          <div className='auth-form-inputs-input'>
            <label htmlFor='auth-form-input-email' className='auth-form-input-label'>Email</label>
            <input type='email' className='auth-form-input' id='auth-form-input-email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='auth-form-inputs-input'>
            <label htmlFor='auth-form-input-password' className='auth-form-input-label'>Password</label>
            <input type='password' className='auth-form-input' id='auth-form-input-password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='auth-form-input-button'>
          <button type='submit' className={`button-component`}>Login</button>
        </div>
      </form>
      <p className='auth-form-signup'>
        Don't have an account?
        <span className='auth-form-signup-link' onClick={handleAuthMode}> Sign up</span>
      </p>
    </div>
  );
}

export default LoginForm;