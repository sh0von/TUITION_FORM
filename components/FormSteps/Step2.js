import SelectInput from '../FormFields/SelectInput';
import TextInput from '../FormFields/TextInput';
import NavigationButtons from '../NavigationButtons';

export default function Step2({ formData, handleChange, handleNext, handleBack, errors }) {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Tuition Details (student) </h2>
      
      {/* Class Selection */}
      <SelectInput
        id="class"
        label="Class"
        value={formData.class}
        onChange={handleChange}
        options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'HSC']}
        error={errors.class}
      />
      
      {/* Area Input */}
      <TextInput
        id="area"
        label="Area (e.g., ChawkBazar, 2 No Gate)"
        value={formData.area}
        onChange={handleChange}
        placeholder="Enter the area"
        error={errors.area}
      />
      
      {/* Number of Subjects Selection */}
      <SelectInput
        id="no_of_subjects"
        label="Number of Subjects"
        value={formData.no_of_subjects}
        onChange={handleChange}
        options={['1', '2', '3', '4', '5']}
        error={errors.no_of_subjects}
      />
      
      {/* Medium Selection */}
      <SelectInput
        id="medium"
        label="Medium"
        value={formData.medium}
        onChange={handleChange}
        options={['Bangla', 'English', 'National Curriculum', 'British Curriculum']}
        error={errors.medium}
      />
      
      {/* Group Selection */}
      <SelectInput
        id="group"
        label="Group"
        value={formData.group}
        onChange={handleChange}
        options={['Science', 'Commerce', 'Arts']}
        error={errors.group}
      />
      
      {/* Number of Students Selection */}
      <SelectInput
        id="no_of_students"
        label="Number of Students"
        value={formData.no_of_students}
        onChange={handleChange}
        options={['1', '2', '3', '4', '5']}
        error={errors.no_of_students}
      />
      
      {/* Salary Input */}
      <TextInput
        id="salary"
        label="Salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Enter the salary"
        error={errors.salary}
      />
      
      {/* Navigation Buttons */}
        <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </div>
  );
}
