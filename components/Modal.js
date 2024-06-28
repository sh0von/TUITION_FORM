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
      Before we get started, please note:
    </p>
    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
      <li><span className="font-bold">Step 1:</span> Enter your personal details.</li>
      <li><span className="font-bold">Step 2:</span> Provide student or tuition information.</li>
      <li><span className="font-bold">Note:</span> Fill a new form for each tuition.</li>
      <li><span className="font-bold">Privacy:</span> Data is confidential and won't be used commercially.</li>
      <li><span className="font-bold">Anonymous:</span>You can use a fake name to remain anonymous.</li>
    </ul>
    <p className="text-lg text-gray-600">
      All information is used for a tuition salary prediction research project.
    </p>



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
