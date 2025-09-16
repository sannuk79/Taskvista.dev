import React, { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { TextArea } from '@progress/kendo-react-inputs';
import { AnalyticsTracker } from '../utils/analytics';

const ContactForm = ({ closePanel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = () => {
    // Track review
    const tracker = new AnalyticsTracker('taskvista');
    tracker.trackReview(formData.name, formData.message);

    const subject = `Message from ${formData.name} - TaskVista Contact`;
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    const mailtoLink = `mailto:sannuk792@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.open(mailtoLink, '_blank');
    closePanel();
  };

  const handleWhatsAppSubmit = () => {
    // Track review
    const tracker = new AnalyticsTracker('taskvista');
    tracker.trackReview(formData.name, formData.message);

    const whatsappMessage = `*TaskVista Contact*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.message}`;
    const whatsappLink = `https://wa.me/918207336282?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
    closePanel();
  };

  return (
    <div className="relative p-8 w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
      {/* Cross Button */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          onClick={closePanel}
          className="rounded-full border-0 bg-gray-100 hover:bg-red-100"
          themeColor="error"
          size="small"
          icon="close"
        >
          ✕
        </Button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Send Message
        </h2>
        <p className="text-gray-600 mt-2">Get in touch with us</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            className="w-full resize-none"
          />
        </div>

        <div className="flex space-x-3 pt-4">
          <Button
            onClick={handleEmailSubmit}
            className="flex-1 px-4 py-3 font-semibold"
            themeColor="primary"
            size="large"
            icon="email"
          >
            Send via Email
          </Button>
          <Button
            onClick={handleWhatsAppSubmit}
            className="flex-1 px-4 py-3 font-semibold"
            themeColor="success"
            size="large"
            icon="comment"
          >
            WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;