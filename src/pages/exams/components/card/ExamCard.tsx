import ExamLogo from 'assets/Images/ContentImages/Icon.png';
import CardAdditionalInfo from 'components/CardAdditionalInfo.tsx';
import ModalWindow from 'components/ModalWindow.tsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamService from 'services/ExamService.ts';
import { IExamCard } from 'types/types.ts';
import './ExamCard.css';

function ExamCard({ id, title, subjectTitle, isDone }: IExamCard) {
  const [examMark, setExamMark] = useState(0);
  const [isModalWindow, setIsModalWindow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getExamMark();
  }, []);

  const getExamMark = async () => {
    if (isDone) {
      const response = await ExamService.getExamMark(id);
      setExamMark(response.data);
    }
  };

  const showModalWindow = () => {
    setIsModalWindow(true);
  };

  const hideModalWindow = () => {
    setIsModalWindow(false);
  };

  const passExamAgain = () => {
    setIsModalWindow(false);
    navigate(`/exam/${id}`);
  };

  return (
    <>
      <div className='exam-card' onClick={() => isDone ? showModalWindow() : passExamAgain()}>
        <div className='exam-card-main-content'>
          <img src={ExamLogo} alt='examLogo' className='exam-card-logo' />
          <div className='exam-card-title-description'>
            <h2 className='exam-card-title'>{title}</h2>
            <CardAdditionalInfo description={subjectTitle} />
          </div>
          {isDone && <p className='lesson-card-is-done'>Done</p>}
        </div>
        {isDone ? (
          <span className='lesson-card-exam-mark'>{examMark}</span>
        ) : (
          <span className='lesson-card-exam-mark'>You don't pass exam yet</span>
        )}
      </div>
      {isModalWindow && (
        <ModalWindow
          handleCansel={hideModalWindow}
          handleDoAction={passExamAgain}
          cancelText={'Cancel'}
          doActionText={'Pass again'}
          modalWindowTitle={'You already passed this exam'}
          modalWindowText={
            'Are you sure you want to pass it again, this time it can be worse )'
          }
        />
      )}
    </>
  );
}

export default ExamCard;
