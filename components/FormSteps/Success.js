import React from 'react';

export default function Success({ handleStartOver }) {
  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Success!</h2>
      <p className="text-gray-700 text-lg mb-6">Your form has been successfully submitted.</p>
      <button
        className="bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={handleStartOver}
      >
        Start Over
      </button>
    </div>
  );
}
