export default function NavigationButtons({ onBack, onNext, loading }) {
    return (
      <div className="flex justify-between">
        <button className="bg-gray-400 text-white px-6 py-3 rounded-lg" onClick={onBack}>
          Back
        </button>
        <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={onNext} disabled={loading}>
          {loading ? 'Submitting...' : 'Next'}
        </button>
      </div>
    );
  }
  