import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout';
import { Button, Chip } from '@progress/kendo-react-buttons';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Badge } from '@progress/kendo-react-indicators';
import { Input } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import ProjectForm from './ProjectForm';
import ContactForm from './ContactForm';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedData, setAnimatedData] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [timeRange, setTimeRange] = useState('Last 6 Months');

  const timeRangeOptions = ['Last Month', 'Last 3 Months', 'Last 6 Months', 'Last Year'];

  const employees = [
    {
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      progress: Math.floor(Math.random() * 40) + 60,
      project: 'Project Alpha',
      date: '2024-09-15'
    },
    {
      name: 'Jane Smith',
      img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      progress: Math.floor(Math.random() * 40) + 60,
      project: 'Project Beta',
      date: '2024-09-10'
    },
    {
      name: 'Mike Johnson',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      progress: Math.floor(Math.random() * 40) + 60,
      project: 'Project Gamma',
      date: '2024-09-12'
    },
    {
      name: 'Sarah Wilson',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      progress: Math.floor(Math.random() * 40) + 60,
      project: 'Project Delta',
      date: '2024-09-08'
    }
  ];

  // Dynamic data generation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    // Generate dynamic data
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

    return () => {
      clearInterval(interval);
      clearInterval(dataInterval);
    };
  }, []);

  const projectData = [
    { name: 'Jan', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Feb', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Mar', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Apr', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'May', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Jun', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 }
  ];

  const pieData = [
    { name: 'Completed', value: Math.floor(Math.random() * 40) + 30, color: '#10B981' },
    { name: 'In Progress', value: Math.floor(Math.random() * 30) + 20, color: '#F59E0B ' },
    { name: 'Pending', value: Math.floor(Math.random() * 20) + 10, color: '#EF4444' }
  ];

  const showProjectFormModal = () => {
    setShowProjectForm(true);
  };

  const hideProjectForm = () => {
    setShowProjectForm(false);
  };

  const showContactFormModal = () => {
    setShowContactForm(true);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-visible" style={{ perspective: '1000px' }}>
      {/* Navbar - Enhanced with Navigation Items */}
      <nav className="w-full rounded-2xl bg-white/10 backdrop-blur-lg">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <svg className="w-12 h-12 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TaskVista</h3>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span>Tasks</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Projects</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Reports</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </a>
            </div>

            {/* User Profile and Logout */}
            <div className="flex items-center space-x-4">
              {/* User Profile */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-blue-500"
                  loading="lazy"
                />
                <span className="text-gray-700 font-medium hidden sm:block">John Doe</span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="liquid-fill-button px-6 py-2 text-gray-700 hover:text-white font-bold text-lg"
                style={{ '--liquid-button-color': '#ef4444' }}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span>Tasks</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Projects</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Reports</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Reorganized Layout */}
      <div className="relative flex-1 min-h-screen">
        {/* Date/Time and Title Section */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Project 1 Dashboard
              </h1>
              <div className="flex gap-4 mt-4">
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
                <DropDownList
                  data={timeRangeOptions}
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.value)}
                  className="w-48"
                />
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-800">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="text-sm text-gray-600">
                {new Date().toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Charts Section - Reorganized */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Panel - Status, Actions, and Sliding Cards */}
            <div className="lg:w-80 w-full space-y-6">
              {/* Project Status Overview */}
              <Card className="shadow-lg relative">
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <CardHeader>
                  <CardTitle>Project Status</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tasks Assigned</span>
                 
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tasks Completed</span>
               
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tasks In Progress</span>
                  
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Completion Rate</span>
                      <ProgressBar value={Math.floor(Math.random() * 30) + 65} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Team Members</span>
                      <Chip themeColor="info">{Math.floor(Math.random() * 15) + 8}</Chip>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Employee Progress Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Employee Progress</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    {employees.map((employee, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <img
                          src={employee.img}
                          alt={employee.name}
                          className="w-10 h-10 rounded-full border-2 border-blue-500"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{employee.name}</span>
                            <span className="text-xs text-gray-500">{employee.project} - {employee.date}</span>
                          </div>
                          <ProgressBar value={employee.progress} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <Button
                      onClick={showProjectFormModal}
                      className="w-full px-4 py-2 font-semibold"
                      themeColor="primary"
                      size="medium"
                    >
                      Add Project
                    </Button>
                    <Button
                      className="w-full px-4 py-2 font-semibold"
                      themeColor="secondary"
                      size="medium"
                    >
                      View Reports
                    </Button>
                    <Button
                      className="w-full px-4 py-2 font-semibold"
                      themeColor="info"
                      size="medium"
                    >
                      Team Management
                    </Button>
                    <Button
                      className="w-full px-4 py-2 font-semibold"
                      themeColor="success"
                      size="medium"
                    >
                      Resource Allocation
                    </Button>
                  </div>
                </CardBody>
              </Card>

              {/* Sliding Cards - Moved to left panel */}
              <div className="relative overflow-hidden h-40 bg-white rounded-lg shadow-lg">
                <Card className="h-40 absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${(0 - currentSlide) * 100}%)` }}>
                  <CardHeader>
                    <CardTitle>Task Progress</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <p>Tasks Assigned: {Math.floor(Math.random() * 25) + 15}</p>
                    <p>Tasks Completed: {Math.floor(Math.random() * 20) + 10}</p>
                    <p>Progress: {Math.floor(Math.random() * 30) + 65}%</p>
                  </CardBody>
                </Card>
                <Card className="h-40 absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${(1 - currentSlide) * 100}%)` }}>
                  <CardHeader>
                    <CardTitle>Team Activity</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <p>Active Members: {Math.floor(Math.random() * 12) + 5}</p>
                    <p>Tasks Today: {Math.floor(Math.random() * 8) + 3}</p>
                    <p>Avg. Completion: {Math.floor(Math.random() * 20) + 75}%</p>
                  </CardBody>
                </Card>
                <Card className="h-40 absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${(2 - currentSlide) * 100}%)` }}>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <p>Days Remaining: {Math.floor(Math.random() * 45) + 15}</p>
                    <p>Milestones: {Math.floor(Math.random() * 5) + 2}/5</p>
                    <p>On Schedule: {Math.random() > 0.5 ? 'Yes' : 'No'}</p>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Right Charts - Enhanced and moved up */}
            <div className="flex-1 space-y-6">
              {/* Dynamic Bar Chart - Moved up */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Live Project Progress</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={projectData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tasks" fill="#3B82F6" name="Total Tasks" />
                    <Bar dataKey="completed" fill="#10B981" name="Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Dynamic Area Chart - Increased width and moved up */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Real-time Activity</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={animatedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Dynamic Pie Chart - Moved up */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Project Status Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <ProjectForm closePanel={hideProjectForm} />
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <ContactForm closePanel={() => setShowContactForm(false)} />
        </div>
      )}

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
              <p className="mt-2 text-center md:text-left">
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
                  onClick={showContactFormModal}
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
};

export default Dashboard;
