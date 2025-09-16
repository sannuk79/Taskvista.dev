import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maindash from './components/maindash';
import Dashboard from './components/Dashboard';
import BrightnessSlider from './components/ui/BrightnessSlider';
import { AnalyticsTracker } from './utils/analytics';

function App() {
  useEffect(() => {
    const tracker = new AnalyticsTracker('taskvista');
    tracker.trackPageView();
    tracker.trackPerformance();

    // Track errors
    const handleError = (event) => {
      tracker.trackError(event.error || new Error(event.message));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (event) => {
      tracker.trackError(new Error(event.reason));
    });

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maindash />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Global Brightness Slider for Eye Comfort */}
      <BrightnessSlider />
    </Router>
  );
}

export default App;
