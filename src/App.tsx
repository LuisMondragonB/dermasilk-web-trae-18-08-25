import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import HomePage from './pages/HomePage';
import MembershipsPage from './pages/MembershipsPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/membresias" element={<MembershipsPage />} />
      </Routes>
    </div>
  );
}

export default App;