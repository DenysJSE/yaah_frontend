import './assets/Global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './layouts/sidebar/Sidebar.tsx';
import Header from './layouts/header/Header.tsx';
import HomePage from './pages/home/HomePage.tsx';
import AuthPage from './pages/auth/AuthPage.tsx';
import LessonsPage from './pages/lessons/LessonsPage.tsx';
import ExamsPage from './pages/exams/ExamsPage.tsx';
import MissionsPage from './pages/missions/MissionsPage.tsx';
import Profile from './pages/profile/Profile.tsx';
import NotFoundPage from './pages/not found page/NotFoundPage.tsx';
import useLocalStorage from 'use-local-storage';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <BrowserRouter>
      <div className='App' data-theme={isDark ? 'dark' : ''}>
        <div className='app-sidebar'>
          <Sidebar setIsDark={setIsDark} isDark={isDark} />
        </div>
        <div className='app-content'>
          <Header isDark={isDark} />
          <div className='app-page'>
            <Routes>
              <Route path={'/'} element={<HomePage />} />
              <Route path={'/auth'} element={<AuthPage />} />
              <Route path={'/lessons'} element={<LessonsPage />} />
              <Route path={'/exams'} element={<ExamsPage />} />
              <Route path={'/missions'} element={<MissionsPage />} />
              <Route path={'/profile'} element={<Profile />} />
              <Route path={'*'} element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
