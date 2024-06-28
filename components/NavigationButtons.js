import { useRef, useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { FaSpinner } from 'react-icons/fa';

export default function NavigationButtons({ onBack, onNext, loading }) {
  const loadingBar = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (loading) {
      loadingBar.current.continuousStart();
    } else {
      loadingBar.current.complete();
    }
  }, [loading]);

  const handleNext = () => {
    setSubmitting(true);
    setTimeout(() => {
      onNext();
      setSubmitting(false);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <>
      <LoadingBar color="#f59e0b" ref={loadingBar} />
      <div className="flex justify-between">
        <button className="bg-gray-400 text-white px-6 py-3 rounded-lg" onClick={onBack}>
          Back
        </button>
        <button
          className={`bg-yellow-400 text-white px-6 py-3 rounded-lg flex items-center justify-center ${
            (loading || submitting) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNext}
          disabled={loading || submitting}
        >
          {submitting ? (
            <>
              <span className="mr-2">Submitting...</span>
              <FaSpinner className="animate-spin" />
            </>
          ) : (
            'Next'
          )}
        </button>
      </div>
    </>
  );
}
