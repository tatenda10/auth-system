import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LoansToDeposits = ({ ltdData, formatCurrency }) => {
  const chartData = {
    labels: ltdData.map(item => item.month),
    datasets: [
      {
        label: 'Loans to Deposits Ratio (%)',
        data: ltdData.map(item => item.ratio),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 80,
        max: 95,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 2,
        borderSkipped: false,
      }
    },
    datasets: {
      bar: {
        barThickness: 20,
        maxBarThickness: 25,
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="text-center mb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Loans to Deposits Ratio Trend</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <p className="text-xs text-gray-600">Current Ratio</p>
              <p className="text-lg font-bold text-gray-900">89.8%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Target</p>
              <p className="text-lg font-bold text-blue-600">85.0%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Limit</p>
              <p className="text-lg font-bold text-red-600">90.0%</p>
            </div>
          </div>
        </div>
                 <div className="h-64">
           <Bar data={chartData} options={options} />
         </div>
      </div>
    </div>
  );
};

export default LoansToDeposits;
