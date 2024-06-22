import React, { useState, useEffect } from 'react';

const Modal = ({ showModal, handleClose }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleNextClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      handleClose();
    }, 300); // Duration matches the animation duration
  };

  useEffect(() => {
    if (showModal) {
      setIsFadingOut(false);
    }
  }, [showModal]);

  if (!showModal && !isFadingOut) return null;

  return (
    <div className={`fixed inset-0 z-50 px-4 bg-gray-600 bg-opacity-75 flex items-center justify-center transition-opacity duration-300 ${isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto transform transition-transform duration-300 ${isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Before we get started, here are a few things to keep in mind:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li><span className="font-bold">Step 1:</span> Fill in your personal details.</li>
          <li><span className="font-bold">Step 2:</span> Provide information about the student.</li>
          <li><span className="font-bold">Note:</span> Different details are required for each tuition class.</li>
          <li><span className="font-bold">Privacy:</span> Your data will not be used for commercial purposes.</li>
        </ul>
        <div className="flex justify-center">
          <button
            onClick={handleNextClick}
            className="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
