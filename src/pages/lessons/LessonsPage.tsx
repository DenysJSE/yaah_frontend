import './Lessons.css';
import LessonCard from './components/LessonCard.tsx';
import LessonIcon from '../../assets/Images/ContentImages/Icon.png';
import { useState } from 'react';
import lessonsData from '../../data/LessonsData.json';

function LessonsPage() {
  const subjects = [
    'All',
    'English Language',
    'History',
    'Math',
    'Science',
    'Geography',
    'Literature'
  ];

  const [selectedSubject, setSelectedSubject] = useState('All');

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
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
            LessonIcon={LessonIcon}
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
