import { useState } from 'react';
import { Download, Calendar, TrendingUp, TrendingDown, BarChart3, Shield, CheckCircle, XCircle, AlertTriangle, Users, FileText, Settings, Database, Activity, Flag } from 'lucide-react';
import { 
  modelValidationData, 
  modelGovernanceData, 
  backTestingData,
  modelRiskAssessmentData,
  modelInventoryData,
  validationResultsData
} from '../../data/modelRiskData';
import {
  rbzModelValidationFramework,
  rbzModelGovernanceStructure,
  rbzModelRiskAssessment,
  rbzBackTestingFramework,
  rbzModelRiskReporting,
  rbzModelRiskComplianceStatus
} from '../../data/rbzModelRiskData';

const ModelRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [activeTab, setActiveTab] = useState('rbz-compliance');


  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderTabs = () => (
    <div className="border-b border-gray-200 mb-4">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'rbz-compliance', name: 'RBZ Compliance', icon: Flag },
          { id: 'validation', name: 'Model Validation', icon: CheckCircle },
          { id: 'governance', name: 'Model Governance', icon: Shield },
          { id: 'backtesting', name: 'Back-Testing', icon: TrendingUp },
          { id: 'assessment', name: 'Risk Assessment', icon: AlertTriangle },
          { id: 'inventory', name: 'Model Inventory', icon: Database }
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

  const renderValidationFramework = () => (
    <div className="space-y-4">
      {/* Validation Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Total Models</p>
              <p className="text-lg font-bold text-gray-900">{modelValidationData.totalModels}</p>
            </div>
            <Database className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Validated</p>
              <p className="text-lg font-bold text-green-600">{modelValidationData.validatedModels}</p>
            </div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Pending</p>
              <p className="text-lg font-bold text-yellow-600">{modelValidationData.pendingModels}</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Failed</p>
              <p className="text-lg font-bold text-red-600">{modelValidationData.failedModels}</p>
            </div>
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      {/* Validation Framework */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Validation Framework</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Validation Components */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-900">Validation Components</h4>
              {modelValidationData.components.map((component, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-xs font-medium text-gray-900">{component.name}</h5>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      component.status === 'Passed' ? 'bg-green-100 text-green-800' :
                      component.status === 'Failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {component.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{component.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    Last validated: {component.lastValidated}
                  </div>
                </div>
              ))}
            </div>

            {/* Validation Process */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-900">Validation Process</h4>
              <div className="space-y-2">
                {modelValidationData.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xs font-medium text-gray-900">{step.name}</h5>
                      <p className="text-xs text-gray-600">{step.description}</p>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        {step.responsible}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Validation Results */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Validation Results</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Validated</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Review</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {validationResultsData.map((model, index) => (
                <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div>
                      <div className="text-xs font-medium text-gray-900">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.description}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.type}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      model.status === 'Validated' ? 'bg-green-100 text-green-800' :
                      model.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.lastValidated}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.nextReview}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      model.riskRating === 'Low' ? 'bg-green-100 text-green-800' :
                      model.riskRating === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {model.riskRating}
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

  const renderGovernanceStructure = () => (
    <div className="space-y-4">
      {/* Governance Overview */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Governance Structure</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {modelGovernanceData.structure.map((level, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <div className="flex items-center mb-2">
                  <Users className="h-4 w-4 text-blue-600 mr-2" />
                  <h4 className="text-xs font-semibold text-gray-900">{level.name}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2">{level.description}</p>
                <div className="space-y-1">
                  {level.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="text-xs text-gray-700">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governance Policies */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Governance Policies & Procedures</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {modelGovernanceData.policies.map((policy, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-medium text-gray-900">{policy.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    policy.status === 'Active' ? 'bg-green-100 text-green-800' :
                    policy.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {policy.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{policy.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <FileText className="h-3 w-3 mr-1" />
                  Last updated: {policy.lastUpdated}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approval Workflow */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Approval Workflow</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {modelGovernanceData.workflow.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-medium text-gray-900">{step.name}</h4>
                  <p className="text-xs text-gray-600">{step.description}</p>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    {step.approver}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    step.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    step.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {step.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBackTesting = () => (
    <div className="space-y-4">
      {/* Back-Testing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Models Tested</p>
              <p className="text-lg font-bold text-gray-900">{backTestingData.modelsTested}</p>
            </div>
            <Activity className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Test Period</p>
              <p className="text-lg font-bold text-gray-900">{backTestingData.testPeriod}</p>
            </div>
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Success Rate</p>
              <p className="text-lg font-bold text-gray-900">{backTestingData.successRate}%</p>
            </div>
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Back-Testing Results */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Back-Testing Results</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Period</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {backTestingData.results.map((result, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div>
                      <div className="text-xs font-medium text-gray-900">{result.model}</div>
                      <div className="text-xs text-gray-500">{result.type}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{result.testPeriod}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{result.performance}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{result.accuracy}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      result.status === 'Passed' ? 'bg-green-100 text-green-800' :
                      result.status === 'Failed' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Back-Testing Procedures */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Back-Testing Procedures</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {backTestingData.procedures.map((procedure, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-medium text-gray-900">{procedure.name}</h4>
                  <span className="text-xs text-gray-500">{procedure.frequency}</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">{procedure.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Settings className="h-3 w-3 mr-1" />
                  {procedure.methodology}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRiskAssessment = () => (
    <div className="space-y-4">
      {/* Risk Assessment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">High Risk</p>
              <p className="text-lg font-bold text-red-600">{modelRiskAssessmentData.highRisk}</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Medium Risk</p>
              <p className="text-lg font-bold text-yellow-600">{modelRiskAssessmentData.mediumRisk}</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Low Risk</p>
              <p className="text-lg font-bold text-green-600">{modelRiskAssessmentData.lowRisk}</p>
            </div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Total Models</p>
              <p className="text-lg font-bold text-gray-900">{modelRiskAssessmentData.totalModels}</p>
            </div>
            <Database className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Risk Assessment Matrix */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Risk Assessment Matrix</h3>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business Impact</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Complexity</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Quality</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Risk</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitigation Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {modelRiskAssessmentData.assessments.map((assessment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div>
                        <div className="text-xs font-medium text-gray-900">{assessment.model}</div>
                        <div className="text-xs text-gray-500">{assessment.type}</div>
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        assessment.businessImpact === 'High' ? 'bg-red-100 text-red-800' :
                        assessment.businessImpact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {assessment.businessImpact}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        assessment.complexity === 'High' ? 'bg-red-100 text-red-800' :
                        assessment.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {assessment.complexity}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        assessment.dataQuality === 'High' ? 'bg-green-100 text-green-800' :
                        assessment.dataQuality === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {assessment.dataQuality}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        assessment.overallRisk === 'High' ? 'bg-red-100 text-red-800' :
                        assessment.overallRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {assessment.overallRisk}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">
                      <button className="text-blue-600 hover:text-blue-900">View Actions</button>
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

  const renderModelInventory = () => (
    <div className="space-y-4">
      {/* Model Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Active Models</p>
              <p className="text-lg font-bold text-green-600">{modelInventoryData.activeModels}</p>
            </div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">In Development</p>
              <p className="text-lg font-bold text-blue-600">{modelInventoryData.inDevelopment}</p>
            </div>
            <Settings className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Retired Models</p>
              <p className="text-lg font-bold text-gray-600">{modelInventoryData.retiredModels}</p>
            </div>
            <XCircle className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Model Inventory Table */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Model Inventory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {modelInventoryData.models.map((model, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div>
                      <div className="text-xs font-medium text-gray-900">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.description}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.type}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      model.status === 'Active' ? 'bg-green-100 text-green-800' :
                      model.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.owner}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.lastUpdated}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-900">{model.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRBZCompliance = () => (
    <div className="space-y-4">
      {/* RBZ Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Overall Compliance</p>
              <p className="text-lg font-bold text-green-600">{rbzModelRiskComplianceStatus.overallCompliance.score}%</p>
            </div>
            <Flag className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{rbzModelRiskComplianceStatus.overallCompliance.status}</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Compliant Areas</p>
              <p className="text-lg font-bold text-blue-600">{rbzModelRiskComplianceStatus.complianceAreas.filter(area => area.status === 'Compliant').length}</p>
            </div>
            <CheckCircle className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">of {rbzModelRiskComplianceStatus.complianceAreas.length} areas</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">High Priority</p>
              <p className="text-lg font-bold text-red-600">{rbzModelRiskComplianceStatus.rbzFindings.filter(finding => finding.severity === 'High').length}</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Findings</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Next Assessment</p>
              <p className="text-lg font-bold text-gray-900">{rbzModelRiskComplianceStatus.overallCompliance.nextAssessment}</p>
            </div>
            <Calendar className="h-6 w-6 text-gray-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Due Date</p>
        </div>
      </div>

      {/* RBZ Compliance Areas */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Compliance Areas</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {rbzModelRiskComplianceStatus.complianceAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-medium text-gray-900">{area.area}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      area.status === 'Compliant' ? 'bg-green-100 text-green-800' :
                      area.status === 'Partially Compliant' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {area.status}
                    </span>
                    <span className="text-xs font-bold text-gray-900">{area.score}%</span>
                  </div>
                </div>
                {area.gaps.length > 0 && (
                  <div className="mb-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Gaps:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {area.gaps.map((gap, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {gap}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {area.actions.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-1">Actions:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {area.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RBZ Findings */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Regulatory Findings</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {rbzModelRiskComplianceStatus.rbzFindings.map((finding, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-medium text-gray-900">{finding.finding}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      finding.severity === 'High' ? 'bg-red-100 text-red-800' :
                      finding.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {finding.severity}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      finding.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      finding.status === 'Not Started' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {finding.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Deadline: {finding.deadline}</span>
                  <span>RBZ PS 05-2023</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RBZ Validation Requirements */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Model Validation Requirements</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {rbzModelValidationFramework.rbzValidationRequirements.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <h4 className="text-xs font-semibold text-gray-900 mb-2">{category.category}</h4>
                <div className="space-y-2">
                  {category.requirements.map((req, idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-xs font-medium text-gray-900">{req.name}</h5>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          req.status === 'Required' ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {req.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{req.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{req.rbzRequirement}</span>
                        <span>Frequency: {req.validationFrequency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RBZ Back-Testing Requirements */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Back-Testing Framework</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {rbzBackTestingFramework.rbzBackTestingRequirements.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded p-3">
                <h4 className="text-xs font-semibold text-gray-900 mb-2">{category.category}</h4>
                <div className="space-y-2">
                  {category.requirements.map((req, idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-xs font-medium text-gray-900">{req.name}</h5>
                        <span className="text-xs text-gray-500">{req.frequency}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{req.description}</p>
                      <div className="text-xs text-gray-500 mb-1">
                        <strong>Period:</strong> {req.period}
                      </div>
                      <div className="text-xs text-gray-500">
                        <strong>RBZ Requirement:</strong> {req.rbzRequirement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'rbz-compliance':
        return renderRBZCompliance();
      case 'validation':
        return renderValidationFramework();
      case 'governance':
        return renderGovernanceStructure();
      case 'backtesting':
        return renderBackTesting();
      case 'assessment':
        return renderRiskAssessment();
      case 'inventory':
        return renderModelInventory();
      default:
        return renderValidationFramework();
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Model Risk Management - RBZ Compliance</h2>
          <p className="text-xs text-gray-600">Comprehensive framework for model validation, governance, and risk assessment compliant with RBZ Prudential Standard PS 05-2023 as of {getReportingDate()}</p>
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
          <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-3 w-3 mr-1" />
            Export
          </button>
        </div>
      </div>

      {/* Model Risk Management Content */}
      {renderTabs()}
      {renderActiveTab()}
    </div>
  );
};

export default ModelRisk;
