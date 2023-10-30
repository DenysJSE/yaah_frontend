import './Sidebar.css';
import YaahLogo from '../../assets/Images/HeaderImages/Logo.png';
import Home from '../../assets/Images/SideBarImages/home.png';
import HomeActive from '../../assets/Images/SideBarImages/home_active.png';
import HomeDark from '../../assets/Images/SideBarImages/home_dark.png';
import Lessons from '../../assets/Images/SideBarImages/lessons.png';
import LessonsActive from '../../assets/Images/SideBarImages/lessons_active.png';
import LessonsDark from '../../assets/Images/SideBarImages/lessons_dark.png';
import Exams from '../../assets/Images/SideBarImages/exams.png';
import ExamsActive from '../../assets/Images/SideBarImages/exams_active.png';
import ExamsDark from '../../assets/Images/SideBarImages/exams_dark.png';
import Missions from '../../assets/Images/SideBarImages/mission.png';
import MissionsActive from '../../assets/Images/SideBarImages/mission_active.png';
import MissionsDark from '../../assets/Images/SideBarImages/mission_dark.png';
import DarkMode from '../../assets/Images/SideBarImages/dark_mode.png';
import LightMode from '../../assets/Images/SideBarImages/light_mode.png';
import Logout from '../../assets/Images/SideBarImages/logout.png';
import LogoutDark from '../../assets/Images/SideBarImages/logout_dark.png';
import { NavLink } from 'react-router-dom';
import DarkModeSwitcher from './component/darkmode switcher/DarkModeSwitcher.tsx';

interface SideBarInterface {
  setIsDark: (isDark: boolean) => void,
  isDark: boolean
}

function Sidebar({ setIsDark, isDark }: SideBarInterface) {

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='sidebar-logo'>
          <img
            src={YaahLogo}
            width={48}
            height={48}
            alt='Logo'
            className='sidebar-logo-image'
          />
          <h1 className='sidebar-logo-title'>aah</h1>
        </div>
        <hr className='sidebar-line' />
        <div className='sidebar-menu'>
          <div className='sidebar-top-menu'>
            <div className='sidebar-sub-menu'>
              <div className='sidebar-sub-menu-list'>
                <NavLink to={'/'} className='link'>
                  {({ isActive }) => (
                    <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                      <img src={isActive ? HomeActive : isDark ? Home : HomeDark}
                           width={24}
                           height={24}
                           alt='home'
                           className='sidebar-menu-image'
                      />
                      <h3 className='sidebar-link-title'>Home</h3>
                    </div>
                  )}
                </NavLink>
                <NavLink to={'/lessons'} className='link'>
                  {({ isActive }) => (
                    <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                      <img src={isActive ? LessonsActive : isDark ? Lessons : LessonsDark}
                           width={24}
                           height={24}
                           alt='lessons'
                           className='sidebar-menu-image'
                      />
                      <h3 className='sidebar-link-title'>Lessons</h3>
                    </div>
                  )}
                </NavLink>
                <NavLink to={'/exams'} className='link'>
                  {({ isActive }) => (
                    <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                      <img src={isActive ? ExamsActive : isDark ? Exams : ExamsDark}
                           width={24}
                           height={24}
                           alt='exams'
                           className='sidebar-menu-image'
                      />
                      <h3 className='sidebar-link-title'>Exams</h3>
                    </div>
                  )}
                </NavLink>
                <NavLink to={'/missions'} className='link'>
                  {({ isActive }) => (
                    <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
                      <img src={isActive ? MissionsActive : isDark ? Missions : MissionsDark}
                           width={24}
                           height={24}
                           alt='missions'
                           className='sidebar-menu-image'
                      />
                      <h3 className='sidebar-link-title'>Missions</h3>
                    </div>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sidebar-bottom-menu'>
        <div className='sidebar-link sidebar-bottom-link sidebar-darkmode'>
          <div className='sidebar-darkmode-title'>
            <img src={isDark ? DarkMode : LightMode}
                 width={24}
                 height={24}
                 alt='darkmode'
                 className='sidebar-menu-image'
            />
            <h3 className='sidebar-link-title'>Dark Mode</h3>
          </div>
          <DarkModeSwitcher handleChange={() => setIsDark(!isDark)} isChecked={isDark} />
        </div>
        <hr className='sidebar-line sidebar-line-bottom' />
        <div className='sidebar-link sidebar-bottom-link logout'>
          <img src={isDark ? Logout : LogoutDark}
               width={24}
               height={24}
               alt='logout'
               className='sidebar-menu-image'
          />
          <h3 className='sidebar-link-title'>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;