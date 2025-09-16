
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainDashCharts from './MainDashCharts';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ContactForm from './ContactForm';
import Feedback from './Feedback';
import { TypingAnimation } from './ui/TypingAnimation';
import TechMarquee from './ui/TechMarquee';
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout';
import { Skeleton } from '@progress/kendo-react-indicators';
import { Button } from '@progress/kendo-react-buttons';


function Maindash() {

  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(null); // null, 'login', 'register', 'contact'
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedData, setAnimatedData] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(localStorage.getItem('feedbackSubmitted') === 'true');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    // Generate dynamic data for Real-time Activity
    const generateData = () => {
      const now = new Date();
      return [
        { time: now.toLocaleTimeString(), value: Math.floor(Math.random() * 100) + 50 },
        { time: new Date(now.getTime() - 60000).toLocaleTimeString(), value: Math.floor(Math.random() * 100) + 50 },
        { time: new Date(now.getTime() - 120000).toLocaleTimeString(), value: Math.floor(Math.random() * 100) + 50 },
        { time: new Date(now.getTime() - 180000).toLocaleTimeString(), value: Math.floor(Math.random() * 100) + 50 },
        { time: new Date(now.getTime() - 240000).toLocaleTimeString(), value: Math.floor(Math.random() * 100) + 50 },
      ];
    };

    setAnimatedData(generateData());
    const dataInterval = setInterval(() => {
      setAnimatedData(generateData());
    }, 2000);

    // Show popup after 15 seconds
    const popupTimer = setTimeout(() => {
      if (!hasSubmittedFeedback) {
        setShowPopup(true);
        // Auto-hide after 20 seconds from appearance (35 seconds total)
        setTimeout(() => {
          setShowPopup(false);
        }, 20000);
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      clearInterval(dataInterval);
      clearTimeout(popupTimer);
    };
  }, [hasSubmittedFeedback]);

  const showLoginForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowForm('login');
    }, 1500);
  };

  const showRegisterForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowForm('register');
    }, 1500);
  };

  const showContactForm = () => {
    setShowForm('contact');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const hideForm = () => {
    setShowForm(null);
  };

  const features = [
    {
      title: "Multiple Project Management",
      description: "When you choose TaskVista, you gain the ability to manage multiple projects simultaneously with seamless organization and prioritization.",
      chartData: [
        { category: 'Project A', value: Math.floor(Math.random() * 50) + 50 },
        { category: 'Project B', value: Math.floor(Math.random() * 50) + 50 },
        { category: 'Project C', value: Math.floor(Math.random() * 50) + 50 }
      ]
    },
    {
      title: "Real-Time Tracking",
      description: "Experience live progress monitoring across all your tasks and projects with instant updates and notifications.",
      chartData: [
        { category: 'Completed', value: Math.floor(Math.random() * 30) + 70 },
        { category: 'In Progress', value: Math.floor(Math.random() * 20) + 20 },
        { category: 'Pending', value: Math.floor(Math.random() * 10) + 10 }
      ]
    },
    {
      title: "Customizable Themes",
      description: "Personalize your workspace with adaptive themes that adjust to your brightness preferences and protect your eye health.",
      chartData: [
        { category: 'Light', value: Math.floor(Math.random() * 40) + 30 },
        { category: 'Dark', value: Math.floor(Math.random() * 40) + 30 },
        { category: 'Auto', value: Math.floor(Math.random() * 40) + 30 }
      ]
    },
    {
      title: "Compatible with TaskVista",
      description: "Access TaskVista seamlessly on any device - phone, tablet, or computer - with consistent UI and functionality.",
      chartData: [
        { category: 'Mobile', value: Math.floor(Math.random() * 30) + 60 },
        { category: 'Tablet', value: Math.floor(Math.random() * 30) + 60 },
        { category: 'Desktop', value: Math.floor(Math.random() * 30) + 60 }
      ]
    },
    {
      title: "Eye Health Protection",
      description: "Advanced brightness controls prevent eye strain  and adaptive themes based on your usage patterns.",
      chartData: [
        { category: 'Low', value: Math.floor(Math.random() * 20) + 20 },
        { category: 'Medium', value: Math.floor(Math.random() * 20) + 40 },
        { category: 'High', value: Math.floor(Math.random() * 20) + 60 }
      ]
    },
    {
      title: "Integrated Communication",
      description: "Built-in chat, messaging, and email features allow instant collaboration and report sharing across your team.",
      chartData: [
        { category: 'Chat', value: Math.floor(Math.random() * 40) + 40 },
        { category: 'Email', value: Math.floor(Math.random() * 40) + 40 },
        { category: 'Reports', value: Math.floor(Math.random() * 40) + 40 }
      ]
    }
  ];


  return (
    <div className="relative flex flex-col min-h-screen overflow-visible bg-gray-200" style={{ perspective: '1000px' }}>
      {/* 3D Background */}
      <div
        // className="absolute inset-0"
        // style={{
        //   backgroundImage: `url('/bgsvg.gif')`,
        //   backgroundSize: '110vh 60vh',
        //   backgroundPosition: '70vh 30px',
        //   backgroundRepeat: 'no-repeat',
        //   transform: 'rotateX(10deg) rotateY(-10deg) translateZ(-100px)',
        //   transformOrigin: 'top',
        //   transition: 'transform 0.5ss ease-outer'
        // }}
      ></div>
      {/* Navbar */}
      <nav className="w-full  bg-gray-900/90">
        <div className="px-2 mx-auto max-w-7xl  lg:px-4">
          <div className="flex items-center justify-between h-16"> <div className="flex items-center">
              <svg className="w-12 h-12 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text" >TaskVista</h3>
           </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={showLoginForm}
                className="px-6 py-2 font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                size="medium"
              >
                Login
              </Button>
              <Button
                onClick={showRegisterForm}
                className="px-6 py-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white  border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                size="medium"
              >
                Register
              </Button>
              <Button
                onClick={goToDashboard}
                className="px-6 py-2 font-semibold bg-gradient-to-r from-blue-500 to-gray-300 hover:from-blue-600 hover:to-gray-300 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                size="medium"
                icon="dashboard"
              >
                Enter Dashboard
              </Button>
             
            
            </div>
          </div>
        </div>
      </nav>

      {/* Vertical Rate Experience Button */}
      {!hasSubmittedFeedback && (
        <div className="fixed top-24 right-0 z-50 flex items-center">
          {showPopup && (
            <div className="mr-2 px-3 py-2 bg-yellow-100 border border-yellow-300 rounded-lg shadow-lg text-sm text-yellow-800 animate-pulse">
              Please rate us!
            </div>
          )}
          <Button
            onClick={() => {
              setShowFeedback(true);
              setShowPopup(false);
            }}
            className="px-2 py-6 font-semibold bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-600 hover:to-amber-200 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            size="medium"
          >
            Rate Experience
          </Button>
        </div>
      )}

      {/* Main Content */}
      <div className="relative flex-1 min-h-screen">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center backdrop-blur-sm pt-16">
            <div className="p-8 text-center rounded-2xl backdrop-blur-sm ">
              <img src="/shin-chan-loader.gif" alt="Loading" className="w-32 h-32 mx-auto mb-4" loading="lazy" />
              <p className="text-xl font-bold text-white">Loading...</p>
            </div>
          </div>
        )}

        {/* Form Cards */}
        {showForm === 'login' && (
          <LoginForm closePanel={hideForm} />
        )}
        {showForm === 'register' && (
          <RegisterForm closePanel={hideForm} />
        )}
        {showForm === 'contact' && (
          <ContactForm closePanel={hideForm} />
        )}

        {/* Feedback Form */}
        {showFeedback && (
          <Feedback
            onClose={() => setShowFeedback(false)}
            onSubmitted={() => setHasSubmittedFeedback(true)}
          />
        )}


        {/* Animated Title Section */}
        <div className="flex justify-center h-28 overflow-visible mt-6">
          <TypingAnimation
            texts={[
              "TaskVista",
              "FULL STACK DEVELOP",
              "MANAGE YOUR PROJECT ",
              "TRACK STATUS & REAL-TIME PROGRESS",
              "BOOTS YOUR PRODUCTIVITY"

            ]}
            typingSpeed={80}
            deletingSpeed={50}
            pauseTime={1500}
          />
        </div>


        {/* Features Grid */}
        <div className="mt-8">
          <div className="mb-8 text-center relative">



            <h2 className="text-3xl text-right px-8 font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Why Choose TaskVista?</h2>
            <p className="text-gray-800 text-right px-8 mt-4">Discover the powerful features that make TaskVista your ultimate project management solution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
                <CardHeader>
                  <CardTitle className="text-left text-lg font-semibold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="text-left text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

