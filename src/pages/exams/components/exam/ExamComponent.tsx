import Close from 'assets/Images/ContentImages/close.png';
import Button from 'components/button.tsx';
import ModalWindow from 'components/ModalWindow.tsx';
import NotFoundPage from 'pages/not-found-page/NotFoundPage.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExamService from 'services/ExamService.ts';
import { IExamExam, IExamOption } from 'types/types.ts';
import './ExamComponent.css';
import { quantum } from 'ldrs'

function ExamComponent() {
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPassedMessage, setShowPassedMessage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [passedQuestions, setPassedQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState<IExamOption | null>(
    null
  );
  const [isContinueEnabled, setContinueEnabled] = useState(false);
  const [exam, setExam] = useState<IExamExam | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);
  quantum.register()

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
      setTimeout(() => fetchExamById(), 3000)
    }
  }, [id]);

  useEffect(() => {
    const unloadCallback = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  if (!id) {
    return <NotFoundPage />;
  }

  if (loading) {
    return <div className='exam-component-loading'>
      <l-quantum
        size="55"
        speed="2"
        color='#B9C7FC'
      />
    </div>;
  }

  if (!exam) {
    return <NotFoundPage extraMessage={'The exam with such id not found!'} />;
  }

  const handleOptionClick = (option: IExamOption) => {
    if (selectedOption && selectedOption.isCorrect) {
      setCorrectAnswers(correctAnswers - 1);
    }
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

  const handleShowModalWindow = () => {
    setIsModalWindowShown(true)
  }

  const handleHideModalWindow = () => {
    setIsModalWindowShown(false)
  }

  const handleCloseExam = () => {
    setIsModalWindowShown(false)
    history.back();
  };

  const handleMarkAdDone = async () => {
    await ExamService.updateIsDoneExamStatus(parseInt(id));
    await ExamService.updateCorrectAnswerAmount(parseInt(id), correctAnswers)
    history.back();
  };

  return (
    <div className='exam-component'>
      <div className='exam-header-footer'>
        <div className='ehf-component'>
          <img
            src={Close}
            alt='closeIcon'
            className='exam-component-close-icon'
            onClick={handleShowModalWindow}
          />
          {isModalWindowShown &&
            <ModalWindow
              handleCansel={handleHideModalWindow}
              handleDoAction={handleCloseExam}
              cancelText={'Keep Learning'}
              doActionText={'Exit Exam'}
              modalWindowTitle={'Hold it right there!'}
              modalWindowText={'You are doing wonderful! If you quit now, you will lose all your progress.'}
            />
          }
          <div className='progress-bar'>
            <div className='progress' style={{ width: `${progress}%` }}></div>
          </div>
          <div className='progress-label'>{`${passedQuestions} / ${exam.questions.length}`}</div>
        </div>
      </div>
      <div className='exam-main'>
        {showPassedMessage ? (
          <h1 className='exam-component-main-question'>
            You passed the exam!
            <br />
            You have {correctAnswers} correct answers
          </h1>
        ) : (
          <>
            <h1 className='exam-component-main-question'>
              {currentQuestion.question}
            </h1>
            {currentQuestion.option &&
              currentQuestion.option.map(option => (
                <div
                  key={option.id}
                  className={`exam-component-main-option ${
                    selectedOption === option ? 'active' : ''
                  }`}
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
