import React, { useState } from 'react';
import { BarChart3, Shield } from 'lucide-react';
import { 
  marketWideStressScenarios, 
  marketWideLiquidityFactors, 
  marketWideStressResults, 
  marketWideRiskMitigation, 
  marketWideMonitoring,
  marketWideHelpers 
} from '../data/marketWideStressData';

const MarketWideStressTesting = () => {
  const [selectedScenario, setSelectedScenario] = useState('baseline');
  const [showZimbabweScenarios, setShowZimbabweScenarios] = useState(true);
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  const [showRiskMitigation, setShowRiskMitigation] = useState(false);

  // Get current scenario data
  const getCurrentScenario = () => {
    if (selectedScenario in marketWideStressScenarios.baseScenarios) {
      return marketWideStressScenarios.baseScenarios[selectedScenario];
    }
    if (selectedScenario in marketWideStressScenarios.zimbabweSpecific) {
      return marketWideStressScenarios.zimbabweSpecific[selectedScenario];
    }
    return marketWideStressScenarios.baseScenarios.baseline;
  };

  // Get stress testing results
  const getStressResults = () => {
    return marketWideStressResults[selectedScenario] || marketWideStressResults.baseline;
  };

  // Calculate scenario impact
  const calculateScenarioImpact = () => {
    const scenario = getCurrentScenario();
    const results = getStressResults();
    
    return {
      liquidityReduction: results.totalLiquidity - marketWideStressResults.baseline.totalLiquidity,
      outflowIncrease: results.netCashOutflows - marketWideStressResults.baseline.netCashOutflows,
      lcrReduction: results.lcr - marketWideStressResults.baseline.lcr,
      nsfrReduction: results.nsfr - marketWideStressResults.baseline.nsfr
    };
  };

  const currentScenario = getCurrentScenario();
  const stressResults = getStressResults();
  const scenarioImpact = calculateScenarioImpact();

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Market-Wide Stress Testing</h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowDetailedResults(!showDetailedResults)}
              className="px-3 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
              title={showDetailedResults ? 'Hide Detailed Results' : 'Show Detailed Results'}
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setShowRiskMitigation(!showRiskMitigation)}
              className="px-3 py-2 bg-green-600 text-white text-xs rounded hover:bg-green-700"
              title={showRiskMitigation ? 'Hide Risk Mitigation' : 'Show Risk Mitigation'}
            >
              <Shield className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-700 mb-1">Select Scenario:</label>
            <select
              value={selectedScenario}
              onChange={(e) => setSelectedScenario(e.target.value)}
              className="w-full text-xs border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(marketWideStressScenarios.baseScenarios).map(([key, scenario]) => (
                <option key={key} value={key}>
                  {scenario.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Scenario Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-xs font-semibold text-gray-900 mb-4">Selected Scenario: {currentScenario.name}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Market Conditions */}
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">Market Conditions</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Interbank Rate:</span>
                <span className="text-xs font-medium">{currentScenario.marketConditions.interbankRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Government Bond Yield:</span>
                <span className="text-xs font-medium">{currentScenario.marketConditions.governmentBondYield}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Corporate Bond Spread:</span>
                <span className="text-xs font-medium">{currentScenario.marketConditions.corporateBondSpread}bps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">FX Volatility:</span>
                <span className="text-xs font-medium">{currentScenario.marketConditions.foreignExchangeVolatility}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Equity Volatility:</span>
                <span className="text-xs font-medium">{currentScenario.marketConditions.equityMarketVolatility}%</span>
              </div>
            </div>
          </div>

          {/* Liquidity Impact Factors */}
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-3">Liquidity Impact Factors</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Deposit Runoff:</span>
                <span className="text-xs font-medium">{currentScenario.liquidityImpact.depositRunoff}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Wholesale Funding Cost:</span>
                <span className="text-xs font-medium">+{currentScenario.liquidityImpact.wholesaleFundingCost}bps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Asset Liquidity:</span>
                <span className="text-xs font-medium">-{currentScenario.liquidityImpact.assetLiquidity}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Market Access:</span>
                <span className="text-xs font-medium">-{currentScenario.liquidityImpact.marketAccess}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Counterparty Risk:</span>
                <span className="text-xs font-medium">+{currentScenario.liquidityImpact.counterpartyRisk}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zimbabwe-Specific Factors */}
        {currentScenario.specificFactors && (
          <div className="mt-4">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Zimbabwe-Specific Factors</h4>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
              {currentScenario.specificFactors.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Stress Testing Results */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-xs font-semibold text-gray-900 mb-4">Stress Testing Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Total Liquidity</div>
            <div className="text-xl font-semibold text-gray-900">
              {marketWideHelpers.formatCurrency(stressResults.totalLiquidity)}
            </div>
            <div className="text-xs text-gray-600">
              {scenarioImpact.liquidityReduction < 0 ? '-' : '+'}
              {marketWideHelpers.formatCurrency(Math.abs(scenarioImpact.liquidityReduction))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Net Cash Outflows</div>
            <div className="text-xl font-semibold text-gray-900">
              {marketWideHelpers.formatCurrency(stressResults.netCashOutflows)}
            </div>
            <div className="text-xs text-gray-600">
              {scenarioImpact.outflowIncrease > 0 ? '+' : ''}
              {marketWideHelpers.formatCurrency(scenarioImpact.outflowIncrease)}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Liquidity Coverage Ratio</div>
            <div className="text-xl font-semibold text-gray-900">
              {marketWideHelpers.formatPercentage(stressResults.lcr)}
            </div>
            <div className="text-xs text-gray-600">
              {scenarioImpact.lcrReduction < 0 ? '' : '+'}
              {marketWideHelpers.formatPercentage(scenarioImpact.lcrReduction)}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Net Stable Funding Ratio</div>
            <div className="text-xl font-semibold text-gray-900">
              {marketWideHelpers.formatPercentage(stressResults.nsfr)}
            </div>
            <div className="text-xs text-gray-600">
              {scenarioImpact.nsfrReduction < 0 ? '' : '+'}
              {marketWideHelpers.formatPercentage(scenarioImpact.nsfrReduction)}
            </div>
          </div>
        </div>

        {/* Status and Buffer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Liquidity Status</div>
            <div className={`text-xl font-semibold ${marketWideHelpers.getStatusColor(stressResults.status)}`}>
              {stressResults.status}
            </div>
            <div className="text-xs text-gray-600">Overall liquidity position</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-xs text-gray-600">Liquidity Buffer</div>
            <div className="text-xl font-semibold text-gray-900">
              {marketWideHelpers.formatCurrency(stressResults.liquidityBuffer)}
            </div>
            <div className="text-xs text-gray-600">Available liquidity cushion</div>
          </div>
        </div>
      </div>

      {/* Detailed Results */}
      {showDetailedResults && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-xs font-semibold text-gray-900 mb-4">Detailed Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Funding Sources Impact */}
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Funding Sources Impact</h4>
              <div className="space-y-3">
                {Object.entries(marketWideLiquidityFactors.fundingSources).map(([key, source]) => {
                  const stressFactor = currentScenario.liquidityImpact.depositRunoff / 100;
                  const stressedAmount = marketWideHelpers.calculateStressImpact(source.baseAmount, stressFactor * 100);
                  
                  return (
                    <div key={key} className="border border-gray-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-900">{source.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          source.stability === 'High' 
                            ? 'bg-green-100 text-green-800'
                            : source.stability === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {source.stability}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Base: {marketWideHelpers.formatCurrency(source.baseAmount)} | 
                        Stressed: {marketWideHelpers.formatCurrency(stressedAmount)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Asset Liquidity Impact */}
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Asset Liquidity Impact</h4>
              <div className="space-y-3">
                {Object.entries(marketWideLiquidityFactors.assetLiquidity).map(([key, asset]) => {
                  const stressFactor = currentScenario.liquidityImpact.assetLiquidity / 100;
                  const stressedAmount = marketWideHelpers.calculateStressImpact(asset.baseAmount, stressFactor * 100);
                  
                  return (
                    <div key={key} className="border border-gray-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-900">{asset.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          asset.liquidity === 'High' 
                            ? 'bg-green-100 text-green-800'
                            : asset.liquidity === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {asset.liquidity}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Base: {marketWideHelpers.formatCurrency(asset.baseAmount)} | 
                        Stressed: {marketWideHelpers.formatCurrency(stressedAmount)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Risk Mitigation */}
      {showRiskMitigation && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="text-xs font-semibold text-gray-900 mb-4">Risk Mitigation Strategies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contingency Funding Plans */}
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Contingency Funding Plans</h4>
              <div className="space-y-3">
                {marketWideRiskMitigation.liquidityRiskManagement.contingencyFundingPlans.map((plan, index) => (
                  <div key={index} className="border border-gray-200 rounded p-3">
                    <div className="font-medium text-xs text-gray-900">{plan.source}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      <strong>Availability:</strong> {plan.availability} | 
                      <strong> Cost:</strong> {plan.cost} | 
                      <strong> Access Time:</strong> {plan.accessTime}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      <strong>Conditions:</strong> {plan.conditions}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset Liquidity Management */}
            <div>
              <h4 className="text-xs font-medium text-gray-700 mb-3">Asset Liquidity Management</h4>
              <div className="space-y-3">
                {marketWideRiskMitigation.liquidityRiskManagement.assetLiquidityManagement.map((strategy, index) => (
                  <div key={index} className="border border-gray-200 rounded p-3">
                    <div className="font-medium text-xs text-gray-900">{strategy.strategy}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      <strong>Target:</strong> {strategy.target} | 
                      <strong> Current:</strong> {strategy.current}
                    </div>
                    <div className={`text-xs mt-1 ${
                      strategy.status === 'Below target' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      <strong>Status:</strong> {strategy.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Risk Indicators */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h3 className="text-xs font-semibold text-gray-900 mb-4">Key Risk Indicators</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Indicator
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current
                </th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Threshold
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {marketWideMonitoring.keyRiskIndicators.map((indicator, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{indicator.indicator}</td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {marketWideHelpers.formatPercentage(indicator.current)}
                  </td>
                  <td className="px-2 py-1 text-xs text-gray-900 text-right">
                    {marketWideHelpers.formatPercentage(indicator.threshold)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`text-xs ${
                      indicator.trend === 'increasing' ? 'text-red-600' : 
                      indicator.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {indicator.trend}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      indicator.status === 'Safe' 
                        ? 'bg-green-100 text-green-800'
                        : indicator.status === 'Warning'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {indicator.status}
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
};

export default MarketWideStressTesting;
