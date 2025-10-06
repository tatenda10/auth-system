import React, { useState } from 'react';
import { rbzSRSData, getSRSClassification, calculateRiskWeightedAssets, calculateProvisioning } from '../../data/rbzSRSData';

const CreditRiskAssessment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [loanData, setLoanData] = useState([
    {
      id: 1,
      customerName: 'Delta Corporation',
      loanType: 'Corporate Loan',
      exposure: 5000000,
      tier: 3,
      subRating: 'C',
      assetClass: 'corporates',
      externalRating: 'BBB+ to BBB-',
      maturity: '5 years',
      collateral: 'Real Estate',
      riskWeight: 50,
      riskWeightedAssets: 2500000,
      provisioningRate: 1.5,
      provisioningAmount: 75000
    },
    {
      id: 2,
      customerName: 'CBZ Bank',
      loanType: 'Interbank Loan',
      exposure: 2000000,
      tier: 2,
      subRating: 'B',
      assetClass: 'banks',
      externalRating: 'A+ to A-',
      maturity: '1 year',
      collateral: 'Government Securities',
      riskWeight: 50,
      riskWeightedAssets: 1000000,
      provisioningRate: 1.5,
      provisioningAmount: 30000
    },
    {
      id: 3,
      customerName: 'Innscor Africa',
      loanType: 'Mortgage Loan',
      exposure: 1500000,
      tier: 4,
      subRating: 'A',
      assetClass: 'retail',
      externalRating: 'Residential Mortgages',
      maturity: '20 years',
      collateral: 'Residential Property',
      riskWeight: 35,
      riskWeightedAssets: 525000,
      provisioningRate: 1.5,
      provisioningAmount: 22500
    },
    {
      id: 4,
      customerName: 'Econet Wireless',
      loanType: 'Working Capital',
      exposure: 800000,
      tier: 5,
      subRating: 'B',
      assetClass: 'corporates',
      externalRating: 'BB+ to B-',
      maturity: '2 years',
      collateral: 'Inventory',
      riskWeight: 100,
      riskWeightedAssets: 800000,
      provisioningRate: 10,
      provisioningAmount: 80000
    },
    {
      id: 5,
      customerName: 'Zimplats Holdings',
      loanType: 'Corporate Loan',
      exposure: 1200000,
      tier: 8,
      subRating: 'C',
      assetClass: 'corporates',
      externalRating: 'Below B-',
      maturity: '3 years',
      collateral: 'Equipment',
      riskWeight: 150,
      riskWeightedAssets: 1800000,
      provisioningRate: 20,
      provisioningAmount: 240000
    }
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleTierChange = (id, tier, subRating) => {
    const classification = getSRSClassification(tier, subRating);
    if (classification) {
      setLoanData(prevData =>
        prevData.map(loan =>
          loan.id === id
            ? {
                ...loan,
                tier,
                subRating,
                riskWeight: classification.riskWeight,
                riskWeightedAssets: calculateRiskWeightedAssets(loan.exposure, classification.riskWeight),
                provisioningRate: classification.provisioning,
                provisioningAmount: calculateProvisioning(loan.exposure, classification.provisioning)
              }
            : loan
        )
      );
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getTierColor = (tier) => {
    if (tier <= 3) return 'text-green-600';
    if (tier <= 5) return 'text-yellow-600';
    if (tier <= 7) return 'text-orange-600';
    return 'text-red-600';
  };

  const getRiskWeightColor = (riskWeight) => {
    if (riskWeight <= 20) return 'text-green-600';
    if (riskWeight <= 50) return 'text-blue-600';
    if (riskWeight <= 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const totalExposure = loanData.reduce((sum, loan) => sum + loan.exposure, 0);
  const totalRiskWeightedAssets = loanData.reduce((sum, loan) => sum + loan.riskWeightedAssets, 0);
  const totalProvisioning = loanData.reduce((sum, loan) => sum + loan.provisioningAmount, 0);
  const averageRiskWeight = totalExposure > 0 ? (totalRiskWeightedAssets / totalExposure) * 100 : 0;

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Credit Risk Assessment</h2>
          <p className="text-xs text-gray-600">RBZ Supervisory Rating Scale (SRS) Classification</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs border border-gray-300 px-2 py-1"
            />
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Upload Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-white border border-gray-200 p-3 text-center">
          <h3 className="text-xs font-medium text-gray-600 mb-1">Total Exposure</h3>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(totalExposure)}</p>
        </div>
        <div className="bg-white border border-gray-200 p-3 text-center">
          <h3 className="text-xs font-medium text-gray-600 mb-1">Risk-Weighted Assets</h3>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(totalRiskWeightedAssets)}</p>
        </div>
        <div className="bg-white border border-gray-200 p-3 text-center">
          <h3 className="text-xs font-medium text-gray-600 mb-1">Total Provisioning</h3>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(totalProvisioning)}</p>
        </div>
        <div className="bg-white border border-gray-200 p-3 text-center">
          <h3 className="text-xs font-medium text-gray-600 mb-1">Average Risk Weight</h3>
          <p className="text-sm font-bold text-gray-900">{averageRiskWeight.toFixed(1)}%</p>
        </div>
      </div>

      {/* Loan Portfolio Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-700 px-4 py-2">
          <h3 className="text-sm font-semibold text-white">Loan Portfolio Classification</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Customer
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Loan Type
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Exposure
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  SRS Rating
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Risk Weight
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  RWA
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Provisioning
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loanData.map((loan, index) => (
                <tr key={loan.id} className={`group ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                    {loan.customerName}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                    {loan.loanType}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                    {formatCurrency(loan.exposure)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-medium ${getTierColor(loan.tier)}`}>
                        {loan.tier}{loan.subRating}
                      </span>
                      <span className="text-xs text-gray-500">
                        {getSRSClassification(loan.tier, loan.subRating)?.description}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className={`text-xs font-medium ${getRiskWeightColor(loan.riskWeight)}`}>
                      {loan.riskWeight}%
                    </span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                    {formatCurrency(loan.riskWeightedAssets)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                    {formatCurrency(loan.provisioningAmount)}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                    <select
                      value={`${loan.tier}${loan.subRating}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        const tier = parseInt(value.slice(0, -1));
                        const subRating = value.slice(-1);
                        handleTierChange(loan.id, tier, subRating);
                      }}
                      className="text-xs border border-gray-300 px-1 py-0.5"
                    >
                      {rbzSRSData.classifications.map((classification) => (
                        <option key={`${classification.tier}${classification.subRating}`} value={`${classification.tier}${classification.subRating}`}>
                          {classification.tier}{classification.subRating} - {classification.description}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SRS Classification Guide */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-700 px-4 py-2">
          <h3 className="text-sm font-semibold text-white">RBZ SRS Classification Guide</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Rating
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Description
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Risk Level
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Risk Weight
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">
                  Provisioning
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rbzSRSData.classifications.map((classification, index) => (
                <tr key={`${classification.tier}${classification.subRating}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className={`text-xs font-medium ${getTierColor(classification.tier)}`}>
                      {classification.tier}{classification.subRating}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-900">
                    {classification.description}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                    {classification.riskLevel}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                    {classification.riskWeight}%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                    {classification.provisioning}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-base font-medium text-gray-900 mb-4">Upload Credit Risk Data</h3>
              <div className="mt-2 px-7 py-3">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 text-xs hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-3 py-1 bg-blue-600 text-white text-xs hover:bg-blue-700"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditRiskAssessment;
