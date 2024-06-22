export default function ProgressBar({ step }) {
    return (
      <div className="mb-8 flex justify-between items-center">
        <div className={`w-12 h-12 ${step >= 1 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator1">1</div>
        <div className="flex-1 h-1 bg-gray-200 mx-2 relative">
          <div id="progress-bar" className={`bg-yellow-400 h-1 transition-width ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator2">2</div>
        </div>
        <div className={`w-12 h-12 ${step >= 3 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator3">3</div>
      </div>
    );
  }
  