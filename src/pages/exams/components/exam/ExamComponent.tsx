import Close from '@assets/Images/ContentImages/close.png';
import Button from '@components/button.tsx';
import examData from '@data/ExamCardsData.json';
import NotFoundPage from '@pages/not found page/NotFoundPage.tsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ExamComponent.css';

type Option = {
  id: number;
  option: string;
};

function ExamComponent() {
  const { id } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPassedMessage, setShowPassedMessage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [passedQuestions, setPassedQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isContinueEnabled, setContinueEnabled] = useState(false);

  if (!id) {
    return <NotFoundPage />;
  }
  const exam = examData.find(exam => exam.id === parseInt(id));
  if (!exam) {
    return <NotFoundPage extraMessage={'The exam with such id not found!'} />;
  }

  const handleCloseExam = () => {
    history.back();
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setContinueEnabled(true);
  };

  const clearSelectedOption = () => {
    setSelectedOption(null);
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
          <h1 className='exam-component-main-question'>You passed the exam!</h1>
        ) : (
          <>
            <h1 className='exam-component-main-question'>
              {currentQuestion.question}
            </h1>
            {currentQuestion.options.map(option => (
              <div
                className={`exam-component-main-option ${
                  selectedOption === option ? 'active' : ''
                }`}
                key={option.id}
                onClick={() => handleOptionClick(option)}
                onMouseOut={clearSelectedOption}
              >
                <p className='exam-component-main-option-text'>
                  {option.option}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className='exam-header-footer'>
        {showPassedMessage ? (
          <div onClick={handleCloseExam}>
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
