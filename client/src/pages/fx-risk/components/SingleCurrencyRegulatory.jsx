import React, { useState } from 'react';
import { 
  singleCurrencyRegulatory, 
  singleCurrencyPositions, 
  singleCurrencyRiskAnalysis, 
  singleCurrencyStressTesting, 
  singleCurrencyRiskMitigation,
  singleCurrencyHelpers 
} from '../../../data/singleCurrencyRegulatoryData';

const SingleCurrencyRegulatory = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('currentMonth');
  const [selectedMethod, setSelectedMethod] = useState('method1');
  const [showStressTesting, setShowStressTesting] = useState(false);
  const [selectedStressScenario, setSelectedStressScenario] = useState('currencyAppreciation');

  // Get current period data
  const getCurrentData = () => {
    return singleCurrencyPositions[selectedPeriod] || singleCurrencyPositions.currentMonth;
  };

  // Get calculation method
  const getCalculationMethod = () => {
    return singleCurrencyRegulatory.calculationMethods[selectedMethod];
  };

  // Calculate regulatory compliance
  const calculateCompliance = () => {
    const data = getCurrentData();
    const results = {};
    
    Object.entries(data).forEach(([currency, position]) => {
      const method = getCalculationMethod();
      let percentage;
      
      if (selectedMethod === 'method1') {
        percentage = position.netPositionPercent;
      } else {
        percentage = position.grossPositionPercent;
      }
      
      results[currency] = {
        ...position,
        calculatedPercentage: percentage,
        compliant: percentage <= singleCurrencyRegulatory.rbzLimits.singleCurrencyLimit,
        status: singleCurrencyHelpers.checkCompliance(percentage)
      };
    });
    
    return results;
  };

  const currentData = getCurrentData();
  const complianceResults = calculateCompliance();
  const calculationMethod = getCalculationMethod();

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Single Currency Regulatory 5% Calculation</h3>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="text-xs border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="currentMonth">Current Month</option>
              <option value="previousMonth">Previous Month</option>
              <option value="forecast">Forecast</option>
            </select>
            <select
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="text-xs border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="method1">Method 1: Net Open Position</option>
              <option value="method2">Method 2: Gross Position</option>
            </select>
            <button
              onClick={() => setShowStressTesting(!showStressTesting)}
              className="px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
            >
              {showStressTesting ? 'Hide' : 'Show'} Stress Testing
            </button>
          </div>
        </div>

        {/* Calculation Method Info */}
        <div className="bg-white p-3 rounded border border-gray-200">
          <h4 className="text-xs font-medium text-gray-700 mb-2">{calculationMethod.name}</h4>
          <p className="text-xs text-gray-600 mb-2">{calculationMethod.description}</p>
          <p className="text-xs text-gray-600">
            <strong>Formula:</strong> {calculationMethod.formula}
          </p>
        </div>
      </div>

      {/* Regulatory Compliance Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Regulatory Compliance Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-xs text-gray-600">Regulatory Limit</div>
            <div className="text-xl font-semibold text-gray-900">
              {singleCurrencyHelpers.formatPercentage(singleCurrencyRegulatory.rbzLimits.singleCurrencyLimit)}
            </div>
            <div className="text-xs text-gray-600">of regulatory capital</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-xs text-gray-600">Compliant Currencies</div>
            <div className="text-xl font-semibold text-green-600">
              {singleCurrencyRiskAnalysis.regulatoryCompliance.compliantCurrencies.length}
            </div>
            <div className="text-xs text-gray-600">out of {Object.keys(currentData).length} currencies</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-xs text-gray-600">Overall Compliance</div>
            <div className={`text-xl font-semibold ${
              singleCurrencyRiskAnalysis.regulatoryCompliance.overallCompliance === 'Compliant' 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {singleCurrencyRiskAnalysis.regulatoryCompliance.overallCompliance}
            </div>
            <div className="text-xs text-gray-600">
              {singleCurrencyHelpers.formatPercentage(singleCurrencyRiskAnalysis.regulatoryCompliance.complianceScore)} score
            </div>
          </div>
        </div>

        {/* Currency Positions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Currency
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Long Position
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Short Position
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Position
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gross Position
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {selectedMethod === 'method1' ? 'Net Position %' : 'Gross Position %'}
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(complianceResults).map(([currency, position]) => (
                <tr key={currency}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{currency}</td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {singleCurrencyHelpers.formatCurrency(position.longPosition)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {singleCurrencyHelpers.formatCurrency(position.shortPosition)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {singleCurrencyHelpers.formatCurrency(position.netPosition)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {singleCurrencyHelpers.formatCurrency(position.grossPosition)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {singleCurrencyHelpers.formatPercentage(position.calculatedPercentage)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      position.status === 'Compliant' 
                        ? 'bg-green-100 text-green-800'
                        : position.status === 'At Limit'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {position.status}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      position.riskLevel === 'Low' 
                        ? 'bg-green-100 text-green-800'
                        : position.riskLevel === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {position.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk Analysis */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Risk Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">Concentration Analysis</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Largest Exposure:</span>
                <span className="text-xs font-medium">{singleCurrencyRiskAnalysis.concentrationAnalysis.largestExposure}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Largest Exposure %:</span>
                <span className="text-xs font-medium">
                  {singleCurrencyHelpers.formatPercentage(singleCurrencyRiskAnalysis.concentrationAnalysis.largestExposurePercent)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Top 3 Exposures:</span>
                <span className="text-xs font-medium">
                  {singleCurrencyRiskAnalysis.concentrationAnalysis.top3Exposures.join(', ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Diversification Score:</span>
                <span className="text-xs font-medium">
                  {singleCurrencyHelpers.formatPercentage(singleCurrencyRiskAnalysis.concentrationAnalysis.diversificationScore)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">Required Actions</h4>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
              {singleCurrencyRiskAnalysis.regulatoryCompliance.requiredActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stress Testing */}
      {showStressTesting && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Stress Testing</h3>
          
          <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-2">Select Stress Scenario:</label>
            <select
              value={selectedStressScenario}
              onChange={(e) => setSelectedStressScenario(e.target.value)}
              className="text-xs border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(singleCurrencyStressTesting.scenarios).map(([key, scenario]) => (
                <option key={key} value={key}>{scenario.name}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Currency
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Position
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stress Impact
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    New Position
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    New Percentage
                  </th>
                  <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(singleCurrencyStressTesting.stressResults[selectedStressScenario] || {}).map(([currency, result]) => (
                  <tr key={currency}>
                    <td className="px-2 py-1 text-xs font-medium text-gray-900">{currency}</td>
                    <td className="px-2 py-1 text-xs text-gray-900 text-right">
                      {singleCurrencyHelpers.formatCurrency(currentData[currency]?.netPosition || 0)}
                    </td>
                    <td className="px-2 py-1 text-xs text-gray-900 text-right">
                      {singleCurrencyHelpers.formatCurrency(result.impact)}
                    </td>
                    <td className="px-2 py-1 text-xs text-gray-900 text-right">
                      {singleCurrencyHelpers.formatCurrency(result.newPosition)}
                    </td>
                    <td className="px-2 py-1 text-xs text-gray-900 text-right">
                      {singleCurrencyHelpers.formatPercentage(result.newPercent)}
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        result.newPercent <= 5.0 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {result.newPercent <= 5.0 ? 'Compliant' : 'Exceeded'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default SingleCurrencyRegulatory;
