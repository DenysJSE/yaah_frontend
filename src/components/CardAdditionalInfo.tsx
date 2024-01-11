import './CardAdditionalInfo.css';
import { ISubjectTitleDuration } from 'types/types.ts';

function CardAdditionalInfo({ description }: ISubjectTitleDuration) {
  return (
    <div className='recommendation-level-duration'>
      <span className='recommendation-course-level'>{description}</span>
    </div>
  );
}

export default CardAdditionalInfo;