import React from 'react';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center space-y-4">
      <h1 className="text-2xl font-light text-gray-700">Hi, I’m luna 🌙</h1>
      <p className="text-gray-600">Let’s start a gentle journey inward.</p>
      <Link
        to="/journal"
        className="mt-6 px-6 py-2 rounded-full bg-indigo-200 text-indigo-900 hover:bg-indigo-300"
      >
        Start Journaling
      </Link>
    </div>
  );
}
