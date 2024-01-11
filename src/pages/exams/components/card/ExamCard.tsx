import ExamLogo from 'assets/Images/ContentImages/Icon.png';
import CardAdditionalInfo from 'components/CardAdditionalInfo.tsx';
import { Link } from 'react-router-dom';
import { IExamCard } from 'types/types.ts';
import './ExamCard.css';

function ExamCard({
  id,
  title,
  subjectTitle,
  isDone
}: IExamCard) {
  return (
    <Link to={`/exam/${id}`} className='link'>
      <div className='exam-card'>
        <div className='exam-card-main-content'>
          <img src={ExamLogo} alt='examLogo' className='exam-card-logo' />
          <div className='exam-card-title-description'>
            <h2 className='exam-card-title'>{title}</h2>
            <CardAdditionalInfo description={subjectTitle} />
          </div>
          {/* TODO: Make a dialog for results of exam if it is done */}
          {isDone && <p className='lesson-card-is-done'>Done</p>}
        </div>
      </div>
    </Link>
  );
}

export default ExamCard;
