import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubjectService from 'services/SubjectService.ts';
import { IExam, ISubject } from 'types/types.ts';
import ExamService from 'services/ExamService.ts';
import { setSelectedSubject } from 'store/lessons/selectSubject.ts';
import { RootState } from 'store/store.ts';
import ExamCard from './components/card/ExamCard.tsx';
import './Exams.css';

function ExamsPage() {
  const selectedSubject = useSelector(
    (state: RootState) => state.subjects.selectedSubject
  );
  const dispatch = useDispatch();
  const [examData, setExamData] = useState<IExam[] | null>(null);
  const [subjectTitle, setSubjectTitle] = useState<ISubject[]>();

  useEffect(() => {
    getData();
    getSubjectTitles()
  }, []);

  async function getData() {
    try {
      const response = await ExamService.getAllExams();
      setExamData(response.data);
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

  const filteredExams =
    selectedSubject === 'All'
      ? examData
      : examData
      ? examData.filter(exam => exam.exam.subject.title === selectedSubject)
      : null;

  return (
    <div className='exam-page-content'>
      <div className='lessons-page-subject-slider'>
        <div className='exam-page-subject-titles'>
          {subjectOptions.map(subject => (
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
        {filteredExams?.map(exam => (
          <ExamCard
            key={exam.id}
            id={exam.id}
            title={exam.exam.title}
            subjectTitle={exam.exam.subject.title}
            isDone={exam.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default ExamsPage;
