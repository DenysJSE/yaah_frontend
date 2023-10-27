import './ExamCard.css'
import ExamLogo from '../../../assets/Images/ContentImages/Icon.png'
import CardAdditionalInfo from "../../../components/CardAdditionalInfo.tsx";
import Lock from '../../../assets/Images/ContentImages/padlock.png'

interface ExamInterface {
  title: string,
  subjectTitle: string,
  testAmount: string
}

function ExamCard({title, subjectTitle, testAmount}: ExamInterface) {
  return (
    <div className='exam-card'>
      <div className='exam-card-main-content'>
        <img src={ExamLogo} alt="examLogo" className='exam-card-logo'/>
        <div className="exam-card-title-description">
          <h2 className="exam-card-title">{title}</h2>
          <CardAdditionalInfo description={subjectTitle} additionalInfo={testAmount} />
        </div>
      </div>
      <img src={Lock} alt="lockImage" className='exam-card-closed-test'/>
    </div>
  );
}

export default ExamCard