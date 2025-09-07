import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Onboarding from './Onboarding';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}
