import './MissionCard.css';
import MissionLogo from '../../../assets/Images/ContentImages/Icon.png';
import Lock from '../../../assets/Images/ContentImages/padlock.png';

interface MissionInterface {
  title: string;
  description: string;
}

function MissionCard({ title, description }: MissionInterface) {
  return (
    <div className='mission-card'>
      <div className='mission-card-main-content'>
        <img src={MissionLogo} alt='examLogo' className='mission-card-logo' />
        <div className='mission-card-title-description'>
          <h2 className='mission-card-title'>{title}</h2>
          <p className='mission-card-description'>{description}</p>
        </div>
      </div>
      <img src={Lock} alt='lockImage' className='mission-card-closed-test' />
    </div>
  );
}

export default MissionCard;