{/* Testimonials Section */}
<div className="mt-16">
  <div className="mb-8 ">
    <h2 className="mb-2 text-3xl font-bold text-left px-8  font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">What Our Users Say</h2>
    <p className="text-gray-800 text-left px-8  ">See how professionals across industries use TaskVista for their heavy projects</p>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {/* Testimonial Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center mb-4 border-4 border-green-100">
          <span className="text-white text-2xl font-bold">SJ</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarah Johnson</h3>
        <p className="text-blue-600 font-medium mb-1">HR Manager</p>
        <p className="text-gray-500 text-sm mb-4">TechCorp Solutions</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          "TaskVista revolutionized our IT software development projects. We manage complex workflows for 200+ developers across multiple time zones. The real-time tracking and analytics help us deliver projects 40% faster while maintaining quality standards."
        </p>
        <div className="mt-4">
          <Button
            className="w-full px-4 py-2 font-semibold"
            themeColor="primary"
            size="small"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>

    {/* Testimonial Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mb-4 border-4 border-green-100">
          <span className="text-white text-2xl font-bold">MJ</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Mike Rodriguez</h3>
        <p className="text-green-600 font-medium mb-1">Operations Manager</p>
        <p className="text-gray-500 text-sm mb-4">BuildRight Construction</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          "In construction, timing is everything. TaskVista helps us coordinate 150+ workers across 12 simultaneous projects. The dashboard gives us instant visibility into progress, resource allocation, and potential delays before they become critical."
        </p>
        <div className="mt-4">
          <Button
            className="w-full px-4 py-2 font-semibold"
            themeColor="success"
            size="small"
          >
            View Case Study
          </Button>
        </div>
      </div>
    </div>

    {/* Testimonial Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 border-4 border-purple-100">
          <span className="text-white text-2xl font-bold">AL</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Alex Chen</h3>
        <p className="text-purple-600 font-medium mb-1">Freelance Consultant</p>
        <p className="text-gray-500 text-sm mb-4">Independent</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          "As a freelance marketing consultant, I juggle multiple client projects simultaneously. TaskVista's flexible interface adapts to my workflow perfectly. I can track campaign progress, manage client expectations, and deliver results on time every time."
        </p>
        <div className="mt-4">
          <Button
            className="w-full px-4 py-2 font-semibold"
            themeColor="info"
            size="small"
          >
            Contact Expert
          </Button>
        </div>
      </div>
    </div>

    {/* Testimonial Card 4 */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-4 border-4 border-orange-100">
          <span className="text-white text-2xl font-bold">RK</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Rachel Kim</h3>
        <p className="text-orange-600 font-medium mb-1">Product Manager</p>
        <p className="text-gray-500 text-sm mb-4">SalesForce Pro</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          "Leading sales transformation projects requires precision and speed. TaskVista gives our sales team real-time insights into pipeline performance, lead conversion rates, and customer engagement metrics. We've increased our close rate by 35% since implementation."
        </p>
        <div className="mt-4">
          <Button
            className="w-full px-4 py-2 font-semibold"
            themeColor="warning"
            size="small"
          >
            Read Success Story
          </Button>
        </div>
      </div>
    </div>
  </div>
 </div>


 {/* Charts Section */}
 <div className=" py-0 mx-auto mt-16">
  {/* Professional Section Headers */}
  <div className="mb- 10">
    <h2 className="mb-2 text-3xl text-right mx-8  font-bold  font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Analytics Dashboard</h2>
    <p className="text-gray-800  text-right mx-8 ">Monitor your project performance with real-time insights and comprehensive analytics</p>
  </div>

  <div className="flex flex-col gap-6 lg:flex-row">
    <MainDashCharts />
  </div>
 </div>
  {/* Technologies Section */}
  <div className="flex justify-center">
    <TechMarquee />
  </div>


</div>
    
      {/* Footer - Same as MainDash */}
      <footer className="w-full border-t border-gray-200 bg-black">
        <div className=" py-8 mx-auto max-w-8xl sm:px-14 lg:px-18">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-5">
                <svg className="w-12 h-12 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold text-transparent text-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">TaskVista</h3>
              </div>
              <p className="mt-2 text-center md:text-left text-white">
                Your complete task management solution for modern productivity.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h4 className="mb-4 text-lg font-semibold text-gray-300">Contact Us</h4>
              <div className="space-y-2 text-white">
                <p>📧 support@taskvista.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Task Street, Productivity City</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-top  text-center">



              {/* Send Message Button */}
              <div className="text-center md:text-left mb-4">
                <Button
                  onClick={showContactForm}
                  className="px-4 py-2 font-semibold text-sm"
                  themeColor="info"
                  size="small"
                  icon="email"
                >
                  Send Message
                </Button>
              </div>

              <div className="mt-1 md:text-left flex items-center space-x-4">
                 <h4 className="text-lg font-semibold text-gray-300 mb-0">Follow Us</h4>
              <div className="flex justify-center space-x-4 md:justify-start">
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-2.448-2.31 0-1.255.906-2.764 2.946-2.764 1.946 0 2.441 1.509 2.441 2.764 0 1.82-1.151 2.31-2.939 2.31zm7.718 0c-1.297 0-2.448-.49-2.448-2.31 0-1.255.906-2.764 2.946-2.764 1.946 0 2.441 1.509 2.441 2.764 0 1.82-1.151 2.31-2.939 2.31z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              </div>
                 </div>
               <div className="flex fixed right-14 items-center">

                <a
                  href="https://sannu-portfolio.vercel.app/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform hover:scale-105"
                >
                  <img
                    src="/sannu.png"
                    alt="Sannu Profile"
                    className="object-cover w-20 h-34 rounded-lg"
                    loading="lazy"
                  />
                <span
                  className="text-lg font-bold text-gray-300 hover:text-blue-700 transform rotate-180 right ml-2"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Know About Me
                </span>
                </a>



            </div>
           
          </div>

          <div className="pt-3 mt-3 text-center border-t border-gray-800">
            <p className="text-gray-500" >
              © 2024 TaskVista. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Maindash;

