import { useState } from 'react';
import { Upload, Calendar, X } from 'lucide-react';

const IncomeStatement = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedData, setUploadedData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showData, setShowData] = useState(false);

  const incomeStatementStructure = [
    // INTEREST INCOME SECTION
    { id: 1, section: 'INTEREST INCOME', category: 'INTEREST INCOME', amount: 0, level: 0, type: 'main-header' },
    { id: 2, section: 'INTEREST INCOME', category: 'Loans and Advances', amount: 0, level: 1, type: 'sub-header' },
    { id: 3, section: 'INTEREST INCOME', category: 'Micro & Medium Enterprise Loans', amount: 25000000, level: 2, type: 'income' },
    { id: 4, section: 'INTEREST INCOME', category: 'Institutional Loans', amount: 18000000, level: 2, type: 'income' },
    { id: 5, section: 'INTEREST INCOME', category: 'NatQuick Loans', amount: 12000000, level: 2, type: 'income' },
    { id: 6, section: 'INTEREST INCOME', category: 'Natlink Loans', amount: 8000000, level: 2, type: 'income' },
    { id: 7, section: 'INTEREST INCOME', category: 'Staff Loans', amount: 5000000, level: 2, type: 'income' },
    { id: 8, section: 'INTEREST INCOME', category: 'Group Loans', amount: 3000000, level: 2, type: 'income' },
    { id: 9, section: 'INTEREST INCOME', category: 'Natflex OD', amount: 4000000, level: 2, type: 'income' },
    { id: 10, section: 'INTEREST INCOME', category: 'Hire Purchase Loans', amount: 6000000, level: 2, type: 'income' },
    { id: 11, section: 'INTEREST INCOME', category: 'Bunjimi Loans', amount: 2000000, level: 2, type: 'income' },
    { id: 12, section: 'INTEREST INCOME', category: 'All Other Loans (Savings Overdrawn)', amount: 1000000, level: 2, type: 'income' },
    { id: 13, section: 'INTEREST INCOME', category: 'Treasury Bills & Govt Bonds', amount: 15000000, level: 1, type: 'income' },
    { id: 14, section: 'INTEREST INCOME', category: 'Money Markets', amount: 8000000, level: 1, type: 'income' },
    { id: 15, section: 'INTEREST INCOME', category: 'Banks and Financial Institutions', amount: 5000000, level: 1, type: 'income' },
    { id: 16, section: 'INTEREST INCOME', category: 'GROSS INTEREST INCOME', amount: 120000000, level: 0, type: 'total', isTotal: true },

    // INTEREST EXPENSES SECTION
    { id: 17, section: 'INTEREST EXPENSES', category: 'INTEREST EXPENSES', amount: 0, level: 0, type: 'main-header' },
    { id: 18, section: 'INTEREST EXPENSES', category: 'Paid to bank', amount: 12000000, level: 1, type: 'expense' },
    { id: 19, section: 'INTEREST EXPENSES', category: 'Term Deposits', amount: 18000000, level: 1, type: 'expense' },
    { id: 20, section: 'INTEREST EXPENSES', category: 'Collection Accounts', amount: 0, level: 1, type: 'sub-header' },
    { id: 21, section: 'INTEREST EXPENSES', category: 'Commercial Savings Accounts', amount: 8000000, level: 2, type: 'expense' },
    { id: 22, section: 'INTEREST EXPENSES', category: 'Salary Savings Accounts', amount: 6000000, level: 2, type: 'expense' },
    { id: 23, section: 'INTEREST EXPENSES', category: 'Interest Expense SME Savings A', amount: 4000000, level: 2, type: 'expense' },
    { id: 24, section: 'INTEREST EXPENSES', category: 'Savings', amount: 0, level: 1, type: 'sub-header' },
    { id: 25, section: 'INTEREST EXPENSES', category: 'Ordinary Savings Accounts', amount: 12000000, level: 2, type: 'expense' },
    { id: 26, section: 'INTEREST EXPENSES', category: 'Growth Savers Accounts', amount: 8000000, level: 2, type: 'expense' },
    { id: 27, section: 'INTEREST EXPENSES', category: 'Market Savings Accounts', amount: 6000000, level: 2, type: 'expense' },
    { id: 28, section: 'INTEREST EXPENSES', category: 'Pension Savings Accounts', amount: 4000000, level: 2, type: 'expense' },
    { id: 29, section: 'INTEREST EXPENSES', category: 'Rural Savings Accounts', amount: 3000000, level: 2, type: 'expense' },
    { id: 30, section: 'INTEREST EXPENSES', category: 'Regular Savings Accounts', amount: 5000000, level: 2, type: 'expense' },
    { id: 31, section: 'INTEREST EXPENSES', category: 'Staff Savings Accounts', amount: 2000000, level: 2, type: 'expense' },
    { id: 32, section: 'INTEREST EXPENSES', category: 'Int Expn Compensation sav. acs', amount: 1500000, level: 2, type: 'expense' },
    { id: 33, section: 'INTEREST EXPENSES', category: 'Int Expense Dream Girls acs', amount: 1000000, level: 2, type: 'expense' },
    { id: 34, section: 'INTEREST EXPENSES', category: 'Int Expn Education Savings acs', amount: 800000, level: 2, type: 'expense' },
    { id: 35, section: 'INTEREST EXPENSES', category: 'Int Expenses Minor Savings', amount: 600000, level: 2, type: 'expense' },
    { id: 36, section: 'INTEREST EXPENSES', category: 'Int Expense-church acs', amount: 400000, level: 2, type: 'expense' },
    { id: 37, section: 'INTEREST EXPENSES', category: 'Int Expense-Natflex acs', amount: 300000, level: 2, type: 'expense' },
    { id: 38, section: 'INTEREST EXPENSES', category: 'Int Expense Easy Savers acs', amount: 200000, level: 2, type: 'expense' },
    { id: 39, section: 'INTEREST EXPENSES', category: 'Int Expenses-Succession Saving', amount: 100000, level: 2, type: 'expense' },
    { id: 40, section: 'INTEREST EXPENSES', category: 'All Other Savings', amount: 500000, level: 2, type: 'expense' },
    { id: 41, section: 'INTEREST EXPENSES', category: 'TOTAL INTEREST EXPENSE', amount: 95000000, level: 0, type: 'total', isTotal: true },

    // NET INTEREST INCOME
    { id: 42, section: 'NET INTEREST INCOME', category: 'NET INTEREST INCOME', amount: 25000000, level: 0, type: 'subtotal', isSubtotal: true },

    // LOAN LOSS PROVISIONS
    { id: 43, section: 'LOAN LOSS PROVISIONS', category: 'Total loan loss provisions', amount: 0, level: 0, type: 'sub-header' },
    { id: 44, section: 'LOAN LOSS PROVISIONS', category: 'General allowances', amount: 8000000, level: 1, type: 'expense' },
    { id: 45, section: 'LOAN LOSS PROVISIONS', category: 'Specific Allowances', amount: 4000000, level: 1, type: 'expense' },
    { id: 46, section: 'LOAN LOSS PROVISIONS', category: 'NET INTEREST INCOME', amount: 13000000, level: 0, type: 'subtotal', isSubtotal: true },

    // NON-INTEREST INCOME
    { id: 47, section: 'NON-INTEREST INCOME', category: 'NON-INTEREST INCOME', amount: 0, level: 0, type: 'main-header' },
    { id: 48, section: 'NON-INTEREST INCOME', category: 'Commission Income', amount: 8000000, level: 1, type: 'income' },
    { id: 49, section: 'NON-INTEREST INCOME', category: 'Fees and Service Charges', amount: 6000000, level: 1, type: 'income' },
    { id: 50, section: 'NON-INTEREST INCOME', category: 'Forex Revaluation Gain/(Loss)', amount: 2000000, level: 1, type: 'income' },
    { id: 51, section: 'NON-INTEREST INCOME', category: 'Teller Overages', amount: 500000, level: 1, type: 'income' },
    { id: 52, section: 'NON-INTEREST INCOME', category: 'Profit on Disposal Assets', amount: 1000000, level: 1, type: 'income' },
    { id: 53, section: 'NON-INTEREST INCOME', category: 'Bad debt recoveries', amount: 800000, level: 1, type: 'income' },
    { id: 54, section: 'NON-INTEREST INCOME', category: 'Rental Income', amount: 1200000, level: 1, type: 'income' },
    { id: 55, section: 'NON-INTEREST INCOME', category: 'Management Fees Received', amount: 900000, level: 1, type: 'income' },
    { id: 56, section: 'NON-INTEREST INCOME', category: 'All other Income', amount: 600000, level: 1, type: 'income' },
    { id: 57, section: 'NON-INTEREST INCOME', category: 'TOTAL NON-INTEREST INCOME', amount: 20000000, level: 0, type: 'total', isTotal: true },

    // NET INTEREST & NON-INTEREST INCOME
    { id: 58, section: 'NET INCOME', category: 'NET INTEREST & NON-INTEREST INCOME', amount: 33000000, level: 0, type: 'subtotal', isSubtotal: true },

    // NON-INTEREST EXPENSES
    { id: 59, section: 'NON-INTEREST EXPENSES', category: 'NON-INTEREST EXPENSES', amount: 0, level: 0, type: 'main-header' },
    { id: 60, section: 'NON-INTEREST EXPENSES', category: 'Salaries and Allowances', amount: 25000000, level: 1, type: 'expense' },
    { id: 61, section: 'NON-INTEREST EXPENSES', category: 'Employee Benefits', amount: 8000000, level: 1, type: 'expense' },
    { id: 62, section: 'NON-INTEREST EXPENSES', category: 'Other staff costs', amount: 4000000, level: 1, type: 'expense' },
    { id: 63, section: 'NON-INTEREST EXPENSES', category: 'TOTAL PERSONNEL COSTS', amount: 37000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 64, section: 'NON-INTEREST EXPENSES', category: 'Depreciation and Amortisation', amount: 12000000, level: 1, type: 'expense' },
    { id: 65, section: 'NON-INTEREST EXPENSES', category: 'All other operating expenses', amount: 8000000, level: 1, type: 'expense' },
    { id: 66, section: 'NON-INTEREST EXPENSES', category: 'TOTAL OPERATING EXPENSES', amount: 20000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 67, section: 'NON-INTEREST EXPENSES', category: 'TOTAL NON-INTEREST EXPENSES', amount: 57000000, level: 0, type: 'total', isTotal: true },

    // FINAL CALCULATIONS
    { id: 68, section: 'FINAL', category: 'Income before tax', amount: -24000000, level: 0, type: 'calculation' },
    { id: 69, section: 'FINAL', category: 'Income tax expense', amount: 0, level: 0, type: 'expense' },
    { id: 70, section: 'FINAL', category: 'PROFIT AFTER TAX', amount: -24000000, level: 0, type: 'total', isTotal: true },
    { id: 71, section: 'FINAL', category: 'Profit for the year from discontinued operations', amount: 0, level: 0, type: 'income' },
    { id: 72, section: 'FINAL', category: 'PROFIT FOR THE YEAR', amount: -24000000, level: 0, type: 'total', isTotal: true }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulate file processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, we'll use the existing data structure
    // In a real app, you'd parse the Excel/CSV file here
    setUploadedData(incomeStatementStructure);
    setIsUploading(false);
    setShowUploadModal(false);
    setShowData(true);
  };

  const getRowStyle = (item) => {
    if (item.isTotal) return 'border-b-2 border-gray-800 bg-gray-100 font-bold text-sm';
    if (item.isSubtotal) return 'border-b border-gray-600 bg-gray-50 font-semibold text-xs';
    if (item.type === 'main-header') return 'font-bold text-xs bg-gray-200 border-b border-gray-400';
    if (item.type === 'sub-header') return 'font-semibold text-xs bg-gray-100 border-b border-gray-300';
    if (item.type === 'sub-sub-header') return 'font-medium text-xs bg-gray-50';
    return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
  };

  const getIndentStyle = (level) => {
    if (level === 0) return 'ml-0';
    if (level === 1) return 'ml-2';
    if (level === 2) return 'ml-8';
    if (level === 3) return 'ml-12';
    return `ml-${level * 4}`;
  };

  const getReportingDate = () => {
    const date = new Date(selectedDate);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${month}-${year}`;
  };

  const UploadModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 w-80 max-w-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-900">Upload Income Statement</h3>
          <button
            onClick={() => setShowUploadModal(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Select File
            </label>
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload-income"
            />
            <label
              htmlFor="file-upload-income"
              className="border border-gray-300 p-3 text-center block cursor-pointer hover:bg-gray-50"
            >
              <Upload className="mx-auto h-6 w-6 text-gray-400 mb-1" />
              <p className="text-xs text-gray-600">
                <span className="text-blue-600 hover:text-blue-500">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">CSV, Excel files</p>
            </label>
          </div>
          
          {isUploading && (
            <div className="text-center py-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mx-auto mb-1"></div>
              <p className="text-xs text-gray-600">Processing file...</p>
            </div>
          )}
          
          <div className="flex space-x-2">
            <button
              onClick={() => setShowUploadModal(false)}
              className="flex-1 px-3 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <div>
        <h2 className="text-base font-semibold text-gray-900">Income Statement</h2>
          <p className="text-xs text-gray-600">Financial performance as of selected date</p>
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
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Upload className="h-3 w-3 mr-1" />
            Upload
          </button>
        </div>
      </div>

      {/* Income Statement Table - Only show after upload */}
      {showData ? (
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-2 py-1 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Reporting Context
                  </th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-white uppercase tracking-wider w-24">
                    {getReportingDate()}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {uploadedData.map((item) => (
                  <tr key={item.id} className={getRowStyle(item)}>
                    <td className="px-2 py-1">
                      <div className={`text-xs ${item.type === 'main-header' || item.type === 'sub-header' || item.type === 'sub-sub-header' ? 'font-bold' : 'font-medium'} text-gray-900`}>
                        <span className={getIndentStyle(item.level)}>
                          {item.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-1 text-right">
                      {item.type === 'main-header' || item.type === 'sub-header' || item.type === 'sub-sub-header' ? (
                        <span className="text-xs text-gray-400">-</span>
                      ) : (
                        <span className={`${item.isTotal ? 'text-sm font-bold' : item.isSubtotal ? 'text-xs font-semibold' : 'text-xs'} ${item.type === 'expense' ? 'text-red-600' : item.amount < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                          {item.amount < 0 ? `(${formatCurrency(Math.abs(item.amount))})` : formatCurrency(item.amount)}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Income Statement Data</h3>
          <p className="text-gray-500 mb-4">Upload an Excel or CSV file to view your income statement data.</p>
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Income Statement
          </button>
        </div>
      )}

      {showUploadModal && <UploadModal />}
    </div>
  );
};

export default IncomeStatement;
