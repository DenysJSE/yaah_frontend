import lessonsData from '@data/LessonsData.json';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubject } from '../../store/lessons/selectSubject.ts';
import { RootState } from '../../store/store.ts';
import LessonCard from './components/card/LessonCard.tsx';
import './LessonsPage.css';

function LessonsPage() {
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

  const filteredLessons =
    selectedSubject === 'All'
      ? lessonsData
      : lessonsData.filter(lesson => lesson.subjectTitle === selectedSubject);

  return (
    <div className='lessons-page-content'>
      <div className='lessons-page-subject-titles'>
        {subjects.map(subject => (
          <h3
            key={subject}
            className={`lessons-page-subject-title ${
              selectedSubject === subject ? 'subject-title-selected' : ''
            }`}
            onClick={() => handleSubjectChange(subject)}
          >
            {subject}
          </h3>
        ))}
      </div>
      <div className='lessons-page-lessons-cards'>
        {filteredLessons.map((lesson, index) => (
          <LessonCard
            key={index}
            id={lesson.id}
            title={lesson.title}
            subjectTitle={lesson.subjectTitle}
            examsAmount={lesson.examsAmount}
          />
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
