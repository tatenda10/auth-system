import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');

  const allMetrics = [
    {
      id: 1,
      title: 'Total Assets',
      value: '$850.2M',
      change: '+8.5%',
      changeType: 'increase'
    },
    {
      id: 2,
      title: 'Total Deposits',
      value: '$720.8M',
      change: '+12.3%',
      changeType: 'increase'
    },
    {
      id: 3,
      title: 'Total Loans',
      value: '$580.4M',
      change: '+6.8%',
      changeType: 'increase'
    },
    {
      id: 4,
      title: 'Regulatory Capital',
      value: '$89.7M',
      change: '+4.2%',
      changeType: 'increase'
    },
    {
      id: 5,
      title: 'LCR Ratio',
      value: '118.5%',
      change: '+3.2%',
      changeType: 'increase'
    },
    {
      id: 6,
      title: 'NSFR Ratio',
      value: '112.8%',
      change: '+2.1%',
      changeType: 'increase'
    },
    {
      id: 7,
      title: 'CAR Ratio',
      value: '15.2%',
      change: '+0.8%',
      changeType: 'increase'
    },
    {
      id: 8,
      title: 'ROE',
      value: '18.4%',
      change: '+1.2%',
      changeType: 'increase'
    },
    {
      id: 9,
      title: 'Net Interest Margin',
      value: '4.85%',
      change: '+0.35%',
      changeType: 'increase'
    },
    {
      id: 10,
      title: 'Return on Assets',
      value: '2.15%',
      change: '+0.18%',
      changeType: 'increase'
    },
    {
      id: 11,
      title: 'Loan-to-Deposit Ratio',
      value: '80.5%',
      change: '-2.1%',
      changeType: 'decrease'
    },
    {
      id: 12,
      title: 'Maturity Gap',
      value: '$15.8M',
      change: '+$2.3M',
      changeType: 'increase'
    },
    {
      id: 13,
      title: 'Portfolio Quality Score',
      value: '82.7%',
      change: '+0.8%',
      changeType: 'increase'
    },
    {
      id: 14,
      title: 'Average Risk Weight',
      value: '68.2%',
      change: '-1.2%',
      changeType: 'decrease'
    },
    {
      id: 15,
      title: 'Provisioning Coverage',
      value: '142.3%',
      change: '+3.5%',
      changeType: 'increase'
    },
    {
      id: 16,
      title: 'NPL Ratio',
      value: '4.1%',
      change: '-0.4%',
      changeType: 'decrease'
    }
  ];

  // ROE monthly data for the bar chart
  const roeData = [
    { month: 'Jan', value: 16.8, target: 18.0 },
    { month: 'Feb', value: 17.2, target: 18.0 },
    { month: 'Mar', value: 17.8, target: 18.0 },
    { month: 'Apr', value: 17.5, target: 18.0 },
    { month: 'May', value: 18.1, target: 18.0 },
    { month: 'Jun', value: 18.6, target: 18.0 },
    { month: 'Jul', value: 18.3, target: 18.0 },
    { month: 'Aug', value: 18.7, target: 18.0 },
    { month: 'Sep', value: 18.2, target: 18.0 },
    { month: 'Oct', value: 18.5, target: 18.0 },
    { month: 'Nov', value: 18.8, target: 18.0 },
    { month: 'Dec', value: 18.4, target: 18.0 }
  ];

  // CAR monthly data for the line graph
  const carData = [
    { month: 'Jan', value: 14.8, minimum: 12.0, target: 16.0 },
    { month: 'Feb', value: 15.1, minimum: 12.0, target: 16.0 },
    { month: 'Mar', value: 15.4, minimum: 12.0, target: 16.0 },
    { month: 'Apr', value: 15.2, minimum: 12.0, target: 16.0 },
    { month: 'May', value: 15.7, minimum: 12.0, target: 16.0 },
    { month: 'Jun', value: 15.9, minimum: 12.0, target: 16.0 },
    { month: 'Jul', value: 15.6, minimum: 12.0, target: 16.0 },
    { month: 'Aug', value: 15.8, minimum: 12.0, target: 16.0 },
    { month: 'Sep', value: 16.0, minimum: 12.0, target: 16.0 },
    { month: 'Oct', value: 15.7, minimum: 12.0, target: 16.0 },
    { month: 'Nov', value: 16.1, minimum: 12.0, target: 16.0 },
    { month: 'Dec', value: 15.2, minimum: 12.0, target: 16.0 }
  ];

  // Capital Demand monthly data - Zimbabwean bank context
  const capitalDemandData = [
    { month: 'Jan', projected: 68.5, actual: 66.2 },
    { month: 'Feb', projected: 70.8, actual: 69.1 },
    { month: 'Mar', projected: 73.2, actual: 71.5 },
    { month: 'Apr', projected: 75.6, actual: 73.8 },
    { month: 'May', projected: 78.1, actual: 76.3 },
    { month: 'Jun', projected: 80.5, actual: 78.7 },
    { month: 'Jul', projected: 82.9, actual: 81.2 },
    { month: 'Aug', projected: 85.4, actual: 83.6 },
    { month: 'Sep', projected: 87.8, actual: 86.1 },
    { month: 'Oct', projected: 90.2, actual: 88.5 },
    { month: 'Nov', projected: 92.7, actual: 91.0 },
    { month: 'Dec', projected: 95.1, actual: 93.4 }
  ];

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const renderROEChart = () => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">ROE Trend Analysis</h3>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-indigo-600 rounded"></div>
              <span className="text-gray-600">Actual</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-gray-600">Target</span>
            </div>
          </div>
        </div>
        
        <div className="flex h-64">
          {/* Y-axis with values */}
          <div className="flex flex-col justify-between text-xs text-gray-500 mr-2 w-12">
            <span>15%</span>
            <span>14%</span>
            <span>13%</span>
            <span>12%</span>
            <span>11%</span>
            <span>10%</span>
          </div>
          
          {/* Chart area */}
          <div className="flex-1 flex items-end justify-between space-x-2 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-t border-gray-100"></div>
              ))}
            </div>
            
            {/* Bars */}
            {roeData.map((item, index) => {
              // Use fixed pixel heights for clear visibility
              const valueHeight = Math.max((item.value / 15) * 200, 30);
              const targetHeight = Math.max((item.target / 15) * 200, 30);
              
              return (
                <div key={index} className="flex items-end space-x-1 relative z-10">
                  {/* Actual ROE bar */}
                  <div className="w-4 bg-indigo-600 rounded-t" style={{ height: `${valueHeight}px` }}></div>
                  
                  {/* Target ROE bar */}
                  <div className="w-4 bg-emerald-500 rounded-t" style={{ height: `${targetHeight}px` }}></div>
                  
                  {/* Month label */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                    {item.month}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">Monthly ROE Performance vs Target (18.0%)</p>
        </div>
      </div>
    );
  };

  const renderCARChart = () => {
    const chartData = {
      labels: carData.map(item => item.month),
      datasets: [
        {
          label: 'Actual CAR',
          data: carData.map(item => item.value),
          borderColor: '#6366F1',
          backgroundColor: '#6366F1',
          borderWidth: 3,
          pointRadius: 4,
          pointBackgroundColor: '#6366F1',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          tension: 0.1
        },
        {
          label: 'Target CAR',
          data: carData.map(item => item.target),
          borderColor: '#10B981',
          backgroundColor: '#10B981',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: '#10B981',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1,
          tension: 0.1
        },
        {
          label: 'Minimum CAR',
          data: carData.map(() => 12.0),
          borderColor: '#F59E0B',
          backgroundColor: '#F59E0B',
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [5, 5],
          tension: 0
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 1
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 12,
          max: 18,
          ticks: {
            stepSize: 1,
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: '#f3f4f6'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Capital Adequacy Ratio (CAR) By Month</h3>
        </div>
        
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">CAR by month viewing capital available (RBZ Minimum: 12.0%)</p>
        </div>
      </div>
    );
  };

  const renderCapitalDemandChart = () => {
    const chartData = {
      labels: capitalDemandData.map(item => item.month),
      datasets: [
        {
          label: 'Projected Capital Demand',
          data: capitalDemandData.map(item => item.projected),
          backgroundColor: 'rgba(99, 102, 241, 0.8)',
          borderColor: '#6366F1',
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false
        },
        {
          label: 'Actual Capital Demand',
          data: capitalDemandData.map(item => item.actual),
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: '#10B981',
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + context.parsed.y + 'M';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 60,
          max: 100,
          ticks: {
            stepSize: 10,
            callback: function(value) {
              return '$' + value + 'M';
            }
          },
          grid: {
            color: '#f3f4f6'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Capital Demand Per Month</h3>
          <div className="text-xs text-gray-500">Projected or actual capital required by an institution</div>
        </div>
        
        <div className="h-64">
          <Bar data={chartData} options={options} />
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">Monthly capital demand trends and projections</p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Dashboard</h2>
          <p className="text-xs text-gray-600">Q-SIGHT ALM System Overview - As of {getReportingDate()}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs border border-gray-300 px-2 py-1"
            />
          </div>
        </div>
      </div>

      {/* All Metric Cards in Two Rows */}
      <div className="grid grid-cols-6 gap-3">
        {allMetrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded border border-gray-200 p-3 text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {metric.changeType === 'increase' ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-600" />
              )}
              <span className={`text-xs font-medium ${
                metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-xs font-medium text-gray-500 mb-1">{metric.title}</h3>
            <p className="text-sm font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* ROE Bar Chart */}
      {renderROEChart()}

      {/* CAR Line Graph */}
      {renderCARChart()}

      {/* Capital Demand Per Month Line Graph */}
      {renderCapitalDemandChart()}
    </div>
  );
};

export default Dashboard;
