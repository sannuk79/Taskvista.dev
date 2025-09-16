import React, { useState, useEffect } from 'react';

const Feedback = ({ onClose, onSubmitted }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Trigger slide-in animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match transition duration
  };

  const validate = () => {
    const newErrors = {};
    if (!selectedRating) {
      newErrors.rating = 'Please select a rating';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const feedbackData = {
        rating: selectedRating,
        email,
        message,
        timestamp: new Date().toISOString()
      };

      try {
        // Send to backend
        const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedbackData),
        });

        if (response.ok) {
          localStorage.setItem('feedbackSubmitted', 'true');
          // Store feedback data for admin access
          const existingFeedback = JSON.parse(localStorage.getItem('feedbackData') || '[]');
          existingFeedback.push(feedbackData);
          localStorage.setItem('feedbackData', JSON.stringify(existingFeedback));
          onSubmitted();
          handleClose();
        } else {
          alert('Failed to submit feedback. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
        // For demo purposes, still mark as submitted and store locally
        localStorage.setItem('feedbackSubmitted', 'true');
        // Store feedback data for admin access
        const existingFeedback = JSON.parse(localStorage.getItem('feedbackData') || '[]');
        existingFeedback.push(feedbackData);
        localStorage.setItem('feedbackData', JSON.stringify(existingFeedback));
        onSubmitted();
        handleClose();
      }
    }
  };

  const ratings = [
    { value: 1, label: 'Smiley Hate', color: '#ef4444', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="currentColor" className="icon w-8 h-8">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)">
          <circle cx="22.5" cy="22.5" r="22.5"></circle>
          <path d="M33 20.742 27 16.5l6-4.242m-21 0 6 4.242-6 4.242M34.5 34.5a13.504 13.504 0 0 0-24.2 0"></path>
        </g>
      </svg>
    )},
    { value: 2, label: 'Smiley Dislike', color: '#f97316', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 47" fill="currentColor" className="icon w-8 h-8">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1.75 1)">
          <path d="M13.5 20.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m18 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m-21-6.644a3.598 3.598 0 0 1 6 0h0m12 0a3.598 3.598 0 0 1 6 0h0"></path>
          <circle cx="22.5" cy="22.5" r="22.5"></circle>
          <path d="M34.596 34.5a13.504 13.504 0 0 0-24.2 0"></path>
        </g>
      </svg>
    )},
    { value: 3, label: 'Smiley Neutral', color: '#eab308', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 47" fill="currentColor" className="icon w-8 h-8">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1.5 1)">
          <circle cx="22.5" cy="22.5" r="22.5"></circle>
          <path d="M15 15.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m15 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M13.5 30h18"></path>
        </g>
      </svg>
    )},
    { value: 4, label: 'Smiley Like', color: '#22c55e', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 47" fill="currentColor" className="icon w-8 h-8">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1.25 1)">
          <circle cx="22.5" cy="22.5" r="22.5"></circle>
          <path d="M15 15.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m15 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.596 12.75a13.504 13.504 0 0 1-24.2 0"></path>
        </g>
      </svg>
    )},
    { value: 5, label: 'Smiley Love', color: '#16a34a', svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="currentColor" className="icon w-8 h-8">
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(1 1)">
          <circle cx="22.5" cy="22.5" r="22.5"></circle>
          <path fill="#FFF" d="M18.068 8.263a4.07 4.07 0 0 0-5.896 0l-2.526 2.612L7.12 8.263a4.07 4.07 0 0 0-5.894 0 4.4 4.4 0 0 0 0 6.094l7.524 7.782a1.24 1.24 0 0 0 1.8 0l7.518-7.778a4.413 4.413 0 0 0 0-6.098m25.705 0a4.07 4.07 0 0 0-5.894 0l-2.526 2.612-2.526-2.612a4.067 4.067 0 0 0-5.895 0 4.41 4.41 0 0 0 0 6.094l7.524 7.782a1.24 1.24 0 0 0 1.8 0l7.518-7.778a4.4 4.4 0 0 0 0-6.098z"></path>
          <path d="M34.2 28A13.504 13.504 0 0 1 10 28"></path>
        </g>
      </svg>
    )}
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={handleClose}>
      <div
        className="fixed right-0 top-16 h-md w-full max-w-md bg-white shadow-xl overflow-y-auto  rounded-2xl transform transition-transform duration-300 ease-in-out p-6"
        style={{ transform: isClosing ? 'translateX(100%)' : isVisible ? 'translateX(0)' : 'translateX(100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Rate my website experience</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-6">
            <div className="optionContainer flex justify-center space-x-4">
              {ratings.map((rating) => (
                <label key={rating.value} className="option cursor-pointer">
                  <input
                    name="rating"
                    aria-label={rating.label}
                    className="input hidden"
                    type="radio"
                    value={rating.value}
                    onChange={() => setSelectedRating(rating.value)}
                  />
                  <div
                    className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${selectedRating === rating.value ? 'bg-gray-100 scale-110 animate-pulse' : ''}`}
                    style={{ color: selectedRating === rating.value ? rating.color : '#9ca3af' }}
                  >
                    {rating.svg}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="email"
                placeholder="Your Email (Required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message (Required)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            {errors.rating && <p className="text-red-500 text-sm text-center">{errors.rating}</p>}
          </div>
          <div className="flex justify-center space-x-3">
            <button
              type="submit"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedRating && email && message ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700 shadow-lg hover:shadow-xl' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              disabled={!selectedRating || !email || !message}
            >
              Submit
            </button>
          </div>
        </form>
        <button onClick={handleClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold">×</button>
      </div>
    </div>
  );
};

export default Feedback;