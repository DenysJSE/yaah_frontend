import './MissionCard.css';

interface MissionInterface {
  title: string;
  description: string;
  MissionLogo: string;
}

function MissionCard({ title, description, MissionLogo }: MissionInterface) {
  return (
    <div className='home-mission-card'>
      <div className='home-mission-card-title-description'>
        <h2 className='home-mission-card-title'>{title}</h2>
        <p className='home-mission-card-description'>{description}</p>
      </div>
      <img
        src={MissionLogo}
        width={48}
        height={48}
        alt='missionLogo'
        className='home-mission-card-logo'
      />
    </div>
  );
}

export default MissionCard;
