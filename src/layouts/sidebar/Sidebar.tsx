import Exams from '@assets/Images/SideBarImages/exam.png';
import ExamsActive from '@assets/Images/SideBarImages/exam_active.png';
import ExamsDark from '@assets/Images/SideBarImages/exam_dark.png';
import Home from '@assets/Images/SideBarImages/home.png';
import HomeActive from '@assets/Images/SideBarImages/home_active.png';
import HomeDark from '@assets/Images/SideBarImages/home_dark.png';
import Lessons from '@assets/Images/SideBarImages/lessons.png';
import LessonsActive from '@assets/Images/SideBarImages/lessons_active.png';
import LessonsDark from '@assets/Images/SideBarImages/lessons_dark.png';
import YaahLogo from '@assets/Images/SideBarImages/Logo.png';
import Missions from '@assets/Images/SideBarImages/mission.png';
import MissionsActive from '@assets/Images/SideBarImages/mission_active.png';
import MissionsDark from '@assets/Images/SideBarImages/mission_dark.png';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface SideBarInterface {
  isDark: boolean;
}

function Sidebar({ isDark }: SideBarInterface) {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='sidebar-logo'>
          <img src={YaahLogo} alt='Logo' className='sidebar-logo-image' />
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
                      <img
                        src={isActive ? HomeActive : isDark ? Home : HomeDark}
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
                      <img
                        src={
                          isActive
                            ? LessonsActive
                            : isDark
                            ? Lessons
                            : LessonsDark
                        }
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
                      <img
                        src={
                          isActive ? ExamsActive : isDark ? Exams : ExamsDark
                        }
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
                      <img
                        src={
                          isActive
                            ? MissionsActive
                            : isDark
                            ? Missions
                            : MissionsDark
                        }
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
      {/*<div className='sidebar-bottom-menu'>*/}

      {/*  <hr className='sidebar-line sidebar-line-bottom' />*/}
      {/*  <div className='sidebar-link sidebar-bottom-link logout'>*/}
      {/*    <img src={isDark ? Logout : LogoutDark}*/}
      {/*         alt='logout'*/}
      {/*         className='sidebar-menu-image'*/}
      {/*    />*/}
      {/*    <h3 className='sidebar-link-title'>Logout</h3>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default Sidebar;
