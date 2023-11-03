import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path='/' element={<AuthRoute />}>

            <Route path='/' element={<Dashboard />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
