import React, { useState } from 'react';
import { BarChart3, FileText } from 'lucide-react';
import { 
  depositTypeConcentrationData, 
  depositTypeRiskAnalysis, 
  depositTypeStressTesting, 
  depositTypeHelpers 
} from '../data/depositTypeConcentrationData';

const DepositTypeConcentration = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('currentMonth');
  const [showStressTesting, setShowStressTesting] = useState(false);
  const [selectedStressScenario, setSelectedStressScenario] = useState('depositRunoff');
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  // Get current period data
  const getCurrentData = () => {
    return depositTypeConcentrationData[selectedPeriod] || depositTypeConcentrationData.currentMonth;
  };

  // Calculate concentration metrics
  const calculateConcentrationMetrics = () => {
    const data = getCurrentData();
    const totalDeposits = data.totalDeposits;
    
    // Calculate Herfindahl Index
    const herfindahlIndex = data.byType.reduce((sum, type) => {
      const share = type.percentage / 100;
      return sum + (share * share);
    }, 0);

    // Calculate diversification score
    const diversificationScore = (1 - herfindahlIndex) * 100;

    // Calculate weighted average risk
    const totalWeightedAmount = data.byType.reduce((sum, type) => sum + type.weightedAmount, 0);
    const weightedAverageRisk = (totalWeightedAmount / totalDeposits) * 100;

    return {
      herfindahlIndex,
      diversificationScore,
      weightedAverageRisk,
      totalDeposits
    };
  };

  const currentData = getCurrentData();
  const concentrationMetrics = calculateConcentrationMetrics();

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Deposit Type Concentration Analysis</h3>
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
            <button
              onClick={() => setShowStressTesting(!showStressTesting)}
              className="px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
              title={showStressTesting ? 'Hide Stress Testing' : 'Show Stress Testing'}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowDetailedAnalysis(!showDetailedAnalysis)}
              className="px-3 py-2 bg-green-600 text-white text-xs rounded hover:bg-green-700"
              title={showDetailedAnalysis ? 'Hide Detailed Analysis' : 'Show Detailed Analysis'}
            >
              <FileText className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-xs text-gray-600">Total Deposits</div>
            <div className="text-xl font-semibold text-gray-900">
              {depositTypeHelpers.formatCurrency(concentrationMetrics.totalDeposits)}
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-xs text-gray-600">Diversification Score</div>
            <div className="text-xl font-semibold text-gray-900">
              {depositTypeHelpers.formatPercentage(concentrationMetrics.diversificationScore)}
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-xs text-gray-600">Herfindahl Index</div>
            <div className="text-xl font-semibold text-gray-900">
              {concentrationMetrics.herfindahlIndex.toFixed(3)}
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-xs text-gray-600">Weighted Risk</div>
            <div className="text-xl font-semibold text-gray-900">
              {depositTypeHelpers.formatPercentage(concentrationMetrics.weightedAverageRisk)}
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Type Concentration Table */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Deposit Type Concentration</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deposit Type
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Regulatory Limit
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stability
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weighted Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.byType.map((depositType, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{depositType.type}</td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {depositTypeHelpers.formatCurrency(depositType.amount)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {depositTypeHelpers.formatPercentage(depositType.percentage)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {depositTypeHelpers.formatPercentage(depositType.regulatoryLimit)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      depositType.status === 'Compliant' 
                        ? 'bg-green-100 text-green-800'
                        : depositType.status === 'Warning'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {depositType.status}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      depositType.riskLevel === 'Low' 
                        ? 'bg-green-100 text-green-800'
                        : depositType.riskLevel === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {depositType.riskLevel}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      depositType.stability === 'High' 
                        ? 'bg-green-100 text-green-800'
                        : depositType.stability === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {depositType.stability}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {depositTypeHelpers.formatCurrency(depositType.weightedAmount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk Analysis */}
      {showDetailedAnalysis && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Risk Analysis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Concentration Risk</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">High Concentration Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.concentrationRisk.highConcentration.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Medium Concentration Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.concentrationRisk.mediumConcentration.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Low Concentration Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.concentrationRisk.lowConcentration.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Diversification Score:</span>
                  <span className="text-xs font-medium">
                    {depositTypeHelpers.formatPercentage(depositTypeRiskAnalysis.concentrationRisk.diversificationScore)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Stability Analysis</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">High Stability Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.stabilityAnalysis.highStability.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Medium Stability Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.stabilityAnalysis.mediumStability.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Low Stability Types:</span>
                  <span className="text-xs font-medium">
                    {depositTypeRiskAnalysis.stabilityAnalysis.lowStability.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Overall Stability Score:</span>
                  <span className="text-xs font-medium">
                    {depositTypeHelpers.formatPercentage(depositTypeRiskAnalysis.stabilityAnalysis.overallStabilityScore)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="mt-6">
            <h4 className="text-xs font-medium text-gray-700 mb-3">Regulatory Compliance</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <div className="text-xs text-gray-600">Compliant Types</div>
                <div className="text-xl font-semibold text-green-600">
                  {depositTypeRiskAnalysis.regulatoryCompliance.compliantTypes}
                </div>
                <div className="text-xs text-gray-600">
                  out of {depositTypeRiskAnalysis.regulatoryCompliance.totalTypes}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <div className="text-xs text-gray-600">Compliance Rate</div>
                <div className="text-xl font-semibold text-green-600">
                  {depositTypeHelpers.formatPercentage(depositTypeRiskAnalysis.regulatoryCompliance.complianceRate)}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <div className="text-xs text-gray-600">Risk Distribution</div>
                <div className="text-xs text-gray-600">
                  Low: {depositTypeRiskAnalysis.regulatoryCompliance.riskLevels.low} | 
                  Medium: {depositTypeRiskAnalysis.regulatoryCompliance.riskLevels.medium} | 
                  High: {depositTypeRiskAnalysis.regulatoryCompliance.riskLevels.high}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
              {Object.entries(depositTypeStressTesting.scenarios).map(([key, scenario]) => (
                <option key={key} value={key}>{scenario.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Scenario Description</h4>
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <div className="text-xs text-gray-900 font-medium">
                  {depositTypeStressTesting.scenarios[selectedStressScenario].name}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {depositTypeStressTesting.scenarios[selectedStressScenario].description}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  <strong>Impact:</strong> {depositTypeStressTesting.scenarios[selectedStressScenario].impact}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Stress Results</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Total Deposits:</span>
                  <span className="text-xs font-medium">
                    {depositTypeHelpers.formatCurrency(depositTypeStressTesting.stressResults[selectedStressScenario].totalDeposits)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Reduction:</span>
                  <span className="text-xs font-medium">
                    {depositTypeHelpers.formatCurrency(depositTypeStressTesting.stressResults[selectedStressScenario].reduction)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Reduction %:</span>
                  <span className="text-xs font-medium">
                    {depositTypeHelpers.formatPercentage(depositTypeStressTesting.stressResults[selectedStressScenario].reductionPercent)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">Impact:</span>
                  <span className="text-xs font-medium">
                    {depositTypeStressTesting.stressResults[selectedStressScenario].impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DepositTypeConcentration;
