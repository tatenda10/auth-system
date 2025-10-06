import React from 'react';

const LoanRepayment = ({ loanRepaymentData }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Rate Change</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Prepayment Rate (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Refinancing (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">New Originations (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Total Impact (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loanRepaymentData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-center text-xs font-medium text-gray-900">{item.rateChange}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.prepaymentRate}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.refinancing}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.newOriginations}%</td>
                  <td className="px-2 py-1 text-center text-xs font-medium text-gray-900">{item.totalImpact}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="text-center">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Interest Rate Sensitivity Analysis</h4>
          <p className="text-xs text-blue-700">
            Shows the impact of interest rate changes on loan portfolio behavior including prepayments, refinancing, and new originations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanRepayment;
