import CourseIcon from '@assets/Images/ContentImages/CourseIcon.png';
import Button from '@components/button.tsx';
import './ContinueLearnCard.css';

function ContinueLearnCard() {
  return (
    <div className='continue-learn-card'>
      <div className='title'>
        <img src={CourseIcon} alt='logo' />
        <div className='course-name-status'>
          <h2 className='course-title'>English Language</h2>
          <div className='course-status'>
            <div className='status-bar'>
              <div className='need-to-pass-bar'></div>
              <div className='passed-bar'></div>
            </div>
            <span className='course-passed-status'>1 / 20</span>
          </div>
        </div>
      </div>
      <div className='continue-learn-card-button'>
        <Button text={'Resume Course'} />
      </div>
    </div>
  );
}

export default ContinueLearnCard;
