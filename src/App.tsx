import '@assets/Global.css';
import PrivateRoute from '@components/PrivateRoute.tsx';
import Header from '@layouts/header/Header.tsx';
import Sidebar from '@layouts/sidebar/Sidebar.tsx';
import AuthPage from '@pages/auth/AuthPage.tsx';
import ExamsPage from '@pages/exams/ExamsPage.tsx';
// import HomePage from '@pages/home/HomePage.tsx';
import LessonsPage from '@pages/lessons/LessonsPage.tsx';
// import MissionsPage from '@pages/missions/MissionsPage.tsx';
import NotFoundPage from '@pages/not found page/NotFoundPage.tsx';
import Profile from '@pages/profile/Profile.tsx';
import { createContext } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import ExamComponent from './pages/exams/components/exam/ExamComponent.tsx';
import LessonComponent from './pages/lessons/components/lesson/LessonComponent.tsx';
import store from './store/store.ts';
import userStore from './store/user/userStore.tsx';

export const Context = createContext({
  store: userStore
});

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <Provider store={store}>
      <Context.Provider value={{ store: userStore }}>
        <BrowserRouter>
          <div className='App' data-theme={isDark ? 'dark' : ''}>
            <div className='app-sidebar'>
              <Sidebar isDark={isDark} />
            </div>
            <div className='app-content'>
              <Header isDark={isDark} setIsDark={setIsDark} />
              <div className='app-page'>
                <Routes>
                  <Route element={<PrivateRoute />}>
                    {/*<Route path={'/home'} element={<HomePage />} />*/}
                    <Route path={'/lessons'} element={<LessonsPage />} />
                    <Route path={'/lesson/:id'} element={<LessonComponent />} />
                    <Route path={'/exams'} element={<ExamsPage />} />
                    <Route path={'/exam/:id'} element={<ExamComponent />} />
                    {/*<Route path={'/missions'} element={<MissionsPage />} />*/}
                    <Route path={'/profile'} element={<Profile />} />
                  </Route>
                  <Route path={'/'} element={<AuthPage />} />
                  <Route path={'*'} element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  );
}

export default App;
