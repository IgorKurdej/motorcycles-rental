import { Navigate, Outlet } from 'react-router';
import { pb } from '../../libs/pocketbase';
import { FC } from 'react';

export const ProtectedIfAuth: FC = () => {
  const isAuthenticated = pb.authStore.isValid;
  return isAuthenticated ? <Navigate to='/' replace /> : <Outlet />;
};
