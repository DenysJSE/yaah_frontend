import './Sidebar.css'
import YaahLogo from '../../Images/Logo.png'
import Home from '../../Images/home.png'
import HomeActive from '../../Images/home_active.png'
import Lessons from '../../Images/lessons.png'
import LessonsActive from '../../Images/lessons_active.png'
import Exams from '../../Images/exams.png'
import ExamsActive from '../../Images/exams_active.png'
import Achievements from '../../Images/achive.png'
import AchievementsActive from '../../Images/achive_active.png'
import Missions from '../../Images/mission.png'
import MissionsActive from '../../Images/mission_active.png'
import Leaderboard from '../../Images/lead.png'
import LeaderboardActive from '../../Images/lead_active.png'
import DarkMode from '../../Images/dark_mode.png'
import Logout from '../../Images/logout.png'
import {NavLink} from "react-router-dom";

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={YaahLogo} alt="Logo" className='logo-image'/>
        <h1 className='logo-title'>aah</h1>
      </div>
      <hr className='sidebar-line'/>
      <div className='top-menu'>
        <div className='sidebar-menu'>
          <h2 className='sidebar-title'>Learning</h2>
          <div className="sidebar-list">
            <NavLink to={'/'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? HomeActive : Home} alt="home" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Home</h3>
                  </div>
                )
              }
            </NavLink>
            <NavLink to={'/lessons'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? LessonsActive : Lessons} alt="lessons" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Lessons</h3>
                  </div>
                )
              }
            </NavLink>
            <NavLink to={'/exams'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? ExamsActive : Exams} alt="exams" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Exams</h3>
                  </div>
                )
              }
            </NavLink>
          </div>
        </div>
        <div className='sidebar-menu'>
          <h2 className='sidebar-title'>Progress</h2>
          <div className="sidebar-list">
            <NavLink to={'/achievements'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? AchievementsActive : Achievements} alt="achievements"
                         className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>My Achievements</h3>
                  </div>
                )
              }
            </NavLink>
            <NavLink to={'/missions'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? MissionsActive : Missions} alt="missions" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Missions</h3>
                  </div>
                )
              }
            </NavLink>
            <NavLink to={'/leaderboard'} className='link'>
              {
                ({isActive}) => (
                  <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <img src={isActive ? LeaderboardActive : Leaderboard} alt="leaderboard" className='sidebar-image'/>
                    <h3 className='sidebar-link-title'>Leader Board</h3>
                  </div>
                )
              }
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bottom-menu">
        <div className="sidebar-link bottom-link darkmode">
          <img src={DarkMode} alt="darkmode" className='sidebar-image'/>
          <h3 className='sidebar-link-title'>Dark Mode</h3>
          <div className='darkmode-switcher'>
            <div className='darkmode-switcher-button'></div>
            <div className='darkmode-swither-background'></div>
          </div>
        </div>
        <hr className='sidebar-line bottom'/>
        <div className="sidebar-link bottom-link logout">
          <img src={Logout} alt="logout" className='sidebar-image'/>
          <h3 className='sidebar-link-title'>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;