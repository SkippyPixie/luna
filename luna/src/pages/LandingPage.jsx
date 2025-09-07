import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-semibold mb-4 normal-case">welcome to luna</h1>
        <p className="text-base text-gray-700 mb-8 normal-case">
          your gentle space to reflect, reconnect, and realign. thoughtfully guided by your personal ai companion.
        </p>

        <div className="flex justify-center gap-4">
          <button className="border border-gray-300 rounded-xl px-6 py-3 text-sm hover:bg-gray-100 transition normal-case">learn more</button>
          <button className="border border-indigo-500 text-indigo-500 rounded-xl px-6 py-3 text-sm hover:bg-indigo-50 transition normal-case">start journaling</button>
        </div>
      </div>

      <div className="mt-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-2 normal-case">🌙 minimal interface</h2>
            <p className="text-sm text-gray-600 normal-case">designed for focus and calm, luna removes distractions so you can reflect clearly.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-2 normal-case">🧠 thoughtful prompts</h2>
            <p className="text-sm text-gray-600 normal-case">gentle questions help you explore your thoughts with emotional safety and depth.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-2 normal-case">🤖 private ai support</h2>
            <p className="text-sm text-gray-600 normal-case">your ai therapist-coach is built for introspection, not productivity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
