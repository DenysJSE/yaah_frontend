import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = () => {
  const isLogged = !!localStorage.getItem('authToken');

  return (
    isLogged ? <Outlet /> : <Navigate to={'/'} />
  )
};

export default PrivateRoute;
