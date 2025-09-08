import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const emotions = ['calm', 'anxious', 'tired', 'ok'];

export default function Step2() {
  const [selected, setSelected] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700 font-sans p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-xl normal-case">how are you feeling right now?</h1>
        <div className="flex flex-wrap justify-center gap-2">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              type="button"
              onClick={() => setSelected(emotion)}
              className={`px-4 py-2 border rounded-full ${selected === emotion ? 'bg-gray-200' : 'bg-white'}`}
            >
              {emotion}
            </button>
          ))}
        </div>
        <Link
          to="/onboarding/step-3"
          className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          next
        </Link>
        <div className="flex justify-center space-x-2 pt-4">
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-700"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </div>
  );
}
