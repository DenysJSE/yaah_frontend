import Button from 'components/button.tsx';
import NotFoundPage from 'pages/not-found-page/NotFoundPage.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ILesson } from 'types/types.ts';
import LessonService from '../../../../services/LessonService.ts';
import './LessonComponent.css';

function LessonComponent() {
  const { id } = useParams();
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLessonById = async () => {
      try {
        if (id) {
          const response = await LessonService.getLessonById(parseInt(id));
          setLesson(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching lesson:', error);
        setLoading(false);
      }
    };
    if (id) {
      fetchLessonById();
    }
  }, [id]);

  if (!id) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <div className='lesson-component-loading'>Loading...</div>;
  }

  if (!lesson) {
    return (
      <NotFoundPage extraMessage={'The lesson with such id do not exist'} />
    );
  }

  const handleMarkAsDone = async () => {
    await LessonService.updateIsDoneLessonStatus(parseInt(id));
    history.back();
  };

  return (
    <div className='lesson-component'>
      <div className='lesson-component-card'>
        <div className='lesson-component-content'>
          <h1 className='lesson-component-title'>{lesson.lesson.title}</h1>
          <p className='lesson-component-data'>{lesson.lesson.lessonData}</p>
        </div>
      </div>
      <div className='lesson-component-button'>
        {!lesson?.isDone ? (
          <div onClick={handleMarkAsDone}>
            <Button text={'Mark ad Done'}  />
          </div>
        ) : (
          <h1 className='lesson-component-lesson-done'>Lesson is done</h1>
        )}
      </div>
    </div>
  );
}

export default LessonComponent;
