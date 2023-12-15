import Close from '@assets/Images/ContentImages/close.png';
import Button from '@components/button.tsx';
import NotFoundPage from '@pages/not found page/NotFoundPage.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExamComponent.css';
import ExamService from '../../../../services/ExamService.ts';

interface Option {
  id: number;
  text: string;
  isCorrect: boolean
}

interface Question {
  id: number;
  question: string;
  option: Option[];
}

interface Exam {
  id: number;
  isDone: boolean;
  award: string;
  description: string;
  questions: Question[];
}

function ExamComponent() {
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPassedMessage, setShowPassedMessage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [passedQuestions, setPassedQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isContinueEnabled, setContinueEnabled] = useState(false);
  const [exam, setExam] = useState<Exam | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExamById = async () => {
      try {
        if (id) {
          const response = await ExamService.getExamById(parseInt(id));
          setExam(response.data.exam);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching exam:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchExamById();
    }
  }, [id]);

  if (!id) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <div className='lesson-component-loading'>Loading...</div>;
  }

  if (!exam) {
    return <NotFoundPage extraMessage={'The exam with such id not found!'} />;
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setContinueEnabled(true);
    if (option.isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleContinue = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress((currentQuestionIndex + 1) * (100 / exam.questions.length));
      setPassedQuestions(currentQuestionIndex + 1);
      setSelectedOption(null);
      setContinueEnabled(false);
    } else {
      setShowPassedMessage(true);
      setProgress(100);
      setPassedQuestions(exam.questions.length);
      setSelectedOption(null);
      setContinueEnabled(false);
    }
  };

  const currentQuestion = exam.questions[currentQuestionIndex];

  const handleCloseExam = () => {
    history.back()
  }

  const handleMarkAdDone = async () => {
    await ExamService.updateIsDoneExamStatus(parseInt(id))
    history.back()
  }

  return (
    <div className='exam-component'>
      <div className='exam-header-footer'>
        <div className='ehf-component'>
          <img
            src={Close}
            alt='closeIcon'
            className='exam-component-close-icon'
            onClick={handleCloseExam}
          />
          <div className='progress-bar'>
            <div className='progress' style={{ width: `${progress}%` }}></div>
          </div>
          <div className='progress-label'>{`${passedQuestions} / ${exam.questions.length}`}</div>
        </div>
      </div>
      <div className='exam-main'>
        {showPassedMessage ? (
          <h1 className='exam-component-main-question'>You passed the exam!<br/>You have {correctAnswers} correct answers</h1>
        ) : (
          <>
            <h1 className='exam-component-main-question'>
              {currentQuestion.question}
            </h1>
            {currentQuestion.option && currentQuestion.option.map((option) => (
              <div
                className={`exam-component-main-option ${selectedOption === option ? 'active' : ''}`}
                key={option.id}
                onClick={() => handleOptionClick(option)}
              >
                <p className='exam-component-main-option-text'>
                  {option.text}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className='exam-header-footer'>
        {showPassedMessage ? (
          <div onClick={handleMarkAdDone}>
            <Button text={'Finish'} />
          </div>
        ) : (
          <div onClick={handleContinue}>
            <Button text={'Continue'} isDisabled={!isContinueEnabled} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExamComponent;
