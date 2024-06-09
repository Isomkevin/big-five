// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AnimalMapPage from './pages/AnimalMapPage';
import TouristVenuesPage from './pages/TouristVenuesPage';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/animal-map" element={<AnimalMapPage />} />
        <Route path="/tourist-venues" element={<TouristVenuesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
