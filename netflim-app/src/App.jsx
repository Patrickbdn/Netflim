// src/App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import ProfilePage from './component/ProfilePage';
import MovieDetailsPage from './component/MovieDetailsPage';
import NavBar from './component/NavBar';

const App = () => {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/MovieDetailsPage" element={<MovieDetailsPage />} />
        </Routes>
      </div>

  );
};

export default App;
