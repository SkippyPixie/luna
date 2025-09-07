import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Onboarding from './Onboarding';
import Journal from './Journal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/journal" element={<Journal />} />
    </Routes>
  );
}
