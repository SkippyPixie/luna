import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Journal from './Journal';
import Step1 from './onboarding/Step1';
import Step2 from './onboarding/Step2';
import Step3 from './onboarding/Step3';
import Step4 from './onboarding/Step4';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/onboarding/step-1" element={<Step1 />} />
      <Route path="/onboarding/step-2" element={<Step2 />} />
      <Route path="/onboarding/step-3" element={<Step3 />} />
      <Route path="/onboarding/step-4" element={<Step4 />} />
    </Routes>
  );
}
