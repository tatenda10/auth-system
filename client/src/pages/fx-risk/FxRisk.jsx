import { useState } from 'react';
import { Calendar, Calculator, TrendingUp, TrendingDown, BarChart3, Activity } from 'lucide-react';
import SingleCurrencyRegulatory from './components/SingleCurrencyRegulatory';

const MarketRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [customShock, setCustomShock] = useState(5);
  const [showCustomShock, setShowCustomShock] = useState(false);
  const [activeTab, setActiveTab] = useState('fx-risk');

  // FX Risk Data Structure (RBZ Standards) - Multiple currencies
  const fxRiskData = [
    // Long Positions Section
    { id: 1, category: 'Long Positions', level: 0, type: 'header' },
    { id: 2, instrument: 'USD', currency: 'USD', fxAmount: 2500000, exchangeRate: 18.25, currentMonth: 2500000, previousMonth: 2400000, forecast: 2600000 },
    { id: 3, instrument: 'ZWL', currency: 'ZWL', fxAmount: 1800000, exchangeRate: 1.00, currentMonth: 1800000, previousMonth: 1750000, forecast: 1850000 },
    { id: 4, instrument: 'EUR', currency: 'EUR', fxAmount: 850000, exchangeRate: 20.15, currentMonth: 850000, previousMonth: 820000, forecast: 880000 },
    { id: 5, instrument: 'ZAR', currency: 'ZAR', fxAmount: 1200000, exchangeRate: 1.08, currentMonth: 1200000, previousMonth: 1150000, forecast: 1250000 },
    { id: 6, instrument: 'GBP', currency: 'GBP', fxAmount: 450000, exchangeRate: 23.45, currentMonth: 450000, previousMonth: 430000, forecast: 470000 },
    { id: 7, instrument: 'CNY', currency: 'CNY', fxAmount: 320000, exchangeRate: 2.58, currentMonth: 320000, previousMonth: 310000, forecast: 330000 },
    
    // Short Positions Section
    { id: 8, category: 'Short Positions', level: 0, type: 'header' },
    { id: 9, instrument: 'USD', currency: 'USD', fxAmount: 1200000, exchangeRate: 18.25, currentMonth: 1200000, previousMonth: 1180000, forecast: 1220000 },
    { id: 10, instrument: 'ZWL', currency: 'ZWL', fxAmount: 800000, exchangeRate: 1.00, currentMonth: 800000, previousMonth: 780000, forecast: 820000 },
    { id: 11, instrument: 'EUR', currency: 'EUR', fxAmount: 420000, exchangeRate: 20.15, currentMonth: 420000, previousMonth: 410000, forecast: 430000 },
    { id: 12, instrument: 'ZAR', currency: 'ZAR', fxAmount: 680000, exchangeRate: 1.08, currentMonth: 680000, previousMonth: 650000, forecast: 710000 },
    { id: 13, instrument: 'GBP', currency: 'GBP', fxAmount: 180000, exchangeRate: 23.45, currentMonth: 180000, previousMonth: 175000, forecast: 185000 },
    { id: 14, instrument: 'CNY', currency: 'CNY', fxAmount: 150000, exchangeRate: 2.58, currentMonth: 150000, previousMonth: 145000, forecast: 155000 },
    
    // Net Open Position Section
    { id: 15, category: 'Net Open Position', level: 0, type: 'header' },
    { id: 16, instrument: 'USD', currency: 'USD', fxAmount: 1300000, exchangeRate: 18.25, currentMonth: 1300000, previousMonth: 1220000, forecast: 1380000 },
    { id: 17, instrument: 'ZWL', currency: 'ZWL', fxAmount: 1000000, exchangeRate: 1.00, currentMonth: 1000000, previousMonth: 970000, forecast: 1030000 },
    { id: 18, instrument: 'EUR', currency: 'EUR', fxAmount: 430000, exchangeRate: 20.15, currentMonth: 430000, previousMonth: 410000, forecast: 450000 },
    { id: 19, instrument: 'ZAR', currency: 'ZAR', fxAmount: 520000, exchangeRate: 1.08, currentMonth: 520000, previousMonth: 500000, forecast: 540000 },
    { id: 20, instrument: 'GBP', currency: 'GBP', fxAmount: 270000, exchangeRate: 23.45, currentMonth: 270000, previousMonth: 255000, forecast: 285000 },
    { id: 21, instrument: 'CNY', currency: 'CNY', fxAmount: 170000, exchangeRate: 2.58, currentMonth: 170000, previousMonth: 165000, forecast: 175000 },
    
    // Significant Single Currency Section
    { id: 22, category: 'Significant Single Currency (USD)', level: 0, type: 'calculation' },
    
    // FX Risk RWAs Section
    { id: 23, category: 'FX Risk RWAs', level: 0, type: 'calculation' },
    
    // Regulatory Capital Section
    { id: 24, category: 'Regulatory Capital (RC)', level: 0, type: 'calculation' },
    
    // NOP as % of RC Section
    { id: 25, category: 'NOP as a % of RC', level: 0, type: 'calculation' },
    
    // Significant Single Currency as % of RC Section
    { id: 26, category: 'Significant Single Currency as % of RC', level: 0, type: 'calculation' },
    
    // FX Risk Capital Charge Section
    { id: 27, category: 'FX Risk Capital Charge', level: 0, type: 'calculation' }
  ];

  const getRowStyle = (item) => {
    if (item.type === 'header') return 'bg-gray-600 text-white font-semibold';
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

  const formatCurrency = (amount, currency = 'USD') => {
    if (amount === 0) return currency === 'USD' ? '$0' : `${currency} 0`;
    if (currency === 'USD') return `$${amount.toLocaleString()}`;
    if (currency === 'ZWL') return `ZWL ${amount.toLocaleString()}`;
    if (currency === 'ZAR') return `R ${amount.toLocaleString()}`;
    if (currency === 'EUR') return `€${amount.toLocaleString()}`;
    return `${currency} ${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => {
    return `${value.toFixed(3)}%`;
  };

  const formatExchangeRate = (rate) => {
    if (rate === 0 || rate === null || rate === undefined || rate === '') return '-';
    if (typeof rate === 'string') return rate;
    if (typeof rate === 'number') return rate.toFixed(2);
    return '-';
  };

  // Calculate FX impact based on shock percentage
  const calculateFXImpact = (shockPercent) => {
    // Net open positions for each currency
    const positions = {
      USD: { amount: 1300000, rate: 18.25 },
      ZWL: { amount: 1000000, rate: 1.00 },
      EUR: { amount: 430000, rate: 20.15 },
      ZAR: { amount: 520000, rate: 1.08 },
      GBP: { amount: 270000, rate: 23.45 },
      CNY: { amount: 170000, rate: 2.58 }
    };
    
    // Calculate impact for each currency: Net Position * Shock% * Exchange Rate
    const impacts = {};
    let totalAppreciation = 0;
    let totalDepreciation = 0;
    
    Object.keys(positions).forEach(currency => {
      const { amount, rate } = positions[currency];
      const impact = (amount * shockPercent / 100) * rate;
      impacts[`${currency}Appreciation`] = impact;
      impacts[`${currency}Depreciation`] = -impact;
      totalAppreciation += impact;
      totalDepreciation -= impact;
    });
    
    return {
      ...impacts,
      totalAppreciation,
      totalDepreciation
    };
  };

  // Get sensitivity analysis data
  const getSensitivityData = () => {
    const baseImpact = calculateFXImpact(5);
    const customImpact = calculateFXImpact(customShock);
    
    const currencies = ['USD', 'ZWL', 'EUR', 'ZAR', 'GBP', 'CNY'];
    
    return [
      {
        id: 1,
        category: 'Sensitivity Analysis',
        level: 0,
        type: 'header'
      },
      {
        id: 2,
        instrument: 'FX shock',
        currency: '',
        fxAmount: 5,
        exchangeRate: '',
        currentMonth: 5,
        previousMonth: 5,
        forecast: 5,
        type: 'shock'
      },
      // Individual currency impacts for 5% shock
      ...currencies.map((currency, index) => ({
        id: 3 + index,
        instrument: `${currency} 5% appreciation`,
        currency: '',
        fxAmount: 0,
        exchangeRate: '',
        currentMonth: Math.round(baseImpact[`${currency}Appreciation`]),
        previousMonth: Math.round(baseImpact[`${currency}Appreciation`] * 0.94),
        forecast: Math.round(baseImpact[`${currency}Appreciation`] * 1.06),
        type: 'impact'
      })),
      ...currencies.map((currency, index) => ({
        id: 9 + index,
        instrument: `${currency} 5% depreciation`,
        currency: '',
        fxAmount: 0,
        exchangeRate: '',
        currentMonth: Math.round(baseImpact[`${currency}Depreciation`]),
        previousMonth: Math.round(baseImpact[`${currency}Depreciation`] * 0.94),
        forecast: Math.round(baseImpact[`${currency}Depreciation`] * 1.06),
        type: 'impact'
      })),
      // Total impact
      {
        id: 15,
        instrument: 'Total 5% appreciation',
        currency: '',
        fxAmount: 0,
        exchangeRate: '',
        currentMonth: Math.round(baseImpact.totalAppreciation),
        previousMonth: Math.round(baseImpact.totalAppreciation * 0.94),
        forecast: Math.round(baseImpact.totalAppreciation * 1.06),
        type: 'impact'
      },
      {
        id: 16,
        instrument: 'Total 5% depreciation',
        currency: '',
        fxAmount: 0,
        exchangeRate: '',
        currentMonth: Math.round(baseImpact.totalDepreciation),
        previousMonth: Math.round(baseImpact.totalDepreciation * 0.94),
        forecast: Math.round(baseImpact.totalDepreciation * 1.06),
        type: 'impact'
      },
      ...(showCustomShock ? [
        // Custom shock individual currency impacts
        ...currencies.map((currency, index) => ({
          id: 17 + index,
          instrument: `${currency} ${customShock}% appreciation`,
          currency: '',
          fxAmount: 0,
          exchangeRate: '',
          currentMonth: Math.round(customImpact[`${currency}Appreciation`]),
          previousMonth: Math.round(customImpact[`${currency}Appreciation`] * 0.94),
          forecast: Math.round(customImpact[`${currency}Appreciation`] * 1.06),
          type: 'impact'
        })),
        ...currencies.map((currency, index) => ({
          id: 23 + index,
          instrument: `${currency} ${customShock}% depreciation`,
          currency: '',
          fxAmount: 0,
          exchangeRate: '',
          currentMonth: Math.round(customImpact[`${currency}Depreciation`]),
          previousMonth: Math.round(customImpact[`${currency}Depreciation`] * 0.94),
          forecast: Math.round(customImpact[`${currency}Depreciation`] * 1.06),
          type: 'impact'
        })),
        // Custom shock total impact
        {
          id: 29,
          instrument: `Total ${customShock}% appreciation`,
          currency: '',
          fxAmount: 0,
          exchangeRate: '',
          currentMonth: Math.round(customImpact.totalAppreciation),
          previousMonth: Math.round(customImpact.totalAppreciation * 0.94),
          forecast: Math.round(customImpact.totalAppreciation * 1.06),
          type: 'impact'
        },
        {
          id: 30,
          instrument: `Total ${customShock}% depreciation`,
          currency: '',
          fxAmount: 0,
          exchangeRate: '',
          currentMonth: Math.round(customImpact.totalDepreciation),
          previousMonth: Math.round(customImpact.totalDepreciation * 0.94),
          forecast: Math.round(customImpact.totalDepreciation * 1.06),
          type: 'impact'
        }
      ] : [])
    ];
  };

  const renderCellValue = (item, columnKey) => {
    if (columnKey === 'instrument') {
      if (item.type === 'header') {
        return <span className="text-xs font-medium">{item.category}</span>;
      }
      if (item.type === 'calculation') {
        return <span className="text-xs font-medium">{item.category}</span>;
      }
      return <span className="text-xs text-gray-900">{item.instrument}</span>;
    }

    if (columnKey === 'currency') {
      if (item.type === 'header' || item.type === 'calculation') {
        return <span className="text-xs">-</span>;
      }
      return <span className="text-xs text-gray-900">{item.currency}</span>;
    }

    if (columnKey === 'fxAmount') {
      if (item.type === 'header') {
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'calculation') {
        if (item.category === 'Significant Single Currency (USD)') {
          return <span className="text-xs">$1,300,000</span>;
        }
        if (item.category === 'FX Risk RWAs') {
          return <span className="text-xs">$3,250,000</span>;
        }
        if (item.category === 'Regulatory Capital (RC)') {
          return <span className="text-xs">$15,800,000</span>;
        }
        if (item.category === 'NOP as a % of RC') {
          return <span className="text-xs">12.15%</span>;
        }
        if (item.category === 'Significant Single Currency as % of RC') {
          return <span className="text-xs">12.15%</span>;
        }
        if (item.category === 'FX Risk Capital Charge') {
          return <span className="text-xs">$260,000</span>;
        }
        return <span className="text-xs">-</span>;
      }
      return <span className="text-xs text-gray-900">{formatCurrency(item.fxAmount, item.currency)}</span>;
    }

    if (columnKey === 'exchangeRate') {
      if (item.type === 'header' || item.type === 'calculation') {
        return <span className="text-xs">-</span>;
      }
      return <span className="text-xs text-gray-900">{formatExchangeRate(item.exchangeRate)}</span>;
    }

    if (columnKey === 'currentMonth') {
      if (item.type === 'header') {
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'calculation') {
        if (item.category === 'Significant Single Currency (USD)') {
          return <span className="text-xs">$1,300,000</span>;
        }
        if (item.category === 'FX Risk RWAs') {
          return <span className="text-xs">$3,250,000</span>;
        }
        if (item.category === 'Regulatory Capital (RC)') {
          return <span className="text-xs">$15,800,000</span>;
        }
        if (item.category === 'NOP as a % of RC') {
          return <span className="text-xs">12.15%</span>;
        }
        if (item.category === 'Significant Single Currency as % of RC') {
          return <span className="text-xs">12.15%</span>;
        }
        if (item.category === 'FX Risk Capital Charge') {
          return <span className="text-xs">$260,000</span>;
        }
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'shock') {
        return <span className="text-xs text-gray-900">{item.currentMonth}%</span>;
      }
      if (item.type === 'impact') {
        return <span className="text-xs text-gray-900">{formatCurrency(item.currentMonth)}</span>;
      }
      return <span className="text-xs text-gray-900">{formatCurrency(item.currentMonth, item.currency)}</span>;
    }

    if (columnKey === 'previousMonth') {
      if (item.type === 'header') {
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'calculation') {
        if (item.category === 'Regulatory Capital (RC)') {
          return <span className="text-xs">$15,600,000</span>;
        }
        if (item.category === 'NOP as a % of RC') {
          return <span className="text-xs">7.82%</span>;
        }
        if (item.category === 'FX Risk RWAs') {
          return <span className="text-xs">$3,120,000</span>;
        }
        if (item.category === 'FX Risk Capital Charge') {
          return <span className="text-xs">$249,600</span>;
        }
        if (item.category === 'Significant Single Currency (USD)') {
          return <span className="text-xs">$1,220,000</span>;
        }
        if (item.category === 'Significant Single Currency as % of RC') {
          return <span className="text-xs">7.82%</span>;
        }
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'shock') {
        return <span className="text-xs text-gray-900">{item.previousMonth}%</span>;
      }
      if (item.type === 'impact') {
        return <span className="text-xs text-gray-900">{formatCurrency(item.previousMonth)}</span>;
      }
      return <span className="text-xs text-gray-900">{formatCurrency(item.previousMonth, item.currency)}</span>;
    }

    if (columnKey === 'forecast') {
      if (item.type === 'header') {
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'calculation') {
        if (item.category === 'Regulatory Capital (RC)') {
          return <span className="text-xs">$16,200,000</span>;
        }
        if (item.category === 'NOP as a % of RC') {
          return <span className="text-xs">8.52%</span>;
        }
        if (item.category === 'FX Risk RWAs') {
          return <span className="text-xs">$3,380,000</span>;
        }
        if (item.category === 'FX Risk Capital Charge') {
          return <span className="text-xs">$270,400</span>;
        }
        if (item.category === 'Significant Single Currency (USD)') {
          return <span className="text-xs">$1,380,000</span>;
        }
        if (item.category === 'Significant Single Currency as % of RC') {
          return <span className="text-xs">8.52%</span>;
        }
        return <span className="text-xs">-</span>;
      }
      if (item.type === 'shock') {
        return <span className="text-xs text-gray-900">{item.forecast}%</span>;
      }
      if (item.type === 'impact') {
        return <span className="text-xs text-gray-900">{formatCurrency(item.forecast)}</span>;
      }
      return <span className="text-xs text-gray-900">{formatCurrency(item.forecast, item.currency)}</span>;
    }

    return <span className="text-xs text-gray-400">-</span>;
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

  const renderTabs = () => (
    <div className="border-b border-gray-200 mb-4">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'fx-risk', name: 'FX Risk Analysis', icon: BarChart3 },
          { id: 'single-currency', name: 'Single Currency Regulatory', icon: Activity }
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
      case 'single-currency':
        return <SingleCurrencyRegulatory />;
      default:
        return renderFXRiskAnalysis();
    }
  };

  const renderFXRiskAnalysis = () => (
    <>
      {/* FX Risk Analysis - Only show after calculation */}
      {showReport && (
        <div className="space-y-4">
          {/* Custom Shock Controls */}
          <div className="bg-gray-50 p-3 rounded border">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-xs font-medium text-gray-700">Custom Shock %:</label>
                <input
                  type="number"
                  value={customShock}
                  onChange={(e) => setCustomShock(Number(e.target.value))}
                  className="w-16 text-xs border border-gray-300 px-2 py-1 rounded"
                  min="0"
                  max="50"
                  step="0.1"
                />
              </div>
              <button
                onClick={() => setShowCustomShock(!showCustomShock)}
                className={`px-3 py-1 text-xs font-medium rounded ${
                  showCustomShock
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {showCustomShock ? 'Hide Custom' : 'Show Custom'}
              </button>
            </div>
          </div>

          {/* Main FX Risk Table */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-600">
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Financial Instrument</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Currency</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">FX amount</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Exchange rate</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Current Month</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Previous Month</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Forecast</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fxRiskData.map((item) => (
                    <tr key={item.id} className={getRowStyle(item)}>
                      <td className={`px-2 py-1 text-left ${getIndentStyle(item.level)}`}>
                        {renderCellValue(item, 'instrument')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'currency')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'fxAmount')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'exchangeRate')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'currentMonth')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'previousMonth')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'forecast')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sensitivity Analysis Table */}
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-600">
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Sensitivity Analysis</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">-</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">-</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">-</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Current Month</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Previous Month</th>
                    <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Forecast</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getSensitivityData().map((item) => (
                    <tr key={item.id} className={getRowStyle(item)}>
                      <td className={`px-2 py-1 text-left ${getIndentStyle(item.level)}`}>
                        {renderCellValue(item, 'instrument')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'currency')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'fxAmount')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'exchangeRate')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'currentMonth')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'previousMonth')}
                      </td>
                      <td className="px-2 py-1 text-left">
                        {renderCellValue(item, 'forecast')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Empty state when no report */}
      {!showReport && (
        <div className="text-center py-12">
          <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Market Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive Foreign Currency Risk analysis including long positions, short positions, net open positions, and regulatory capital calculations in compliance with RBZ standards.</p>
        </div>
      )}
    </>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Market Risk</h2>
          <p className="text-xs text-gray-600">MARKET RISK - Foreign Currency Risk - As of {getReportingDate()}</p>
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

      {/* Market Risk Analysis - Only show after calculation */}
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Market Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive Foreign Currency Risk analysis including long positions, short positions, net open positions, and regulatory capital calculations in compliance with RBZ standards.</p>
        </div>
      )}
    </div>
  );
};

export default MarketRisk;


