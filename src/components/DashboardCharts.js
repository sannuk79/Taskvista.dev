import React from 'react';
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
  ResponsiveContainer
} from 'recharts';
import { Card, CardHeader, CardTitle, CardBody } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartValueAxis, ChartValueAxisItem, ChartTooltip, ChartLegend } from '@progress/kendo-react-charts';

const DashboardCharts = () => {
  // Sample data for project analysis
  const projectData = [
    { id: 1, name: 'E-commerce Platform', status: 'In Progress', progress: 75, priority: 'High', deadline: '2024-02-15', team: 8 },
    { id: 2, name: 'Mobile App Development', status: 'Planning', progress: 20, priority: 'Medium', deadline: '2024-03-20', team: 5 },
    { id: 3, name: 'Data Analytics Dashboard', status: 'Completed', progress: 100, priority: 'High', deadline: '2024-01-30', team: 6 },
    { id: 4, name: 'API Integration', status: 'In Progress', progress: 60, priority: 'Low', deadline: '2024-02-28', team: 3 }
  ];

  const chartData = [
    { category: 'Jan', value: 75, completed: 60 },
    { category: 'Feb', value: 85, completed: 70 },
    { category: 'Mar', value: 90, completed: 80 },
    { category: 'Apr', value: 95, completed: 85 },
    { category: 'May', value: 88, completed: 75 },
    { category: 'Jun', value: 92, completed: 88 }
  ];

  const pieChartData = [
    { category: 'Completed', value: 45, color: '#10B981' },
    { category: 'In Progress', value: 35, color: '#F59E0B' },
    { category: 'Planning', value: 20, color: '#3B82F6' }
  ];

  return (
    <div className="flex gap-6">
      {/* Left Panel - Project Analysis */}
      <div className="w-80 space-y-6">
        {/* Project Overview Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Project Analysis
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Projects</span>
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Active Projects</span>
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Completed</span>
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Team Members</span>
                <span className="text-2xl font-bold text-orange-600">22</span>
              </div>
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
              <Button primary className="w-full">Add New Project</Button>
              <Button className="w-full">Generate Report</Button>
              <Button className="w-full">Team Management</Button>
              <Button className="w-full">Resource Allocation</Button>
            </div>
          </CardBody>
        </Card>

        {/* Project Status Grid */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardBody>
            <Grid data={projectData} style={{ height: '300px' }}>
              <GridColumn field="name" title="Project" width="150px" />
              <GridColumn field="status" title="Status" width="100px" />
              <GridColumn field="progress" title="Progress" width="80px" />
            </Grid>
          </CardBody>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Project Progress Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Project Progress Overview</CardTitle>
          </CardHeader>
          <CardBody>
            <Chart>
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={chartData.map(item => item.category)} />
              </ChartCategoryAxis>
              <ChartValueAxis>
                <ChartValueAxisItem />
              </ChartValueAxis>
              <ChartSeries>
                <ChartSeriesItem type="column" data={chartData.map(item => item.value)} name="Total Tasks" />
                <ChartSeriesItem type="column" data={chartData.map(item => item.completed)} name="Completed" />
              </ChartSeries>
              <ChartTooltip />
              <ChartLegend />
            </Chart>
          </CardBody>
        </Card>

        {/* Project Distribution */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
          </CardHeader>
          <CardBody>
            <Chart>
              <ChartSeries>
                <ChartSeriesItem type="pie" data={pieChartData} field="value" categoryField="category" />
              </ChartSeries>
              <ChartTooltip />
              <ChartLegend />
            </Chart>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCharts;