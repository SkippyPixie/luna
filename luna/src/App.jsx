import { Routes, Route, NavLink } from 'react-router-dom';
import Journal from './pages/Journal';
import Coach from './pages/Coach';
import Insights from './pages/Insights';
import Settings from './pages/Settings';
import Onboarding from './pages/Onboarding';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <nav className="flex justify-around p-4 bg-white shadow-sm">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'font-semibold text-indigo-500' : 'font-semibold text-gray-700')}>Journal</NavLink>
        <NavLink to="/coach" className={({ isActive }) => (isActive ? 'font-semibold text-indigo-500' : 'font-semibold text-gray-700')}>Coach</NavLink>
        <NavLink to="/insights" className={({ isActive }) => (isActive ? 'font-semibold text-indigo-500' : 'font-semibold text-gray-700')}>Insights</NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? 'font-semibold text-indigo-500' : 'font-semibold text-gray-700')}>Settings</NavLink>
      </nav>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Journal />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
