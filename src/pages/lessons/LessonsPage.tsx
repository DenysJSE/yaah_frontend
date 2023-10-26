import './Lessons.css'
import LessonCard from "../../components/lessons/LessonCard.tsx";
import LessonIcon from '../../assets/Images/ContentImages/Icon.png'

function LessonsPage() {
  return (
    <div className='lessons-content'>
      <div className="subject-titles">
        <h3 className="subject-titles-title selected">All</h3>
        <h3 className="subject-titles-title">English Language</h3>
        <h3 className="subject-titles-title">History</h3>
        <h3 className="subject-titles-title">Math</h3>
        <h3 className="subject-titles-title">Science</h3>
        <h3 className="subject-titles-title">Geography</h3>
        <h3 className="subject-titles-title">Literature</h3>
      </div>
      <div className="lessons-cards">
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
        <LessonCard
          LessonIcon={LessonIcon}
          title={'Past Simple'}
          subjectTitle={'English Language'}
          examsAmount={'12 exams'}
        />
      </div>
    </div>
  );
}

export default LessonsPage;