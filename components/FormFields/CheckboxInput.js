import React from 'react';

export default function CheckboxInput({ id, label, checked, onChange, error }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <div className="bg-white border-2 rounded-lg border-gray-300 w-6 h-6 flex items-center justify-center mr-2 focus-within:border-yellow-400">
            {checked && (
              <svg
                className="w-4 h-4 text-yellow-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
        <span className="text-gray-700">{label}</span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
