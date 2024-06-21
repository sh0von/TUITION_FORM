import React from 'react';

const Success = ({ handleStartOver }) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Success</h2>
    <p className="text-gray-600 mb-6">Thank you! Your form has been successfully submitted.</p>
    <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={handleStartOver}>Start Over</button>
  </div>
);

export default Success;
