import React from 'react';
import {Navigate, Outlet} from "react-router";

const useAuth = () => {
    return !sessionStorage.length;
}

const ProtectedRoutesForLoggedUser = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' />
};

export default ProtectedRoutesForLoggedUser;