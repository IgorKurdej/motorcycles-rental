import { Navigate, Outlet } from 'react-router';
import { pb } from '../../libs/pocketbase';

export const ProtectedIAuth = () => {
  const isAuthenticated = pb.authStore.isValid;
  return isAuthenticated ? <Navigate to='/' replace /> : <Outlet />;
};
