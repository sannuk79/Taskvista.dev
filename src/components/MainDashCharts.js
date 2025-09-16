import React, { useState, useEffect } from 'react';
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
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const MainDashCharts = () => {
  const [animatedData, setAnimatedData] = useState([]);

  // Dynamic data generation for all charts
  useEffect(() => {
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
    const interval = setInterval(() => {
      setAnimatedData(generateData());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Dynamic data for all charts
  const barData = [
    { name: 'Jan', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Feb', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Mar', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Apr', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'May', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 },
    { name: 'Jun', tasks: Math.floor(Math.random() * 50) + 20, completed: Math.floor(Math.random() * 40) + 15 }
  ];

  const lineData = [
    { name: 'Week 1', productivity: Math.floor(Math.random() * 30) + 60 },
    { name: 'Week 2', productivity: Math.floor(Math.random() * 30) + 60 },
    { name: 'Week 3', productivity: Math.floor(Math.random() * 30) + 60 },
    { name: 'Week 4', productivity: Math.floor(Math.random() * 30) + 60 }
  ];

  const pieData = [
    { name: 'Completed', value: Math.floor(Math.random() * 40) + 30, color: '#10B981' },
    { name: 'In Progress', value: Math.floor(Math.random() * 30) + 20, color: '#F59E0B' },
    { name: 'Pending', value: Math.floor(Math.random() * 20) + 10, color: '#EF4444' }
  ];

  return (
    <div className="mt-2 flex justify-between w-full items-center  space-x-4">
    

        {/* Bar Chart */}
        <div className="bg-white p-2 rounded-lg relative overflow-hidden group hover:shadow-lg transition-all duration-500 animate-slide-in-left flex-1">
          <h3 className="text-lg font-semibold mb-4  text-gray-900 text-left">Monthly Tasks</h3>
          <div className="transition-transform   duration-500 ease-in-out group-hover:-translate-x-full">

            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="4 6" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="tasks" fill="#3B82F6" name="Total Tasks" />
                <Bar dataKey="completed" fill="#10B981" name="Completed" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-center">Monthly Tasks Overview</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    📊 <strong>Track Progress:</strong> Monitor your monthly task completion rates and identify productivity patterns.
                  </p>
                  <p className="text-sm text-gray-600">
                    🎯 <strong>Goal Setting:</strong> Set realistic monthly targets based on historical completion rates.
                  </p>
                  <p className="text-sm text-gray-600">
                    📈 <strong>Performance:</strong> Blue bars show total tasks, green bars show completed tasks.
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Aim for 70-80% completion rate for optimal productivity.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-2 rounded-lg relative overflow-hidden group hover:shadow-lg transition-all duration-500 animate-slide-in-left animation-delay-200 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-left">Productivity</h3>
          <div className="transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="productivity"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  name="Productivity %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-center">Live Productivity Tracker</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    📈 <strong>Real-time Progress:</strong> Track your productivity levels throughout the week with live updates.
                  </p>
                  <p className="text-sm text-gray-600">
                    🎯 <strong>Performance Metrics:</strong> Monitor efficiency trends and identify peak productivity periods.
                  </p>
                  <p className="text-sm text-gray-600">
                    📊 <strong>Trend Analysis:</strong> Purple line shows productivity percentage over time.
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Consistent upward trends indicate good work habits and time management.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-2 rounded-lg relative overflow-hidden group hover:shadow-lg transition-all duration-500 animate-slide-in-left animation-delay-400 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-left">Task Status</h3>
          <div className="transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  label={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-center">Task Status Distribution</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    🟢 <strong>Completed (68%):</strong> Tasks successfully finished and delivered.
                  </p>
                  <p className="text-sm text-gray-600">
                    🟡 <strong>In Progress (22%):</strong> Currently active tasks being worked on.
                  </p>
                  <p className="text-sm text-gray-600">
                    🔴 <strong>Pending (10%):</strong> Tasks awaiting attention or resources.
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Aim to keep pending tasks under 15% for optimal workflow efficiency.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Real-time Activity Chart */}
        <div className="bg-white p-3  rounded-lg relative overflow-hidden group hover:shadow-lg transition-all duration-500 animate-slide-in-left animation-delay-600 flex-1">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 text-left">Real-time Activity</h3>
          <div className="transition-transform  duration-500 ease-in-out group-hover:-translate-x-full">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={animatedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 translate-x-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg text-center">Live Activity Monitor</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    📊 <strong>Real-time Data:</strong> Activity levels updated every 2 seconds
                  </p>
                  <p className="text-sm text-gray-600">
                    🎯 <strong>Performance:</strong> Monitor system activity and user engagement
                  </p>
                  <p className="text-sm text-gray-600">
                    📈 <strong>Trends:</strong> Purple area shows activity intensity over time
                  </p>
                  <p className="text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Higher peaks indicate peak usage hours
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>


    </div>
  );
};

export default MainDashCharts;