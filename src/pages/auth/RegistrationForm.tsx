import './Auth.css';
import Button from '@components/button.tsx';

interface IRegistrationForm {
  handleAuthMode: () => void;
}

function RegistrationForm({handleAuthMode}: IRegistrationForm) {
  return (
    <div className='auth-form'>
      <div className='auth-form-title-subtitle'>
        <h1 className='auth-form-title'>Registration</h1>
        <p className='auth-form-subtitle'>Please enter your details</p>
      </div>
      <div className='auth-form-inputs'>
        <div className='auth-form-inputs-input'>
          <label htmlFor='auth-form-input' className='auth-form-input-label'>Nickname</label>
          <input type='text' className='auth-form-input' id='auth-form-input' />
        </div>
        <div className='auth-form-inputs-input'>
          <label htmlFor='auth-form-input' className='auth-form-input-label'>Email</label>
          <input type='email' className='auth-form-input' id='auth-form-input' />
        </div>
        <div className='auth-form-inputs-input'>
          <label htmlFor='auth-form-input' className='auth-form-input-label'>Password</label>
          <input type='password' className='auth-form-input' />
        </div>
      </div>
      <Button text={'Login'} />
      <p className='auth-form-signup'>
        Don't have an account?
        <span className='auth-form-signup-link' onClick={handleAuthMode}> Login</span>
      </p>
    </div>
  );
}

export default RegistrationForm;