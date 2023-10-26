import './Sidebar.css'
import YaahLogo from '../../assets/Images/HeaderImages/Logo.png'
import Home from '../../assets/Images/SideBarImages/home.png'
import HomeActive from '../../assets/Images/SideBarImages/home_active.png'
import HomeDark from '../../assets/Images/SideBarImages/home_dark.png'
import Lessons from '../../assets/Images/SideBarImages/lessons.png'
import LessonsActive from '../../assets/Images/SideBarImages/lessons_active.png'
import LessonsDark from '../../assets/Images/SideBarImages/lessons_dark.png'
import Exams from '../../assets/Images/SideBarImages/exams.png'
import ExamsActive from '../../assets/Images/SideBarImages/exams_active.png'
import ExamsDark from '../../assets/Images/SideBarImages/exams_dark.png'
import Achievements from '../../assets/Images/SideBarImages/achive.png'
import AchievementsActive from '../../assets/Images/SideBarImages/achive_active.png'
import AchievementsDark from '../../assets/Images/SideBarImages/achive_dark.png'
import Missions from '../../assets/Images/SideBarImages/mission.png'
import MissionsActive from '../../assets/Images/SideBarImages/mission_active.png'
import MissionsDark from '../../assets/Images/SideBarImages/mission_dark.png'
import Leaderboard from '../../assets/Images/SideBarImages/lead.png'
import LeaderboardActive from '../../assets/Images/SideBarImages/lead_active.png'
import LeaderboardDark from '../../assets/Images/SideBarImages/lead_dark.png'
import DarkMode from '../../assets/Images/SideBarImages/dark_mode.png'
import LightMode from '../../assets/Images/SideBarImages/light_mode.png'
import Logout from '../../assets/Images/SideBarImages/logout.png'
import LogoutDark from '../../assets/Images/SideBarImages/logout_dark.png'
import {NavLink} from "react-router-dom";
import DarkModeSwitcher from "../../components/darkmode switcher/DarkModeSwitcher.tsx";

interface SideBarInterface {
  setIsDark: (isDark: boolean) => void,
  isDark: boolean
}

function Sidebar({setIsDark, isDark}: SideBarInterface) {

  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={YaahLogo} alt="Logo" className='logo-image'/>
        <h1 className='logo-title'>aah</h1>
      </div>
      <hr className='sidebar-line'/>
      <div className='menu'>
        <div className='top-menu'>
          <div className='sidebar-menu'>
            <h2 className='sidebar-title'>Learning</h2>
            <div className="sidebar-list">
              <NavLink to={'/'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? HomeActive : isDark ? Home : HomeDark} alt="home" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Home</h3>
                  </div>
                )}
              </NavLink>
              <NavLink to={'/lessons'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? LessonsActive : isDark ? Lessons : LessonsDark} alt="lessons" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Lessons</h3>
                  </div>
                )}
              </NavLink>
              <NavLink to={'/exams'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? ExamsActive : isDark ? Exams : ExamsDark} alt="exams" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Exams</h3>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
          <div className='sidebar-menu'>
            <h2 className='sidebar-title'>Progress</h2>
            <div className="sidebar-list">
              <NavLink to={'/achievements'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? AchievementsActive : isDark ? Achievements : AchievementsDark} alt="achievements"
                         className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>My Achievements</h3>
                  </div>
                )}
              </NavLink>
              <NavLink to={'/missions'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? MissionsActive : isDark ? Missions : MissionsDark} alt="missions" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Missions</h3>
                  </div>
                )}
              </NavLink>
              <NavLink to={'/leaderboard'} className='link'>
                {({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? LeaderboardActive : isDark ? Leaderboard : LeaderboardDark} alt="leaderboard"
                         className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Leader Board</h3>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <div className="sidebar-link bottom-link darkmode">
            <div className='darkmode-title'>
              <img src={isDark ? DarkMode : LightMode} alt="darkmode" className='sidebar-image'/>
              <h3 className='sidebar-link-title'>Dark Mode</h3>
            </div>
            <DarkModeSwitcher handleChange={() => setIsDark(!isDark)} isChecked={isDark}/>
          </div>
          <hr className='sidebar-line bottom'/>
          <div className="sidebar-link bottom-link logout">
            <img src={isDark ? Logout : LogoutDark} alt="logout" className='sidebar-image'/>
            <h3 className='sidebar-link-title'>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;