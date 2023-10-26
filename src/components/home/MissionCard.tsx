import './MissionCard.css'
import GoTo from '../../assets/Images/ContentImages/next.png'

interface MissionInterface {
  title: string,
  description: string,
  MissionLogo: string,
  linkText?: string
  isButton: boolean
}

function MissionCard({title, description, MissionLogo, linkText, isButton}: MissionInterface) {
  return (
    <div className='mission-card'>
      <div className="title-description-logo">
        <div className='mission-title-description'>
          <h2 className="mission-title">{title}</h2>
          <p className="mission-card-description">{description}</p>
        </div>
        <img src={MissionLogo} alt="missionLogo" className='mission-logo' />
      </div>
      {isButton &&
        <div className='mission-link-button'>
          <p className="mission-link">Go to {linkText}</p>
          <img src={GoTo} alt="gotoImage" className='goto-image' />
        </div>
      }
    </div>
  );
}

export default MissionCard