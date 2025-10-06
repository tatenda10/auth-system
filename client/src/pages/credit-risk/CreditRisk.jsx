import { useState } from 'react';
import { Download, Calendar, Calculator, TrendingUp, TrendingDown, BarChart3, Activity, AlertTriangle, Shield, Users, Building, DollarSign } from 'lucide-react';
import NPLStressTesting from './components/NPLStressTesting';

const CreditRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('portfolio');

  // Credit Risk Portfolio Data (RBZ Standards)
  const creditPortfolioData = [
    { 
      category: 'Sovereign & Central Bank',
      totalExposure: 8500000,
      percentageOfTotal: 25.8,
      riskWeight: 0,
      rwa: 0,
      nplRate: 0.0,
      expectedLoss: 0,
      regulatoryLimit: 30.0,
      status: 'safe'
    },
    { 
      category: 'Banks & Financial Institutions',
      totalExposure: 5200000,
      percentageOfTotal: 15.8,
      riskWeight: 20,
      rwa: 1040000,
      nplRate: 0.5,
      expectedLoss: 26000,
      regulatoryLimit: 20.0,
      status: 'safe'
    },
    { 
      category: 'Corporate (Investment Grade)',
      totalExposure: 6800000,
      percentageOfTotal: 20.6,
      riskWeight: 50,
      rwa: 3400000,
      nplRate: 1.2,
      expectedLoss: 81600,
      regulatoryLimit: 25.0,
      status: 'safe'
    },
    { 
      category: 'Corporate (Non-Investment Grade)',
      totalExposure: 4200000,
      percentageOfTotal: 12.7,
      riskWeight: 100,
      rwa: 4200000,
      nplRate: 3.8,
      expectedLoss: 159600,
      regulatoryLimit: 15.0,
      status: 'warning'
    },
    { 
      category: 'SMEs (Agricultural)',
      totalExposure: 2800000,
      percentageOfTotal: 8.5,
      riskWeight: 75,
      rwa: 2100000,
      nplRate: 4.2,
      expectedLoss: 117600,
      regulatoryLimit: 10.0,
      status: 'warning'
    },
    { 
      category: 'SMEs (Other Sectors)',
      totalExposure: 2200000,
      percentageOfTotal: 6.7,
      riskWeight: 100,
      rwa: 2200000,
      nplRate: 5.1,
      expectedLoss: 112200,
      regulatoryLimit: 10.0,
      status: 'warning'
    },
    { 
      category: 'Retail (Residential Mortgages)',
      totalExposure: 1800000,
      percentageOfTotal: 5.5,
      riskWeight: 35,
      rwa: 630000,
      nplRate: 2.1,
      expectedLoss: 37800,
      regulatoryLimit: 8.0,
      status: 'safe'
    },
    { 
      category: 'Retail (Other)',
      totalExposure: 1400000,
      percentageOfTotal: 4.2,
      riskWeight: 75,
      rwa: 1050000,
      nplRate: 6.8,
      expectedLoss: 95200,
      regulatoryLimit: 8.0,
      status: 'critical'
    },
    { 
      category: 'Equity Investments',
      totalExposure: 800000,
      percentageOfTotal: 2.4,
      riskWeight: 100,
      rwa: 800000,
      nplRate: 0.0,
      expectedLoss: 0,
      regulatoryLimit: 5.0,
      status: 'safe'
    }
  ];

  // Credit Risk Metrics Data
  const creditMetricsData = {
    portfolioMetrics: {
      totalExposure: 33000000,
      totalRWA: 14420000,
      averageRiskWeight: 43.7,
      totalExpectedLoss: 631000,
      portfolioPD: 2.8,
      portfolioLGD: 38.5,
      creditRiskCapital: 1153600
    },
    eclMetrics: {
      stage1ECL: 125000,
      stage2ECL: 285000,
      stage3ECL: 221000,
      totalECL: 631000,
      eclCoverage: 1.91,
      stage1Coverage: 0.38,
      stage2Coverage: 2.15,
      stage3Coverage: 3.25,
      eclAsPercentOfExposure: 1.91,
      provisionAdequacy: 95.2
    },
    qualityMetrics: {
      nplRatio: 2.8,
      nplCoverage: 85.2,
      provisionCoverage: 92.1,
      watchListExposure: 1250000,
      pastDueRatio: 1.2,
      restructuredLoans: 680000
    },
    concentrationMetrics: {
      largestExposure: 850000,
      top5Exposures: 2850000,
      top10Exposures: 4200000,
      sectorConcentration: 45.2,
      geographicConcentration: 78.5,
      currencyConcentration: 32.1
    }
  };

  // Stress Testing Scenarios
  const stressTestScenarios = [
    {
      scenario: 'Baseline',
      pdIncrease: 0,
      lgdIncrease: 0,
      exposureChange: 0,
      capitalImpact: 0,
      rwaImpact: 0
    },
    {
      scenario: 'Mild Recession',
      pdIncrease: 25,
      lgdIncrease: 10,
      exposureChange: -5,
      capitalImpact: -185000,
      rwaImpact: 8.5
    },
    {
      scenario: 'Severe Recession',
      pdIncrease: 50,
      lgdIncrease: 20,
      exposureChange: -15,
      capitalImpact: -420000,
      rwaImpact: 18.2
    },
    {
      scenario: 'Agricultural Crisis',
      pdIncrease: 75,
      lgdIncrease: 15,
      exposureChange: -10,
      capitalImpact: -285000,
      rwaImpact: 12.8
    },
    {
      scenario: 'Currency Crisis',
      pdIncrease: 40,
      lgdIncrease: 25,
      exposureChange: -20,
      capitalImpact: -520000,
      rwaImpact: 22.5
    }
  ];

  // Early Warning Indicators
  const earlyWarningIndicators = [
    {
      indicator: 'NPL Ratio Trend',
      currentValue: 2.8,
      threshold: 3.0,
      trend: 'increasing',
      status: 'warning',
      description: 'NPL ratio approaching regulatory threshold'
    },
    {
      indicator: 'Provision Coverage',
      currentValue: 92.1,
      threshold: 90.0,
      trend: 'stable',
      status: 'safe',
      description: 'Adequate provision coverage maintained'
    },
    {
      indicator: 'Sector Concentration',
      currentValue: 45.2,
      threshold: 40.0,
      trend: 'increasing',
      status: 'warning',
      description: 'High concentration in agricultural sector'
    },
    {
      indicator: 'Largest Exposure',
      currentValue: 2.6,
      threshold: 2.0,
      trend: 'stable',
      status: 'warning',
      description: 'Largest exposure exceeds internal limit'
    },
    {
      indicator: 'Past Due Ratio',
      currentValue: 1.2,
      threshold: 1.5,
      trend: 'decreasing',
      status: 'safe',
      description: 'Past due ratio within acceptable range'
    }
  ];

  const getRowStyle = (item) => {
    if (item.type === 'header') return 'bg-gray-700 text-white font-semibold';
    if (item.type === 'calculation') return 'bg-gray-100 font-medium';
    return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getIndentStyle = (level) => {
    return level === 0 ? 'pl-2' : 'pl-6';
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const formatCurrency = (amount) => {
    if (amount === 0) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
  };

  const renderPortfolioAnalysis = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Portfolio Category</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Total Exposure</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">% of Total</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Risk Weight</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">RWA</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">NPL Rate</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Expected Loss</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {creditPortfolioData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.category}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.totalExposure)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.percentageOfTotal)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.riskWeight}%</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.rwa)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatPercentage(item.nplRate)}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.expectedLoss)}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === 'safe' ? 'bg-green-100 text-green-800' :
                      item.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status === 'safe' ? 'Safe' : item.status === 'warning' ? 'Warning' : 'Critical'}
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

  const renderCreditMetrics = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Portfolio Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Portfolio Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Total Exposure:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.portfolioMetrics.totalExposure)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Total RWA:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.portfolioMetrics.totalRWA)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Avg Risk Weight:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.portfolioMetrics.averageRiskWeight)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Portfolio PD:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.portfolioMetrics.portfolioPD)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Portfolio LGD:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.portfolioMetrics.portfolioLGD)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Credit Risk Capital:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.portfolioMetrics.creditRiskCapital)}</span>
          </div>
        </div>
      </div>

      {/* ECL Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">ECL Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Stage 1 ECL:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.eclMetrics.stage1ECL)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Stage 2 ECL:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.eclMetrics.stage2ECL)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Stage 3 ECL:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.eclMetrics.stage3ECL)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Total ECL:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.eclMetrics.totalECL)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">ECL Coverage:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.eclMetrics.eclCoverage)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Provision Adequacy:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.eclMetrics.provisionAdequacy)}</span>
          </div>
        </div>
      </div>

      {/* Quality Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Quality Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">NPL Ratio:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.qualityMetrics.nplRatio)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">NPL Coverage:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.qualityMetrics.nplCoverage)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Provision Coverage:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.qualityMetrics.provisionCoverage)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Watch List Exposure:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.qualityMetrics.watchListExposure)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Past Due Ratio:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.qualityMetrics.pastDueRatio)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Restructured Loans:</span>
            <span className="text-xs font-medium">{formatCurrency(creditMetricsData.qualityMetrics.restructuredLoans)}</span>
          </div>
        </div>
      </div>

      {/* Concentration Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Concentration Metrics</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Largest Exposure:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.largestExposure)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Top 5 Exposures:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.top5Exposures)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Top 10 Exposures:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.top10Exposures)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Sector Concentration:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.sectorConcentration)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Geographic Concentration:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.geographicConcentration)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-600">Currency Concentration:</span>
            <span className="text-xs font-medium">{formatPercentage(creditMetricsData.concentrationMetrics.currencyConcentration)}</span>
          </div>
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
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Stress Scenario</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">PD Increase</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">LGD Increase</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Exposure Change</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Capital Impact</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">RWA Impact</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stressTestScenarios.map((scenario, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{scenario.scenario}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{scenario.pdIncrease}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{scenario.lgdIncrease}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{scenario.exposureChange}%</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(scenario.capitalImpact)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{scenario.rwaImpact}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEarlyWarning = () => (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Early Warning Indicator</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Current Value</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Threshold</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Trend</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {earlyWarningIndicators.map((indicator, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{indicator.indicator}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {indicator.indicator.includes('Ratio') || indicator.indicator.includes('Coverage') || indicator.indicator.includes('Concentration') || indicator.indicator.includes('Exposure') 
                      ? formatPercentage(indicator.currentValue) 
                      : formatCurrency(indicator.currentValue)}
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {indicator.indicator.includes('Ratio') || indicator.indicator.includes('Coverage') || indicator.indicator.includes('Concentration') || indicator.indicator.includes('Exposure')
                      ? formatPercentage(indicator.threshold)
                      : formatCurrency(indicator.threshold)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                      indicator.trend === 'increasing' ? 'bg-red-100 text-red-800' :
                      indicator.trend === 'decreasing' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {indicator.trend === 'increasing' ? '↗' : indicator.trend === 'decreasing' ? '↘' : '→'} {indicator.trend}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      indicator.status === 'safe' ? 'bg-green-100 text-green-800' :
                      indicator.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {indicator.status === 'safe' ? 'Safe' : indicator.status === 'warning' ? 'Warning' : 'Critical'}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-600">{indicator.description}</td>
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
          { id: 'portfolio', name: 'Portfolio Analysis', icon: BarChart3 },
          { id: 'metrics', name: 'Credit Metrics', icon: TrendingUp },
          { id: 'stress', name: 'Stress Testing', icon: AlertTriangle },
          { id: 'npl-stress', name: 'NPL Stress Testing', icon: Activity },
          { id: 'warning', name: 'Early Warning', icon: Shield }
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
      case 'metrics':
        return renderCreditMetrics();
      case 'stress':
        return renderStressTesting();
      case 'npl-stress':
        return <NPLStressTesting />;
      case 'warning':
        return renderEarlyWarning();
      default:
        return renderPortfolioAnalysis();
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

  const handleExport = () => {
    // Create CSV data for export
    const csvData = [];
    
    // Add header
    csvData.push(['Credit Risk Report', 'Generated:', new Date().toLocaleDateString()]);
    csvData.push([]);
    
    // Portfolio Analysis data
    csvData.push(['Portfolio Analysis']);
    csvData.push(['Category', 'Total Exposure', '% of Total', 'Risk Weight', 'RWA', 'NPL Rate', 'Expected Loss', 'Status']);
    creditPortfolioData.forEach(item => {
      csvData.push([
        item.category,
        formatCurrency(item.totalExposure),
        formatPercentage(item.percentageOfTotal),
        `${item.riskWeight}%`,
        formatCurrency(item.rwa),
        formatPercentage(item.nplRate),
        formatCurrency(item.expectedLoss),
        item.status
      ]);
    });
    
    csvData.push([]);
    
    // Credit Metrics data
    csvData.push(['Credit Metrics']);
    csvData.push(['Metric', 'Value']);
    Object.entries(creditMetricsData.portfolioMetrics).forEach(([key, value]) => {
      csvData.push([key, typeof value === 'number' && key.includes('Weight') || key.includes('PD') || key.includes('LGD') ? formatPercentage(value) : formatCurrency(value)]);
    });
    
    Object.entries(creditMetricsData.eclMetrics).forEach(([key, value]) => {
      csvData.push([key, typeof value === 'number' && key.includes('Coverage') || key.includes('Adequacy') || key.includes('Percent') ? formatPercentage(value) : formatCurrency(value)]);
    });
    
    // Convert to CSV string
    const csvString = csvData.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    // Create and download file
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `credit-risk-report-${selectedDate}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Credit Risk</h2>
          <p className="text-xs text-gray-600">CREDIT RISK - RBZ Standards Compliance - As of {getReportingDate()}</p>
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
          {showReport && (
            <button 
              onClick={handleExport}
              className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download className="h-3 w-3 mr-1" />
              Export
            </button>
          )}
        </div>
      </div>

      {/* Credit Risk Analysis - Only show after calculation */}
      {showReport && (
        <>
          {renderTabs()}
          {renderActiveTab()}
        </>
      )}

      {/* Empty state when no report */}
      {!showReport && (
        <div className="text-center py-12">
          <Shield className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Credit Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive Credit Risk analysis including portfolio analysis, stress testing, and early warning indicators in compliance with RBZ standards.</p>
        </div>
      )}
    </div>
  );
};

export default CreditRisk;
