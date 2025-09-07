import React from 'react';
import { Link } from 'react-router-dom';

export default function Step1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700 font-sans p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-xl normal-case">what's on your mind today?</h1>
        <textarea
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none"
        />
        <Link
          to="/onboarding/step-2"
          className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          next
        </Link>
        <div className="flex justify-center space-x-2 pt-4">
          <span className="h-2 w-2 rounded-full bg-gray-700"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </div>
  );
}
