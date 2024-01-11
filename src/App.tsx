import 'assets/Global.css';
import PrivateRoute from 'components/PrivateRoute.tsx';
import { useUser } from 'components/UserUtils.ts';
import Header from 'layouts/header/Header.tsx';
import Sidebar from 'layouts/sidebar/Sidebar.tsx';
import AuthPage from 'pages/auth/AuthPage.tsx';
import ExamsPage from 'pages/exams/ExamsPage.tsx';
// import HomePage from 'pages/home/HomePage.tsx';
import LessonsPage from 'pages/lessons/LessonsPage.tsx';
import NotFoundPage from 'pages/not-found-page/NotFoundPage.tsx';
import EditProfilePage from 'pages/profile/components/edit-profile-card/EditProfilePage.tsx';
import Profile from 'pages/profile/Profile.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExamComponent from './pages/exams/components/exam/ExamComponent.tsx';
import LessonComponent from './pages/lessons/components/lesson/LessonComponent.tsx';

function App() {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='app-sidebar'>
          <Sidebar />
        </div>
        <div className='app-content'>
          <Header />
          <div className='app-page'>
            <Routes>
              <Route element={<PrivateRoute />}>
                {/*<Route path={'/home'} element={<HomePage />} />*/}
                <Route path={'/lessons'} element={<LessonsPage />} />
                <Route path={'/lesson/:id'} element={<LessonComponent />} />
                <Route path={'/exams'} element={<ExamsPage />} />
                <Route path={'/exam/:id'} element={<ExamComponent />} />
                <Route path={'/edit-profile'} element={<EditProfilePage user={user} />} />
                <Route path={'/profile'} element={<Profile />} />
              </Route>
              <Route path={'/'} element={<AuthPage />} />
              <Route path={'*'} element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
