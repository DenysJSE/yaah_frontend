import NotFoundPage from '@pages/not found page/NotFoundPage.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LessonComponent.css';
import { getLessons, ILesson } from '../../../../services/LessonServise.ts';

function LessonComponent() {
  const { id } = useParams();
  const [lesson, setLesson] = useState<ILesson[]>([])

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await getLessons()
        setLesson(response)
      } catch (e) {
        console.log(e);
      }
    }

    fetchLesson()
  }, [])

  if (!id) {
    return <NotFoundPage />;
  }

  const lessonData = lesson.find(item => item.id === parseInt(id));

  if (!lesson) {
    return (
      <NotFoundPage extraMessage={'The lesson with such id do not exist'} />
    );
  }

  return (
    <div className='lesson-component'>
      <div className='lesson-component-content'>
        <h1 className='lesson-component-title'>{lessonData?.lesson.title}</h1>
        <p className='lesson-component-data'>{lessonData?.lesson.lessonData}</p>
      </div>
    </div>
  );
}

export default LessonComponent;
