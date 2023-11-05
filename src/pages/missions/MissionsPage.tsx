import missionsData from '@data/MissionsData.json';
import MissionCard from './components/MissionCard.tsx';
import './Missions.css';

function MissionsPage() {
  const missions = missionsData;

  return (
    <div className='missions-page'>
      <div className='missions-page-missions-cards'>
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MissionsPage;
