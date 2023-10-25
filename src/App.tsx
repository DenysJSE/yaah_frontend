import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import Header from "./Components/Header/Header.tsx";
import HomePage from "./Components/Home/HomePage.tsx";
import AuthPage from "./Components/Auth/AuthPage.tsx";
import LessonsPage from "./Components/Lessons/LessonsPage.tsx";
import ExamsPage from "./Components/Exams/ExamsPage.tsx";
import AchievementsPage from "./Components/Achievements/AchievementsPage.tsx";
import MissionsPage from "./Components/Missions/MissionsPage.tsx";
import LeaderboardPage from "./Components/LeaderBoard/LeaderboardPage.tsx";
import Profile from "./Components/Profile/Profile.tsx";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='content'>
          <Header/>
          <div className="page">
            <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'/auth'} element={<AuthPage/>}/>
              <Route path={'/lessons'} element={<LessonsPage/>}/>
              <Route path={'/exams'} element={<ExamsPage/>}/>
              <Route path={'/achievements'} element={<AchievementsPage/>}/>
              <Route path={'/missions'} element={<MissionsPage/>}/>
              <Route path={'/leaderboard'} element={<LeaderboardPage/>}/>
              <Route path={'/profile'} element={<Profile/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
