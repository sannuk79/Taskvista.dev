import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDInput } from './ui/ThreeDInput';
import BrightnessSlider from './ui/BrightnessSlider';
import { Button } from '@progress/kendo-react-buttons';

const RegisterForm = ({ closePanel }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOutside, setIsMouseOutside] = useState(true);
  const formRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseMove = (e) => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -10; // Max 10 degrees
      const rotateY = (x - centerX) / centerX * 10; // Max 10 degrees

      setMousePosition({ x: rotateY, y: rotateX });
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOutside(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseLeave = () => {
    setIsMouseOutside(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy register - always redirect
    navigate('/dashboard');
    closePanel();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm animate-fade-in pt-8" onClick={closePanel}>
      <div
        ref={formRef}
        className="relative p-8 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto transition-all duration-300 ease-out bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200"
        style={{
          transform: isMouseOutside
            ? `perspective(1200px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(30px) scale(1.02)`
            : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
          transformStyle: 'preserve-3d',
          boxShadow: isMouseOutside
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        onMouseMove={isMouseOutside ? handleMouseMove : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
      >
     {/* Cross Button */}
         <div
           className="absolute top-0 right-2 z-10"
           style={{ transform: 'translateZ(10px)' }}
         >
           <Button
             onClick={closePanel}
             className="rounded-full border-0 w-8 bg-white text-black hover:text-white hover:bg-red-500"
             themeColor="error"
             size="big"
             icon="close"
           >
             ✕
           </Button>
         </div>

      <div
        className="text-center mb-6"
        style={{
          transform: 'translateZ(20px)'
        }}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Register</h2>
        <p className="text-gray-600 mt-2">Create your account to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" key="register-form">
        <ThreeDInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          error={errors.name}
          autoComplete="name"
        />
        <ThreeDInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
          autoComplete="username"
        />
        <ThreeDInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
          autoComplete="new-password"
        />
        <ThreeDInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          error={errors.confirmPassword}
          autoComplete="new-password"
        />
        <div>
          <Button
            type="submit"
            className="w-full px-6 py-4 font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            size="large"
          >
            Register
          </Button>
        </div>
      </form>

      {/* Brightness Slider for Eye Comfort */}

      </div>
    </div>
  );
};

export default RegisterForm;