import './Exams.css';
import ExamCard from './components/ExamCard.tsx';
import ExamsData from '../../data/ExamCardsData.json';

function ExamsPage() {
  const exams = ExamsData;

  return (
    <div className='exam-page'>
      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          title={exam.title}
          subjectTitle={exam.subjectTitle}
          testAmount={`${exam.testAmount} tests`}
        />
      ))}
    </div>
  );
}

export default ExamsPage;
