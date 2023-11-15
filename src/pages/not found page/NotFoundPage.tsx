import Ghost from '@assets/Images/ContentImages/ghost.png';
import Button from '@components/button.tsx';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

interface INotFoundPage {
  extraMessage?: string;
}

function NotFoundPage({ extraMessage }: INotFoundPage) {
  return (
    <div className='not-found-page'>
      <img src={Ghost} alt='ghostIcon' className='not-found-page-ghost-image' />
      <h1 className='not-found-page-title'>Whoops!</h1>
      <p className='not-found-page-description'>
        We could not find the page you were looking for!
      </p>
      <p className='not-found-page-description'>{extraMessage}</p>
      <div className='not-found-page-button'>
        <Link to={'/home'}>
          <Button text={'Back to Home'} />
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
