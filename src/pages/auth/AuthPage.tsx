import LoginForm from 'pages/auth/LoginForm.tsx';
import RegistrationForm from 'pages/auth/RegistrationForm.tsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';
import UserService from 'services/UserService.ts';
import { loginUser, registerUser } from 'store/user/UserActions.ts';
import { setIsAuthenticated, setUser } from 'store/user/UserSlice.ts';

function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(' ');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState(' ');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [authMode, setAuthMode] = useState('login');
  const [existNickname, setExistNickname] = useState(false);
  const [existEmail, setExistEmail] = useState(false);

  const handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value
    setEmail(enteredEmail);

    if (!/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    const response = await UserService.checkEmailExist(enteredEmail)
    if (response.data) {
      setExistEmail(true)
    } else {
      setExistEmail(false)
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };

  const handleNicknameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredNickname = event.target.value
    setNickname(enteredNickname);

    if (event.target.value.length < 3) {
      setNicknameError('Nickname must be at least 3 characters.');
    } else {
      setNicknameError('');
      const response = await UserService.checkNicknameExist(enteredNickname)
      if (response.data) {
        setExistNickname(true)
      } else {
        setExistNickname(false)
      }
    }
  };

  const handleChangeAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'registration' : 'login');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordError) {
      toast.error(passwordError.concat());
      return;
    }

    if (emailError) {
      toast.error(emailError.concat());
      return;
    }

    if (nicknameError) {
      toast.error(nicknameError.concat())
      return
    }

    try {
      if (authMode === 'login') {
        const result = await loginUser({ email, password });
        if (result.success) {
          dispatch(setIsAuthenticated(true));
          dispatch(setUser(result.user));
          toast.success('You logged in successfully');
          navigate('/lessons');
        } else {
          toast.error("You have some error");
        }
      }

      if (authMode === 'registration') {
        const result = await registerUser({ email, password, nickname });
        if (result.success) {
          dispatch(setIsAuthenticated(true));
          dispatch(setUser(result.user));
          toast.success('You registered successfully');
          navigate('/lessons');
        } else {
          toast.error("You have some error");
        }
      }
    } catch (error) {
      console.error('An error occurred', error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className='auth-page'>
      {authMode === 'login' ? (
        <LoginForm
          handleAuthMode={handleChangeAuthMode}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <RegistrationForm
          handleAuthMode={handleChangeAuthMode}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleNicknameChange={handleNicknameChange}
          handleSubmit={handleSubmit}
          existNickname={existNickname}
          existEmail={existEmail}
        />
      )}
    </div>
  );
}

export default AuthPage;
