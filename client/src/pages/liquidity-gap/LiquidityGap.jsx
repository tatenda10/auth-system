import { useState } from 'react';
import { Calendar, Calculator } from 'lucide-react';

const LiquidityGap = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const liquidityGapStructure = [
    // CUSTOMER BALANCE SHEET SECTION
    { id: 1, section: 'CUSTOMER BALANCE SHEET', category: 'Customer Balance Sheet', level: 0, type: 'main-header' },
    { id: 2, section: 'CUSTOMER BALANCE SHEET', category: 'Equity investments', level: 1, type: 'item' },
    { id: 3, section: 'CUSTOMER BALANCE SHEET', category: 'Customer loans', level: 1, type: 'item' },
    { id: 4, section: 'CUSTOMER BALANCE SHEET', category: 'Total customer assets', level: 1, type: 'subtotal' },
    { id: 5, section: 'CUSTOMER BALANCE SHEET', category: 'Customer liabilities', level: 1, type: 'item' },
    { id: 6, section: 'CUSTOMER BALANCE SHEET', category: 'Customer funding (gap)/surplus', level: 1, type: 'total', isTotal: true },

    // STAND-ALONE BALANCE SHEET BUILD-UP SECTION
    { id: 7, section: 'STAND-ALONE BALANCE SHEET', category: 'Stand-alone Balance Sheet', level: 0, type: 'main-header' },
    { id: 8, section: 'STAND-ALONE BALANCE SHEET', category: 'Other assets (Incl PPE)', level: 1, type: 'item' },
    { id: 9, section: 'STAND-ALONE BALANCE SHEET', category: 'Other liabilities', level: 1, type: 'item' },
    { id: 10, section: 'STAND-ALONE BALANCE SHEET', category: 'Treasury overlay', level: 1, type: 'item' },
    { id: 11, section: 'STAND-ALONE BALANCE SHEET', category: 'Liquidity buffer', level: 1, type: 'item' },
    { id: 12, section: 'STAND-ALONE BALANCE SHEET', category: 'Loans and Bonds', level: 1, type: 'item' },
    { id: 13, section: 'STAND-ALONE BALANCE SHEET', category: 'Bank overdraft & cash balances', level: 1, type: 'item' },
    { id: 14, section: 'STAND-ALONE BALANCE SHEET', category: 'Total equity', level: 1, type: 'item' },
    { id: 15, section: 'STAND-ALONE BALANCE SHEET', category: 'Treasury funding (gap)/surplus', level: 1, type: 'total', isTotal: true },
    { id: 16, section: 'STAND-ALONE BALANCE SHEET', category: 'Net funding (gap)/surplus', level: 0, type: 'final-total', isFinalTotal: true },
    { id: 17, section: 'STAND-ALONE BALANCE SHEET', category: 'Net Stable Funding Ratio', level: 0, type: 'ratio', isRatio: true }
  ];

  const timeBuckets = [
    { key: '1-7days', label: '1-7 days' },
    { key: '7days-1month', label: '7 days - 1 month' },
    { key: '1-3months', label: '1 - 3 months' },
    { key: '3-6months', label: '3 - 6 months' },
    { key: '6-12months', label: '6 - 12 months' },
    { key: '1-5years', label: '1 - 5 Years' },
    { key: 'over5years', label: '> 5 years' }
  ];

  const getRowStyle = (item) => {
    if (item.isFinalTotal) return 'border-b-4 border-gray-600 bg-gray-100';
    if (item.isTotal) return 'border-b-2 border-gray-400 bg-gray-50';
    if (item.isRatio) return 'border-b-2 border-blue-400 bg-blue-50';
    if (item.type === 'main-header') return 'font-bold text-sm text-gray-900 bg-gray-200 border-b-2 border-gray-400';
    if (item.type === 'subtotal') return 'font-semibold text-sm bg-gray-100 border-b border-gray-300';
    return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getIndentStyle = (level) => {
    if (level === 0) return 'ml-0';
    if (level === 1) return 'ml-4';
    return `ml-${level * 4}`;
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

  const formatRatio = (ratio) => {
    return `${(ratio * 100).toFixed(1)}%`;
  };

  const renderCellValue = (item, timeBucket) => {
    if (item.type === 'main-header') {
      return <span className="text-xs text-gray-500 font-medium">-</span>;
    }

    // Sample ALM-aligned figures in actual thousands
    if (item.category === 'Equity investments') {
      const values = {
        '1-7days': 25000,
        '7days-1month': 18000,
        '1-3months': 15000,
        '3-6months': 12000,
        '6-12months': 8000,
        '1-5years': 5000,
        'over5years': 2000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Customer loans') {
      const values = {
        '1-7days': 150000,
        '7days-1month': 120000,
        '1-3months': 95000,
        '3-6months': 75000,
        '6-12months': 60000,
        '1-5years': 45000,
        'over5years': 30000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Total customer assets') {
      const values = {
        '1-7days': 175000,
        '7days-1month': 138000,
        '1-3months': 110000,
        '3-6months': 87000,
        '6-12months': 68000,
        '1-5years': 50000,
        'over5years': 32000
      };
      return <span className="text-xs font-bold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Customer liabilities') {
      const values = {
        '1-7days': 90000,
        '7days-1month': 75000,
        '1-3months': 60000,
        '3-6months': 48000,
        '6-12months': 38000,
        '1-5years': 28000,
        'over5years': 18000
      };
      return <span className="text-xs font-medium text-red-600">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Customer funding (gap)/surplus') {
      const values = {
        '1-7days': 0.485, // 85,000 / 175,000
        '7days-1month': 0.457, // 63,000 / 138,000
        '1-3months': 0.455, // 50,000 / 110,000
        '3-6months': 0.448, // 39,000 / 87,000
        '6-12months': 0.441, // 30,000 / 68,000
        '1-5years': 0.440, // 22,000 / 50,000
        'over5years': 0.438 // 14,000 / 32,000
      };
      return <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded border border-orange-200">{formatRatio(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Other assets (Incl PPE)') {
      const values = {
        '1-7days': 45000,
        '7days-1month': 42000,
        '1-3months': 38000,
        '3-6months': 35000,
        '6-12months': 32000,
        '1-5years': 28000,
        'over5years': 25000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Other liabilities') {
      const values = {
        '1-7days': 35000,
        '7days-1month': 32000,
        '1-3months': 28000,
        '3-6months': 25000,
        '6-12months': 22000,
        '1-5years': 18000,
        'over5years': 15000
      };
      return <span className="text-xs font-medium text-red-600">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Treasury overlay') {
      const values = {
        '1-7days': 20000,
        '7days-1month': 18000,
        '1-3months': 15000,
        '3-6months': 12000,
        '6-12months': 10000,
        '1-5years': 8000,
        'over5years': 5000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Liquidity buffer') {
      const values = {
        '1-7days': 30000,
        '7days-1month': 28000,
        '1-3months': 25000,
        '3-6months': 22000,
        '6-12months': 20000,
        '1-5years': 18000,
        'over5years': 15000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Loans and Bonds') {
      const values = {
        '1-7days': 25000,
        '7days-1month': 22000,
        '1-3months': 18000,
        '3-6months': 15000,
        '6-12months': 12000,
        '1-5years': 10000,
        'over5years': 8000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Bank overdraft & cash balances') {
      const values = {
        '1-7days': 15000,
        '7days-1month': 12000,
        '1-3months': 10000,
        '3-6months': 8000,
        '6-12months': 6000,
        '1-5years': 4000,
        'over5years': 2000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Total equity') {
      const values = {
        '1-7days': 80000,
        '7days-1month': 78000,
        '1-3months': 75000,
        '3-6months': 72000,
        '6-12months': 70000,
        '1-5years': 68000,
        'over5years': 65000
      };
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Treasury funding (gap)/surplus') {
      const values = {
        '1-7days': 0.514, // 90,000 / 175,000
        '7days-1month': 0.580, // 80,000 / 138,000
        '1-3months': 0.618, // 68,000 / 110,000
        '3-6months': 0.655, // 57,000 / 87,000
        '6-12months': 0.706, // 48,000 / 68,000
        '1-5years': 0.720, // 36,000 / 50,000
        'over5years': 0.938 // 30,000 / 32,000
      };
      return <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded border border-purple-200">{formatRatio(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Net funding (gap)/surplus') {
      const values = {
        '1-7days': 1.000, // 175,000 / 175,000
        '7days-1month': 1.036, // 143,000 / 138,000
        '1-3months': 1.073, // 118,000 / 110,000
        '3-6months': 1.103, // 96,000 / 87,000
        '6-12months': 1.147, // 78,000 / 68,000
        '1-5years': 1.160, // 58,000 / 50,000
        'over5years': 1.375 // 44,000 / 32,000
      };
      return <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">{formatRatio(values[timeBucket] || 0)}</span>;
    }

    if (item.category === 'Net Stable Funding Ratio') {
      const values = {
        '1-7days': 0.857, // 150,000 / 175,000
        '7days-1month': 0.870, // 120,000 / 138,000
        '1-3months': 0.864, // 95,000 / 110,000
        '3-6months': 0.862, // 75,000 / 87,000
        '6-12months': 0.882, // 60,000 / 68,000
        '1-5years': 0.900, // 45,000 / 50,000
        'over5years': 0.938 // 30,000 / 32,000
      };
      return <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded border border-blue-200">{formatRatio(values[timeBucket] || 0)}</span>;
    }

    return <span className="text-xs text-gray-400">-</span>;
  };

  const renderTotalColumns = (item) => {
    if (item.type === 'main-header') {
      return (
        <>
          <td className="px-2 py-1 text-right">
            <span className="text-xs text-gray-900">-</span>
          </td>
          <td className="px-2 py-1 text-right">
            <span className="text-xs text-gray-900">-</span>
          </td>
        </>
      );
    }

    // Sample total values in thousands
    if (item.isTotal || item.isFinalTotal) {
      if (item.category === 'Customer funding (gap)/surplus') {
        return (
          <>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded border border-orange-200">48.5%</span>
            </td>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded border border-orange-200">49.5%</span>
            </td>
          </>
        );
      }
      
      if (item.category === 'Treasury funding (gap)/surplus') {
        return (
          <>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded border border-purple-200">51.4%</span>
            </td>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-1 rounded border border-purple-200">52.4%</span>
            </td>
          </>
        );
      }

      if (item.category === 'Net funding (gap)/surplus') {
        return (
          <>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">100.0%</span>
            </td>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">102.0%</span>
            </td>
          </>
        );
      }

      if (item.category === 'Net Stable Funding Ratio') {
        return (
          <>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded border border-blue-200">85.7%</span>
            </td>
            <td className="px-2 py-1 text-right">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded border border-blue-200">87.4%</span>
            </td>
          </>
        );
      }

      const value = item.isFinalTotal ? 175000 : 85000;
      return (
        <>
          <td className="px-2 py-1 text-right">
            <span className="text-xs font-bold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">{formatCurrency(value)}</span>
          </td>
          <td className="px-2 py-1 text-right">
            <span className="text-xs font-bold text-gray-900 bg-gray-100 px-1 py-0.5 rounded">{formatCurrency(value * 1.05)}</span>
          </td>
        </>
      );
    }

    // Show sample actual and forecast values for regular items
    if (item.type === 'item' || item.type === 'subtotal') {
      let baseValue = 0;
      
      // Get a sample value from the first time bucket for calculation
      if (item.category === 'Equity investments') baseValue = 25000;
      else if (item.category === 'Customer loans') baseValue = 150000;
      else if (item.category === 'Total customer assets') baseValue = 175000;
      else if (item.category === 'Customer liabilities') baseValue = 90000;
      else if (item.category === 'Other assets (Incl PPE)') baseValue = 45000;
      else if (item.category === 'Other liabilities') baseValue = 35000;
      else if (item.category === 'Treasury overlay') baseValue = 20000;
      else if (item.category === 'Liquidity buffer') baseValue = 30000;
      else if (item.category === 'Loans and Bonds') baseValue = 25000;
      else if (item.category === 'Bank overdraft & cash balances') baseValue = 15000;
      else if (item.category === 'Total equity') baseValue = 80000;

      return (
        <>
          <td className="px-2 py-1 text-right">
            <span className="text-xs text-gray-900">{formatCurrency(baseValue)}</span>
          </td>
          <td className="px-2 py-1 text-right">
            <span className="text-xs text-gray-900">{formatCurrency(baseValue * 1.02)}</span>
          </td>
        </>
      );
    }

    return (
      <>
        <td className="px-2 py-1 text-right">
          <span className="text-xs text-gray-400">-</span>
        </td>
        <td className="px-2 py-1 text-right">
          <span className="text-xs text-gray-400">-</span>
        </td>
      </>
    );
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
          <h2 className="text-base font-semibold text-gray-900">Liquidity Gap</h2>
          <p className="text-xs text-gray-600">Summary inputs into Liquidity Gap Analysis - Contractual as of {getReportingDate()}</p>
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

      {/* Date Information Section */}
      {showReport && (
        <div className="bg-white border border-gray-200 p-4 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-700">Date liquidity gap updated:</span>
              <span className="text-xs text-gray-900 bg-gray-100 px-2 py-1 rounded">2024-12-31</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-700">Date of actuals:</span>
              <span className="text-xs text-gray-900 bg-gray-100 px-2 py-1 rounded">2024-12-31</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-gray-700">Instructions:</span>
              <span className="text-xs text-gray-900 bg-gray-100 px-2 py-1 rounded">-</span>
            </div>
          </div>
        </div>
      )}

      {/* Liquidity Gap Table - Only show after calculation */}
      {showReport && (
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
                  <th className="px-2 py-1 text-center text-xs font-bold text-white tracking-wider w-20" colSpan="2">
                    TOTAL
                  </th>
                </tr>
                <tr className="bg-gray-500">
                  <th className="px-2 py-1"></th>
                  {timeBuckets.map((bucket) => (
                    <th key={bucket.key} className="px-2 py-1"></th>
                  ))}
                  <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">
                    Actual
                  </th>
                  <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">
                    Forecast
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {liquidityGapStructure.map((item) => (
                  <tr key={item.id} className={getRowStyle(item)}>
                    <td className="px-2 py-1">
                      <div className={`${
                        item.type === 'main-header' ? 'text-sm font-bold text-gray-900' : 
                        item.isFinalTotal ? 'text-sm font-bold text-gray-900' :
                        item.isTotal ? 'text-sm font-bold text-gray-900' :
                        item.isRatio ? 'text-sm font-bold text-blue-800' :
                        item.type === 'subtotal' ? 'text-xs font-semibold text-gray-800' :
                        'text-xs font-medium text-gray-700'
                      }`}>
                        <span className={getIndentStyle(item.level)}>
                          {item.category}
                        </span>
                      </div>
                    </td>
                    {timeBuckets.map((bucket) => (
                      <td key={bucket.key} className="px-2 py-1 text-center">
                        {renderCellValue(item, bucket.key)}
                      </td>
                    ))}
                    {renderTotalColumns(item)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty state when no report */}
      {!showReport && (
        <div className="text-center py-12">
          <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Liquidity Gap Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your liquidity gap analysis report.</p>
        </div>
      )}
    </div>
  );
};

export default LiquidityGap;
