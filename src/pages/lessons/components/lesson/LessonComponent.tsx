import NotFoundPage from '@pages/not found page/NotFoundPage.tsx';
import { useParams } from 'react-router-dom';
import './LessonComponent.css';
import lessonData from '@data/LessonsData.json';

function LessonComponent() {
  const { id } = useParams();

  if (!id) {
    return <NotFoundPage />;
  }

  const lesson = lessonData.find(item => item.id === parseInt(id));

  if (!lesson) {
    return (
      <NotFoundPage extraMessage={'The lesson with such id do not exist'} />
    );
  }

  return (
    <div className='lesson-component'>
      <div className='lesson-component-card'>
        <div className='lesson-component-content'>
          <h1 className='lesson-component-title'>{lesson.title}</h1>
          <p className='lesson-component-data'>{lesson.data}</p>
        </div>
      </div>
      {/*<div className='lesson-component-button' onClick={handleMarkAsDone}>*/}
      {/*  {!lessonData?.isDone && <Button text={'Mark ad Done'} />}*/}
      {/*</div>*/}
    </div>

  );
}

export default LessonComponent;
