import { useState } from 'react';
import { Edit, Save, X } from 'lucide-react';

const Configurations = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Basel % Inclusion Configuration
  const [baselConfig, setBaselConfig] = useState([
    { id: 1, lineDescription: 'Intangible assets', baselInclusion: '60%' },
    { id: 2, lineDescription: 'Deferred tax assets', baselInclusion: '100%' },
    { id: 3, lineDescription: 'Goodwill', baselInclusion: '60%' },
    { id: 4, lineDescription: 'Other impairments', baselInclusion: '100%' }
  ]);

  // RWA Factors Configuration
  const [rwaConfig, setRwaConfig] = useState([
    { id: 1, rwaFactor: 'Equity-Quoted', adjFactor: '300%' },
    { id: 2, rwaFactor: 'Equity-Unquoted', adjFactor: '400%' },
    { id: 3, rwaFactor: 'Loan-NPL', adjFactor: '150%' },
    { id: 4, rwaFactor: 'Loan-PL', adjFactor: '100%' }
  ]);

  // Reporting Month Table Configuration
  const [reportingMonthConfig, setReportingMonthConfig] = useState([
    { id: 1, monthNumber: '1', reportingPer: '1' },
    { id: 2, monthNumber: '2', reportingPer: '2' },
    { id: 3, monthNumber: '3', reportingPer: '3' },
    { id: 4, monthNumber: '4', reportingPer: '4' },
    { id: 5, monthNumber: '5', reportingPer: '5' },
    { id: 6, monthNumber: '6', reportingPer: '6' },
    { id: 7, monthNumber: '7', reportingPer: '7' },
    { id: 8, monthNumber: '8', reportingPer: '8' },
    { id: 9, monthNumber: '9', reportingPer: '9' },
    { id: 10, monthNumber: '10', reportingPer: '10' },
    { id: 11, monthNumber: '11', reportingPer: '11' },
    { id: 12, monthNumber: '12', reportingPer: '12' }
  ]);

  // Gap Analysis Bracket Definitions Configuration
  const [gapAnalysisConfig, setGapAnalysisConfig] = useState([
    { id: 1, timeToMaturity: '0', maturityBracket: '<6 months' },
    { id: 2, timeToMaturity: '0.5', maturityBracket: '6 months - 1 year' },
    { id: 3, timeToMaturity: '1', maturityBracket: '1 - 2 years' },
    { id: 4, timeToMaturity: '2', maturityBracket: '2 - 3 years' },
    { id: 5, timeToMaturity: '3', maturityBracket: '3 - 5 years' },
    { id: 6, timeToMaturity: '5', maturityBracket: '> 5 years' }
  ]);

  // RBZ SRS Risk Weights Configuration
  const [srsRiskWeightsConfig, setSrsRiskWeightsConfig] = useState([
    { id: 1, assetClass: 'Domestic Sovereigns', rating: 'AAA to AA-', riskWeight: '0%' },
    { id: 2, assetClass: 'Domestic Sovereigns', rating: 'A+ to A-', riskWeight: '20%' },
    { id: 3, assetClass: 'Domestic Sovereigns', rating: 'BBB+ to BBB-', riskWeight: '50%' },
    { id: 4, assetClass: 'Domestic Sovereigns', rating: 'BB+ to B-', riskWeight: '100%' },
    { id: 5, assetClass: 'Domestic Sovereigns', rating: 'Below B-', riskWeight: '150%' },
    { id: 6, assetClass: 'Domestic Sovereigns', rating: 'Unrated', riskWeight: '100%' },
    { id: 7, assetClass: 'Banks', rating: 'AAA to AA-', riskWeight: '20%' },
    { id: 8, assetClass: 'Banks', rating: 'A+ to A-', riskWeight: '50%' },
    { id: 9, assetClass: 'Banks', rating: 'BBB+ to BBB-', riskWeight: '100%' },
    { id: 10, assetClass: 'Banks', rating: 'BB+ to B-', riskWeight: '100%' },
    { id: 11, assetClass: 'Banks', rating: 'Below B-', riskWeight: '150%' },
    { id: 12, assetClass: 'Banks', rating: 'Unrated', riskWeight: '100%' },
    { id: 13, assetClass: 'Corporates', rating: 'AAA to AA-', riskWeight: '20%' },
    { id: 14, assetClass: 'Corporates', rating: 'A+ to A-', riskWeight: '50%' },
    { id: 15, assetClass: 'Corporates', rating: 'BBB+ to BBB-', riskWeight: '100%' },
    { id: 16, assetClass: 'Corporates', rating: 'BB+ to B-', riskWeight: '100%' },
    { id: 17, assetClass: 'Corporates', rating: 'Below B-', riskWeight: '150%' },
    { id: 18, assetClass: 'Corporates', rating: 'Unrated', riskWeight: '100%' }
  ]);

  // RBZ SRS Provisioning Requirements Configuration
  const [srsProvisioningConfig, setSrsProvisioningConfig] = useState([
    { id: 1, srsTier: '1A-3C', description: 'Standard', provisioningRate: '1.5%' },
    { id: 2, srsTier: '4A-5B', description: 'Special Mention', provisioningRate: '10%' },
    { id: 3, srsTier: '6A-8C', description: 'Substandard', provisioningRate: '20%' },
    { id: 4, srsTier: '9', description: 'Doubtful', provisioningRate: '50%' },
    { id: 5, srsTier: '10', description: 'Loss', provisioningRate: '100%' }
  ]);

  // Shock Scenarios Configuration
  const [shockScenariosConfig, setShockScenariosConfig] = useState([
    { id: 1, scenarioName: 'Mild Recession', shockPercentage: '5%', description: 'Economic slowdown scenario', riskType: 'Credit Risk' },
    { id: 2, scenarioName: 'Severe Recession', shockPercentage: '15%', description: 'Deep economic crisis scenario', riskType: 'Credit Risk' },
    { id: 3, scenarioName: 'Interest Rate Shock', shockPercentage: '200bps', description: 'Rapid interest rate increase', riskType: 'Interest Rate Risk' },
    { id: 4, scenarioName: 'Currency Crisis', shockPercentage: '25%', description: 'Sharp currency depreciation', riskType: 'Foreign Exchange Risk' },
    { id: 5, scenarioName: 'Agricultural Crisis', shockPercentage: '30%', description: 'Drought impact on agricultural loans', riskType: 'Sector Risk' }
  ]);

  const handleEdit = (item, field, value) => {
    setEditingItem({ ...item, field });
    setEditValue(value);
  };

  const handleSave = (configType, itemId, field, newValue) => {
    const configSetters = {
      basel: setBaselConfig,
      rwa: setRwaConfig,
      reportingMonth: setReportingMonthConfig,
      gapAnalysis: setGapAnalysisConfig,
      srsRiskWeights: setSrsRiskWeightsConfig,
      srsProvisioning: setSrsProvisioningConfig,
      shockScenarios: setShockScenariosConfig
    };

    const configData = {
      basel: baselConfig,
      rwa: rwaConfig,
      reportingMonth: reportingMonthConfig,
      gapAnalysis: gapAnalysisConfig,
      srsRiskWeights: srsRiskWeightsConfig,
      srsProvisioning: srsProvisioningConfig,
      shockScenarios: shockScenariosConfig
    };

    const setter = configSetters[configType];
    const data = configData[configType];

    if (setter && data) {
      const updatedData = data.map(item => 
        item.id === itemId ? { ...item, [field]: newValue } : item
      );
      setter(updatedData);
    }

    setEditingItem(null);
    setEditValue('');
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditValue('');
  };

  const handleAddShockScenario = () => {
    const newId = Math.max(...shockScenariosConfig.map(item => item.id)) + 1;
    const newScenario = {
      id: newId,
      scenarioName: 'New Scenario',
      shockPercentage: '10%',
      description: 'Custom shock scenario',
      riskType: 'Credit Risk'
    };
    setShockScenariosConfig([...shockScenariosConfig, newScenario]);
  };

  const handleDeleteShockScenario = (id) => {
    setShockScenariosConfig(shockScenariosConfig.filter(item => item.id !== id));
  };

  const renderEditableCell = (item, field, value, configType) => {
    if (editingItem && editingItem.id === item.id && editingItem.field === field) {
      return (
        <div className="flex items-center space-x-1">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="text-xs border border-gray-300 px-1 py-0.5 w-20"
            autoFocus
          />
          <button
            onClick={() => handleSave(configType, item.id, field, editValue)}
            className="text-green-600 hover:text-green-800"
          >
            <Save className="h-3 w-3" />
          </button>
          <button
            onClick={handleCancel}
            className="text-red-600 hover:text-red-800"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-900">{value}</span>
        <button
          onClick={() => handleEdit(item, field, value)}
          className="ml-2 text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit className="h-3 w-3" />
        </button>
      </div>
    );
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Configurations</h2>
          <p className="text-xs text-gray-600">System Configuration Settings</p>
        </div>
      </div>

      {/* Configuration Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* RBZ SRS Risk Weights */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">RBZ SRS Risk Weights</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Asset Class</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Rating</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Risk Weight</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {srsRiskWeightsConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'assetClass', item.assetClass, 'srsRiskWeights')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'rating', item.rating, 'srsRiskWeights')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'riskWeight', item.riskWeight, 'srsRiskWeights')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'assetClass', item.assetClass)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RBZ SRS Provisioning Requirements */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">RBZ SRS Provisioning Requirements</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">SRS Tier</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Description</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Provisioning Rate</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {srsProvisioningConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'srsTier', item.srsTier, 'srsProvisioning')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'description', item.description, 'srsProvisioning')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'provisioningRate', item.provisioningRate, 'srsProvisioning')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'srsTier', item.srsTier)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Basel % Inclusion */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">Basel % Inclusion</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Line Description</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Basel % Inclusion</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baselConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'lineDescription', item.lineDescription, 'basel')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'baselInclusion', item.baselInclusion, 'basel')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'lineDescription', item.lineDescription)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RWA Factors */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">RWA Factors</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">RWA Factors</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Adj Factor</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rwaConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'rwaFactor', item.rwaFactor, 'rwa')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'adjFactor', item.adjFactor, 'rwa')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'rwaFactor', item.rwaFactor)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reporting Month Table */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">Reporting Month Table</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Month Number</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Reporting Per</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportingMonthConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'monthNumber', item.monthNumber, 'reportingMonth')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'reportingPer', item.reportingPer, 'reportingMonth')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'monthNumber', item.monthNumber)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gap Analysis Bracket Definitions */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">Gap Analysis Bracket Definitions - Liquidity</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Time to Maturity (Years)</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Maturity Bracket</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gapAnalysisConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'timeToMaturity', item.timeToMaturity, 'gapAnalysis')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'maturityBracket', item.maturityBracket, 'gapAnalysis')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item, 'timeToMaturity', item.timeToMaturity)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shock Scenarios Configuration */}
        <div className="bg-white border border-gray-200 overflow-hidden lg:col-span-2">
          <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-white">Shock Scenarios Configuration</h3>
            <button
              onClick={handleAddShockScenario}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
            >
              Add Shock Scenario
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Scenario Name</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Shock Percentage</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Description</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Risk Type</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-white tracking-wider w-20">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shockScenariosConfig.map((item, index) => (
                  <tr key={item.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'scenarioName', item.scenarioName, 'shockScenarios')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'shockPercentage', item.shockPercentage, 'shockScenarios')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'description', item.description, 'shockScenarios')}
                    </td>
                    <td className="px-3 py-2">
                      {renderEditableCell(item, 'riskType', item.riskType, 'shockScenarios')}
                    </td>
                    <td className="px-3 py-2 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <button
                          onClick={() => handleEdit(item, 'scenarioName', item.scenarioName)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteShockScenario(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Configurations;
