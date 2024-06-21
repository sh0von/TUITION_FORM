import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import TeacherDetailsForm from '../components/TeacherDetailsForm';
import JobDetailsForm from '../components/JobDetailsForm';
import Confirmation from '../components/Confirmation';
import Success from '../components/Success';

const MainForm = () => {
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
    salary: ''
  });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleAcceptTerms = () => {
    setTermsAccepted(!termsAccepted);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.institute) newErrors.institute = 'Institute is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.education_level) newErrors.education_level = 'Education level is required';
    if (!formData.years_of_experience) newErrors.years_of_experience = 'Years of experience is required';
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.no_of_subjects) newErrors.no_of_subjects = 'Number of subjects is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.medium) newErrors.medium = 'Medium is required';
    if (!formData.group) newErrors.group = 'Group is required';
    if (!formData.salary) newErrors.salary = 'Salary is required';
    return newErrors;
  };

  const handleNext = () => {
    let newErrors = {};
    if (step === 1) {
      newErrors = validateStep1();
    } else if (step === 2) {
      newErrors = validateStep2();
    } else if (step === 3 && !termsAccepted) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (step === 3) {
        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
          setLoading(false);
          setStep(4);
        }, 2000);
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleStartOver = () => {
    setStep(1);
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
      salary: ''
    });
    setErrors({});
    setTermsAccepted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <StepIndicator step={step} />
        {step === 1 && (
          <TeacherDetailsForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <JobDetailsForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <Confirmation
            termsAccepted={termsAccepted}
            handleAcceptTerms={handleAcceptTerms}
            errors={errors}
            handleBack={handleBack}
            handleNext={handleNext}
            loading={loading}
          />
        )}
        {step === 4 && <Success handleStartOver={handleStartOver} />}
      </div>
    </div>
  );
};

export default MainForm;
