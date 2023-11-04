import './LessonCard.css';
import CardAdditionalInfo from '../../../../components/CardAdditionalInfo.tsx';
import { Link } from 'react-router-dom';
import LessonIcon from '../../../../assets/Images/ContentImages/Icon.png'

interface LessonInterface {
  id: number;
  title: string;
  subjectTitle: string;
  examsAmount: string;
}

function LessonCard({
  id,
  title,
  subjectTitle,
  examsAmount
}: LessonInterface) {
  return (
    <Link to={`/lesson/${id}`} className='link'>
      <div className='lesson-card'>
        <div className='lesson-card-main-content'>
          <img src={LessonIcon} alt='examIcon' className='lesson-card-icon' />
          <div className='lesson-additional-info'>
            <h2 className='exam-card-title'>{title}</h2>
            <CardAdditionalInfo
              description={subjectTitle}
              additionalInfo={examsAmount}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LessonCard;
