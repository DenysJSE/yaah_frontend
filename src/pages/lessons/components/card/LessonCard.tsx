import './LessonCard.css';
import CardAdditionalInfo from '../../../../components/CardAdditionalInfo.tsx';
import { Link } from 'react-router-dom';

interface LessonInterface {
  id: number;
  LessonIcon: string;
  title: string;
  subjectTitle: string;
  examsAmount: string;
}

function LessonCard({
  id,
  LessonIcon,
  title,
  subjectTitle,
  examsAmount
}: LessonInterface) {
  return (
    <Link to={`/lesson/${id}`} className='link'>
      <div className='lesson-card'>
        <img src={LessonIcon} alt='lessonIcon' className='lesson-card-icon' />
        <h2 className='lesson-card-lesson'>Lesson</h2>
        <h2 className='lesson-card-title'>{title}</h2>
        <div className='lesson-additional-info'>
          <CardAdditionalInfo
            description={subjectTitle}
            additionalInfo={examsAmount}
          />
        </div>
      </div>
    </Link>
  );
}

export default LessonCard;
