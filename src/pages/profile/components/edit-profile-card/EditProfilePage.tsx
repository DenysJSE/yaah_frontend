import CloseButton from '@assets/Images/ContentImages/close.png';
import Button from '@components/button.tsx';
import EditProfileInput from '@pages/profile/components/edit-profile-card/EditProfileInput.tsx';
import { IUser } from '@pages/profile/Profile.tsx';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UserService from '../../../../services/UserService.ts';
import './EditProfilePage.css';

interface IEditProfileCard {
  user: IUser;
}

function EditProfilePage({ user }: IEditProfileCard) {
  const [newNickname, setNewNickname] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    setNewNickname(user.nickname)
  }, [user.nickname]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newNickname !== user.nickname) {
      await handleSubmitUpdateNickname();
    }
    if (newUserPassword !== '' && userPassword !== '') {
      await handleSubmitUpdatePassword();
    }
  };

  const handleSubmitUpdatePassword = async () => {
    try {
      const userID = user.id;
      await UserService.updatePassword({
        userID,
        userPassword,
        newUserPassword
      });
      toast.success('The password was updated');
    } catch (e) {
      handleFormSubmissionError(e);
    }
  };

  const handleSubmitUpdateNickname = async () => {
    try {
      const userID = user.id;
      await UserService.updateUserNickname({ userID, newNickname });
      toast.success('The nickname was updated');
    } catch (e) {
      handleFormSubmissionError(e);
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleFormSubmissionError = e => {
    const errorMessages = e.response?.data?.message || 'An error occurred';
    if (Array.isArray(errorMessages)) {
      errorMessages.forEach((errorMessage: string) => {
        toast.error(errorMessage);
      });
    } else {
      toast.error(errorMessages);
    }
  };

  const handleCloseEditProfileCard = () => {
    history.back();
  };

  const handleShowPassword = (value: boolean) => {
    setIsShowPassword(value);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              onClick={handleCloseEditProfileCard}
            />
          </div>
          <div className='edit-profile-inputs'>
            <EditProfileInput
              labelHtmlFor='nickname'
              labelTitle='Nickname'
              inputType='text'
              inputID='nickname'
              inputValue={newNickname}
              inputOnChange={e => setNewNickname(e.target.value)}
            />
            <EditProfileInput
              labelHtmlFor='email'
              labelTitle='Email'
              inputType='email'
              inputID='email'
              inputValue={user.email}
              inputReadOnly={true}
            />
            <EditProfileInput
              labelHtmlFor='password'
              labelTitle='Password'
              inputType={`${isShowPassword ? 'text' : 'password'}`}
              inputID='password'
              inputOnChange={e => setUserPassword(e.target.value)}
              inputBlockAdditionalClassName='password'
              inputAdditionalClassName='password'
              isShowPassword={isShowPassword}
              handleShowPassword={handleShowPassword}
            />
            <EditProfileInput
              labelHtmlFor='new_password'
              labelTitle='New Password'
              inputType={`${isShowPassword ? 'text' : 'password'}`}
              inputID='new_password'
              inputOnChange={e => setNewUserPassword(e.target.value)}
              inputAdditionalClassName='password'
            />
          </div>
          <div className='edit-profile-button-save'>
            <Button text={'Save'} type={'submit'} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditProfilePage;
