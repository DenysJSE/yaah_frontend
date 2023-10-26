import './Home.css'
import ContLearnCard from "../../components/home/ContLearnCard.tsx";
import RecommendCard from "../../components/home/RecommendCard.tsx";
import RecommendIcon from '../../assets/Images/ContentImages/Icon.png'
import MissionCard from "../../components/home/MissionCard.tsx";

function HomePage() {
  return (
    <div className='home-content'>
      <div className='main-content'>
        <div className='continue-learning'>
          <h2 className="content-title">Continue learning</h2>
          <ContLearnCard />
        </div>
        <div className='recommendation'>
          <h2 className="content-title">Recommended for you</h2>
          <div className="recommend-cards">
            <RecommendCard
              RecommendationLogo={RecommendIcon}
              title={'Math'}
              description={'The Math is very interesting and helpful subject in life. You can use whatever you want and operate anything you can imagine'}
              level={'Beginner'}
              duration={3}
            />
            <RecommendCard
              RecommendationLogo={RecommendIcon}
              title={'History'}
              description={'The History is very interesting and helpful subject in life. You can use whatever you want and operate anything you can imagine'}
              level={'Advance'}
              duration={10}
            />
            <RecommendCard
              RecommendationLogo={RecommendIcon}
              title={'Science'}
              description={'The Science is very interesting and helpful subject in life. You can use whatever you want and operate anything you can imagine'}
              level={'Intermediate'}
              duration={6}
            />
          </div>
        </div>
      </div>
      <div className='missions'>
        <h2 className="missions-title">Your Missions</h2>
        <MissionCard
          title={'Finish 10 lessons'}
          description={'Finish 10 lessons of any subject and get your award'}
          MissionLogo={RecommendIcon}
          linkText={'Lessons'}
          isButton={true}
        />
        <MissionCard
          title={'Finish registration'}
          description={'Add logo and email'}
          MissionLogo={RecommendIcon}
          isButton={false}
        />
      </div>
    </div>
  );
}

export default HomePage;