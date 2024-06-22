import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown({ id, label, value, onChange, options, error }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange({ target: { id, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className={`w-full px-4 py-3 border rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 ${error ? 'border-red-500' : 'border-gray-300'}`}
        >
          <span className="flex items-center justify-between">
            {value || `Select ${label.toLowerCase()}`}
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </span>
        </button>
        {isOpen && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto text-left">
            {options.map(option => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 cursor-pointer hover:bg-yellow-400 hover:text-white"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}
