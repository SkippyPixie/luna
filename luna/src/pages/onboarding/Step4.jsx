import React from 'react';
import { Link } from 'react-router-dom';

export default function Step4() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700 font-sans p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-xl normal-case">you're doing enough. ready to begin?</h1>
        <Link
          to="/journal"
          className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          start journaling
        </Link>
        <div className="flex justify-center space-x-2 pt-4">
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-700"></span>
        </div>
      </div>
    </div>
  );
}
