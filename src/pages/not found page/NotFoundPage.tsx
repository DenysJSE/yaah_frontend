import './NotFoundPage.css';
import Button from '../../components/button.tsx';
import { Link } from 'react-router-dom';
import Ghost from '../../assets/Images/ContentImages/ghost.png';

function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <img src={Ghost} alt='ghostIcon' className='not-found-page-ghost-image' />
      <h1 className='not-found-page-title'>Whoops!</h1>
      <p className='not-found-page-description'>
        We could not find the page you were looking for!
      </p>
      <div className='not-found-page-button'>
        <Link to={'/'}>
          <Button text={'Back to Home'} />
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
