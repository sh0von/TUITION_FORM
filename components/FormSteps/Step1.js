import { useState } from 'react';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import NavigationButtons from '../NavigationButtons';
import universities from '../../uni.json';
import Autosuggest from 'react-autosuggest';

export default function Step1({ formData, handleChange, handleNext, errors }) {
  const [suggestions, setSuggestions] = useState([]);

  // Function to get suggestions based on user input
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : universities.filter(uni =>
      uni.toLowerCase().includes(inputValue)
    );
  };

  // Update suggestions when input value changes
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Clear suggestions when input is cleared
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Handle suggestion selection
  const onSuggestionSelected = (event, { suggestion }) => {
    handleChange({ target: { id: 'university_name', value: suggestion } });
  };

  // Props for Autosuggest component
  const inputProps = {
    id: 'university_name',
    value: formData.university_name,
    onChange: (e, { newValue }) => handleChange({ target: { id: 'university_name', value: newValue } }),
    placeholder: 'Enter your university name',
    className: 'w-full border-2 border-gray-300 rounded-lg p-2 focus:border-yellow-400 focus:outline-none'
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Teacher Details</h2>
      
      {/* Name Input */}
      <TextInput id="name" label="Name" value={formData.name} onChange={handleChange} placeholder="Enter your name" error={errors.name} />
      
      {/* Gender Selection */}
      <SelectInput id="gender" label="Gender" value={formData.gender} onChange={handleChange} options={['Male', 'Female']} error={errors.gender} />
      
      {/* Division Selection */}
      <SelectInput id="division" label="Division" value={formData.division} onChange={handleChange} options={['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh']} error={errors.division} />
      
      {/* University Name Autosuggest */}
      <div className="mb-4">
        <label htmlFor="university_name" className="block text-gray-700 font-bold mb-2">University Name</label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => (
            <div className="p-2 hover:bg-yellow-400 hover:text-white cursor-pointer">{suggestion}</div>
          )}
          inputProps={inputProps}
          theme={{
            container: 'relative',
            suggestionsContainer: 'absolute z-10 w-full bg-white  rounded-lg',
            suggestionsList: 'list-none p-0 m-0',
            suggestion: 'p-2',
            suggestionHighlighted: 'bg-yellow-400 text-white'
          }}
        />
        {errors.university_name && <p className="text-red-500 text-xs mt-1">{errors.university_name}</p>}
      </div>

      {/*Teacher Department Input */}
      <TextInput id="department" label="Department" value={formData.department} onChange={handleChange} placeholder="Enter your department" error={errors.department} />
      
      {/* University Type Selection */}
      <SelectInput id="university_type" label="University Type" value={formData.university_type} onChange={handleChange} options={['Public', 'Private', 'National University']} error={errors.university_type} />
      
      {/* Degree Type Selection */}
      <SelectInput id="degree_type" label="Degree Type" value={formData.degree_type} onChange={handleChange} options={['Hons.', 'Degree', 'Engineering', 'MBBS']} error={errors.degree_type} />
      
      {/* Next Button */}
      <div className="flex justify-end">
        <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
