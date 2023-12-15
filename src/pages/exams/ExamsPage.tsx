import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExamService from '../../services/ExamService.ts';
import { setSelectedSubject } from '../../store/lessons/selectSubject.ts';
import { RootState } from '../../store/store.ts';
import ExamCard from './components/card/ExamCard.tsx';
import './Exams.css';

export interface IExam {
  id: number
  isDone: boolean
  exam: {
    id: number
    award: string
    title: string
    description: string
    questions: {
      id: number
      question: string
      option: {
        id: number
        isCorrect: boolean
        text: string
      }
    }
    subject: {
      id: number
      title: string
      description: string
      courseDuration: number
      examsNumber: number
      lessonNumber: number
    }
  }
}

function ExamsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();
  const [examData, setExamData] = useState<IExam[] | null>(null);

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const response = await ExamService.getAllExams();
      setExamData(response.data);
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

  const filteredExams =
    selectedSubject === 'All'
      ? examData
      : examData ? examData.filter(exam => exam.exam.subject.title === selectedSubject) : null;

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
        {filteredExams?.map((exam) => (
          <ExamCard
            key={exam.id}
            id={exam.id}
            title={exam.exam.title}
            subjectTitle={exam.exam.subject.title}
            testAward={exam.exam.award}
            isDone={exam.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default ExamsPage;
