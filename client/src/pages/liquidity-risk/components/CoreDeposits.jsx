import React from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';

const CoreDeposits = ({ 
  coreDepositData, 
  depositStabilityData, 
  maturityComparisonData, 
  coreDepositRatios, 
  formatCurrency 
}) => {
  const exportToExcel = () => {
    // Calculate totals
    const totalBalance = coreDepositData.reduce((sum, item) => sum + item.totalBalance, 0);
    const totalCorePortion = coreDepositData.reduce((sum, item) => sum + item.corePortion, 0);
    const totalVolatilePortion = coreDepositData.reduce((sum, item) => sum + item.volatilePortion, 0);
    const totalDeposits = depositStabilityData.reduce((sum, item) => sum + item.totalDeposits, 0);
    const totalCoreDeposits = depositStabilityData.reduce((sum, item) => sum + item.coreDeposits, 0);

    // Prepare data for Excel export
    const coreDepositsExcelData = [
      ['RESERVE BANK OF ZIMBABWE'],
      ['CORE DEPOSITS ANALYSIS REPORT'],
      [''],
      ['Reporting Period: ' + new Date().toLocaleDateString('en-ZW')],
      [''],
      ['CORE DEPOSIT STABILITY ANALYSIS'],
      [''],
      ['Account Type', 'Total Balance (USD)', 'Core Portion (USD)', 'Volatile Portion (USD)', 'Stability Factor (%)', 'Historical Runoff (%)', 'Behavioral Maturity (Months)', 'Contractual Maturity (Months)'],
      ...coreDepositData.map(item => [
        item.accountType,
        item.totalBalance,
        item.corePortion,
        item.volatilePortion,
        item.stabilityFactor,
        item.historicalRunoff,
        item.behavioralMaturity,
        item.contractualMaturity
      ]),
      [''],
      ['TOTAL', totalBalance, totalCorePortion, totalVolatilePortion, '', '', '', ''],
      [''],
      ['DEPOSIT STABILITY BY CUSTOMER SEGMENT'],
      [''],
      ['Customer Segment', 'Total Deposits (USD)', 'Core Deposits (USD)', 'Stability Score (%)', 'Avg Relationship (Years)', 'Product Penetration', 'Runoff Risk'],
      ...depositStabilityData.map(item => [
        item.segment,
        item.totalDeposits,
        item.coreDeposits,
        item.stabilityScore,
        item.avgRelationship,
        item.productPenetration,
        item.runoffRisk
      ]),
      [''],
      ['TOTAL', totalDeposits, totalCoreDeposits, '', '', '', ''],
      [''],
      ['BEHAVIORAL VS CONTRACTUAL MATURITY ANALYSIS'],
      [''],
      ['Account Type', 'Contractual Maturity (Months)', 'Behavioral Maturity (Months)', 'Difference (Months)', 'Stability Factor (%)'],
      ...maturityComparisonData.map(item => [
        item.accountType,
        item.contractualMaturity,
        item.behavioralMaturity,
        item.difference,
        item.stabilityFactor
      ]),
      [''],
      ['CORE DEPOSIT RATIO CALCULATIONS'],
      [''],
      ['Ratio', 'Current (%)', 'Target (%)', 'Minimum/Maximum (%)', 'Status'],
      ...coreDepositRatios.map(item => [
        item.ratio,
        item.current,
        item.target,
        item.minimum ? item.minimum : item.maximum,
        item.status === 'above' ? 'Above Target' : 
        item.status === 'below' ? 'Below Target' : 'At Target'
      ])
    ];

    const coreDepositsSheet = XLSX.utils.aoa_to_sheet(coreDepositsExcelData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(coreDepositsSheet['!ref']);
    
    // Define styles for different sections
    const styles = {
      header: {
        font: { bold: true, size: 16, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "1F4E79" } }, // Dark blue
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      },
      subHeader: {
        font: { bold: true, size: 14, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "2F75B5" } }, // Medium blue
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      },
      sectionHeader: {
        font: { bold: true, size: 12, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "4472C4" } }, // Light blue
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      },
      tableHeader: {
        font: { bold: true, size: 11, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "5B9BD5" } }, // Light blue
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      },
      totalRow: {
        font: { bold: true, size: 16, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFFF00" } }, // Yellow background for maximum visibility
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thick", color: { rgb: "000000" } },
          bottom: { style: "thick", color: { rgb: "000000" } },
          left: { style: "thick", color: { rgb: "000000" } },
          right: { style: "thick", color: { rgb: "000000" } }
        }
      },
      totalRowNumbers: {
        font: { bold: true, size: 16, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFFF00" } }, // Yellow background for maximum visibility
        alignment: { horizontal: "right", vertical: "center" },
        border: {
          top: { style: "thick", color: { rgb: "000000" } },
          bottom: { style: "thick", color: { rgb: "000000" } },
          left: { style: "thick", color: { rgb: "000000" } },
          right: { style: "thick", color: { rgb: "000000" } }
        }
      },
      dataRow: {
        font: { size: 10, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFFFFF" } },
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CCCCCC" } },
          bottom: { style: "thin", color: { rgb: "CCCCCC" } },
          left: { style: "thin", color: { rgb: "CCCCCC" } },
          right: { style: "thin", color: { rgb: "CCCCCC" } }
        }
      },
      dataRowNumbers: {
        font: { size: 10, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFFFFF" } },
        alignment: { horizontal: "right", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CCCCCC" } },
          bottom: { style: "thin", color: { rgb: "CCCCCC" } },
          left: { style: "thin", color: { rgb: "CCCCCC" } },
          right: { style: "thin", color: { rgb: "CCCCCC" } }
        }
      },
      dataRowCenter: {
        font: { size: 10, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFFFFF" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "CCCCCC" } },
          bottom: { style: "thin", color: { rgb: "CCCCCC" } },
          left: { style: "thin", color: { rgb: "CCCCCC" } },
          right: { style: "thin", color: { rgb: "CCCCCC" } }
        }
      },
      statusGood: {
        font: { bold: true, size: 10, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "70AD47" } }, // Green
        alignment: { horizontal: "center", vertical: "center" }
      },
      statusWarning: {
        font: { bold: true, size: 10, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFC000" } }, // Orange
        alignment: { horizontal: "center", vertical: "center" }
      },
      statusBad: {
        font: { bold: true, size: 10, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "C5504B" } }, // Red
        alignment: { horizontal: "center", vertical: "center" }
      }
    };

    // Apply formatting to cells
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!coreDepositsSheet[cellAddress]) continue;
        
        const cell = coreDepositsSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[headerCellAddress]) {
              coreDepositsSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'CORE DEPOSITS ANALYSIS REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[subHeaderCellAddress]) {
              coreDepositsSheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if ((R === 5 && value === 'CORE DEPOSIT STABILITY ANALYSIS') || 
                   (R === 12 && value === 'DEPOSIT STABILITY BY CUSTOMER SEGMENT') ||
                   (R === 20 && value === 'BEHAVIORAL VS CONTRACTUAL MATURITY ANALYSIS') ||
                   (R === 27 && value === 'CORE DEPOSIT RATIO CALCULATIONS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[sectionHeaderCellAddress]) {
              coreDepositsSheet[sectionHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if ((R === 7 && value === 'Account Type') || 
                   (R === 14 && value === 'Customer Segment') ||
                   (R === 22 && value === 'Account Type') ||
                   (R === 29 && value === 'Ratio')) {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const tableHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[tableHeaderCellAddress]) {
              coreDepositsSheet[tableHeaderCellAddress].s = styles.tableHeader;
            }
          }
        } else if ((R === 11 && value === 'TOTAL') || 
                   (R === 19 && value === 'TOTAL')) {
          // Style total rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[totalCellAddress]) {
              if (col === 0) {
                coreDepositsSheet[totalCellAddress].s = styles.totalRow;
              } else {
                coreDepositsSheet[totalCellAddress].s = styles.totalRowNumbers;
              }
            }
          }
        } else if ((R >= 8 && R < 8 + coreDepositData.length) || 
                   (R >= 15 && R < 15 + depositStabilityData.length) ||
                   (R >= 23 && R < 23 + maturityComparisonData.length) ||
                   (R >= 30 && R < 30 + coreDepositRatios.length)) {
          // Style data rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (coreDepositsSheet[dataCellAddress]) {
              if (col === 0) {
                coreDepositsSheet[dataCellAddress].s = styles.dataRow;
              } else if ((R >= 8 && R < 8 + coreDepositData.length && (col === 4 || col === 5 || col === 6 || col === 7)) ||
                         (R >= 15 && R < 15 + depositStabilityData.length && (col === 3 || col === 4 || col === 5)) ||
                         (R >= 23 && R < 23 + maturityComparisonData.length && (col === 1 || col === 2 || col === 3 || col === 4)) ||
                         (R >= 30 && R < 30 + coreDepositRatios.length && (col === 1 || col === 2 || col === 3))) {
                coreDepositsSheet[dataCellAddress].s = styles.dataRowCenter;
              } else if ((R >= 15 && R < 15 + depositStabilityData.length && col === 6)) {
                // Runoff Risk status
                const riskValue = coreDepositsSheet[dataCellAddress].v;
                if (riskValue === 'Low') {
                  coreDepositsSheet[dataCellAddress].s = styles.statusGood;
                } else if (riskValue === 'Medium') {
                  coreDepositsSheet[dataCellAddress].s = styles.statusWarning;
                } else {
                  coreDepositsSheet[dataCellAddress].s = styles.statusBad;
                }
              } else if ((R >= 30 && R < 30 + coreDepositRatios.length && col === 4)) {
                // Ratio status
                const statusValue = coreDepositsSheet[dataCellAddress].v;
                if (statusValue === 'Above Target') {
                  coreDepositsSheet[dataCellAddress].s = styles.statusGood;
                } else if (statusValue === 'At Target') {
                  coreDepositsSheet[dataCellAddress].s = styles.statusWarning;
                } else {
                  coreDepositsSheet[dataCellAddress].s = styles.statusBad;
                }
              } else {
                coreDepositsSheet[dataCellAddress].s = styles.dataRowNumbers;
              }
            }
          }
        }
      }
    }

    // Set column widths
    coreDepositsSheet['!cols'] = [
      { width: 25 }, // Account Type/Customer Segment/Ratio
      { width: 20 }, // Amount columns
      { width: 20 }, // Amount columns
      { width: 20 }, // Amount columns
      { width: 15 }, // Percentage columns
      { width: 15 }, // Percentage columns
      { width: 15 }, // Percentage columns
      { width: 15 }  // Percentage columns
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, coreDepositsSheet, 'Core Deposits');

    // Export file
    XLSX.writeFile(workbook, `Core_Deposits_Analysis_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">Core Deposits Analysis</h3>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Download className="w-3 h-3" />
            Export to Excel
          </button>
        </div>
      </div>
      {/* Core Deposit Analysis */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Core Deposit Stability Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Account Type</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Total Balance</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Core Portion</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Volatile Portion</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Stability Factor (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Historical Runoff (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Behavioral Maturity (Months)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Contractual Maturity (Months)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coreDepositData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.accountType}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.totalBalance)}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.corePortion)}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.volatilePortion)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.stabilityFactor}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.historicalRunoff}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.behavioralMaturity}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.contractualMaturity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Segment Stability */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Deposit Stability by Customer Segment</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Customer Segment</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Total Deposits</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Core Deposits</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Stability Score (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Avg Relationship (Years)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Product Penetration</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Runoff Risk</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {depositStabilityData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.segment}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.totalDeposits)}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.coreDeposits)}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.stabilityScore}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.avgRelationship}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.productPenetration}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.runoffRisk === 'Low' ? 'bg-green-100 text-green-800' :
                      item.runoffRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      item.runoffRisk === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.runoffRisk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Behavioral vs Contractual Maturity */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Behavioral vs Contractual Maturity Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Account Type</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Contractual Maturity (Months)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Behavioral Maturity (Months)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Difference (Months)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Stability Factor (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {maturityComparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.accountType}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.contractualMaturity}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.behavioralMaturity}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.difference}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.stabilityFactor}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Deposit Ratios */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Core Deposit Ratio Calculations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Ratio</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Current (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Target (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Minimum/Maximum (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coreDepositRatios.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.ratio}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.current}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.target}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.minimum ? `${item.minimum}%` : `${item.maximum}%`}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'above' ? 'bg-green-100 text-green-800' :
                      item.status === 'below' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'above' ? 'Above Target' : 
                       item.status === 'below' ? 'Below Target' : 'At Target'}
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

export default CoreDeposits;
