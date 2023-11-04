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

import LessonComponent from './pages/lessons/components/lesson/LessonComponent.tsx';
import ExamComponent from './pages/exams/components/exam/ExamComponent.tsx';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <BrowserRouter>
      <div className='App' data-theme={isDark ? 'dark' : ''}>
        <div className='app-sidebar'>
          <Sidebar isDark={isDark} />
        </div>
        <div className='app-content'>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <div className='app-page'>
            <Routes>
              <Route path={'/home'} element={<HomePage />} />
              <Route path={'/auth'} element={<AuthPage />} />
              <Route path={'/lessons'} element={<LessonsPage />} />
              <Route path={'/lesson/:id'} element={<LessonComponent />} />
              <Route path={'/exams'} element={<ExamsPage />} />
              <Route path={'/exam/:id'} element={<ExamComponent />} />
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
