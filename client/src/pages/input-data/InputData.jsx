import { useState } from 'react';
import { BarChart3, TrendingUp, Shield } from 'lucide-react';
import BalanceSheet from './BalanceSheet';
import IncomeStatement from './IncomeStatement';
import CreditRiskAssessment from './CreditRiskAssessment';

const InputData = () => {
  const [activeTab, setActiveTab] = useState('balance-sheet');

  const tabs = [
    { id: 'balance-sheet', name: 'Balance Sheet', icon: BarChart3 },
    { id: 'income-statement', name: 'Income Statement', icon: TrendingUp },
    { id: 'credit-risk', name: 'Credit Risk Assessment', icon: Shield },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'balance-sheet':
        return <BalanceSheet />;
      case 'income-statement':
        return <IncomeStatement />;
      case 'credit-risk':
        return <CreditRiskAssessment />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-1 py-2">
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-md font-bold text-gray-900">Input Data Management</h1>
          <p className="mt-1 text-gray-600">
            Manage balance sheet and income statement data for ALM analysis
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div >
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default InputData;
