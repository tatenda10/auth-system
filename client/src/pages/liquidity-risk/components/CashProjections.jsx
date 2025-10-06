import React from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';

const CashProjections = ({ 
  cashProjectionScenarios, 
  cashFlowProjections, 
  fundingStressScenarios, 
  contingencyFundingPlans, 
  scenarioLiquidityRatios, 
  formatCurrency 
}) => {
  const exportToExcel = () => {
    // Prepare data for Excel export
    const cashProjectionsExcelData = [
      ['RESERVE BANK OF ZIMBABWE'],
      ['CASH PROJECTIONS & STRESS TESTING REPORT'],
      [''],
      ['Reporting Period: ' + new Date().toLocaleDateString('en-ZW')],
      [''],
      ['STRESS SCENARIO DEFINITIONS'],
      [''],
      ['Scenario', 'Description', 'Stress Level', 'Probability (%)'],
      ...cashProjectionScenarios.map(item => [
        item.scenario,
        item.description,
        item.stressLevel,
        item.probability
      ]),
      [''],
      ['CASH FLOW PROJECTIONS BY SCENARIO AND HORIZON'],
      [''],
      ['Scenario', 'Horizon', 'Cash Inflows (USD)', 'Cash Outflows (USD)', 'Net Cash Flow (USD)', 'Liquidity Buffer (USD)', 'Net Position (USD)', 'Status'],
      ...cashFlowProjections.map(item => [
        item.scenario,
        item.horizon,
        item.cashInflows,
        item.cashOutflows,
        item.netCashFlow,
        item.liquidityBuffer,
        item.netPosition,
        item.status
      ]),
      [''],
      ['FUNDING STRESS SCENARIOS'],
      [''],
      ['Stress Type', 'Base Case (%)', 'Adverse (%)', 'Severely Adverse (%)', 'Impact Description'],
      ...fundingStressScenarios.map(item => [
        item.stressType,
        item.baseCase,
        item.adverse,
        item.severelyAdverse,
        item.impact
      ]),
      [''],
      ['CONTINGENCY FUNDING PLANS'],
      [''],
      ['Funding Source', 'Availability', 'Cost', 'Access Time', 'Conditions', 'Status'],
      ...contingencyFundingPlans.map(item => [
        item.fundingSource,
        item.availability,
        item.cost,
        item.accessTime,
        item.conditions,
        item.status
      ]),
      [''],
      ['SCENARIO-BASED LIQUIDITY RATIOS'],
      [''],
      ['Ratio', 'Base Case (%)', 'Adverse (%)', 'Severely Adverse (%)', 'Minimum/Maximum (%)', 'Status'],
      ...scenarioLiquidityRatios.map(item => [
        item.ratio,
        item.baseCase,
        item.adverse,
        item.severelyAdverse,
        item.minimum ? item.minimum : item.maximum,
        item.status
      ])
    ];

    const cashProjectionsSheet = XLSX.utils.aoa_to_sheet(cashProjectionsExcelData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(cashProjectionsSheet['!ref']);
    
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
        if (!cashProjectionsSheet[cellAddress]) continue;
        
        const cell = cashProjectionsSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashProjectionsSheet[headerCellAddress]) {
              cashProjectionsSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'CASH PROJECTIONS & STRESS TESTING REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashProjectionsSheet[subHeaderCellAddress]) {
              cashProjectionsSheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if ((R === 5 && value === 'STRESS SCENARIO DEFINITIONS') || 
                   (R === 11 && value === 'CASH FLOW PROJECTIONS BY SCENARIO AND HORIZON') ||
                   (R === 19 && value === 'FUNDING STRESS SCENARIOS') ||
                   (R === 26 && value === 'CONTINGENCY FUNDING PLANS') ||
                   (R === 33 && value === 'SCENARIO-BASED LIQUIDITY RATIOS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashProjectionsSheet[sectionHeaderCellAddress]) {
              cashProjectionsSheet[sectionHeaderCellAddress].s = styles.sectionHeader;
            }
          }
        } else if ((R === 7 && value === 'Scenario') || 
                   (R === 13 && value === 'Scenario') ||
                   (R === 21 && value === 'Stress Type') ||
                   (R === 28 && value === 'Funding Source') ||
                   (R === 35 && value === 'Ratio')) {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const tableHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashProjectionsSheet[tableHeaderCellAddress]) {
              cashProjectionsSheet[tableHeaderCellAddress].s = styles.tableHeader;
            }
          }
        } else if ((R >= 8 && R < 8 + cashProjectionScenarios.length) || 
                   (R >= 14 && R < 14 + cashFlowProjections.length) ||
                   (R >= 22 && R < 22 + fundingStressScenarios.length) ||
                   (R >= 29 && R < 29 + contingencyFundingPlans.length) ||
                   (R >= 36 && R < 36 + scenarioLiquidityRatios.length)) {
          // Style data rows
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashProjectionsSheet[dataCellAddress]) {
              if (col === 0) {
                cashProjectionsSheet[dataCellAddress].s = styles.dataRow;
              } else if ((R >= 8 && R < 8 + cashProjectionScenarios.length && col === 2) ||
                         (R >= 14 && R < 14 + cashFlowProjections.length && (col === 1 || col === 7)) ||
                         (R >= 22 && R < 22 + fundingStressScenarios.length && (col === 1 || col === 2 || col === 3)) ||
                         (R >= 29 && R < 29 + contingencyFundingPlans.length && (col === 1 || col === 2 || col === 3 || col === 5)) ||
                         (R >= 36 && R < 36 + scenarioLiquidityRatios.length && (col === 1 || col === 2 || col === 3 || col === 4))) {
                cashProjectionsSheet[dataCellAddress].s = styles.dataRowCenter;
              } else if ((R >= 8 && R < 8 + cashProjectionScenarios.length && col === 3)) {
                // Probability column
                cashProjectionsSheet[dataCellAddress].s = styles.dataRowCenter;
              } else if ((R >= 14 && R < 14 + cashFlowProjections.length && col === 7)) {
                // Status column
                const statusValue = cashProjectionsSheet[dataCellAddress].v;
                if (statusValue === 'Adequate') {
                  cashProjectionsSheet[dataCellAddress].s = styles.statusGood;
                } else if (statusValue === 'Warning') {
                  cashProjectionsSheet[dataCellAddress].s = styles.statusWarning;
                } else {
                  cashProjectionsSheet[dataCellAddress].s = styles.statusBad;
                }
              } else if ((R >= 29 && R < 29 + contingencyFundingPlans.length && col === 5)) {
                // Status column
                const statusValue = cashProjectionsSheet[dataCellAddress].v;
                if (statusValue === 'Available') {
                  cashProjectionsSheet[dataCellAddress].s = styles.statusGood;
                } else {
                  cashProjectionsSheet[dataCellAddress].s = styles.statusWarning;
                }
              } else if ((R >= 36 && R < 36 + scenarioLiquidityRatios.length && col === 5)) {
                // Status column
                cashProjectionsSheet[dataCellAddress].s = styles.statusBad;
              } else {
                cashProjectionsSheet[dataCellAddress].s = styles.dataRowNumbers;
              }
            }
          }
        }
      }
    }

    // Set column widths
    cashProjectionsSheet['!cols'] = [
      { width: 20 }, // Scenario/Stress Type/Funding Source/Ratio
      { width: 15 }, // Description/Horizon/Availability/Cost/Access Time/Base Case
      { width: 15 }, // Stress Level/Cash Inflows/Adverse/Adverse
      { width: 15 }, // Probability/Cash Outflows/Severely Adverse/Severely Adverse
      { width: 15 }, // Net Cash Flow/Impact Description/Conditions/Minimum/Maximum
      { width: 15 }, // Liquidity Buffer/Status/Status
      { width: 15 }, // Net Position
      { width: 15 }  // Status
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, cashProjectionsSheet, 'Cash Projections');

    // Export file
    XLSX.writeFile(workbook, `Cash_Projections_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">Cash Projections & Stress Testing</h3>
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            <Download className="w-3 h-3" />
            Export to Excel
          </button>
        </div>
      </div>
      {/* Scenario Definitions */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Stress Scenario Definitions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Scenario</th>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Description</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Stress Level</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Probability (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cashProjectionScenarios.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.scenario}</td>
                  <td className="px-2 py-1 text-xs text-gray-900">{item.description}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.stressLevel === 'Low' ? 'bg-green-100 text-green-800' :
                      item.stressLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.stressLevel}
                    </span>
                  </td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.probability}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cash Flow Projections */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Cash Flow Projections by Scenario and Horizon</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Scenario</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Horizon</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Cash Inflows</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Cash Outflows</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Net Cash Flow</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Liquidity Buffer</th>
                <th className="px-2 py-1 text-right text-xs font-medium text-gray-900">Net Position</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cashFlowProjections.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.scenario}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.horizon}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.cashInflows)}</td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.cashOutflows)}</td>
                  <td className={`px-2 py-1 text-right text-xs font-medium ${item.netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(item.netCashFlow)}
                  </td>
                  <td className="px-2 py-1 text-right text-xs text-gray-900">{formatCurrency(item.liquidityBuffer)}</td>
                  <td className={`px-2 py-1 text-right text-xs font-medium ${item.netPosition >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(item.netPosition)}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Adequate' ? 'bg-green-100 text-green-800' :
                      item.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Funding Stress Scenarios */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Funding Stress Scenarios</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Stress Type</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Base Case (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Adverse (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Severely Adverse (%)</th>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Impact Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fundingStressScenarios.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.stressType}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.baseCase}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.adverse}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.severelyAdverse}%</td>
                  <td className="px-2 py-1 text-xs text-gray-900">{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contingency Funding Plans */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Contingency Funding Plans</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Funding Source</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Availability</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Cost</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Access Time</th>
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Conditions</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contingencyFundingPlans.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.fundingSource}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.availability}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.cost}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.accessTime}</td>
                  <td className="px-2 py-1 text-xs text-gray-900">{item.conditions}</td>
                  <td className="px-2 py-1 text-center">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scenario-Based Liquidity Ratios */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Scenario-Based Liquidity Ratios</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1 text-left text-xs font-medium text-gray-900">Ratio</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Base Case (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Adverse (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Severely Adverse (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Minimum/Maximum (%)</th>
                <th className="px-2 py-1 text-center text-xs font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scenarioLiquidityRatios.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-2 py-1 text-xs font-medium text-gray-900">{item.ratio}</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.baseCase}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.adverse}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">{item.severelyAdverse}%</td>
                  <td className="px-2 py-1 text-center text-xs text-gray-900">
                    {item.minimum ? `${item.minimum}%` : `${item.maximum}%`}
                  </td>
                  <td className="px-2 py-1 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {item.status}
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

export default CashProjections;
