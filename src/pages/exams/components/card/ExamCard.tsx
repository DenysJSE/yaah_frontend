import ExamLogo from '@assets/Images/ContentImages/Icon.png';
import CardAdditionalInfo from '@components/CardAdditionalInfo.tsx';
import { Link } from 'react-router-dom';
import './ExamCard.css';

interface ExamInterface {
  id: number;
  title: string;
  subjectTitle: string;
  testAward: string;
  isDone: boolean
}

function ExamCard({ id, title, subjectTitle, testAward, isDone }: ExamInterface) {
  return (
    <Link to={`/exam/${id}`} className='link'>
      <div className='exam-card'>
        <div className='exam-card-main-content'>
          <img src={ExamLogo} alt='examLogo' className='exam-card-logo' />
          <div className='exam-card-title-description'>
            <h2 className='exam-card-title'>{title}</h2>
            <CardAdditionalInfo
              description={subjectTitle}
              additionalInfo={testAward}
            />
          </div>
          {isDone && <p className='lesson-card-is-done'>Done</p>}
        </div>
      </div>
    </Link>
  );
}

export default ExamCard;
