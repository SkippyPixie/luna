import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {children}
    </div>
  );
}
