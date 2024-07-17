import React from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  //console.log('try in protectedroute');
  return (isLoggedIn ? children : <Navigate to="/" replace />)

  //this is not working at all
  /*const location = useLocation().pathname;
  if (isLoggedIn && location.pathname === '/account') {
    return <Navigate to="/account" replace />;
  }

  return children;*/
}

export default ProtectedRoute;