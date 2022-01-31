import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const RequireAuth = () => {
  const { session } = useContext(AuthContext);
  if (!session) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default RequireAuth;
