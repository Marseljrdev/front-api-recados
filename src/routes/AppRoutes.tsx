import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import DefaultLayout from '../config/layout/DefaultLayout';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
