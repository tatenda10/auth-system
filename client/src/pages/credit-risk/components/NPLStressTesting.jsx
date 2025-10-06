import React, { useState } from 'react';
import { 
  nplStressScenarios, 
  nplPortfolioData, 
  nplStressCalculations, 
  sampleNPLStressResults,
  nplStressHelpers 
} from '../../../data/nplStressTestingData';

const NPLStressTesting = () => {
  const [selectedScenario, setSelectedScenario] = useState('baseline');
  const [showDetailedResults, setShowDetailedResults] = useState(false);

  // Get current scenario data
  const getCurrentScenario = () => {
    if (selectedScenario in nplStressScenarios.baseScenarios) {
      return nplStressScenarios.baseScenarios[selectedScenario];
    }
    if (selectedScenario in nplStressScenarios.zimbabweSpecific) {
      return nplStressScenarios.zimbabweSpecific[selectedScenario];
    }
    return nplStressScenarios.baseScenarios.baseline;
  };

  // Get stress testing results
  const getStressResults = () => {
    return sampleNPLStressResults[selectedScenario] || sampleNPLStressResults.baseline;
  };

  // Calculate scenario impact vs baseline
  const calculateScenarioImpact = () => {
    const baseline = sampleNPLStressResults.baseline;
    const current = getStressResults();
    
    return {
      nplChange: current.totalNPLs - baseline.totalNPLs,
      nplRatioChange: current.nplRatio - baseline.nplRatio,
      provisionChange: current.totalProvisions - baseline.totalProvisions,
      capitalImpactChange: current.capitalImpact - baseline.capitalImpact
    };
  };

  const currentScenario = getCurrentScenario();
  const stressResults = getStressResults();
  const scenarioImpact = calculateScenarioImpact();

  // Get only base scenarios for dropdown
  const getBaseScenarios = () => {
    return Object.entries(nplStressScenarios.baseScenarios).map(([key, scenario]) => ({
      key,
      name: scenario.name
    }));
  };

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600">Total NPLs</div>
          <div className="text-xl font-semibold text-gray-900">
            {nplStressHelpers.formatCurrency(stressResults.totalNPLs)}
          </div>
          <div className={`text-xs ${scenarioImpact.nplChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
            {scenarioImpact.nplChange >= 0 ? '+' : ''}{nplStressHelpers.formatCurrency(scenarioImpact.nplChange)}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600">NPL Ratio</div>
          <div className="text-xl font-semibold text-gray-900">
            {nplStressHelpers.formatPercentage(stressResults.nplRatio)}
          </div>
          <div className={`text-xs ${scenarioImpact.nplRatioChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
            {scenarioImpact.nplRatioChange >= 0 ? '+' : ''}{nplStressHelpers.formatPercentage(scenarioImpact.nplRatioChange)}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600">Total Provisions</div>
          <div className="text-xl font-semibold text-gray-900">
            {nplStressHelpers.formatCurrency(stressResults.totalProvisions)}
          </div>
          <div className={`text-xs ${scenarioImpact.provisionChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
            {scenarioImpact.provisionChange >= 0 ? '+' : ''}{nplStressHelpers.formatCurrency(scenarioImpact.provisionChange)}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-xs text-gray-600">Capital Impact</div>
          <div className="text-xl font-semibold text-gray-900">
            {nplStressHelpers.formatCurrency(stressResults.capitalImpact)}
          </div>
          <div className={`text-xs ${scenarioImpact.capitalImpactChange >= 0 ? 'text-red-600' : 'text-green-600'}`}>
            {scenarioImpact.capitalImpactChange >= 0 ? '+' : ''}{nplStressHelpers.formatCurrency(scenarioImpact.capitalImpactChange)}
          </div>
        </div>
      </div>

      {/* Scenario Selection Dropdown */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">NPL Stress Testing Scenarios</h3>
          <button
            onClick={() => setShowDetailedResults(!showDetailedResults)}
            className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
          >
            {showDetailedResults ? 'Hide' : 'Show'} Detailed Results
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-700 mb-1">Select Scenario:</label>
            <select
              value={selectedScenario}
              onChange={(e) => setSelectedScenario(e.target.value)}
              className="w-full text-xs border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {getBaseScenarios().map((scenario) => (
                <option key={scenario.key} value={scenario.key}>
                  {scenario.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Economic Indicators and Impact Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Selected Scenario: {currentScenario.name}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Economic Indicators */}
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">Economic Indicators</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">GDP Growth:</span>
                <span className="text-xs font-medium">{currentScenario.economicIndicators.gdpGrowth}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Inflation Rate:</span>
                <span className="text-xs font-medium">{currentScenario.economicIndicators.inflationRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Interest Rate:</span>
                <span className="text-xs font-medium">{currentScenario.economicIndicators.interestRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Unemployment Rate:</span>
                <span className="text-xs font-medium">{currentScenario.economicIndicators.unemploymentRate}%</span>
              </div>
            </div>
          </div>

          {/* NPL Impact Factors */}
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">NPL Impact Factors</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Overall NPL Increase:</span>
                <span className="text-xs font-medium">{currentScenario.nplImpact.overallNPLIncrease}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Retail NPL Increase:</span>
                <span className="text-xs font-medium">{currentScenario.nplImpact.retailNPLIncrease}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Corporate NPL Increase:</span>
                <span className="text-xs font-medium">{currentScenario.nplImpact.corporateNPLIncrease}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Agricultural NPL Increase:</span>
                <span className="text-xs font-medium">{currentScenario.nplImpact.agriculturalNPLIncrease}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Results Table */}
      {showDetailedResults && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Detailed Results by Category</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Base NPLs
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stressed NPLs
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Increase %
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Provisions
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capital Impact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {nplPortfolioData.byCategory.map((category, index) => {
                  const baseNPLs = category.currentNPLs;
                  const stressFactor = currentScenario.nplImpact[category.category.toLowerCase().replace(' ', '') + 'NPLIncrease'] || 0;
                  const stressedNPLs = baseNPLs * (1 + stressFactor / 100);
                  const provisions = stressedNPLs * 0.90; // 90% provision rate
                  const capitalImpact = (stressedNPLs - provisions) * (category.subCategories[0]?.riskWeight || 100) / 100 * 0.08;
                  
                  return (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-2 py-1 text-xs font-medium text-gray-900">{category.category}</td>
                      <td className="px-2 py-1 text-xs text-gray-900 text-right">
                        {nplStressHelpers.formatCurrency(baseNPLs)}
                      </td>
                      <td className="px-2 py-1 text-xs text-gray-900 text-right">
                        {nplStressHelpers.formatCurrency(stressedNPLs)}
                      </td>
                      <td className="px-2 py-1 text-xs text-gray-900 text-right">
                        {nplStressHelpers.formatPercentage(stressFactor)}
                      </td>
                      <td className="px-2 py-1 text-xs text-gray-900 text-right">
                        {nplStressHelpers.formatCurrency(provisions)}
                      </td>
                      <td className="px-2 py-1 text-xs text-gray-900 text-right">
                        {nplStressHelpers.formatCurrency(capitalImpact)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default NPLStressTesting;
