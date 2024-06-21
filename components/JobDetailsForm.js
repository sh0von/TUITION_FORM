import React from 'react';

const JobDetailsForm = ({ formData, errors, handleChange, handleNext, handleBack }) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Job Details</h2>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="class">Class</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="class" type="text" value={formData.class} onChange={handleChange} placeholder="Enter the class" />
      {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="no_of_subjects">Number of Subjects</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="no_of_subjects" type="number" value={formData.no_of_subjects} onChange={handleChange} placeholder="Enter the number of subjects" />
      {errors.no_of_subjects && <p className="text-red-500 text-sm mt-1">{errors.no_of_subjects}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="time">Time</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="time" type="text" value={formData.time} onChange={handleChange} placeholder="Enter the time" />
      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="location">Location</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="location" type="text" value={formData.location} onChange={handleChange} placeholder="Enter the location" />
      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="medium">Medium</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="medium" type="text" value={formData.medium} onChange={handleChange} placeholder="Enter the medium" />
      {errors.medium && <p className="text-red-500 text-sm mt-1">{errors.medium}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="group">Group</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="group" type="text" value={formData.group} onChange={handleChange} placeholder="Enter the group" />
      {errors.group && <p className="text-red-500 text-sm mt-1">{errors.group}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="salary">Salary</label>
      <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="salary" type="number" value={formData.salary} onChange={handleChange} placeholder="Enter the salary" />
      {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
    </div>
    <div className="flex justify-between">
      <button className="bg-gray-400 text-white px-6 py-3 rounded-lg" onClick={handleBack}>Back</button>
      <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg" onClick={handleNext}>Next</button>
    </div>
  </div>
);

export default JobDetailsForm;
