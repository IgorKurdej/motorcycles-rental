import React from 'react';
import {Navigate, Outlet} from 'react-router';

const useAuth = () => {
    return sessionStorage.length;
}

const ProtectedRoutesForUnlogged = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/logowanie' />
};

export default ProtectedRoutesForUnlogged;