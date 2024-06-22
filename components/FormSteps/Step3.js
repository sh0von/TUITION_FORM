import CheckboxInput from '../FormFields/CheckboxInput';
import NavigationButtons from '../NavigationButtons';

export default function Step3({ termsAccepted, handleAcceptTerms, handleNext, handleBack, errors, loading }) {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Confirmation</h2>
      <div className="bg-white p-6 -md mb-6">
        <p className="text-base text-gray-700 mb-4">
          Before you proceed, please confirm your agreement:
        </p>
        <CheckboxInput id="terms" label="Yes, I agree that all provided information will be used solely for research purposes and will not be sold or disclosed to third parties." checked={termsAccepted} onChange={handleAcceptTerms} error={errors.terms} />
      </div>
      <NavigationButtons onBack={handleBack} onNext={handleNext} loading={loading} />
    </div>
  );
}
