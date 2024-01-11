import LessonCard from 'pages/lessons/components/card/LessonCard.tsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubjectService from 'services/SubjectService.ts';
import { ILessons, ISubject } from 'types/types.ts';
import LessonService from 'services/LessonService.ts';
import { setSelectedSubject } from 'store/lessons/selectSubject.ts';
import { RootState } from 'store/store.ts';
import './LessonsPage.css';

function LessonsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();
  const [lessonsData, setLessonsData] = useState<ILessons[] | null>(null);
  const [subjectTitle, setSubjectTitle] = useState<ISubject[]>();

  useEffect(() => {
    getData();
    getSubjectTitles()
  }, []);

  async function getData() {
    try {
      const response = await LessonService.getAllLessons();
      setLessonsData(response.data);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  }

  async function getSubjectTitles() {
    try {
      const response = await SubjectService.getSubjectsTitle()
      setSubjectTitle(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  const subjectOptions = ['All', ...subjectTitle?.map(subject => subject.title) || []];

  const handleSubjectChange = (subject: string) => {
    dispatch(setSelectedSubject(subject));
  };

  const filteredLessons =
    selectedSubject === 'All'
      ? lessonsData
      : lessonsData
      ? lessonsData.filter(
          lesson => lesson.lesson.subject.title === selectedSubject
        )
      : null;

  return (
    <div className='lessons-page-content'>
      <div className='lessons-page-subject-slider'>
        <div className='lessons-page-subject-titles'>
          {subjectOptions.map(subject => (
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
            isDone={lesson.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
