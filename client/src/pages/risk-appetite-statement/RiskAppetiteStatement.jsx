import { useState } from 'react';
import { Download, Calendar, Edit, Save, X } from 'lucide-react';

const RiskAppetiteStatement = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [editingMetric, setEditingMetric] = useState(null);
  const [editValues, setEditValues] = useState({});

  const [riskCategories, setRiskCategories] = useState([
    {
      id: 1,
      category: 'Business and Strategic Risk',
      metrics: [
        { id: 1, item: 'Shareholder value creation (RoE - CoE)', target: '≥ 0%', green: '≥ 2%', yellow: '≥ 0% - < 2%', red: '< 0%' },
        { id: 2, item: 'Return on Equity (RoE)', target: '≥ 0%', green: '≥ 2%', yellow: '≥ 0% - < 2%', red: '< 0%' },
        { id: 3, item: 'Return on Assets (RoA)', target: '≥ 0%', green: '≥ 0.5%', yellow: '≥ 0% - < 0.5%', red: '< 0%' },
        { id: 4, item: 'Cost to Income Ratio', target: '50% - 60%', green: '≤ 50%', yellow: '> 50% - < 60%', red: '≥ 60%' },
        { id: 5, item: '% of critical budgeted strategic initiatives implemented', target: '≥ 80%', green: '≥ 80%', yellow: '≥ 50% - < 80%', red: '< 50%' }
      ]
    },
    {
      id: 2,
      category: 'Brand and Reputational Risk',
      metrics: [
        { id: 6, item: 'Market perceptions of Bank brand consistency', target: '≥ 70%', green: '≥ 70%', yellow: '≥ 50% - < 70%', red: '< 50%' },
        { id: 7, item: 'Brand Perception survey/study', target: '≥ 70%', green: '≥ 70%', yellow: '≥ 50% - < 70%', red: '< 50%' },
        { id: 8, item: '# of complaints social media/word clouds', target: 'Max 20', green: '≤ 10', yellow: '> 10 - < 20', red: '≥ 20' },
        { id: 9, item: 'Customer complaints per 12 months rolling basis', target: 'Max 20', green: '≤ 10', yellow: '> 10 - < 20', red: '≥ 20' },
        { id: 10, item: 'Shareholder concerns survey/study', target: '≥ 70%', green: '≥ 70%', yellow: '≥ 50% - < 70%', red: '< 50%' },
        { id: 11, item: '# of Adverse media releases per 12 months rolling basis', target: 'Max 2', green: '0', yellow: '> 0 - < 2', red: '≥ 2' }
      ]
    },
    {
      id: 3,
      category: 'Credit Risk (Core metrics)',
      metrics: [
        { id: 12, item: 'Credit loss ratio', target: '1% - 2%', green: '≤ 1%', yellow: '> 1% - ≤ 2%', red: '> 2%' },
        { id: 13, item: 'Credit RWAs (Short Loans: Unsecured Loans : Secured Lending)', target: '6%:15%:80%', green: '≤ 5%:10%:80%', yellow: '> 5%:15%:85% - ≤ 10%:20%:70%', red: '> 10%:20%:70%' },
        { id: 14, item: 'Properties in possession : Loans and Advances', target: '≤ 0%', green: '≤ 0%', yellow: '> 0% - ≤ 1%', red: '> 1%' },
        { id: 15, item: 'NPL %', target: '≤ 5%', green: '≤ 5%', yellow: '> 5% - ≤ 7%', red: '> 7%' },
        { id: 16, item: 'Largest client limit (% of Regulatory Capital)', target: '≤ 2%', green: '≤ 2%', yellow: '> 2% - < 4%', red: '≥ 4%' },
        { id: 17, item: 'Average Probability of Default (Performing Book)', target: '≤ 5%', green: '≤ 5%', yellow: '> 5% - < 10%', red: '≥ 10%' },
        { id: 18, item: 'Average Loss Given Default (Performing Book)', target: '35% - 40%', green: '≥ 35%', yellow: '> 35% - < 40%', red: '≥ 40%' }
      ]
    },
    {
      id: 4,
      category: 'Credit Risk (Counterparty Limits)',
      metrics: [
        { id: 19, item: 'Aggregate large exposures (% of Regulatory Capital)', target: 'Max 800%', green: '≤ 600%', yellow: '> 600% - < 800%', red: '≥ 800%' },
        { id: 20, item: 'Insider loans lending limit (% of Regulatory Capital) for Staff mortgages', target: 'Max 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 21, item: 'Board members', target: 'Max 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 22, item: 'Shareholders', target: 'Max 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 23, item: 'Aggregate insider Loans limit (% of Regulatory Capital)', target: 'Max 100%', green: '≤ 90%', yellow: '> 90% - < 100%', red: '≥ 100%' },
        { id: 24, item: 'Top 30 clients (% of total portfolio)', target: '≤ 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 25, item: 'Arrears (% of total portfolio)', target: '≤ 0.8%', green: '≤ 0.8%', yellow: '> 0.8% - < 1%', red: '≥ 1%' },
        { id: 26, item: 'Exposure to Zimbabwe Government (% of total portfolio)', target: '≤ 50%', green: '≤ 45%', yellow: '> 45% - < 50%', red: '≥ 50%' },
        { id: 27, item: 'Exposure to Mining Sector (% of total portfolio)', target: '≤ 25%', green: '≤ 20%', yellow: '> 20% - < 25%', red: '≥ 25%' },
        { id: 28, item: 'Exposure to Agricultural Sector (% of total portfolio)', target: '≤ 30%', green: '≤ 25%', yellow: '> 25% - < 30%', red: '≥ 30%' },
        { id: 29, item: 'Foreign Currency Exposure (% of total assets)', target: '≤ 40%', green: '≤ 35%', yellow: '> 35% - < 40%', red: '≥ 40%' }
      ]
    },
    {
      id: 5,
      category: 'Market Risk',
      metrics: [
        { id: 30, item: 'Interest-rate Re-pricing Gap ratio (% of total assets)', target: '-25% to +25%', green: '+/- 20%', yellow: '+/- 20% - < +/- 25%', red: '+/- 25%' },
        { id: 31, item: 'NI sensitivity (100bps parallel shift in interest rates): equity (%)', target: 'Max 2.5%', green: '≤ 2%', yellow: '> 2% - < 2.5%', red: '≥ 2.5%' },
        { id: 32, item: 'NI sensitivity (200bps parallel shift in interest rates): annualised NII', target: 'Max 15%', green: '≤ 10%', yellow: '> 10% - < 15%', red: '≥ 15%' },
        { id: 33, item: 'Economic Value sensitivity (200bps parallel shift in interest rates): Regulatory Capital', target: 'Max 20%', green: '≤ 15%', yellow: '> 15% - < 20%', red: '≥ 20%' },
        { id: 34, item: 'Foreign Currency Gap (% of RC) for Single Currency', target: 'Max 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 35, item: 'Foreign Currency Gap (% of RC) for Aggregate', target: 'Max 15%', green: '≤ 12%', yellow: '> 12% - < 15%', red: '≥ 15%' }
      ]
    },
    {
      id: 6,
      category: 'Liquidity and Funding Risk (Core Metrics)',
      metrics: [
        { id: 36, item: 'Short-term (0-31 days) funding (% of total funding)', target: '< 35%', green: '< 30%', yellow: '≥ 30% - < 35%', red: '≥ 35%' },
        { id: 37, item: 'Medium-term (32-180 days) funding (% of total funding)', target: '> 15%', green: '≥ 20%', yellow: '≥ 15% - < 20%', red: '< 15%' },
        { id: 38, item: 'Long-term (>180 days) funding (% of total funding)', target: '> 50%', green: '≥ 55%', yellow: '> 50% - < 55%', red: '< 50%' },
        { id: 39, item: 'Net interbank reliance (% of total funding)', target: '< 2%', green: '≤ 1%', yellow: '> 1% - < 2%', red: '≥ 2%' },
        { id: 40, item: 'Loans to Deposit Ratio (LDR)', target: 'Max 80%', green: '≤ 75%', yellow: '> 75% - < 80%', red: '≥ 80%' },
        { id: 41, item: 'Contractual maturity mismatch (0-31 days) (% of total funding)', target: 'Max 10%', green: '≤ 8%', yellow: '> 8% - < 10%', red: '≥ 10%' },
        { id: 42, item: 'Behavioural maturity mismatch (0-31 days) (% of total funding)', target: 'Min 2%', green: '≤ 3%', yellow: '> 2% - < 3%', red: '< 2%' },
        { id: 43, item: 'Liquidity Coverage Ratio (Basel II)', target: 'Min 100%', green: '≥ 105%', yellow: '≥ 100% - < 105%', red: '< 100%' },
        { id: 44, item: 'Net Stable Funding Ratio (Basel II)', target: 'Min 106%', green: '≥ 110%', yellow: '≥ 106% - < 110%', red: '< 106%' },
        { id: 45, item: 'Liquid assets / Total Deposits', target: 'Min 12%', green: '≥ 15%', yellow: '> 12% - < 15%', red: '< 12%' }
      ]
    },
    {
      id: 7,
      category: 'Capital Risk',
      metrics: [
        { id: 46, item: 'Total Capital Adequacy Ratio (Basel II)', target: '20% - 25%', green: '≥ 22%', yellow: '> 17% - < 22%', red: '< 17%' },
        { id: 47, item: 'Core Tier 1 Capital Adequacy Ratio (Basel II)', target: '8% - 10%', green: '≥ 8%', yellow: '> 5% - < 8%', red: '< 5%' },
        { id: 48, item: 'Leverage Ratio (%)', target: 'Max 15x', green: '≤ 10', yellow: '> 10 - < 15', red: '≥ 15' }
      ]
    },
    {
      id: 8,
      category: 'Financial Reporting and Taxation Risk',
      metrics: [
        { id: 49, item: 'Cumulative Financial Reporting errors on Income Statement (12 months rolling basis)', target: '< USD200 K', green: '< USD 160 k', yellow: '> USD 150k - < 200k', red: '≥ USD 200 K' },
        { id: 50, item: 'Cumulative Financial Reporting errors on Balance Sheet (12 months rolling basis)', target: '< USD 85 m', green: '< USD 80 m', yellow: '> USD 80 m - < 85 m', red: '≥ USD 85 m' },
        { id: 51, item: 'Effective tax rate', target: '20% - 24%', green: '20% - < 24%', yellow: 'N/A', red: '≥ 24% or ≤ 20%' }
      ]
    },
    {
      id: 9,
      category: 'Information Technology Risk',
      metrics: [
        { id: 52, item: 'ATM % Uptime', target: '> 99.4%', green: '> 99.4%', yellow: '> 98% - ≤ 99.4%', red: '≤ 98%' },
        { id: 53, item: 'Network vulnerability due to unauthorised access', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 54, item: 'Server Uptime', target: '> 99.4%', green: '> 99.4%', yellow: '> 95% - ≤ 98%', red: '≤ 98%' },
        { id: 55, item: 'Branch Network', target: '> 99.4%', green: '> 99.4%', yellow: '> 95% - ≤ 98%', red: '≤ 98%' },
        { id: 56, item: 'Visa Connection (EFT)', target: '> 99.4%', green: '> 99.4%', yellow: '> 95% - ≤ 98%', red: '≤ 98%' },
        { id: 57, item: '% servers & workstations updated with anti-virus def files (within 14 days)', target: '> 100%', green: '> 100%', yellow: '> 95% - ≤ 98%', red: '≤ 98%' },
        { id: 58, item: '# of IT security related incidents (business loss > USD 50 K, 12 months rolling basis)', target: '< 1', green: '≤ 2', yellow: '3', red: '≥ 4' },
        { id: 59, item: '# of IT operations incidents (business loss > USD 50 K, 12 months rolling basis)', target: '< 3', green: '≤ 2', yellow: '3', red: '≥ 4' }
      ]
    },
    {
      id: 10,
      category: 'Legal Risk',
      metrics: [
        { id: 60, item: 'Cumulative # of matters defended by the Bank (12 months rolling basis)', target: '< 5', green: '≤ 3', yellow: '> 3 - < 5', red: '≥ 5' },
        { id: 61, item: '# of non-compliant contracts', target: '< 1', green: '0', yellow: '> 0 - < 5', red: '≥ 5' },
        { id: 62, item: '% of matters successfully defended by the Bank', target: '> 50%', green: '> 75%', yellow: '> 50% - ≤ 70%', red: '≤ 50%' },
        { id: 63, item: '% of matters successfully defended/initiated by the Bank', target: '> 90%', green: '> 90%', yellow: '> 60% - ≤ 90%', red: '≤ 60%' },
        { id: 64, item: 'Value of legal provisions as a % of Regulatory Capital', target: '< 0.5%', green: '≤ 0.3%', yellow: '> 0.3% - < 0.5%', red: '≥ 0.5%' }
      ]
    },
    {
      id: 11,
      category: 'People Risk',
      metrics: [
        { id: 65, item: 'Regretted Staff Turnover (For colleagues rated A or B)', target: '< 8%', green: '≤ 6%', yellow: '> 6% - < 8%', red: '≥ 8%' },
        { id: 66, item: '% of vacant positions compared to approved organogram', target: '< 10%', green: '≤ 7%', yellow: '> 7% - < 10%', red: '≥ 10%' },
        { id: 67, item: 'Major health and safety incidents (including deaths) on a rolling 12 months basis', target: '< 2', green: '0', yellow: '1', red: '≥ 2' }
      ]
    },
    {
      id: 12,
      category: 'Governance and Compliance Risk',
      metrics: [
        { id: 68, item: '# of compliance deviations (RBZ Corporate Governance)', target: '0', green: '0', yellow: '1', red: '≥ 1' },
        { id: 69, item: '# of breaches (RBZ regulatory requirements)', target: '0', green: '0', yellow: '1', red: '≥ 1' },
        { id: 70, item: '# of breaches (other regulatory requirements)', target: '0', green: '0', yellow: '1', red: '≥ 1' },
        { id: 71, item: '% Non-compliance with KYC requirements (new accounts)', target: '< 100%', green: '≤ 100%', yellow: '> 100% - < 95%', red: '≥ 95%' },
        { id: 72, item: 'Non-compliance with AML/CFT/PF requirements (all transactions)', target: '0', green: '0', yellow: '1', red: '≥ 1' },
        { id: 73, item: 'Regulatory fines incurred', target: '< USD 500 K', green: '≤ USD 250 k', yellow: '> USD 250k - < USD 500K', red: '≥ USD 500K' },
        { id: 74, item: 'Number Regulatory fines incurred', target: '< 1', green: '0', yellow: '1', red: '≥ 1' }
      ]
    },
    {
      id: 13,
      category: 'Projects Risk',
      metrics: [
        { id: 75, item: '% of change (transformation) projects in the Red status', target: '< 10%', green: '≤ 7%', yellow: '> 7% - < 10%', red: '≥ 10%' },
        { id: 76, item: '% of change (transformation) projects in the Amber status', target: '< 0.5%', green: '≤ 0.3%', yellow: '> 0.3% - < 0.5%', red: '≥ 0.5%' }
      ]
    },
    {
      id: 14,
      category: 'Corporate Sustainability Risk',
      metrics: [
        { id: 77, item: '# of formal interactions between Bank and special interest groups (financial year)', target: '> 6', green: '≥ 8', yellow: '> 6 - < 8', red: '≤ 6' },
        { id: 78, item: 'Number of loans granted in violation of the Environmental & Social Risk policy', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' }
      ]
    },
    {
      id: 15,
      category: 'Operational Risk (Core Risk metrics)',
      metrics: [
        { id: 79, item: 'Total operational risk losses: Gross Operating Income (GOI)', target: '< 2%', green: '< 1.5%', yellow: '≥ 1.5% - < 2%', red: '≥ 2%' },
        { id: 80, item: 'Internal fraud: GOI', target: '< 0.3%', green: '< 0.2%', yellow: '≥ 0.2% - < 0.3%', red: '≥ 0.3%' },
        { id: 81, item: 'External fraud: GOI', target: '< 0.3%', green: '< 0.2%', yellow: '≥ 0.2% - < 0.3%', red: '≥ 0.3%' },
        { id: 82, item: 'Clients, products & business practices: GOI', target: '< 0.4%', green: '< 0.3%', yellow: '≥ 0.3% - < 0.4%', red: '≥ 0.4%' },
        { id: 83, item: 'Execution, delivery and process management: GOI', target: '< 0.8%', green: '< 0.6%', yellow: '≥ 0.6% - < 0.8%', red: '≥ 0.8%' }
      ]
    },
    {
      id: 16,
      category: 'Operational Risk (Other metrics)',
      metrics: [
        { id: 84, item: '# of High value Operational Incidents (12 months rolling)', target: '< 5', green: '< 3', yellow: '≥ 3 - < 5', red: '≥ 5' },
        { id: 85, item: 'Residual risks in "Red" zone with overdue RSCA implementation', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 86, item: 'Amber residual risks with overdue RSCA implementation', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 87, item: 'DR Testing Critical Systems not per BCM Plan', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 88, item: '# of Branches with unvalidated / overdue reviews', target: '< 5', green: '≤ 3', yellow: '4', red: '≥ 5' },
        { id: 89, item: '# of Business Units with unvalidated / overdue reviews', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 90, item: '# of Overdue items in Suspense Accounts', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 91, item: '# of Days Overdue items remain in Suspense Accounts', target: '< 2', green: '0', yellow: '2', red: '≥ 3' },
        { id: 92, item: 'Amount in Overdue Suspense Accounts', target: 'NI', green: '0', yellow: 'N/A', red: '≥ 1' },
        { id: 93, item: '# of Days outstanding for Bank reconciliation', target: '< 4', green: '0', yellow: '4', red: '≥ 5' }
      ]
    }
  ]);

  const getRowStyle = (item, index) => {
    if (item.category) return 'bg-gray-700 text-white font-semibold';
    return index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const handleEdit = (metric) => {
    setEditingMetric(metric.id);
    setEditValues({
      target: metric.target,
      green: metric.green,
      yellow: metric.yellow,
      red: metric.red
    });
  };

  const handleSave = () => {
    setRiskCategories(prevCategories => 
      prevCategories.map(category => ({
        ...category,
        metrics: category.metrics.map(metric => 
          metric.id === editingMetric 
            ? { ...metric, ...editValues }
            : metric
        )
      }))
    );
    setEditingMetric(null);
    setEditValues({});
  };

  const handleCancel = () => {
    setEditingMetric(null);
    setEditValues({});
  };

  const handleInputChange = (field, value) => {
    setEditValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderEditForm = (metric) => {
    if (editingMetric !== metric.id) {
      return (
        <button 
          onClick={() => handleEdit(metric)}
          className="inline-flex items-center px-1 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <Edit className="h-3 w-3" />
        </button>
      );
    }

    return (
      <div className="flex space-x-1">
        <button 
          onClick={handleSave}
          className="inline-flex items-center px-1 py-1 border border-green-300 text-xs font-medium text-green-700 bg-green-50 hover:bg-green-100"
        >
          <Save className="h-3 w-3" />
        </button>
        <button 
          onClick={handleCancel}
          className="inline-flex items-center px-1 py-1 border border-red-300 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    );
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Risk Appetite Statement</h2>
          <p className="text-xs text-gray-600">Risk Appetite Statement (RAS) - As of {getReportingDate()}</p>
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

      {/* Risk Appetite Statement Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider w-64">
                  Risk Category / Metric
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                  Target
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                  
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                  
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-32">
                  
                </th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {riskCategories.map((category) => (
                <>
                  <tr key={`category-${category.id}`} className={getRowStyle(category, 0)}>
                    <td className="px-2 py-1">
                      <div className="text-xs font-medium">
                        {category.category}
                      </div>
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className="text-xs">-</span>
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className="text-xs">-</span>
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className="text-xs">-</span>
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className="text-xs">-</span>
                    </td>
                    <td className="px-2 py-1 text-center">
                      <span className="text-xs">-</span>
                    </td>
                  </tr>
                  {category.metrics.map((metric, index) => (
                    <tr key={metric.id} className={getRowStyle(metric, index)}>
                      <td className="px-2 py-1 pl-6">
                        <div className="text-xs text-gray-900">
                          {metric.item}
                        </div>
                      </td>
                      <td className="px-2 py-1 text-center">
                        {editingMetric === metric.id ? (
                          <input
                            type="text"
                            value={editValues.target}
                            onChange={(e) => handleInputChange('target', e.target.value)}
                            className="text-xs border border-gray-300 px-1 py-1 w-full text-center"
                          />
                        ) : (
                          <span className="text-xs text-gray-900">{metric.target}</span>
                        )}
                      </td>
                      <td className="px-2 py-1 text-center bg-green-50">
                        {editingMetric === metric.id ? (
                          <input
                            type="text"
                            value={editValues.green}
                            onChange={(e) => handleInputChange('green', e.target.value)}
                            className="text-xs border border-gray-300 px-1 py-1 w-full text-center bg-green-50"
                          />
                        ) : (
                          <span className="text-xs text-gray-900 font-medium">{metric.green}</span>
                        )}
                      </td>
                      <td className="px-2 py-1 text-center bg-yellow-50">
                        {editingMetric === metric.id ? (
                          <input
                            type="text"
                            value={editValues.yellow}
                            onChange={(e) => handleInputChange('yellow', e.target.value)}
                            className="text-xs border border-gray-300 px-1 py-1 w-full text-center bg-yellow-50"
                          />
                        ) : (
                          <span className="text-xs text-gray-900 font-medium">{metric.yellow}</span>
                        )}
                      </td>
                      <td className="px-2 py-1 text-center bg-red-50">
                        {editingMetric === metric.id ? (
                          <input
                            type="text"
                            value={editValues.red}
                            onChange={(e) => handleInputChange('red', e.target.value)}
                            className="text-xs border border-gray-300 px-1 py-1 w-full text-center bg-red-50"
                          />
                        ) : (
                          <span className="text-xs text-gray-900 font-medium">{metric.red}</span>
                        )}
                      </td>
                      <td className="px-2 py-1 text-center">
                        {renderEditForm(metric)}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiskAppetiteStatement;
