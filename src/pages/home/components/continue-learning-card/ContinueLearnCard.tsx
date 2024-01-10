import CourseIcon from 'assets/Images/ContentImages/CourseIcon.png';
import './ContinueLearnCard.css';

function ContinueLearnCard() {
  return (
    <div className='continue-learn-card'>
      <div className='continue-learn-card-title'>
        <img src={CourseIcon} alt='logo' className='continue-learn-card-image' />
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
    </div>
  );
}

export default ContinueLearnCard;
