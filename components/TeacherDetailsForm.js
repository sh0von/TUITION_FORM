import React from 'react';

const TeacherDetailsForm = ({ formData, errors, handleChange, handleNext }) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Teacher Details</h2>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">Name</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="gender">Gender</label>
      <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="institute">Institute</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="institute" type="text" value={formData.institute} onChange={handleChange} placeholder="Enter your institute" />
      {errors.institute && <p className="text-red-500 text-sm mt-1">{errors.institute}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="age">Age</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="age" type="number" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
      {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="education_level">Education Level</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="education_level" type="text" value={formData.education_level} onChange={handleChange} placeholder="Enter your education level" />
      {errors.education_level && <p className="text-red-500 text-sm mt-1">{errors.education_level}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="years_of_experience">Years of Experience</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="years_of_experience" type="number" value={formData.years_of_experience} onChange={handleChange} placeholder="Enter your years of experience" />
      {errors.years_of_experience && <p className="text-red-500 text-sm mt-1">{errors.years_of_experience}</p>}
    </div>
    <div className="flex justify-end">
      <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={handleNext}>Next</button>
    </div>
  </div>
);

export default TeacherDetailsForm;
