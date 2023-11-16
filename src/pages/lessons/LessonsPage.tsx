import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLessons, ILesson } from '../../services/LessonServise.ts';
import { setSelectedSubject } from '../../store/lessons/selectSubject.ts';
import { RootState } from '../../store/store.ts';
import LessonCard from './components/card/LessonCard.tsx';
import './LessonsPage.css';

function LessonsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();

  const [lessons, setLessons] = useState<ILesson[]>([])

  const subjects = [
    'All',
    'English Language',
    'History',
    'Math',
    'Science',
    'Geography',
    'Literature'
  ];

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await getLessons()
        setLessons(response)
      } catch (e) {
        console.log(e);
      }
    }

    fetchLessons()
  }, [])

  const handleSubjectChange = (subject: string) => {
    dispatch(setSelectedSubject(subject));
  };

  const filteredLessons =
    selectedSubject === 'All'
      ? lessons
      : lessons.filter(lesson => lesson.lesson.subject.title === selectedSubject);

  return (
    <div className='lessons-page-content'>
      <div className='lessons-page-subject-slider'>
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
      </div>
      <div className='lessons-page-lessons-cards'>
        {filteredLessons.map((lesson, index) => (
          <LessonCard
            key={index}
            id={lesson.id}
            title={lesson.lesson.title}
            subjectTitle={lesson.lesson.subject.title}
            examsAmount={lesson.lesson.award.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
