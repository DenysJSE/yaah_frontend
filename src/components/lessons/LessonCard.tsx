import './LessonCard.css'
import SubjectTitleDuration from "../SubjectTitleDuration.tsx";

interface LessonInterface {
  LessonIcon: string,
  title: string,
  subjectTitle: string,
  examsAmount: string
}

function LessonCard({LessonIcon, title, subjectTitle, examsAmount}: LessonInterface) {
  return (
    <div className='lesson-card'>
      <img src={LessonIcon} alt="lessonIcon" className='lesson-card-icon' />
      <h2 className="lesson-card-lesson">Lesson</h2>
      <h2 className="lesson-card-title">{title}</h2>
      <div className='lesson-additional-info'>
        <SubjectTitleDuration description={subjectTitle} additionalInfo={examsAmount} />
      </div>

    </div>
  );
}

export default LessonCard