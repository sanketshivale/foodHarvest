import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import firebase from './firebase-config';

const AuthRoute = () => {
    
  const currentUser = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
