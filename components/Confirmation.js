import React from 'react';

const Confirmation = ({ termsAccepted, handleAcceptTerms, errors, handleBack, handleNext, loading }) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Confirmation</h2>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">Terms and Conditions</label>
      <div className="flex items-center">
        <input className="mr-2" type="checkbox" id="terms" checked={termsAccepted} onChange={handleAcceptTerms} />
        <label className="text-gray-600" htmlFor="terms">I accept the terms and conditions</label>
      </div>
      {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
    </div>
    <div className="flex justify-between">
      <button className="bg-gray-400 text-white px-6 py-3 rounded-lg" onClick={handleBack}>Back</button>
      <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={handleNext} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  </div>
);

export default Confirmation;
