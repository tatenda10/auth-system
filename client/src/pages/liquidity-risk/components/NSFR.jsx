import React from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';

const NSFR = ({ nsfrData, formatCurrency }) => {
  const exportToExcel = () => {
    // Calculate totals
    const asfTotal = nsfrData[0]?.items.reduce((sum, item) => sum + item.weighted, 0) || 0;
    const rsfTotal = nsfrData[1]?.items.reduce((sum, item) => sum + item.weighted, 0) || 0;
    const nsfrRatio = asfTotal / rsfTotal;

    // Prepare data for Excel export
    const nsfrExcelData = [
      ['RESERVE BANK OF ZIMBABWE'],
      ['NET STABLE FUNDING RATIO (NSFR) REPORT'],
      [''],
      ['Reporting Period: ' + new Date().toLocaleDateString('en-ZW')],
      [''],
      ['AVAILABLE STABLE FUNDING (ASF)'],
      [''],
      ['Item', 'Amount (USD)', 'Factor (%)', 'Weighted Amount (USD)'],
      ...(nsfrData[0]?.items.map(item => [
        item.name,
        item.amount,
        item.factor,
        item.weighted
      ]) || []),
      [''],
      ['TOTAL ASF', '', '', asfTotal],
      [''],
      ['REQUIRED STABLE FUNDING (RSF)'],
      [''],
      ['Item', 'Amount (USD)', 'Factor (%)', 'Weighted Amount (USD)'],
      ...(nsfrData[1]?.items.map(item => [
        item.name,
        item.amount,
        item.factor,
        item.weighted
      ]) || []),
      [''],
      ['TOTAL RSF', '', '', rsfTotal],
      [''],
      ['NSFR CALCULATION'],
      [''],
      ['Available Stable Funding (ASF)', asfTotal],
      ['Required Stable Funding (RSF)', rsfTotal],
      ['Net Stable Funding Ratio (NSFR)', nsfrRatio],
      ['NSFR Status', nsfrRatio >= 1.0 ? 'Compliant' : 'Non-Compliant']
    ];

    const nsfrSheet = XLSX.utils.aoa_to_sheet(nsfrExcelData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(nsfrSheet['!ref']);
    
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
      complianceGood: {
        font: { bold: true, size: 11, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "70AD47" } }, // Green
        alignment: { horizontal: "center", vertical: "center" }
      },
      complianceBad: {
        font: { bold: true, size: 11, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "C5504B" } }, // Red
        alignment: { horizontal: "center", vertical: "center" }
      }
    };

    // Apply formatting to cells
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!nsfrSheet[cellAddress]) continue;
        
        const cell = nsfrSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[headerCellAddress]) {
              nsfrSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'NET STABLE FUNDING RATIO (NSFR) REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[subHeaderCellAddress]) {
              nsfrSheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if ((R === 5 && value === 'AVAILABLE STABLE FUNDING (ASF)') || 
                   (R === 13 && value === 'REQUIRED STABLE FUNDING (RSF)') ||
                   (R === 20 && value === 'NSFR CALCULATION')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[sectionHeaderCellAddress]) {
              nsfrSheet[sectionHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if ((R === 7 && value === 'Item') || (R === 15 && value === 'Item')) {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const tableHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[tableHeaderCellAddress]) {
              nsfrSheet[tableHeaderCellAddress].s = styles.tableHeader;
            }
          }
        } else if ((R === 11 && value === 'TOTAL ASF') || (R === 19 && value === 'TOTAL RSF')) {
          // Style total rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[totalCellAddress]) {
              if (col === 0) {
                nsfrSheet[totalCellAddress].s = styles.totalRow;
              } else {
                nsfrSheet[totalCellAddress].s = styles.totalRowNumbers;
              }
            }
          }
        } else if (R >= 22 && R <= 25) {
          // Style NSFR calculation rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const calcCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[calcCellAddress]) {
              if (col === 0) {
                nsfrSheet[calcCellAddress].s = styles.totalRow;
              } else if (R === 25 && col === 1) {
                // NSFR Status cell
                nsfrSheet[calcCellAddress].s = value === 'Compliant' ? styles.complianceGood : styles.complianceBad;
              } else {
                nsfrSheet[calcCellAddress].s = styles.totalRowNumbers;
              }
            }
          }
        } else if ((R >= 8 && R < 8 + (nsfrData[0]?.items.length || 0)) || 
                   (R >= 16 && R < 16 + (nsfrData[1]?.items.length || 0))) {
          // Style data rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (nsfrSheet[dataCellAddress]) {
              if (col === 0) {
                nsfrSheet[dataCellAddress].s = styles.dataRow;
              } else if (col === 2) {
                nsfrSheet[dataCellAddress].s = styles.dataRowCenter;
              } else {
                nsfrSheet[dataCellAddress].s = styles.dataRowNumbers;
              }
            }
          }
        }
      }
    }

    // Set column widths
    nsfrSheet['!cols'] = [
      { width: 35 }, // Item
      { width: 18 }, // Amount
      { width: 12 }, // Factor
      { width: 20 }  // Weighted Amount
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, nsfrSheet, 'NSFR Report');

    // Export file
    XLSX.writeFile(workbook, `NSFR_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">Net Stable Funding Ratio (NSFR)</h3>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Download className="w-3 h-3" />
            Export to Excel
          </button>
        </div>
      </div>
      {nsfrData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">{section.category}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Item</th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Amount</th>
                  <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Factor (%)</th>
                  <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Weighted Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {section.items.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-2 py-1 text-xs text-gray-900">{item.name}</td>
                    <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.amount)}</td>
                    <td className="px-2 py-1 text-center text-xs text-gray-900">{item.factor}%</td>
                    <td className="px-2 py-1 text-right text-xs font-medium text-gray-900">{formatCurrency(item.weighted)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="text-center">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">NSFR Calculation</h4>
          <p className="text-xs text-blue-700">
            <span className="font-medium">Available Stable Funding:</span> $1,390,500,000 | 
            <span className="font-medium"> Required Stable Funding:</span> $1,278,750,000 | 
            <span className="font-medium"> NSFR:</span> 108.7%
          </p>
        </div>
      </div>
    </div>
  );
};

export default NSFR;
