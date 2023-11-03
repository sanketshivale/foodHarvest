import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import firebase from './firebase-config';

const AuthRoute = () => {
    
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
