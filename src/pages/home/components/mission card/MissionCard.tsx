import './MissionCard.css'

interface MissionInterface {
  title: string,
  description: string,
  MissionLogo: string
}

function MissionCard({title, description, MissionLogo}: MissionInterface) {
  return (
    <div className='mission-card'>
      <div className='mission-card-title-description'>
        <h2 className="mission-card-title">{title}</h2>
        <p className="mission-card-description">{description}</p>
      </div>
      <img src={MissionLogo} alt="missionLogo" className='mission-card-logo'/>
    </div>
  );
}

export default MissionCard