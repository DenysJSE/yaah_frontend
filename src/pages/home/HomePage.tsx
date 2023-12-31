import RecommendIcon from '@assets/Images/ContentImages/Icon.png';
import missionsData from '@data/MissionsData.json';
import recommendationData from '@data/RecommendationCardsData.json';
import ContinueLearnCard from '@pages/home/components/continue-learning-card/ContinueLearnCard.tsx';
import MissionCard from '@pages/home/components/mission-card/MissionCard.tsx';
import RecommendCard from '@pages/home/components/recommendation-card/RecommendCard.tsx';
import './Home.css';

function HomePage() {
  const recommendation = recommendationData;
  const missions = missionsData;

  return (
    <div className='home-page-content'>
      <div className='home-page-main-content'>
        <div className='home-page-continue-learning'>
          <h2 className='home-page-content-title'>Continue learning</h2>
          <ContinueLearnCard />
        </div>
        <div className='home-page-recommendation'>
          <h2 className='home-page-content-title'>Recommended for you</h2>
          <div className='home-page-recommendation-cards'>
            {recommendation.map((rec, index) => (
              <RecommendCard
                key={index}
                RecommendationLogo={RecommendIcon}
                title={rec.title}
                description={rec.description}
                level={rec.level}
                courseDuration={rec.courseDuration}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='home-page-missions'>
        <h2 className='home-page-missions-title'>Your Missions</h2>
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            description={mission.description}
            MissionLogo={RecommendIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
