import { useState } from 'react';
import { Plus, Download, Calendar, Calculator, AlertTriangle, Shield, Flag, TrendingUp } from 'lucide-react';
import {
  rbzOperationalRiskCapital,
  rbzOperationalRiskEvents,
  rbzStandardizedApproach,
  rbzOperationalRiskCompliance,
  rbzOperationalRiskHelpers
} from '../../data/rbzOperationalRiskData';

const OperationalRisk = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showReport, setShowReport] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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
    return `${(value * 100).toFixed(1)}%`;
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
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

  const renderTabs = () => (
    <div className="border-b border-gray-200 mb-4">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'overview', name: 'Overview', icon: Flag },
          { id: 'capital', name: 'Capital Calculation', icon: Calculator },
          { id: 'events', name: 'Event Tracking', icon: AlertTriangle },
          { id: 'compliance', name: 'Compliance', icon: Shield },
          { id: 'zimbabwe', name: 'Zimbabwe Factors', icon: TrendingUp }
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

  const renderOverview = () => (
    <div className="space-y-4">
      {/* RBZ Operational Risk Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Overall Compliance</p>
              <p className="text-lg font-bold text-green-600">{rbzOperationalRiskCompliance.overallCompliance.score}%</p>
            </div>
            <Flag className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{rbzOperationalRiskCompliance.overallCompliance.status}</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Capital Calculations</p>
              <p className="text-lg font-bold text-blue-600">{rbzOperationalRiskCompliance.complianceAreas[0].score}%</p>
            </div>
            <Calculator className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{rbzOperationalRiskCompliance.complianceAreas[0].status}</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Event Tracking</p>
              <p className="text-lg font-bold text-blue-600">{rbzOperationalRiskCompliance.complianceAreas[1].score}%</p>
            </div>
            <AlertTriangle className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{rbzOperationalRiskCompliance.complianceAreas[1].status}</p>
        </div>
        <div className="bg-white p-4 rounded border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Standardized Approach</p>
              <p className="text-lg font-bold text-yellow-600">{rbzOperationalRiskCompliance.complianceAreas[2].score}%</p>
            </div>
            <Shield className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{rbzOperationalRiskCompliance.complianceAreas[2].status}</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Key Operational Risk Metrics</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-600">Total Operational Risk Capital</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(28000000)}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Gross Income (3-year avg)</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(45000000)}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600">Alpha Factor (BIA)</p>
              <p className="text-lg font-bold text-gray-900">{formatPercentage(rbzOperationalRiskCapital.basicIndicatorApproach.alpha)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCapitalCalculation = () => (
    <div className="space-y-4">
      {/* Operational Risk Capital Calculations */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Operational Risk Capital Calculations</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-2">Basic Indicator Approach (BIA)</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Alpha Factor</span>
                  <span className="text-xs font-medium text-gray-900">{formatPercentage(rbzOperationalRiskCapital.basicIndicatorApproach.alpha)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Calculation Period</span>
                  <span className="text-xs font-medium text-gray-900">{rbzOperationalRiskCapital.basicIndicatorApproach.calculationPeriod} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Formula</span>
                  <span className="text-xs font-medium text-gray-900">Capital = GI × α</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span className="text-xs font-semibold text-gray-700">Capital Required</span>
                  <span className="text-xs font-bold text-gray-900">{formatCurrency(28000000)}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-2">Standardized Approach (TSA)</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Formula</span>
                  <span className="text-xs font-medium text-gray-900">Σ(GI × β)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Business Lines</span>
                  <span className="text-xs font-medium text-gray-900">{Object.keys(rbzOperationalRiskCapital.standardizedApproach.businessLines).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">Minimum Threshold</span>
                  <span className="text-xs font-medium text-gray-900">{formatPercentage(rbzOperationalRiskCapital.standardizedApproach.calculationMethod.minimumThreshold)}</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                  <span className="text-xs font-semibold text-gray-700">Capital Required</span>
                  <span className="text-xs font-bold text-gray-900">{formatCurrency(25000000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Lines and Beta Factors */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Business Lines and Beta Factors</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {Object.entries(rbzOperationalRiskCapital.standardizedApproach.businessLines).map(([key, businessLine]) => (
              <div key={key} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-900">{businessLine.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    businessLine.beta <= 0.12 ? 'bg-green-100 text-green-800' :
                    businessLine.beta <= 0.15 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    β = {businessLine.beta}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{businessLine.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Activities:</strong> {businessLine.activities.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEventTracking = () => (
    <div className="space-y-4">
      {/* Operational Risk Event Tracking */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Operational Risk Event Tracking</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-2">Event Categories (Basel II)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(rbzOperationalRiskEvents.eventCategories).map(([key, category]) => (
                  <div key={key} className="bg-gray-50 p-2 rounded">
                    <h5 className="text-xs font-medium text-gray-900">{category.name}</h5>
                    <p className="text-xs text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-2">Recent Operational Risk Events</h4>
              <div className="space-y-3">
                {rbzOperationalRiskEvents.sampleEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-xs font-medium text-gray-900">{event.description}</h5>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.severity === 'critical' ? 'bg-red-100 text-red-800' :
                          event.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                          event.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {event.severity.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.status === 'resolved' ? 'bg-green-100 text-green-800' :
                          event.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
                      <div>
                        <strong>Date:</strong> {event.date}
                      </div>
                      <div>
                        <strong>Loss:</strong> {formatCurrency(event.lossAmount)}
                      </div>
                      <div>
                        <strong>Category:</strong> {rbzOperationalRiskEvents.eventCategories[event.category]?.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-4">
      {/* Standardized Approach Requirements */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Standardized Approach Requirements</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 mb-2">Eligibility Criteria</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="text-xs font-medium text-gray-900 mb-1">Minimum Requirements</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {rbzStandardizedApproach.eligibilityCriteria.minimumRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-900 mb-1">Data Requirements</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {rbzStandardizedApproach.eligibilityCriteria.dataRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-900 mb-1">Governance Requirements</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {rbzStandardizedApproach.eligibilityCriteria.governanceRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RBZ Operational Risk Findings */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">RBZ Operational Risk Findings</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {rbzOperationalRiskCompliance.rbzFindings.map((finding, index) => (
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
                  <span>RBZ Operational Risk Requirements</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderZimbabweFactors = () => (
    <div className="space-y-4">
      {/* Zimbabwe-Specific Operational Risk Factors */}
      <div className="bg-white rounded border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Zimbabwe-Specific Operational Risk Factors</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {Object.entries(rbzOperationalRiskCapital.zimbabweSpecificFactors).map(([factor, data]) => (
              <div key={factor} className="border border-gray-200 rounded p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-900">{factor.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                  <span className="text-xs font-medium text-gray-900">{formatPercentage(data.weight)}</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{data.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Risk Factors:</strong> {data.factors.join(', ')}
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
      case 'overview':
        return renderOverview();
      case 'capital':
        return renderCapitalCalculation();
      case 'events':
        return renderEventTracking();
      case 'compliance':
        return renderCompliance();
      case 'zimbabwe':
        return renderZimbabweFactors();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Operational Risk</h2>
          <p className="text-xs text-gray-600">Operational risk management and capital calculation as of {getReportingDate()}</p>
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
          <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-3 w-3 mr-1" />
            Export
          </button>
          <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium text-white bg-gray-600 hover:bg-gray-700">
            <Plus className="h-3 w-3 mr-1" />
            Add Event
          </button>
        </div>
      </div>

      {/* Operational Risk Content - Only show after calculation */}
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Operational Risk Report</h3>
          <p className="text-gray-500">Click the Calculate button above to generate your operational risk analysis and capital calculation report.</p>
        </div>
      )}
    </div>
  );
};

export default OperationalRisk;
