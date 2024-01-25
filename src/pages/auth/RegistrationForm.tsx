import { IRegistrationForm } from 'types/types.ts';
import './Auth.css';

function RegistrationForm({
  handleAuthMode,
  handleEmailChange,
  handlePasswordChange,
  handleNicknameChange,
  handleSubmit,
  existNickname,
  existEmail
}: IRegistrationForm) {
  return (
    <div className='auth-form'>
      <div className='auth-form-title-subtitle'>
        <h1 className='auth-form-title'>Registration</h1>
        <p className='auth-form-subtitle'>Please enter your details</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='auth-form-inputs'>
          <div className='auth-form-inputs-input'>
            <label
              htmlFor='auth-form-input-nickname'
              className={`auth-form-input-label ${existNickname && 'exist-nickname'}`}
            >
              Nickname
            </label>
            <input
              type='text'
              className={`auth-form-input ${existNickname && 'exist-nickname'}`}
              id='auth-form-input-nickname'
              onChange={handleNicknameChange}
            />
            {existNickname && (
              <p className='exist-nickname-message'>
                The nickname you entered is taken. Please try another!
              </p>
            )}
          </div>
          <div className='auth-form-inputs-input'>
            <label
              htmlFor='auth-form-input-email'
              className={`auth-form-input-label ${existEmail && 'exist-nickname'}`}
            >
              Email
            </label>
            <input
              type='text'
              className={`auth-form-input ${existEmail && 'exist-nickname'}`}
              id='auth-form-input-email'
              onChange={handleEmailChange}
            />
            {existEmail && (
              <p className='exist-nickname-message'>
                The email you entered is taken. Please try another!
              </p>
            )}
          </div>
          <div className='auth-form-inputs-input'>
            <label
              htmlFor='auth-form-input-password'
              className='auth-form-input-label'
            >
              Password
            </label>
            <input
              type='password'
              className='auth-form-input'
              id='auth-form-input-password'
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className='auth-form-input-button'>
          <button type='submit' className={`button-component`}>
            Sign up
          </button>
        </div>
      </form>
      <p className='auth-form-signup'>
        Don't have an account?
        <span className='auth-form-signup-link' onClick={handleAuthMode}>
          {' '}
          Login
        </span>
      </p>
    </div>
  );
}

export default RegistrationForm;
