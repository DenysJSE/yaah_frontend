import LessonCard from '@pages/lessons/components/card/LessonCard.tsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LessonService from '../../services/LessonService.ts';
import './LessonsPage.css';
import { setSelectedSubject } from '../../store/lessons/selectSubject.ts';
import { RootState } from '../../store/store.ts';
// import lessonsData from '@data/LessonsData.json';

interface ILessons {
  id: number,
  isDone: boolean,
  lesson: {
    id: number
    title: string
    award: string
    lessonData: string
    subject: {
      id: number
      title: string
      description: string
      examNumber: number
      lessonNumber: number
      courseDuration: number
    }
  }
}

function LessonsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();
  const [lessonsData, setLessonsData] = useState<ILessons[] | null>(null);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const response = await LessonService.getAllLessons();
      setLessonsData(response.data);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  }

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
      : lessonsData ? lessonsData.filter(lesson => lesson.lesson.subject.title === selectedSubject) : null;

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
        {filteredLessons?.map((lesson, index) => (
          <LessonCard
            key={index}
            id={lesson.id}
            title={lesson.lesson.title}
            subjectTitle={lesson.lesson.subject.title}
            examsAmount={lesson.lesson.award}
            isDone={lesson.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
