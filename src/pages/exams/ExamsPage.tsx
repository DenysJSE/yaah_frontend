import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubject } from '../../store/lessons/selectSubject.ts';
import { RootState } from '../../store/store.ts';
import ExamCard from './components/card/ExamCard.tsx';
import './Exams.css';
import exams from '@data/ExamCardsData.json'

function ExamsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();

  const subjects = [
    'All',
    'English Language',
    'History',
    'Math',
    'Science',
    'Geography',
    'Literature'
  ];

  const handleSubjectChange = (subject: string) => {
    dispatch(setSelectedSubject(subject));
  };

  const filteredExams =
    selectedSubject === 'All'
      ? exams
      : exams.filter(exam => exam.subjectTitle === selectedSubject);

  return (
    <div className='exam-page-content'>
      <div className='lessons-page-subject-slider'>
        <div className='exam-page-subject-titles'>
          {subjects.map(subject => (
            <h3
              key={subject}
              className={`exam-page-subject-title ${
                selectedSubject === subject ? 'subject-title-selected' : ''
              }`}
              onClick={() => handleSubjectChange(subject)}
            >
              {subject}
            </h3>
          ))}
        </div>
      </div>
      <div className='exam-page-exam-cards'>
        {filteredExams.map((exam, index) => (
          <ExamCard
            key={index}
            id={exam.id}
            title={exam.title}
            subjectTitle={exam.subjectTitle}
            testAmount={exam.testAmount}
            // isDone={exam.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default ExamsPage;
