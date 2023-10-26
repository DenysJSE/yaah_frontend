import './SubjectTitleDuration.css'

interface SubjectTitleDurationInterface {
  description: string,
  additionalInfo: string
}

function SubjectTitleDuration({description, additionalInfo}: SubjectTitleDurationInterface) {
  return (
    <div className='recommendation-level-duration'>
      <span className="recommendation-course-level">{description}</span>
      <div className="recommendation-dot"></div>
      <span className="recommendation-course-duration">{additionalInfo}</span>
    </div>
  );
}

export default SubjectTitleDuration