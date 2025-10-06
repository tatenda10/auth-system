import { useState } from 'react';
import { Calendar, Calculator, TrendingUp, TrendingDown, BarChart3, Activity } from 'lucide-react';

// Import components
import LCRAnalysis from './components/LCRAnalysis';
import GapAnalysis from './components/GapAnalysis';
import NSFR from './components/NSFR';
import LoansToDeposits from './components/LoansToDeposits';
import CoreDeposits from './components/CoreDeposits';
import CashProjections from './components/CashProjections';
import ConcentrationRatios from './components/ConcentrationRatios';
import LoanRepayment from './components/LoanRepayment';
import PrudentialRatios from './components/PrudentialRatios';
import DepositTypeConcentration from './components/DepositTypeConcentration';
import MarketWideStressTesting from './components/MarketWideStressTesting';

// Import data
import {
  gapAnalysisData,
  nsfrData,
  ltdData,
  concentrationData,
  loanRepaymentData,
  coreDepositData,
  depositStabilityData,
  maturityComparisonData,
  coreDepositRatios,
  cashProjectionScenarios,
  cashFlowProjections,
  fundingStressScenarios,
  contingencyFundingPlans,
  scenarioLiquidityRatios,
  liquidityRiskStructure,
  prudentialRatios
} from './data/liquidityRiskData';

// Import utilities
import { formatCurrency, getRowStyle, getIndentStyle, getReportingDate, renderValue } from './utils/helpers.jsx';

const LiquidityRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showPrevMonth, setShowPrevMonth] = useState(true);
  const [activeTab, setActiveTab] = useState('lcr');

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
      <nav className="-mb-px flex space-x-8 overflow-x-auto scrollbar-hide">
        {[
          { id: 'lcr', name: 'LCR Analysis', icon: BarChart3 },
          { id: 'gap', name: 'Gap Analysis', icon: TrendingUp },
          { id: 'nsfr', name: 'NSFR', icon: TrendingDown },
          { id: 'ltd', name: 'Loans to Deposits', icon: BarChart3 },
          { id: 'core', name: 'Core Deposits', icon: BarChart3 },
          { id: 'cash', name: 'Cash Projections', icon: BarChart3 },
          { id: 'concentration', name: 'Concentration', icon: BarChart3 },
          { id: 'deposit-type', name: 'Deposit Type Concentration', icon: Activity },
          { id: 'market-wide-stress', name: 'Market-Wide Stress Testing', icon: Activity },
          { id: 'repayment', name: 'Loan Repayment', icon: TrendingUp },
          { id: 'prudential', name: 'Prudential Ratios', icon: BarChart3 }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-xs whitespace-nowrap ${
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
      case 'gap':
        return <GapAnalysis gapAnalysisData={gapAnalysisData} formatCurrency={formatCurrency} />;
      case 'nsfr':
        return <NSFR nsfrData={nsfrData} formatCurrency={formatCurrency} />;
      case 'ltd':
        return <LoansToDeposits ltdData={ltdData} formatCurrency={formatCurrency} />;
      case 'core':
        return (
          <CoreDeposits 
            coreDepositData={coreDepositData}
            depositStabilityData={depositStabilityData}
            maturityComparisonData={maturityComparisonData}
            coreDepositRatios={coreDepositRatios}
            formatCurrency={formatCurrency}
          />
        );
      case 'concentration':
        return <ConcentrationRatios concentrationData={concentrationData} formatCurrency={formatCurrency} />;
      case 'deposit-type':
        return <DepositTypeConcentration />;
      case 'market-wide-stress':
        return <MarketWideStressTesting />;
      case 'repayment':
        return <LoanRepayment loanRepaymentData={loanRepaymentData} />;
      case 'cash':
        return (
          <CashProjections 
            cashProjectionScenarios={cashProjectionScenarios}
            cashFlowProjections={cashFlowProjections}
            fundingStressScenarios={fundingStressScenarios}
            contingencyFundingPlans={contingencyFundingPlans}
            scenarioLiquidityRatios={scenarioLiquidityRatios}
            formatCurrency={formatCurrency}
          />
        );
      case 'prudential':
        return <PrudentialRatios prudentialRatios={prudentialRatios} />;
      default:
        return (
          <LCRAnalysis 
            liquidityRiskStructure={liquidityRiskStructure}
            showPrevMonth={showPrevMonth}
            renderValue={renderValue}
            getRowStyle={getRowStyle}
            getIndentStyle={getIndentStyle}
          />
        );
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Liquidity Risk</h2>
          <p className="text-xs text-gray-600">Liquidity coverage ratio and cash flow analysis as of {getReportingDate(selectedDate)}</p>
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
          <button 
            onClick={() => setShowPrevMonth(!showPrevMonth)}
            className={`inline-flex items-center px-2 py-1 border text-xs font-medium ${
              showPrevMonth 
                ? 'border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100' 
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            {showPrevMonth ? 'Hide Prev Month' : 'Show Prev Month'}
          </button>
        </div>
      </div>

      {/* Liquidity Risk Table - Only show after calculation */}
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Liquidity Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your comprehensive liquidity risk analysis including LCR, NSFR, gap analysis, and more.</p>
        </div>
      )}
    </div>
  );
};

export default LiquidityRisk;
