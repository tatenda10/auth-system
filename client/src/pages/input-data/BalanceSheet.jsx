import { useState } from 'react';
import { Upload, Calendar, X } from 'lucide-react';

const BalanceSheet = () => {
  const [selectedDate, setSelectedDate] = useState('2024-12-31');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedData, setUploadedData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showData, setShowData] = useState(false);

  const balanceSheetStructure = [
    // ASSETS SECTION
    { id: 1, section: 'ASSETS', category: 'ASSETS', amount: 0, level: 0, type: 'main-header' },
    { id: 2, section: 'ASSETS', category: 'Current Assets', amount: 0, level: 1, type: 'sub-header' },
    { id: 3, section: 'ASSETS', category: 'Notes and coins', amount: 5000000, level: 2, type: 'asset' },
    { id: 4, section: 'ASSETS', category: 'Balances with RBZ - statutory reserve account', amount: 25000000, level: 2, type: 'asset' },
    { id: 5, section: 'ASSETS', category: 'Balances with RBZ - current account', amount: 15000000, level: 2, type: 'asset' },
    { id: 6, section: 'ASSETS', category: 'Balances with domestic institutions', amount: 30000000, level: 2, type: 'asset' },
    { id: 7, section: 'ASSETS', category: 'Balances with foreign institutions', amount: 45000000, level: 2, type: 'asset' },
    { id: 8, section: 'ASSETS', category: 'Investments in securities', amount: 180000000, level: 2, type: 'asset' },
    { id: 9, section: 'ASSETS', category: 'Equity investments', amount: 25000000, level: 2, type: 'asset' },
    { id: 10, section: 'ASSETS', category: 'Customer loans and advances', amount: 650000000, level: 2, type: 'asset' },
    { id: 11, section: 'ASSETS', category: 'Allowance for credit loss', amount: -15000000, level: 2, type: 'asset' },
    { id: 12, section: 'ASSETS', category: 'Total Current Assets', amount: 1040000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 13, section: 'ASSETS', category: 'Non-Current Assets', amount: 0, level: 1, type: 'sub-header' },
    { id: 14, section: 'ASSETS', category: 'Property, plant and equipment', amount: 35000000, level: 2, type: 'asset' },
    { id: 15, section: 'ASSETS', category: 'Intangible assets', amount: 8000000, level: 2, type: 'asset' },
    { id: 16, section: 'ASSETS', category: 'Right-of-use-assets', amount: 12000000, level: 2, type: 'asset' },
    { id: 17, section: 'ASSETS', category: 'Deferred tax assets', amount: 5000000, level: 2, type: 'asset' },
    { id: 18, section: 'ASSETS', category: 'Other assets', amount: 15000000, level: 2, type: 'asset' },
    { id: 19, section: 'ASSETS', category: 'Total Non-Current Assets', amount: 75000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 20, section: 'ASSETS', category: 'Total assets', amount: 1115000000, level: 0, type: 'total', isTotal: true },

    // EQUITY AND LIABILITIES SECTION
    { id: 21, section: 'EQUITY AND LIABILITIES', category: 'EQUITY AND LIABILITIES', amount: 0, level: 0, type: 'main-header' },
    { id: 22, section: 'EQUITY AND LIABILITIES', category: 'Capital and reserves', amount: 0, level: 1, type: 'sub-header' },
    { id: 23, section: 'EQUITY AND LIABILITIES', category: 'Ordinary Shares', amount: 50000000, level: 2, type: 'equity' },
    { id: 24, section: 'EQUITY AND LIABILITIES', category: 'Fair value reserve', amount: 8000000, level: 2, type: 'equity' },
    { id: 25, section: 'EQUITY AND LIABILITIES', category: 'Other reserves', amount: 0, level: 2, type: 'sub-sub-header' },
    { id: 26, section: 'EQUITY AND LIABILITIES', category: 'Other', amount: 3000000, level: 3, type: 'equity' },
    { id: 27, section: 'EQUITY AND LIABILITIES', category: 'Debt & Capital Reserve', amount: 5000000, level: 3, type: 'equity' },
    { id: 28, section: 'EQUITY AND LIABILITIES', category: 'Statutory Reserve', amount: 12000000, level: 3, type: 'equity' },
    { id: 29, section: 'EQUITY AND LIABILITIES', category: 'Revaluation Reserve', amount: 4000000, level: 3, type: 'equity' },
    { id: 30, section: 'EQUITY AND LIABILITIES', category: 'Dividend reserve', amount: 6000000, level: 3, type: 'equity' },
    { id: 31, section: 'EQUITY AND LIABILITIES', category: 'Claims equalisation reserve', amount: 2000000, level: 3, type: 'equity' },
    { id: 32, section: 'EQUITY AND LIABILITIES', category: 'Retained earnings', amount: 75000000, level: 2, type: 'equity' },
    { id: 33, section: 'EQUITY AND LIABILITIES', category: 'Equity attributable to owners of the Company', amount: 140000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 34, section: 'EQUITY AND LIABILITIES', category: 'Non-controlling interests', amount: 5000000, level: 1, type: 'equity' },
    { id: 35, section: 'EQUITY AND LIABILITIES', category: 'Total shareholders equity', amount: 145000000, level: 1, type: 'subtotal', isSubtotal: true },

    // LIABILITIES SECTION
    { id: 36, section: 'LIABILITIES', category: 'LIABILITIES', amount: 0, level: 0, type: 'main-header' },
    { id: 37, section: 'LIABILITIES', category: 'Current Liabilities', amount: 0, level: 1, type: 'sub-header' },
    { id: 38, section: 'LIABILITIES', category: 'Demand Deposits and Notice Deposits', amount: 300000000, level: 2, type: 'liability' },
    { id: 39, section: 'LIABILITIES', category: 'Savings Deposits', amount: 200000000, level: 2, type: 'liability' },
    { id: 40, section: 'LIABILITIES', category: 'Term Deposits', amount: 200000000, level: 2, type: 'liability' },
    { id: 41, section: 'LIABILITIES', category: 'Balances due to Reserve Bank of Zimbabwe', amount: 50000000, level: 2, type: 'liability' },
    { id: 42, section: 'LIABILITIES', category: 'Balances due to Domestic Institutions', amount: 80000000, level: 2, type: 'liability' },
    { id: 43, section: 'LIABILITIES', category: 'Balances due to Foreign Institutions', amount: 60000000, level: 2, type: 'liability' },
    { id: 44, section: 'LIABILITIES', category: 'Short-term borrowings', amount: 15000000, level: 2, type: 'liability' },
    { id: 45, section: 'LIABILITIES', category: 'Bank Overdraft', amount: 10000000, level: 2, type: 'liability' },
    { id: 46, section: 'LIABILITIES', category: 'Other liabilities - detail', amount: 12000000, level: 2, type: 'liability' },
    { id: 47, section: 'LIABILITIES', category: 'Other liabilities - balancing', amount: 8000000, level: 2, type: 'liability' },
    { id: 48, section: 'LIABILITIES', category: 'Total Current Liabilities', amount: 755000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 49, section: 'LIABILITIES', category: 'Non-Current Liabilities', amount: 0, level: 1, type: 'sub-header' },
    { id: 50, section: 'LIABILITIES', category: 'Long-term borrowings', amount: 40000000, level: 2, type: 'liability' },
    { id: 51, section: 'LIABILITIES', category: 'Bonds outstanding', amount: 25000000, level: 2, type: 'liability' },
    { id: 52, section: 'LIABILITIES', category: 'Finance lease liabilities', amount: 8000000, level: 2, type: 'liability' },
    { id: 53, section: 'LIABILITIES', category: 'Government grants', amount: 3000000, level: 2, type: 'liability' },
    { id: 54, section: 'LIABILITIES', category: 'Provision for restoration costs/taxes', amount: 5000000, level: 2, type: 'liability' },
    { id: 55, section: 'LIABILITIES', category: 'Deferred tax liabilities', amount: 7000000, level: 2, type: 'liability' },
    { id: 56, section: 'LIABILITIES', category: 'Total Non-Current Liabilities', amount: 88000000, level: 1, type: 'subtotal', isSubtotal: true },
    { id: 57, section: 'LIABILITIES', category: 'TOTAL EQUITY AND LIABILITIES', amount: 1115000000, level: 0, type: 'total', isTotal: true }
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
    setUploadedData(balanceSheetStructure);
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
          <h3 className="text-base font-semibold text-gray-900">Upload Balance Sheet</h3>
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
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
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
          <h2 className="text-base font-semibold text-gray-900">Statement of Financial Position</h2>
          <p className="text-xs text-gray-600">Financial position as of selected date</p>
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

      {/* Balance Sheet Table - Only show after upload */}
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
                        <span className={`${item.isTotal ? 'text-sm font-bold' : item.isSubtotal ? 'text-xs font-semibold' : 'text-xs'} ${item.type === 'liability' ? 'text-red-600' : item.amount < 0 ? 'text-red-600' : 'text-gray-900'}`}>
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
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Balance Sheet Data</h3>
          <p className="text-gray-500 mb-4">Upload an Excel or CSV file to view your balance sheet data.</p>
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Balance Sheet
          </button>
        </div>
      )}

      {showUploadModal && <UploadModal />}
    </div>
  );
};

export default BalanceSheet;
