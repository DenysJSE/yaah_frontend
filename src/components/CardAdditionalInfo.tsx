import './CardAdditionalInfo.css'
import { ISubjectTitleDuration } from '../types/types.ts';

function CardAdditionalInfo({description, additionalInfo}: ISubjectTitleDuration) {
  return (
    <div className='recommendation-level-duration'>
      <span className="recommendation-course-level">{description}</span>
      <div className="recommendation-dot"></div>
      <span className="recommendation-course-duration">{additionalInfo}</span>
    </div>
  );
}

export default CardAdditionalInfo