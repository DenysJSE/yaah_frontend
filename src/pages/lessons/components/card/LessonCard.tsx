import LessonIcon from '@assets/Images/ContentImages/Icon.png';
import CardAdditionalInfo from '@components/CardAdditionalInfo.tsx';
import { Link } from 'react-router-dom';
import './LessonCard.css';
import { ILessonCard } from '../../../../types/types.ts';

function LessonCard({ id, title, subjectTitle, examsAmount, isDone}: ILessonCard) {
  return (
    <Link to={`/lesson/${id}`} className='link'>
      <div className='lesson-card'>
        <div className='lesson-card-main-content'>
          <img src={LessonIcon} alt='examIcon' className='lesson-card-icon' />
          <div className='lesson-additional-info'>
            <h2 className='lesson-card-title'>{title}</h2>
            <CardAdditionalInfo
              description={subjectTitle}
              additionalInfo={examsAmount}
            />
          </div>
          {isDone && <p className='lesson-card-is-done'>Done</p>}
        </div>
      </div>
    </Link>
  );
}

export default LessonCard;
