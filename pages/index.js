import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    institute: '',
    age: '',
    education_level: '',
    years_of_experience: '',
    class: '',
    no_of_subjects: '',
    time: '',
    location: '',
    medium: '',
    group: '',
    salary: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Load teacher details from local storage when component mounts
  useEffect(() => {
    const savedTeacherDetails = localStorage.getItem('teacherDetails');
    if (savedTeacherDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...JSON.parse(savedTeacherDetails),
      }));
    }
  }, []);

  const handleNext = () => {
    const newErrors = {};
  
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Please enter your name.';
      if (!formData.gender) newErrors.gender = 'Please select your gender.';
      if (!formData.institute) newErrors.institute = 'Please enter your institute.';
      if (!formData.age || isNaN(formData.age)) newErrors.age = 'Please enter a valid age.';
      if (!formData.education_level) newErrors.education_level = 'Please enter your education level.';
      if (!formData.years_of_experience || isNaN(formData.years_of_experience)) newErrors.years_of_experience = 'Please enter your years of experience.';
    } else if (step === 2) {
      if (!formData.class) newErrors.class = 'Please enter the class.';
      if (!formData.no_of_subjects || isNaN(formData.no_of_subjects)) newErrors.no_of_subjects = 'Please enter a valid number of subjects.';
      if (!formData.time) newErrors.time = 'Please enter the time.';
      if (!formData.location) newErrors.location = 'Please enter the location.';
      if (!formData.medium) newErrors.medium = 'Please enter the medium.';
      if (!formData.group) newErrors.group = 'Please enter the group.';
      if (!formData.salary || isNaN(formData.salary)) newErrors.salary = 'Please enter a valid salary.';
    }else if (step === 3) {
      if (!termsAccepted) newErrors.terms = 'Please accept the terms and conditions.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (step === 3) {
        handleSubmit();
      } else {
        setStep(step + 1);
      }
    }
  };
  

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleAcceptTerms = () => {
    setTermsAccepted(!termsAccepted);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleStartOver = () => {
    const savedTeacherDetails = localStorage.getItem('teacherDetails');
    if (savedTeacherDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...JSON.parse(savedTeacherDetails),
      }));
    } else {
      setFormData({
        name: '',
        gender: '',
        institute: '',
        age: '',
        education_level: '',
        years_of_experience: '',
        class: '',
        no_of_subjects: '',
        time: '',
        location: '',
        medium: '',
        group: '',
        salary: '',
      });
    }
    setStep(1);
  };
  

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/submit-form', { formData });
      if (response.data.success) {
        // Save teacher details to local storage
        const teacherDetails = {
          name: formData.name,
          gender: formData.gender,
          institute: formData.institute,
          age: formData.age,
          education_level: formData.education_level,
          years_of_experience: formData.years_of_experience,
        };
        localStorage.setItem('teacherDetails', JSON.stringify(teacherDetails));
        setStep(step + 1);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
      <div className="mb-8 flex justify-between items-center">
  <div className={`w-12 h-12 ${step >= 1 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator1">1</div>
  <div className="flex-1 h-1 bg-gray-200 mx-2 relative">
    <div id="progress-bar" className={`bg-yellow-400 h-1 transition-width ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
    <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator2">2</div>
  </div>
  <div className={`w-12 h-12 ${step >= 3 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator3">3</div>
</div>



        {/* Step 1: Teacher Details */}
        {step === 1  && (
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
             </div>
        )}

        {/* Step 2: Student Details */}
        {step === 2  && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Student Details</h2>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="class">Class</label>
              <input 
  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
  id="class" 
  type="text" 
  value={formData.class} 
  onChange={handleChange} 
  placeholder="Enter class" 
/>
{errors.class && <p className="text-red-500 text-sm mt-1">{errors.class}</p>}
 </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="no_of_subjects">Number of Subjects</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="no_of_subjects" type="number" value={formData.no_of_subjects} onChange={handleChange} placeholder="Enter number of subjects" />
              {errors.no_of_subjects && <p className="text-red-500 text-sm mt-1">{errors.no_of_subjects}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="time">Time</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="time" type="text" value={formData.time} onChange={handleChange} placeholder="Enter time" />
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="location">Location</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="location" type="text" value={formData.location} onChange={handleChange} placeholder="Enter location" />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="medium">Medium</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="medium" type="text" value={formData.medium} onChange={handleChange} placeholder="Enter medium" />
              {errors.medium && <p className="text-red-500 text-sm mt-1">{errors.medium}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="group">Group</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="group" type="text" value={formData.group} onChange={handleChange} placeholder="Enter group" />
              {errors.group && <p className="text-red-500 text-sm mt-1">{errors.group}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="salary">Salary</label>
              <input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="salary" type="number" value={formData.salary} onChange={handleChange} placeholder="Enter salary" />
              {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
            </div>
            

          </div>
        )}{step === 3 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Terms and Conditions</h2>
            <p className="text-gray-600 mb-4">
              Please read and accept the terms and conditions before submitting.
            </p>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-yellow-400"
                checked={termsAccepted}
                onChange={handleAcceptTerms}
              />
              <span className="ml-2 text-gray-700">I accept the terms and conditions</span>
            </label>
            {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
          </div>
        )}

        {/* Success Screen */}
        {step === 4 && (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Success!</h2>
    <p className="text-lg text-gray-600 mb-6">Your form has been successfully submitted.</p>
    <button onClick={handleStartOver} className="bg-yellow-400 text-white px-4 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">Start Over</button>
  </div>
)}

{step !== 4 && (
  <div className="flex justify-between mt-6">
    {step > 1 && (
      <button
        onClick={handleBack}
        className="bg-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Back
      </button>
    )}
    <button
      onClick={handleNext}
      className={`bg-yellow-400 text-white px-4 py-3 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 mr-3 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
        </svg>
      ) : step === 3 ? 'Submit' : 'Next'}
    </button>
  </div>
)}


      </div>
    </div>
  );
}
