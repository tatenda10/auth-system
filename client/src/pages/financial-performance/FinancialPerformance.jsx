import { useState } from 'react';
import { Plus, Download, Calendar, Calculator, TrendingUp, TrendingDown, BarChart3, Shield, DollarSign, Activity, Target, AlertTriangle } from 'lucide-react';

const FinancialPerformance = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('capital');

  // Capital Adequacy Data
  const capitalAdequacyData = [
    { metric: 'Total Capital Ratio', current: 15.8, previous: 15.5, target: 12.0, regulatory: 10.5, status: 'high' },
    { metric: 'Tier 1 Capital Ratio', current: 14.2, previous: 13.9, target: 10.5, regulatory: 8.5, status: 'high' },
    { metric: 'Common Equity Tier 1 (CET1)', current: 12.8, previous: 12.5, target: 9.0, regulatory: 7.0, status: 'high' },
    { metric: 'Tier 2 Capital Ratio', current: 1.6, previous: 1.6, target: 1.5, regulatory: 2.0, status: 'medium' },
    { metric: 'Capital Conservation Buffer', current: 2.5, previous: 2.5, target: 2.5, regulatory: 2.5, status: 'high' },
    { metric: 'Countercyclical Buffer', current: 0.0, previous: 0.0, target: 0.0, regulatory: 0.0, status: 'low' },
    { metric: 'SIB Buffer', current: 1.0, previous: 1.0, target: 1.0, regulatory: 1.0, status: 'high' },
    { metric: 'Leverage Ratio', current: 8.4, previous: 8.3, target: 6.0, regulatory: 3.0, status: 'high' }
  ];

  // Profitability Data
  const profitabilityData = [
    { metric: 'Return on Equity (ROE)', current: 14.2, previous: 13.8, target: 15.0, industry: 12.5, status: 'good' },
    { metric: 'Return on Assets (ROA)', current: 1.85, previous: 1.78, target: 2.0, industry: 1.5, status: 'good' },
    { metric: 'Return on Risk-Weighted Assets (RORWA)', current: 2.45, previous: 2.38, target: 2.6, industry: 2.0, status: 'good' },
    { metric: 'Net Interest Margin (NIM)', current: 2.35, previous: 2.28, target: 2.5, industry: 2.1, status: 'good' },
    { metric: 'Net Interest Spread', current: 2.15, previous: 2.08, target: 2.3, industry: 1.9, status: 'good' },
    { metric: 'Earnings Per Share (EPS)', current: 2.85, previous: 2.72, target: 3.0, industry: 2.4, status: 'good' }
  ];

  // Efficiency Data
  const efficiencyData = [
    { metric: 'Cost-to-Income Ratio', current: 58.3, previous: 60.4, target: 55.0, industry: 65.0, status: 'excellent' },
    { metric: 'Operating Efficiency Ratio', current: 62.1, previous: 64.2, target: 60.0, industry: 68.0, status: 'excellent' },
    { metric: 'Personnel Expenses Ratio', current: 28.5, previous: 29.1, target: 27.0, industry: 32.0, status: 'good' },
    { metric: 'Administrative Expenses Ratio', current: 18.2, previous: 18.8, target: 17.0, industry: 20.0, status: 'good' },
    { metric: 'Technology Expenses Ratio', current: 8.4, previous: 8.2, target: 8.0, industry: 9.0, status: 'excellent' },
    { metric: 'Revenue per Employee', current: 285000, previous: 275000, target: 300000, industry: 250000, status: 'good' }
  ];

  // Stress Testing Data
  const stressTestingData = [
    { scenario: 'Baseline Scenario', capitalRatio: 15.8, roe: 14.2, roa: 1.85, status: 'baseline' },
    { scenario: 'Adverse Scenario', capitalRatio: 12.3, roe: 8.5, roa: 1.1, status: 'adverse' },
    { scenario: 'Severely Adverse Scenario', capitalRatio: 10.8, roe: 4.2, roa: 0.6, status: 'severe' },
    { scenario: 'Interest Rate Shock (+200bps)', capitalRatio: 14.1, roe: 12.8, roa: 1.65, status: 'shock' },
    { scenario: 'Interest Rate Shock (-200bps)', capitalRatio: 15.2, roe: 15.8, roa: 2.05, status: 'shock' },
    { scenario: 'Credit Quality Deterioration', capitalRatio: 11.9, roe: 6.8, roa: 0.9, status: 'credit' }
  ];

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      case 'baseline': return 'bg-gray-100 text-gray-800';
      case 'adverse': return 'bg-orange-100 text-orange-800';
      case 'severe': return 'bg-red-100 text-red-800';
      case 'shock': return 'bg-purple-100 text-purple-800';
      case 'credit': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      case 'excellent': return 'Excellent';
      case 'good': return 'Good';
      case 'warning': return 'Warning';
      case 'critical': return 'Critical';
      case 'baseline': return 'Baseline';
      case 'adverse': return 'Adverse';
      case 'severe': return 'Severe';
      case 'shock': return 'Shock';
      case 'credit': return 'Credit';
      default: return 'Unknown';
    }
  };

  const formatPercentage = (value) => `${value}%`;
  const formatCurrency = (value) => `$${value.toLocaleString()}`;
  const formatRatio = (value) => value.toFixed(2);

  const renderCapitalAdequacy = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Capital Metric</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Current</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Previous</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Target</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Regulatory</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {capitalAdequacyData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.metric}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.current)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.previous)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.target)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.regulatory)}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProfitability = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Profitability Metric</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Current</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Previous</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Target</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Industry Avg</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {profitabilityData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.metric}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('EPS') ? formatCurrency(item.current) : formatPercentage(item.current)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('EPS') ? formatCurrency(item.previous) : formatPercentage(item.previous)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('EPS') ? formatCurrency(item.target) : formatPercentage(item.target)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('EPS') ? formatCurrency(item.industry) : formatPercentage(item.industry)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEfficiency = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Efficiency Metric</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Current</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Previous</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Target</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Industry Avg</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {efficiencyData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.metric}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('Revenue per Employee') ? formatCurrency(item.current) : formatPercentage(item.current)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('Revenue per Employee') ? formatCurrency(item.previous) : formatPercentage(item.previous)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('Revenue per Employee') ? formatCurrency(item.target) : formatPercentage(item.target)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.metric.includes('Revenue per Employee') ? formatCurrency(item.industry) : formatPercentage(item.industry)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderStressTesting = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Stress Test Scenario</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Capital Ratio</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">ROE</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">ROA</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stressTestingData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.scenario}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.capitalRatio)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.roe)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.roa)}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTabs = () => (
    <div className="border-b border-gray-200 mb-4">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'capital', name: 'Capital Adequacy', icon: Shield },
          { id: 'profitability', name: 'Profitability', icon: TrendingUp },
          { id: 'efficiency', name: 'Efficiency', icon: Target },
          { id: 'stress', name: 'Stress Testing', icon: AlertTriangle }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-xs ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-1">
                <Icon className="h-3 w-3" />
                <span>{tab.name}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'capital':
        return renderCapitalAdequacy();
      case 'profitability':
        return renderProfitability();
      case 'efficiency':
        return renderEfficiency();
      case 'stress':
        return renderStressTesting();
      default:
        return renderCapitalAdequacy();
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // Simulate calculation process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsCalculating(false);
    setShowReport(true);
  };

  const handleReset = () => {
    setShowReport(false);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Financial Performance</h2>
          <p className="text-xs text-gray-600">Comprehensive Financial Performance Analysis - As of {getReportingDate()}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3 text-gray-500" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs border border-gray-300 px-2 py-1"
            />
          </div>
          {!showReport ? (
            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className={`inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 ${
                isCalculating ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-600 mr-1"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-3 w-3 mr-1" />
                  Calculate
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              New Calculation
            </button>
          )}
          <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-3 w-3 mr-1" />
            Export
          </button>
        </div>
      </div>

      {/* Financial Performance Analysis - Only show after calculation */}
      {showReport && (
        <>
          {renderTabs()}
          {renderActiveTab()}
        </>
      )}

      {/* Empty state when no report */}
      {!showReport && (
        <div className="text-center py-12">
          <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Financial Performance Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive financial performance analysis including capital adequacy, profitability, efficiency, and stress testing results.</p>
        </div>
      )}
    </div>
  );
};

export default FinancialPerformance;
