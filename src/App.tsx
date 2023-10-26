import './assets/Global.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./layouts/sidebar/Sidebar.tsx";
import Header from "./layouts/header/Header.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import AuthPage from "./pages/auth/AuthPage.tsx";
import LessonsPage from "./pages/lessons/LessonsPage.tsx";
import ExamsPage from "./pages/exams/ExamsPage.tsx";
import AchievementsPage from "./pages/achievements/AchievementsPage.tsx";
import MissionsPage from "./pages/missions/MissionsPage.tsx";
import LeaderboardPage from "./pages/leader board/LeaderboardPage.tsx";
import Profile from "./pages/profile/Profile.tsx";
import NotFoundPage from "./pages/not found page/NotFoundPage.tsx";

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
