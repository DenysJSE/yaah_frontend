import './LessonComponent.css';
import { useParams } from 'react-router-dom';
import lessonData from '../../../../data/LessonsData.json'
import NotFoundPage from '../../../not found page/NotFoundPage.tsx';

function LessonComponent() {
  const {id} = useParams()

  if (!id) {
    return <NotFoundPage />
  }

  const lesson = lessonData.find(item => item.id === parseInt(id))

  if (!lesson) {
    return <NotFoundPage extraMessage={'The lesson with such id do not exist'} />
  }

  return (
    <div className='lesson-component'>
      <div className='lesson-component-content'>
        <h1 className='lesson-component-title'>{lesson.title}</h1>
        <p className='lesson-component-data'>{lesson.data}</p>
      </div>
    </div>
  );
}

export default LessonComponent;