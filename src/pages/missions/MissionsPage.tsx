import './Missions.css';
import missionsData from '../../data/MissionsData.json';
import MissionCard from './components/MissionCard.tsx';

function MissionsPage() {
  const missions = missionsData;

  return (
    <div className='missions-page'>
      {missions.map((mission, index) => (
        <MissionCard
          key={index}
          title={mission.title}
          description={mission.description}
        />
      ))}
    </div>
  );
}

export default MissionsPage;
