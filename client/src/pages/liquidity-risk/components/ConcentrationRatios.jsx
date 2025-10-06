import React from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';

const ConcentrationRatios = ({ concentrationData, formatCurrency }) => {
  const exportToExcel = () => {
    // Calculate totals
    const totalAmount = concentrationData.reduce((sum, item) => sum + item.amount, 0);

    // Prepare data for Excel export
    const concentrationExcelData = [
      ['RESERVE BANK OF ZIMBABWE'],
      ['DEPOSIT CONCENTRATION RATIOS REPORT'],
      [''],
      ['Reporting Period: ' + new Date().toLocaleDateString('en-ZW')],
      [''],
      ['DEPOSIT CONCENTRATION ANALYSIS'],
      [''],
      ['Depositor Category', 'Amount (USD)', 'Percentage (%)', 'Limit (%)', 'Status'],
      ...concentrationData.map(item => [
        item.depositor,
        item.amount,
        item.percentage,
        item.limit,
        item.status === 'safe' ? 'Safe' : 'Warning'
      ]),
      [''],
      ['TOTAL DEPOSITS', totalAmount, '', '', ''],
      [''],
      ['SUMMARY'],
      ['Total Deposits', totalAmount],
      ['Concentration Risk Level', concentrationData.some(item => item.status !== 'safe') ? 'High' : 'Low'],
      ['Compliance Status', concentrationData.every(item => item.status === 'safe') ? 'Compliant' : 'Non-Compliant']
    ];

    const concentrationSheet = XLSX.utils.aoa_to_sheet(concentrationExcelData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(concentrationSheet['!ref']);
    
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
        fill: { fgColor: { rgb: "C5504B" } }, // Red
        alignment: { horizontal: "center", vertical: "center" }
      },
      summaryRow: {
        font: { bold: true, size: 12, color: { rgb: "000000" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "E7E6E6" } }, // Light gray
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } }
        }
      }
    };

    // Apply formatting to cells
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!concentrationSheet[cellAddress]) continue;
        
        const cell = concentrationSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[headerCellAddress]) {
              concentrationSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'DEPOSIT CONCENTRATION RATIOS REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[subHeaderCellAddress]) {
              concentrationSheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if (R === 5 && value === 'DEPOSIT CONCENTRATION ANALYSIS') {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[sectionHeaderCellAddress]) {
              concentrationSheet[sectionHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R === 7 && value === 'Depositor Category') {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const tableHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[tableHeaderCellAddress]) {
              concentrationSheet[tableHeaderCellAddress].s = styles.tableHeader;
            }
          }
        } else if (R === 7 + concentrationData.length + 1 && value === 'TOTAL DEPOSITS') {
          // Style total row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[totalCellAddress]) {
              if (col === 0) {
                concentrationSheet[totalCellAddress].s = styles.totalRow;
              } else {
                concentrationSheet[totalCellAddress].s = styles.totalRowNumbers;
              }
            }
          }
        } else if (R === 7 + concentrationData.length + 3 && value === 'SUMMARY') {
          // Style summary header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const summaryHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[summaryHeaderCellAddress]) {
              concentrationSheet[summaryHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R >= 8 && R < 8 + concentrationData.length) {
          // Style data rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[dataCellAddress]) {
              if (col === 0) {
                concentrationSheet[dataCellAddress].s = styles.dataRow;
              } else if (col === 2 || col === 3) {
                concentrationSheet[dataCellAddress].s = styles.dataRowCenter;
              } else if (col === 4) {
                // Status column
                const statusValue = concentrationSheet[dataCellAddress].v;
                if (statusValue === 'Safe') {
                  concentrationSheet[dataCellAddress].s = styles.statusGood;
                } else {
                  concentrationSheet[dataCellAddress].s = styles.statusWarning;
                }
              } else {
                concentrationSheet[dataCellAddress].s = styles.dataRowNumbers;
              }
            }
          }
        } else if (R >= 7 + concentrationData.length + 4 && R <= 7 + concentrationData.length + 6) {
          // Style summary rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const summaryCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (concentrationSheet[summaryCellAddress]) {
              if (col === 0) {
                concentrationSheet[summaryCellAddress].s = styles.summaryRow;
              } else {
                concentrationSheet[summaryCellAddress].s = styles.summaryRow;
              }
            }
          }
        }
      }
    }

    // Set column widths
    concentrationSheet['!cols'] = [
      { width: 25 }, // Depositor Category
      { width: 18 }, // Amount
      { width: 12 }, // Percentage
      { width: 10 }, // Limit
      { width: 12 }  // Status
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, concentrationSheet, 'Concentration Ratios');

    // Export file
    XLSX.writeFile(workbook, `Concentration_Ratios_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900">Deposit Concentration Ratios</h3>
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          <Download className="w-3 h-3" />
          Export to Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-600">
              <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Depositor Category</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Amount</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Percentage</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Limit</th>
              <th className="px-2 py-1 text-center text-xs font-medium text-white tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {concentrationData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.depositor}</td>
                <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.amount)}</td>
                <td className="px-2 py-1 text-center text-xs text-gray-900">{item.percentage}%</td>
                <td className="px-2 py-1 text-center text-xs text-gray-900">{item.limit}%</td>
                <td className="px-2 py-1 text-center">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'safe' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status === 'safe' ? 'Safe' : 'Warning'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConcentrationRatios;
