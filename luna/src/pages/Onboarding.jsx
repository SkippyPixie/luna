import React from 'react';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-700 font-sans text-center space-y-4 lowercase">
      <h1 className="text-2xl normal-case">hi, i’m luna 🌙</h1>
      <p className="text-base normal-case">let’s start a gentle journey inward.</p>
      <Link
        to="/journal"
        className="border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-xl px-6 py-3 text-sm normal-case"
      >
        start journaling
      </Link>
    </div>
  );
}

