import { useState } from 'react';
import { Plus, Download, Calendar, Calculator, TrendingUp, TrendingDown, BarChart3, Clock, DollarSign, Activity } from 'lucide-react';

const InterestRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('irr');
  const [customBps, setCustomBps] = useState(100); // Custom bps input
  const [showCustomBps, setShowCustomBps] = useState(false);

  // Realistic Duration Gap Analysis Data (in thousands)
  const durationData = [
    { category: 'Assets', items: [
      { name: 'Cash and equivalents', amount: 45000, duration: 0.0, weightedDuration: 0 },
      { name: 'Investment securities', amount: 185000, duration: 2.8, weightedDuration: 518000 },
      { name: 'Loans and advances', amount: 335000, duration: 3.2, weightedDuration: 1072000 },
      { name: 'Other assets', amount: 110000, duration: 1.5, weightedDuration: 165000 }
    ]},
    { category: 'Liabilities', items: [
      { name: 'Customer deposits', amount: 225000, duration: 0.8, weightedDuration: 180000 },
      { name: 'Long-term borrowings', amount: 140000, duration: 4.5, weightedDuration: 630000 },
      { name: 'Bonds outstanding', amount: 74000, duration: 6.2, weightedDuration: 458800 },
      { name: 'Other liabilities', amount: 86000, duration: 2.1, weightedDuration: 180600 }
    ]}
  ];

  // Enhanced Interest Income Sensitivity Data (realistic NII changes)
  const enhancedSensitivityData = [
    { rateChange: '-2.00%', netInterestIncome: 12500, netInterestMargin: 2.85, netInterestIncomeChange: 3200, marginChange: 0.73 },
    { rateChange: '-1.50%', netInterestIncome: 11800, netInterestMargin: 2.69, netInterestIncomeChange: 2500, marginChange: 0.57 },
    { rateChange: '-1.00%', netInterestIncome: 11200, netInterestMargin: 2.55, netInterestIncomeChange: 1900, marginChange: 0.43 },
    { rateChange: '-0.50%', netInterestIncome: 10700, netInterestMargin: 2.44, netInterestIncomeChange: 1400, marginChange: 0.32 },
    { rateChange: '0.00%', netInterestIncome: 10300, netInterestMargin: 2.35, netInterestIncomeChange: 0, marginChange: 0.00 },
    { rateChange: '+0.50%', netInterestIncome: 9900, netInterestMargin: 2.26, netInterestIncomeChange: -400, marginChange: -0.09 },
    { rateChange: '+1.00%', netInterestIncome: 9600, netInterestMargin: 2.19, netInterestIncomeChange: -700, marginChange: -0.16 },
    { rateChange: '+1.50%', netInterestIncome: 9300, netInterestMargin: 2.12, netInterestIncomeChange: -1000, marginChange: -0.23 },
    { rateChange: '+2.00%', netInterestIncome: 9000, netInterestMargin: 2.05, netInterestIncomeChange: -1300, marginChange: -0.30 }
  ];

  // Economic Capital of Equity Sensitivity Data (realistic equity changes)
  const economicCapitalData = [
    { rateChange: '-2.00%', equityValue: 185000, capitalRatio: 12.8, rwa: 1445000, capitalAdequacy: 12.8, economicCapital: 23125 },
    { rateChange: '-1.50%', equityValue: 178000, capitalRatio: 12.4, rwa: 1435000, capitalAdequacy: 12.4, economicCapital: 22250 },
    { rateChange: '-1.00%', equityValue: 172000, capitalRatio: 12.1, rwa: 1420000, capitalAdequacy: 12.1, economicCapital: 21500 },
    { rateChange: '-0.50%', equityValue: 167000, capitalRatio: 11.8, rwa: 1415000, capitalAdequacy: 11.8, economicCapital: 20875 },
    { rateChange: '0.00%', equityValue: 162000, capitalRatio: 11.5, rwa: 1410000, capitalAdequacy: 11.5, economicCapital: 20250 },
    { rateChange: '+0.50%', equityValue: 157000, capitalRatio: 11.2, rwa: 1400000, capitalAdequacy: 11.2, economicCapital: 19625 },
    { rateChange: '+1.00%', equityValue: 152000, capitalRatio: 10.9, rwa: 1395000, capitalAdequacy: 10.9, economicCapital: 19000 },
    { rateChange: '+1.50%', equityValue: 147000, capitalRatio: 10.6, rwa: 1390000, capitalAdequacy: 10.6, economicCapital: 18375 },
    { rateChange: '+2.00%', equityValue: 142000, capitalRatio: 10.3, rwa: 1380000, capitalAdequacy: 10.3, economicCapital: 17750 }
  ];

  // Realistic Repricing Gap Summary (in thousands)
  const repricingGapSummary = [
    { bucket: '0-3 Months', assets: 85000, liabilities: 63000, gap: 22000, cumulativeGap: 22000, gapRatio: 0.35 },
    { bucket: '3-6 Months', assets: 67000, liabilities: 58000, gap: 9000, cumulativeGap: 31000, gapRatio: 0.16 },
    { bucket: '6-9 Months', assets: 58000, liabilities: 52000, gap: 6000, cumulativeGap: 37000, gapRatio: 0.12 },
    { bucket: '9-12 Months', assets: 48000, liabilities: 45000, gap: 3000, cumulativeGap: 40000, gapRatio: 0.07 },
    { bucket: '1-2 Years', assets: 39000, liabilities: 38000, gap: 1000, cumulativeGap: 41000, gapRatio: 0.03 },
    { bucket: '2-5 Years', assets: 32000, liabilities: 35000, gap: -3000, cumulativeGap: 38000, gapRatio: -0.08 },
    { bucket: '5+ Years', assets: 28000, liabilities: 32000, gap: -4000, cumulativeGap: 34000, gapRatio: -0.12 }
  ];

  const interestRiskStructure = [
    // MAIN INSTRUMENTS SECTION
    { id: 1, category: 'Customer loans', level: 0, type: 'item' },
    { id: 2, category: 'Investments in securities', level: 0, type: 'item' },
    { id: 3, category: 'Other assets', level: 0, type: 'item' },
    { id: 4, category: 'Customer liabilities', level: 0, type: 'item' },
    { id: 5, category: 'Long-term borrowings', level: 0, type: 'item' },
    { id: 6, category: 'Bonds outstanding', level: 0, type: 'item' },
    { id: 7, category: 'Other liabilities', level: 0, type: 'item' },
    { id: 8, category: 'Total equity', level: 0, type: 'item' },
    { id: 9, category: 'Interest Rate Gap', level: 0, type: 'gap', isGap: true }
  ];

  const timeBuckets = [
    { key: 'floating', label: 'Floating Rate Instrument' },
    { key: '0-3months', label: '0 - 3 Months' },
    { key: '3-6months', label: '3 - 6 Months' },
    { key: '6-9months', label: '6 - 9 Months' },
    { key: '12months1', label: '12 Months' },
    { key: '12months2', label: '12 Months' },
    { key: 'total', label: 'TOTAL IRR GAP' },
    { key: 'zero', label: 'Zero Rate Instrument' },
    { key: 'balance', label: 'Balance Sheet Total' }
  ];

  // Realistic IRR data based on banking industry standards
  const irrData = {
    'Customer loans': {
      floating: 85.5, // % of floating rate loans
      '0-3months': 45000, // $ thousands
      '3-6months': 35000,
      '6-9months': 30000,
      '12months1': 25000,
      '12months2': 20000,
      total: 335000,
      zero: 125000,
      balance: 335000
    },
    'Investments in securities': {
      floating: 72.3,
      '0-3months': 25000,
      '3-6months': 20000,
      '6-9months': 18000,
      '12months1': 15000,
      '12months2': 12000,
      total: 185000,
      zero: 85000,
      balance: 185000
    },
    'Other assets': {
      floating: 45.8,
      '0-3months': 15000,
      '3-6months': 12000,
      '6-9months': 10000,
      '12months1': 8000,
      '12months2': 7000,
      total: 110000,
      zero: 45000,
      balance: 110000
    },
    'Customer liabilities': {
      floating: 78.9,
      '0-3months': 35000,
      '3-6months': 28000,
      '6-9months': 25000,
      '12months1': 20000,
      '12months2': 17000,
      total: 225000,
      zero: 95000,
      balance: 225000
    },
    'Long-term borrowings': {
      floating: 62.1,
      '0-3months': 20000,
      '3-6months': 15000,
      '6-9months': 12000,
      '12months1': 10000,
      '12months2': 8000,
      total: 140000,
      zero: 75000,
      balance: 140000
    },
    'Bonds outstanding': {
      floating: 38.7,
      '0-3months': 10000,
      '3-6months': 8000,
      '6-9months': 7000,
      '12months1': 5000,
      '12months2': 4000,
      total: 74000,
      zero: 0, // Bonds are typically fixed rate
      balance: 74000
    },
    'Other liabilities': {
      floating: 55.4,
      '0-3months': 12000,
      '3-6months': 10000,
      '6-9months': 8000,
      '12months1': 6000,
      '12months2': 5000,
      total: 86000,
      zero: 35000,
      balance: 86000
    },
    'Total equity': {
      floating: 91.2,
      '0-3months': 18000,
      '3-6months': 14000,
      '6-9months': 12000,
      '12months1': 10000,
      '12months2': 8000,
      total: 162000,
      zero: 80000,
      balance: 162000
    }
  };

  // Calculate gap ratios based on realistic data
  const calculateGapRatio = (timeBucket) => {
    const totalAssets = irrData['Customer loans'][timeBucket] + 
                       irrData['Investments in securities'][timeBucket] + 
                       irrData['Other assets'][timeBucket];
    const totalLiabilities = irrData['Customer liabilities'][timeBucket] + 
                            irrData['Long-term borrowings'][timeBucket] + 
                            irrData['Bonds outstanding'][timeBucket] + 
                            irrData['Other liabilities'][timeBucket];
    
    if (totalLiabilities === 0) return 0;
    return (totalAssets - totalLiabilities) / totalLiabilities;
  };

  // Calculate custom bps impact
  const calculateCustomBpsImpact = (bps) => {
    const rateChange = bps / 100; // Convert bps to percentage
    
    // Base NII values
    const baseNII = 10300;
    const baseMargin = 2.35;
    
    // Calculate impact
    const niiChange = rateChange * 850; // $850k change per 100 bps
    const marginChange = rateChange * 0.15; // 15 bps margin change per 100 bps rate change
    
    // Base Economic Capital values
    const baseEquity = 162000;
    const baseCapitalRatio = 11.5;
    const baseRWA = 1410000;
    const baseEconomicCapital = 20250;
    
    // Calculate economic impact
    const equityChange = rateChange * -2500; // $2.5M change per 100 bps
    const capitalRatioChange = rateChange * -0.2; // 20 bps change per 100 bps
    const rwaChange = rateChange * -5000; // $5M change per 100 bps
    
    return {
      nii: {
        netInterestIncome: baseNII + niiChange,
        netInterestMargin: baseMargin + marginChange,
        netInterestIncomeChange: niiChange,
        marginChange: marginChange
      },
      economic: {
        equityValue: baseEquity + equityChange,
        capitalRatio: baseCapitalRatio + capitalRatioChange,
        rwa: baseRWA + rwaChange,
        economicCapital: (baseEquity + equityChange) * 0.125,
        economicCapitalChange: ((baseEquity + equityChange) * 0.125) - baseEconomicCapital
      },
      sensitivity: {
        sensitivityImpact: baseNII + niiChange, // Actual NII value
        regulatoryCapital: (baseEquity + equityChange) * 0.125, // Actual Economic Capital value
        rcPercent: ((((baseEquity + equityChange) * 0.125) - baseEconomicCapital) / baseEconomicCapital) * 100
      }
    };
  };

  const getRowStyle = (item) => {
    if (item.isGap) return 'border-b-2 border-gray-400 bg-gray-50';
    return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const formatCurrency = (amount) => {
    if (amount === 0) return '$0';
    return `$${amount.toLocaleString()}`;
  };

  const renderCellValue = (item, timeBucket) => {
    if (timeBucket === 'floating') {
      const value = irrData[item.category]?.[timeBucket] || 0;
      return <span className="text-xs text-gray-900">{value.toFixed(1)}%</span>;
    }

    if (item.isGap) {
      if (timeBucket === 'floating') {
        return <span className="text-xs text-gray-400">-</span>;
      }
      const ratio = calculateGapRatio(timeBucket);
      return <span className="text-xs text-gray-900 font-semibold">{ratio.toFixed(2)}</span>;
    }

    const value = irrData[item.category]?.[timeBucket] || 0;
    return <span className="text-xs text-gray-900">{formatCurrency(value)}</span>;
  };

  const renderDurationGapAnalysis = () => (
    <div className="space-y-4">
      {durationData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">{section.category}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Item</th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Amount</th>
                  <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Duration (Years)</th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Weighted Duration</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {section.items.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-2 py-1 text-xs text-gray-900">{item.name}</td>
                    <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.amount)}</td>
                    <td className="px-2 py-1 text-center text-xs text-gray-900">{item.duration.toFixed(1)}</td>
                    <td className="px-2 py-1 text-right text-xs font-medium text-gray-900">{formatCurrency(item.weightedDuration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      {/* Duration Gap Summary */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Duration Gap Summary</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Total Assets Duration:</strong> 2.45 years</p>
              <p><strong>Total Liabilities Duration:</strong> 1.82 years</p>
            </div>
            <div>
              <p><strong>Duration Gap:</strong> 0.63 years</p>
              <p><strong>Duration Gap Ratio:</strong> 0.35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnhancedInterestIncomeSensitivity = () => (
    <div className="space-y-4">
      {/* Custom BPS Controls */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Interactive Rate Change Analysis</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowCustomBps(!showCustomBps)}
              className="text-xs bg-green-600 text-white px-2 py-1 hover:bg-green-700"
            >
              {showCustomBps ? 'Hide' : 'Custom BPS'}
            </button>
          </div>
        </div>
        
        {/* Custom BPS Input */}
        {showCustomBps && (
          <div className="mb-4 p-3 bg-gray-50 border border-gray-300 rounded">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-700">Custom Rate Change:</label>
                <input
                  type="number"
                  value={customBps}
                  onChange={(e) => setCustomBps(parseInt(e.target.value) || 0)}
                  className="text-xs border border-gray-300 px-2 py-1 w-20"
                  placeholder="100"
                />
                <span className="text-xs text-gray-600">bps</span>
              </div>
              <div className="text-xs text-gray-600">
                = {customBps / 100}% rate change
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Rate Change</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Net Interest Income</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Net Interest Margin (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">NII Change</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Margin Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enhancedSensitivityData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-center text-xs font-medium text-gray-900">{item.rateChange}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatCurrency(item.netInterestIncome)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.netInterestMargin}%</td>
                  <td className={`px-2 py-1 text-center text-xs font-medium ${item.netInterestIncomeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.netInterestIncomeChange >= 0 ? '+' : ''}{formatCurrency(item.netInterestIncomeChange)}
                  </td>
                  <td className={`px-2 py-1 text-center text-xs font-medium ${item.marginChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.marginChange >= 0 ? '+' : ''}{item.marginChange.toFixed(2)}%
                  </td>
                </tr>
              ))}
              
              {/* Custom BPS Row */}
              {showCustomBps && (() => {
                const customImpact = calculateCustomBpsImpact(customBps);
                return (
                  <tr className="bg-green-50 border-2 border-green-300">
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{customBps / 100}%</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{formatCurrency(customImpact.nii.netInterestIncome)}</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{customImpact.nii.netInterestMargin.toFixed(2)}%</td>
                    <td className={`px-2 py-1 text-center text-xs font-bold ${customImpact.nii.netInterestIncomeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {customImpact.nii.netInterestIncomeChange >= 0 ? '+' : ''}{formatCurrency(customImpact.nii.netInterestIncomeChange)}
                    </td>
                    <td className={`px-2 py-1 text-center text-xs font-bold ${customImpact.nii.marginChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {customImpact.nii.marginChange >= 0 ? '+' : ''}{customImpact.nii.marginChange.toFixed(2)}%
                    </td>
                  </tr>
                );
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderEconomicCapitalSensitivity = () => (
    <div className="space-y-4">
      {/* Custom BPS Controls */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Interactive Economic Capital Analysis</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowCustomBps(!showCustomBps)}
              className="text-xs bg-green-600 text-white px-2 py-1 hover:bg-green-700"
            >
              {showCustomBps ? 'Hide' : 'Custom BPS'}
            </button>
          </div>
        </div>
        
        {/* Custom BPS Input */}
        {showCustomBps && (
          <div className="mb-4 p-3 bg-gray-50 border border-gray-300 rounded">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-700">Custom Rate Change:</label>
                <input
                  type="number"
                  value={customBps}
                  onChange={(e) => setCustomBps(parseInt(e.target.value) || 0)}
                  className="text-xs border border-gray-300 px-2 py-1 w-20"
                  placeholder="100"
                />
                <span className="text-xs text-gray-600">bps</span>
              </div>
              <div className="text-xs text-gray-600">
                = {customBps / 100}% rate change
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Rate Change</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Equity Value</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Capital Ratio (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">RWA</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Economic Capital</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {economicCapitalData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-center text-xs font-medium text-gray-900">{item.rateChange}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatCurrency(item.equityValue)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.capitalRatio}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{formatCurrency(item.rwa)}</td>
                  <td className="px-2 py-1 text-center text-xs font-medium text-gray-900">{formatCurrency(item.economicCapital)}</td>
                </tr>
              ))}
              
              {/* Custom BPS Row */}
              {showCustomBps && (() => {
                const customImpact = calculateCustomBpsImpact(customBps);
                return (
                  <tr className="bg-green-50 border-2 border-green-300">
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{customBps / 100}%</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{formatCurrency(customImpact.economic.equityValue)}</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{customImpact.economic.capitalRatio.toFixed(2)}%</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{formatCurrency(customImpact.economic.rwa)}</td>
                    <td className="px-2 py-1 text-center text-xs font-bold text-green-800">{formatCurrency(customImpact.economic.economicCapital)}</td>
                  </tr>
                );
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRepricingGapSummary = () => (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Time Bucket</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Assets</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Liabilities</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Gap</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Cumulative Gap</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Gap Ratio</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {repricingGapSummary.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.bucket}</td>
                <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.assets)}</td>
                <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.liabilities)}</td>
                <td className={`px-2 py-1 text-right text-xs font-medium ${item.gap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(item.gap)}
                </td>
                <td className={`px-2 py-1 text-right text-xs font-medium ${item.cumulativeGap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(item.cumulativeGap)}
                </td>
                <td className="px-2 py-1 text-center text-xs text-gray-900">{item.gapRatio.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTabs = () => (
    <div className="border-b border-gray-200 mb-4">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'irr', name: 'IRR Gap', icon: BarChart3 },
          { id: 'duration', name: 'Duration Gap', icon: Clock },
          { id: 'sensitivity', name: 'Income Sensitivity', icon: TrendingUp },
          { id: 'economic', name: 'Economic Capital', icon: DollarSign },
          { id: 'summary', name: 'Gap Summary', icon: Activity }
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
      case 'duration':
        return renderDurationGapAnalysis();
      case 'sensitivity':
        return renderEnhancedInterestIncomeSensitivity();
      case 'economic':
        return renderEconomicCapitalSensitivity();
      case 'summary':
        return renderRepricingGapSummary();
      default:
        return (
          <>
            {/* IRR Gap Table */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider w-48">
                        Item
                      </th>
                      {timeBuckets.map((bucket) => (
                        <th key={bucket.key} className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-24">
                          {bucket.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {interestRiskStructure.map((item) => (
                      <tr key={item.id} className={getRowStyle(item)}>
                        <td className="px-2 py-1">
                          <div className="text-xs font-medium text-gray-900">
                            {item.category}
                          </div>
                        </td>
                        {timeBuckets.map((bucket) => (
                          <td key={bucket.key} className="px-2 py-1 text-center">
                            {renderCellValue(item, bucket.key)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider w-48">
                        Summary
                      </th>
                      {timeBuckets.map((bucket) => (
                        <th key={bucket.key} className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-24">
                          {bucket.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="bg-gray-50">
                      <td className="px-2 py-1">
                        <div className="text-xs font-medium text-gray-900">
                          Total Assets per Balance Sheet
                        </div>
                      </td>
                      {timeBuckets.map((bucket) => (
                        <td key={bucket.key} className="px-2 py-1 text-center">
                          {bucket.key === 'floating' ? (
                            <span className="text-xs text-gray-900">330,000</span>
                          ) : bucket.key === '0-3months' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(85000)}</span>
                          ) : bucket.key === '3-6months' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(67000)}</span>
                          ) : bucket.key === '6-9months' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(58000)}</span>
                          ) : bucket.key === '12months1' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(48000)}</span>
                          ) : bucket.key === '12months2' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(39000)}</span>
                          ) : bucket.key === 'total' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(630000)}</span>
                          ) : bucket.key === 'zero' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(475000)}</span>
                          ) : bucket.key === 'balance' ? (
                            <span className="text-xs text-gray-900">{formatCurrency(475000)}</span>
                          ) : (
                            <span className="text-xs text-gray-400">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                    <tr className="bg-gray-600">
                      <td className="px-2 py-1">
                        <div className="text-xs font-bold text-white">
                          Gap Ratio (%)
                        </div>
                      </td>
                      {timeBuckets.map((bucket) => (
                        <td key={bucket.key} className="px-2 py-1 text-center">
                          {bucket.key === 'floating' ? (
                            <span className="text-xs text-white">85.5%</span>
                          ) : bucket.key === '0-3months' ? (
                            <span className="text-xs text-white">72.3%</span>
                          ) : bucket.key === '3-6months' ? (
                            <span className="text-xs text-white">68.9%</span>
                          ) : bucket.key === '6-9months' ? (
                            <span className="text-xs text-white">65.4%</span>
                          ) : bucket.key === '12months1' ? (
                            <span className="text-xs text-white">61.8%</span>
                          ) : bucket.key === '12months2' ? (
                            <span className="text-xs text-white">58.2%</span>
                          ) : bucket.key === 'total' ? (
                            <span className="text-xs text-white">78.6%</span>
                          ) : bucket.key === 'zero' ? (
                            <span className="text-xs text-white">82.1%</span>
                          ) : bucket.key === 'balance' ? (
                            <span className="text-xs text-white">79.4%</span>
                          ) : (
                            <span className="text-xs text-white">75.0%</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interactive Sensitivity Analysis Section */}
            <div className="bg-white border border-gray-200 overflow-hidden">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900">Interactive Sensitivity Analysis</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowCustomBps(!showCustomBps)}
                      className="text-xs bg-green-600 text-white px-2 py-1 hover:bg-green-700"
                    >
                      {showCustomBps ? 'Hide' : 'Custom BPS'}
                    </button>
                  </div>
                </div>
                
                {/* Custom BPS Input */}
                {showCustomBps && (
                  <div className="mt-3 p-3 bg-white border border-gray-300 rounded">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <label className="text-xs font-medium text-gray-700">Custom Rate Change:</label>
                        <input
                          type="number"
                          value={customBps}
                          onChange={(e) => setCustomBps(parseInt(e.target.value) || 0)}
                          className="text-xs border border-gray-300 px-2 py-1 w-20"
                          placeholder="100"
                        />
                        <span className="text-xs text-gray-600">bps</span>
                      </div>
                      <div className="text-xs text-gray-600">
                        = {customBps / 100}% rate change
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-600">
                      <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider w-48">
                        Sensitivity Analysis
                      </th>
                      <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                        Rate Change
                      </th>
                      <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                        Sensitivity Impact
                      </th>
                      <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                        Regulatory Capital(RC)
                      </th>
                      <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-24">
                        % of RC
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Predefined scenarios */}
                    <tr className="bg-gray-600">
                      <td className="px-2 py-1">
                        <div className="text-xs font-medium text-white">
                          Impact of 100 bps change in rates
                        </div>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">1.0%</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">$9,150</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white font-mono">$19,750</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">14.8%</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-600">
                      <td className="px-2 py-1">
                        <div className="text-xs font-medium text-white">
                          Impact of 200 bps change in rates
                        </div>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">2.0%</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">$7,600</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">$15,250</span>
                      </td>
                      <td className="px-2 py-1 text-center">
                        <span className="text-xs text-white">29.6%</span>
                      </td>
                    </tr>
                    
                    {/* Custom BPS Row */}
                    {showCustomBps && (() => {
                      const customImpact = calculateCustomBpsImpact(customBps);
                      return (
                        <tr className="bg-green-50 border-2 border-green-300">
                          <td className="px-2 py-1">
                            <div className="text-xs font-bold text-green-800">
                              Custom BPS Input
                            </div>
                          </td>
                          <td className="px-2 py-1 text-center">
                            <span className="text-xs font-bold text-green-800">{customBps / 100}%</span>
                          </td>
                          <td className="px-2 py-1 text-center">
                            <span className="text-xs font-bold text-gray-900">
                              {formatCurrency(customImpact.sensitivity.sensitivityImpact)}
                            </span>
                          </td>
                          <td className="px-2 py-1 text-center">
                            <span className="text-xs font-bold text-gray-900">
                              {formatCurrency(customImpact.sensitivity.regulatoryCapital)}
                            </span>
                          </td>
                          <td className="px-2 py-1 text-center">
                            <span className={`text-xs font-bold ${customImpact.sensitivity.rcPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {customImpact.sensitivity.rcPercent >= 0 ? '+' : ''}{customImpact.sensitivity.rcPercent.toFixed(1)}%
                            </span>
                          </td>
                        </tr>
                      );
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
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
          <h2 className="text-base font-semibold text-gray-900">Interest Rate Risk</h2>
          <p className="text-xs text-gray-600">Interest Rate Risk (IRR) Gap Analysis - Contractual as of {getReportingDate()}</p>
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
        </div>
      </div>

      {/* IRR Gap Table - Only show after calculation */}
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Interest Rate Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive IRR analysis including gap analysis, duration analysis, sensitivity analysis, and economic capital impact.</p>
        </div>
      )}
    </div>
  );
};

export default InterestRisk;
