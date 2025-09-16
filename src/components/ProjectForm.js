import React, { useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Checkbox } from '@progress/kendo-react-inputs';

const ProjectForm = ({ closePanel }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    startDate: null,
    endDate: null,
    technology: null,
    assignedEmployee: null,
    includeProgressBar: false,
    includeChart: false
  });

  const technologies = [
    { text: 'React', value: 'react' },
    { text: 'Node.js', value: 'nodejs' },
    { text: 'Python', value: 'python' },
    { text: 'Java', value: 'java' },
    { text: 'C#', value: 'csharp' },
    { text: 'PHP', value: 'php' }
  ];

  const employees = [
    { text: 'John Doe', value: 'john_doe' },
    { text: 'Jane Smith', value: 'jane_smith' },
    { text: 'Mike Johnson', value: 'mike_johnson' },
    { text: 'Sarah Wilson', value: 'sarah_wilson' },
    { text: 'David Brown', value: 'david_brown' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project data:', formData);
    // Handle project creation logic here
    closePanel();
  };

  return (
    <div className="relative p-8 w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
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
          Create New Project
        </h2>
        <p className="text-gray-600 mt-2">Set up your project details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
          <Input
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <DatePicker
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="Select start date"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <DatePicker
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="Select end date"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
          <DropDownList
            name="technology"
            data={technologies}
            value={formData.technology}
            onChange={handleChange}
            textField="text"
            dataItemKey="value"
            placeholder="Select technology"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assign Employee</label>
          <DropDownList
            name="assignedEmployee"
            data={employees}
            value={formData.assignedEmployee}
            onChange={handleChange}
            textField="text"
            dataItemKey="value"
            placeholder="Select employee"
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <Checkbox
              name="includeProgressBar"
              checked={formData.includeProgressBar}
              onChange={handleCheckboxChange}
              className="mr-3"
            />
            <label className="text-sm font-medium text-gray-700">Include Progress Bar</label>
          </div>
          <div className="flex items-center">
            <Checkbox
              name="includeChart"
              checked={formData.includeChart}
              onChange={handleCheckboxChange}
              className="mr-3"
            />
            <label className="text-sm font-medium text-gray-700">Include Chart</label>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full px-4 py-3 font-semibold"
            themeColor="primary"
            size="large"
          >
            Create Project
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;