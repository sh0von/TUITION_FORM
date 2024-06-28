import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Step1 from '../components/FormSteps/Step1';
import Step2 from '../components/FormSteps/Step2';
import Step3 from '../components/FormSteps/Step3';
import Success from '../components/FormSteps/Success';
import Modal from '../components/Modal';  // Import the Modal component

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    division: '',
    university_name: '',
    department:'',
    university_type: '',
    degree_type: '',
    class: '',
    area: '',
    no_of_subjects: '1',
    medium: 'Bangla',
    group: 'Science',
    no_of_students: '1',
    salary: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);  // State to control the modal visibility

  useEffect(() => {
    const savedTeacherDetails = localStorage.getItem('teacherDetails');
    if (savedTeacherDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...JSON.parse(savedTeacherDetails),
      }));
    }
  }, []);

  useEffect(() => {
    // Update the URL parameter when the step changes
    router.push(`/?step=${step}`, undefined, { shallow: true });
  }, [step]);

  const handleNext = async () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.division) newErrors.division = 'Division is required';
        if (!formData.university_name) newErrors.university_name = 'University Name is required';
        if (!formData.department) newErrors.department = 'Department Name is required';
        if (!formData.university_type) newErrors.university_type = 'University Type is required';
        if (!formData.degree_type) newErrors.degree_type = 'Degree Type is required';
        break;
      case 2:
        if (!formData.class) newErrors.class = 'Class is required';
        if (!formData.area) newErrors.area = 'Area is required';
        if (!formData.no_of_subjects) newErrors.no_of_subjects = 'Number of subjects is required';
        if (!formData.medium) newErrors.medium = 'Medium is required';
        if (!formData.group) newErrors.group = 'Group is required';
        if (!formData.no_of_students) newErrors.no_of_students = 'Number of students is required';
        if (!formData.salary) newErrors.salary = 'Salary is required';
        break;
      case 3:
        if (!termsAccepted) newErrors.terms = 'You must accept the terms and conditions';
        break;
      default:
        break;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (step === 3) {
      setLoading(true);
      try {
        await axios.post('/api/form', { formData });
        const teacherDetails = {
          name: formData.name,
          gender: formData.gender,
          division: formData.division,
          university_name: formData.university_name,
          department: formData.department,
          university_type: formData.university_type,
          degree_type: formData.degree_type,
        };
        localStorage.setItem('teacherDetails', JSON.stringify(teacherDetails));
        setStep(4);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setStep(step + 1);
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
        division: '',
        university_name: '',
        department: '',
        university_type: '',
        degree_type: '',
        class: '',
        area: '',
        no_of_subjects: '',
        medium: '',
        group: '',
        no_of_students: '',
        salary: '',
      });
    }
    setStep(1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <Modal showModal={showModal} handleClose={handleCloseModal} />  {/* Include Modal here */}
        <div className="mb-8 flex justify-between items-center">
          <div className={`w-12 h-12 ${step >= 1 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator1">1</div>
          <div className="flex-1 h-1 bg-gray-200 mx-2 relative">
            <div id="progress-bar" className={`bg-yellow-400 h-1 transition-width ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 ${step >= 2 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator2">2</div>
          </div>
          <div className={`w-12 h-12 ${step >= 3 ? 'bg-yellow-400' : 'bg-gray-200'} rounded-full flex items-center justify-center text-white font-bold`} id="indicator3">3</div>
        </div>

        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} handleNext={handleNext} errors={errors} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} handleNext={handleNext} handleBack={handleBack} errors={errors} />
        )}
        {step === 3 && (
          <Step3
            termsAccepted={termsAccepted}
            handleAcceptTerms={handleAcceptTerms}
            handleNext={handleNext}
            handleBack={handleBack}
            errors={errors}
            loading={loading}
          />
        )}
        {step === 4 && <Success handleStartOver={handleStartOver} />}
      </div>
    </div>
  );
}
