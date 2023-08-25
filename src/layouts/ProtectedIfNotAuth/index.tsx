import { Navigate, Outlet, useLocation } from 'react-router';
import { pb } from '../../libs/pocketbase';

export const ProtectedIfNotAuth = () => {
  const location = useLocation();
  const isAuthenticated = pb.authStore.isValid;

  return !isAuthenticated ? (
    <Navigate to={'/login'} state={{ location: location }} replace />
  ) : (
    <Outlet />
  );
};
