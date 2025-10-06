import React from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';

const GapAnalysis = ({ gapAnalysisData, formatCurrency }) => {
  const exportToExcel = () => {
    // Prepare data for Excel export
    const gapAnalysisExcelData = [
      ['RESERVE BANK OF ZIMBABWE'],
      ['GAP ANALYSIS REPORT'],
      [''],
      ['Reporting Period: ' + new Date().toLocaleDateString('en-ZW')],
      [''],
      ['TIME BUCKET GAP ANALYSIS'],
      [''],
      ['Time Bucket', 'Assets (USD)', 'Liabilities (USD)', 'Gap (USD)', 'Cumulative Gap (USD)'],
      ...gapAnalysisData.map(item => [
        item.bucket,
        item.assets,
        item.liabilities,
        item.gap,
        item.cumulativeGap
      ]),
      [''],
      ['SUMMARY'],
      ['Total Assets', gapAnalysisData.reduce((sum, item) => sum + item.assets, 0)],
      ['Total Liabilities', gapAnalysisData.reduce((sum, item) => sum + item.liabilities, 0)],
      ['Net Gap', gapAnalysisData.reduce((sum, item) => sum + item.gap, 0)],
      ['Final Cumulative Gap', gapAnalysisData[gapAnalysisData.length - 1]?.cumulativeGap || 0]
    ];

    const gapAnalysisSheet = XLSX.utils.aoa_to_sheet(gapAnalysisExcelData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(gapAnalysisSheet['!ref']);
    
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
      }
    };

    // Apply formatting to cells
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!gapAnalysisSheet[cellAddress]) continue;
        
        const cell = gapAnalysisSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[headerCellAddress]) {
              gapAnalysisSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'GAP ANALYSIS REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[subHeaderCellAddress]) {
              gapAnalysisSheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if (R === 5 && value === 'TIME BUCKET GAP ANALYSIS') {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[sectionHeaderCellAddress]) {
              gapAnalysisSheet[sectionHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R === 7 && value === 'Time Bucket') {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const tableHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[tableHeaderCellAddress]) {
              gapAnalysisSheet[tableHeaderCellAddress].s = styles.tableHeader;
            }
          }
        } else if (R === 7 + gapAnalysisData.length + 1 && value === 'SUMMARY') {
          // Style entire summary header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const summaryHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[summaryHeaderCellAddress]) {
              gapAnalysisSheet[summaryHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R >= 7 + gapAnalysisData.length + 2 && (value === 'Total Assets' || value === 'Total Liabilities' || value === 'Net Gap' || value === 'Final Cumulative Gap')) {
          // Style total rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[totalCellAddress]) {
              if (col === 0) {
                gapAnalysisSheet[totalCellAddress].s = styles.totalRow;
              } else {
                gapAnalysisSheet[totalCellAddress].s = styles.totalRowNumbers;
              }
            }
          }
        } else if (R >= 8 && R < 8 + gapAnalysisData.length) {
          // Style data rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (gapAnalysisSheet[dataCellAddress]) {
              if (col === 0) {
                gapAnalysisSheet[dataCellAddress].s = styles.dataRow;
              } else {
                gapAnalysisSheet[dataCellAddress].s = styles.dataRowNumbers;
              }
            }
          }
        }
      }
    }

    // Set column widths
    gapAnalysisSheet['!cols'] = [
      { width: 20 }, // Time Bucket
      { width: 18 }, // Assets
      { width: 18 }, // Liabilities
      { width: 18 }, // Gap
      { width: 20 }  // Cumulative Gap
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, gapAnalysisSheet, 'Gap Analysis');

    // Export file
    XLSX.writeFile(workbook, `Gap_Analysis_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900">Gap Analysis</h3>
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
              <th className="px-2 py-1 text-left text-xs font-medium text-white tracking-wider">Time Bucket</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Assets</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Liabilities</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Gap</th>
              <th className="px-2 py-1 text-right text-xs font-medium text-white tracking-wider">Cumulative Gap</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {gapAnalysisData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.bucket}</td>
                <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.assets)}</td>
                <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.liabilities)}</td>
                <td className={`px-2 py-1 text-right text-xs font-medium ${item.gap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(item.gap)}
                </td>
                <td className={`px-2 py-1 text-right text-xs font-medium ${item.cumulativeGap >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(item.cumulativeGap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GapAnalysis;
