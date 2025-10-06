import { useState } from 'react';
import { Plus, Download, Calendar, Calculator, Shield } from 'lucide-react';

const CapitalPlan = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('capital-plan');

  const capitalPlanStructure = [
    // METRICS SECTION
    { id: 1, section: 'METRICS', category: 'Capital Adequacy Ratio (CAR)', amount: 0, level: 0, type: 'main-header' },
    { id: 2, section: 'METRICS', category: 'Value', amount: 12.50, level: 1, type: 'percentage' },
    { id: 3, section: 'METRICS', category: '-Regulatory Floor', amount: 2.50, level: 1, type: 'percentage' },
    { id: 4, section: 'METRICS', category: '-Internal Target Range', amount: 7.50, level: 1, type: 'percentage' },
    { id: 5, section: 'METRICS', category: '-Internal Target Buffer to Lower', amount: 5.00, level: 1, type: 'percentage' },
    { id: 6, section: 'METRICS', category: '-Internal Target Buffer to Upper', amount: 0, level: 1, type: 'percentage' },
    { id: 7, section: 'METRICS', category: 'Capital Adequacy Ratio (CAR) - Tier 1', amount: 0, level: 0, type: 'sub-header' },
    { id: 8, section: 'METRICS', category: 'Value', amount: 8.75, level: 1, type: 'percentage' },
    { id: 9, section: 'METRICS', category: 'Leverage Ratio (%)', amount: 0, level: 0, type: 'sub-header' },
    { id: 10, section: 'METRICS', category: 'Value', amount: 6.25, level: 1, type: 'percentage' },
    { id: 11, section: 'METRICS', category: 'Gearing Ratio', amount: 0, level: 0, type: 'sub-header' },
    { id: 12, section: 'METRICS', category: 'Value', amount: 30.00, level: 1, type: 'percentage' },
    { id: 13, section: 'METRICS', category: '-Internal Target Range', amount: 25.00, level: 1, type: 'percentage' },
    { id: 14, section: 'METRICS', category: '-Internal Target Buffer to Lower', amount: 0, level: 1, type: 'percentage' },
    { id: 15, section: 'METRICS', category: 'Return on Equity', amount: 0, level: 0, type: 'sub-header' },
    { id: 16, section: 'METRICS', category: 'Value', amount: 15.80, level: 1, type: 'percentage' },

    // CAPITAL SUPPLY SECTION
    { id: 17, section: 'CAPITAL SUPPLY', category: 'CAPITAL SUPPLY', amount: 0, level: 0, type: 'main-header' },
    { id: 18, section: 'CAPITAL SUPPLY', category: 'Tier 1 Capital Flow', amount: 0, level: 1, type: 'sub-header' },
    { id: 19, section: 'CAPITAL SUPPLY', category: 'Ordinary Shares', amount: 45000000, level: 2, type: 'amount' },
    { id: 20, section: 'CAPITAL SUPPLY', category: 'Non-distributable reserves', amount: 0, level: 2, type: 'sub-sub-header' },
    { id: 21, section: 'CAPITAL SUPPLY', category: 'Fair value reserve', amount: 8500000, level: 3, type: 'amount' },
    { id: 22, section: 'CAPITAL SUPPLY', category: 'Other reserves', amount: 6200000, level: 3, type: 'amount' },
    { id: 23, section: 'CAPITAL SUPPLY', category: 'Retained earnings', amount: 28500000, level: 2, type: 'amount' },
    { id: 24, section: 'CAPITAL SUPPLY', category: 'Profit after tax', amount: 15200000, level: 2, type: 'amount' },
    { id: 25, section: 'CAPITAL SUPPLY', category: 'Dividends', amount: -4800000, level: 2, type: 'amount' },
    { id: 26, section: 'CAPITAL SUPPLY', category: 'Closing balance', amount: 104000000, level: 2, type: 'subtotal', isSubtotal: true },
    { id: 27, section: 'CAPITAL SUPPLY', category: 'Impairments to capital', amount: 0, level: 2, type: 'sub-sub-header' },
    { id: 28, section: 'CAPITAL SUPPLY', category: 'Intangible assets', amount: -2800000, level: 3, type: 'amount' },
    { id: 29, section: 'CAPITAL SUPPLY', category: 'Deferred tax assets', amount: -4200000, level: 3, type: 'amount' },
    { id: 30, section: 'CAPITAL SUPPLY', category: 'Goodwill', amount: -5200000, level: 3, type: 'amount' },
    { id: 31, section: 'CAPITAL SUPPLY', category: 'Other impairments', amount: -1800000, level: 3, type: 'amount' },
    { id: 32, section: 'CAPITAL SUPPLY', category: 'Tier 2 Capital Flow', amount: 0, level: 1, type: 'sub-header' },
    { id: 33, section: 'CAPITAL SUPPLY', category: 'Subordinated loans', amount: 25000000, level: 2, type: 'amount' },
    { id: 34, section: 'CAPITAL SUPPLY', category: 'Total Capital Supply', amount: 120000000, level: 0, type: 'total', isTotal: true },

    // CAPITAL DEMAND SECTION
    { id: 35, section: 'CAPITAL DEMAND', category: 'CAPITAL DEMAND', amount: 0, level: 0, type: 'main-header' },
    { id: 36, section: 'CAPITAL DEMAND', category: 'Credit Risk (Customer Assets)', amount: 68000000, level: 1, type: 'amount' },
    { id: 37, section: 'CAPITAL DEMAND', category: 'Credit Risk (Non-customer Assets)', amount: 18000000, level: 1, type: 'amount' },
    { id: 38, section: 'CAPITAL DEMAND', category: 'Credit Risk (Off-balance sheet)', amount: 9500000, level: 1, type: 'amount' },
    { id: 39, section: 'CAPITAL DEMAND', category: 'Equity Risk', amount: 12500000, level: 1, type: 'amount' },
    { id: 40, section: 'CAPITAL DEMAND', category: 'Operational Risk', amount: 9800000, level: 1, type: 'amount' },
    { id: 41, section: 'CAPITAL DEMAND', category: 'Market Risk (NOP)', amount: 7500000, level: 1, type: 'amount' },
    { id: 42, section: 'CAPITAL DEMAND', category: 'Total Capital Demand', amount: 125500000, level: 0, type: 'total', isTotal: true },

    // BALANCE SHEET INFORMATION SECTION
    { id: 43, section: 'BALANCE SHEET', category: 'Balance Sheet Information', amount: 0, level: 0, type: 'main-header' },
    { id: 44, section: 'BALANCE SHEET', category: 'Bank overdraft', amount: 8500000, level: 1, type: 'amount' },
    { id: 45, section: 'BALANCE SHEET', category: 'Short-term borrowings', amount: 15200000, level: 1, type: 'amount' },
    { id: 46, section: 'BALANCE SHEET', category: 'Long-term borrowings', amount: 42000000, level: 1, type: 'amount' },
    { id: 47, section: 'BALANCE SHEET', category: 'Bonds outstanding', amount: 28000000, level: 1, type: 'amount' },
    { id: 48, section: 'BALANCE SHEET', category: 'Finance lease liabilities', amount: 5200000, level: 1, type: 'amount' },
    { id: 49, section: 'BALANCE SHEET', category: 'Total debt', amount: 98500000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 50, section: 'BALANCE SHEET', category: 'Total equity', amount: 120000000, level: 1, type: 'amount' },
    { id: 51, section: 'BALANCE SHEET', category: 'Total assets', amount: 850200000, level: 1, type: 'amount' },
    { id: 52, section: 'BALANCE SHEET', category: 'Customer loans', amount: 580400000, level: 1, type: 'amount' },
    { id: 53, section: 'BALANCE SHEET', category: 'Equity investments', amount: 15200000, level: 1, type: 'amount' },
    { id: 54, section: 'BALANCE SHEET', category: 'Non-customer assets', amount: 22000000, level: 1, type: 'amount' },
    { id: 55, section: 'BALANCE SHEET', category: 'Off-balance sheet assets', amount: 6200000, level: 1, type: 'amount' },
    { id: 56, section: 'BALANCE SHEET', category: 'Total on and off-balance sheet assets', amount: 625200000, level: 1, type: 'subtotal', isSubtotal: true },

    // SELECTED METRICS/ASSUMPTIONS SECTION
    { id: 57, section: 'METRICS/ASSUMPTIONS', category: 'Selected Metrics/Assumptions', amount: 0, level: 0, type: 'main-header' },
    { id: 58, section: 'METRICS/ASSUMPTIONS', category: 'Facility Conversion Ratio', amount: 0.85, level: 1, type: 'ratio' },
    { id: 59, section: 'METRICS/ASSUMPTIONS', category: 'Customer RWA/Customer Loans', amount: 0.25, level: 1, type: 'ratio' },
    { id: 60, section: 'METRICS/ASSUMPTIONS', category: 'Other RWA/Other Assets', amount: 0.69, level: 1, type: 'ratio' },
    { id: 61, section: 'METRICS/ASSUMPTIONS', category: 'Off-balance sheet RWA/Off BS Amount', amount: 0.25, level: 1, type: 'ratio' },
    { id: 62, section: 'METRICS/ASSUMPTIONS', category: 'Off-balance sheet Assets/Customer Loans', amount: 0.025, level: 1, type: 'ratio' },
    { id: 63, section: 'METRICS/ASSUMPTIONS', category: 'Reporting Period', amount: 12, level: 1, type: 'amount' },
    { id: 64, section: 'METRICS/ASSUMPTIONS', category: 'Annualised Profit for the year', amount: 15200000, level: 1, type: 'amount' },
    { id: 65, section: 'METRICS/ASSUMPTIONS', category: 'Total RWA/Total Assets', amount: 0.394, level: 1, type: 'ratio' },

    // RBZ SRS ANALYSIS SECTION
    { id: 66, section: 'RBZ SRS ANALYSIS', category: 'RBZ Supervisory Rating Scale Analysis', amount: 0, level: 0, type: 'main-header' },
    { id: 67, section: 'RBZ SRS ANALYSIS', category: 'Portfolio Quality Metrics', amount: 0, level: 1, type: 'sub-header' },
    { id: 68, section: 'RBZ SRS ANALYSIS', category: 'Average SRS Rating', amount: 4.2, level: 2, type: 'rating' },
    { id: 69, section: 'RBZ SRS ANALYSIS', category: 'Portfolio Quality Score', amount: 85.2, level: 2, type: 'percentage' },
    { id: 70, section: 'RBZ SRS ANALYSIS', category: 'Weighted Average Risk Weight', amount: 78.5, level: 2, type: 'percentage' },
    { id: 71, section: 'RBZ SRS ANALYSIS', category: 'Provisioning Requirements', amount: 0, level: 1, type: 'sub-header' },
    { id: 72, section: 'RBZ SRS ANALYSIS', category: 'Total Required Provisions', amount: 5200000, level: 2, type: 'amount' },
    { id: 73, section: 'RBZ SRS ANALYSIS', category: 'Provisioning Coverage Ratio', amount: 156.8, level: 2, type: 'percentage' },
    { id: 74, section: 'RBZ SRS ANALYSIS', category: 'Non-Performing Loan Ratio', amount: 3.2, level: 2, type: 'percentage' },
    { id: 75, section: 'RBZ SRS ANALYSIS', category: 'SRS Distribution', amount: 0, level: 1, type: 'sub-header' },
    { id: 76, section: 'RBZ SRS ANALYSIS', category: 'Standard (1A-3C)', amount: 65.5, level: 2, type: 'percentage' },
    { id: 77, section: 'RBZ SRS ANALYSIS', category: 'Special Mention (4A-5B)', amount: 18.3, level: 2, type: 'percentage' },
    { id: 78, section: 'RBZ SRS ANALYSIS', category: 'Substandard (6A-8C)', amount: 12.7, level: 2, type: 'percentage' },
    { id: 79, section: 'RBZ SRS ANALYSIS', category: 'Doubtful (9)', amount: 2.8, level: 2, type: 'percentage' },
    { id: 80, section: 'RBZ SRS ANALYSIS', category: 'Loss (10)', amount: 0.7, level: 2, type: 'percentage' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value) => {
    if (value === 0) return '-';
    return `${value.toFixed(2)}%`;
  };

  const formatRatio = (value) => {
    if (value === 0) return '-';
    return value.toFixed(3);
  };

  const formatRating = (value) => {
    if (value === 0) return '-';
    return value.toFixed(1);
  };

  const getRowStyle = (item) => {
    if (item.isTotal) return 'border-b-4 border-gray-600';
    if (item.isSubtotal) return 'border-b-2 border-gray-400';
    if (item.type === 'main-header') return 'font-bold text-sm';
    if (item.type === 'sub-header') return 'font-semibold text-sm';
    if (item.type === 'sub-sub-header') return 'font-medium text-sm';
    return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getIndentStyle = (level) => {
    if (level === 0) return 'ml-0';
    if (level === 1) return 'ml-2';
    if (level === 2) return 'ml-8';
    if (level === 3) return 'ml-12';
    return `ml-${level * 4}`;
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const renderValue = (item) => {
    if (item.type === 'main-header' || item.type === 'sub-header' || item.type === 'sub-sub-header') {
      return <span className="text-xs text-gray-400">-</span>;
    }
    
    if (item.type === 'percentage') {
      return <span className="text-xs font-medium text-gray-900">{formatPercentage(item.amount)}</span>;
    }
    
    if (item.type === 'amount') {
      const isNegative = item.amount < 0;
      return (
        <span className={`text-xs font-medium ${isNegative ? 'text-red-600' : 'text-gray-900'}`}>
          {isNegative ? `(${formatCurrency(Math.abs(item.amount))})` : formatCurrency(item.amount)}
        </span>
      );
    }
    
    if (item.type === 'ratio') {
      return <span className="text-xs font-medium text-gray-900">{formatRatio(item.amount)}</span>;
    }
    
    if (item.type === 'rating') {
      return <span className="text-xs font-medium text-gray-900">{formatRating(item.amount)}</span>;
    }
    
    if (item.type === 'subtotal') {
      return <span className="text-xs font-bold text-gray-900">{formatCurrency(item.amount)}</span>;
    }
    
    if (item.type === 'total') {
      return <span className="text-xs font-bold text-gray-900">{formatCurrency(item.amount)}</span>;
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

  // Removed unused functions - only showing capital plan content directly

  const renderCapitalPlan = () => (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-2 py-1 text-left text-xs font-medium text-white uppercase tracking-wider">
                Capital Plan Items
              </th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white uppercase tracking-wider w-32">
                {getReportingDate()}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {capitalPlanStructure.map((item) => (
              <tr key={item.id} className={getRowStyle(item)}>
                <td className="px-2 py-1">
                  <div className={`${item.type === 'main-header' ? 'text-sm' : item.type === 'sub-header' ? 'text-sm' : 'text-xs'} ${item.type === 'main-header' || item.type === 'sub-header' || item.type === 'sub-sub-header' ? 'font-bold' : 'font-medium'} text-gray-900`}>
                    <span className={getIndentStyle(item.level)}>
                      {item.category}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-1 text-right">
                  {renderValue(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Capital Plan - RBZ Compliance</h2>
          <p className="text-xs text-gray-600">Capital adequacy and risk metrics compliant with RBZ Capital Requirements as of {getReportingDate()}</p>
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
          <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-3 w-3 mr-1" />
            Export
          </button>
          <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium text-white bg-gray-600 hover:bg-gray-700">
            <Plus className="h-3 w-3 mr-1" />
            Add Item
          </button>
        </div>
      </div>

      {/* Capital Plan Content - Only show after calculation */}
      {showReport && (
        <>
          {renderCapitalPlan()}
        </>
      )}

      {/* Empty state when no report */}
      {!showReport && (
        <div className="text-center py-12">
          <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Capital Plan Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your capital adequacy and risk metrics report.</p>
        </div>
      )}
    </div>
  );
};

export default CapitalPlan;
