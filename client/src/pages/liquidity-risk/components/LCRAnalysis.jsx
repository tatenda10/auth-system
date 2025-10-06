import React, { useState } from 'react';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx-js-style';
import { 
  rbzHQLAClassification, 
  rbzCashOutflowFactors, 
  rbzCashInflowFactors, 
  rbzStressScenarios, 
  rbzLCRCalculation, 
  rbzLCRHelpers, 
  sampleRBZLCRData 
} from '../../../data/rbzLCRData';

const LCRAnalysis = ({ liquidityRiskStructure, showPrevMonth, renderValue, getRowStyle, getIndentStyle }) => {
  const [selectedScenario, setSelectedScenario] = useState('baseCase');
  const [showStressTesting, setShowStressTesting] = useState(false);
  const [showRBZFeatures, setShowRBZFeatures] = useState(true);

  // Format currency
  const formatCurrency = (amount) => {
    if (amount === 0) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format percentage
  const formatPercentage = (value) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Above Target': return 'text-green-600';
      case 'Compliant': return 'text-blue-600';
      case 'Non-Compliant': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  // Calculate RBZ LCR with stress scenario
  const calculateRBZLCR = (scenario) => {
    const data = sampleRBZLCRData;
    
    // Apply stress scenario adjustments
    const adjustedHQLA = rbzLCRHelpers.applyStressScenario(data.hqla.total, scenario);
    const adjustedOutflows = rbzLCRHelpers.applyStressScenario(data.cashOutflows.total, scenario);
    const adjustedInflows = rbzLCRHelpers.applyStressScenario(data.cashInflows.total, scenario);
    
    // Calculate net cash outflows
    const netCashOutflows = rbzLCRHelpers.calculateNetCashOutflows(adjustedOutflows, adjustedInflows);
    
    // Calculate LCR
    const lcr = rbzLCRHelpers.calculateLCR(adjustedHQLA, netCashOutflows);
    
    // Check compliance
    const compliance = rbzLCRHelpers.checkLCRCompliance(lcr);
    
    return {
      hqla: adjustedHQLA,
      cashOutflows: adjustedOutflows,
      cashInflows: adjustedInflows,
      netCashOutflows,
      lcr,
      compliance
    };
  };

  const currentLCR = calculateRBZLCR(selectedScenario);

  // Excel Export Function for RBZ Compliance with Enhanced Formatting
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    
    // Sheet 1: LCR Summary (RBZ Template)
    const lcrSummaryData = [
      ['RESERVE BANK OF ZIMBABWE', '', '', '', '', ''],
      ['LIQUIDITY COVERAGE RATIO (LCR) REPORT', '', '', '', '', ''],
      ['Reporting Period:', new Date().toLocaleDateString(), '', '', '', ''],
      ['', '', '', '', '', ''],
      ['LCR CALCULATION SUMMARY', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['Item', 'Amount (USD)', 'Factor', 'Weighted Amount', 'Notes', ''],
      ['HIGH QUALITY LIQUID ASSETS (HQLA)', '', '', '', '', ''],
      ['Level 1 Assets', '', '', '', '', ''],
      ['Cash in Vault', sampleRBZLCRData.hqla.level1.cash, '100%', sampleRBZLCRData.hqla.level1.cash, 'No haircut', ''],
      ['RBZ Reserves', sampleRBZLCRData.hqla.level1.rbzReserves, '100%', sampleRBZLCRData.hqla.level1.rbzReserves, 'No haircut', ''],
      ['Treasury Bills', sampleRBZLCRData.hqla.level1.treasuryBills, '100%', sampleRBZLCRData.hqla.level1.treasuryBills, 'No haircut', ''],
      ['Treasury Bonds', sampleRBZLCRData.hqla.level1.treasuryBonds, '100%', sampleRBZLCRData.hqla.level1.treasuryBonds, 'No haircut', ''],
      ['Level 1 Total', '', '', sampleRBZLCRData.hqla.level1.total, '', ''],
      ['', '', '', '', '', ''],
      ['Level 2A Assets', '', '', '', '', ''],
      ['Corporate Bonds (AA- to A-)', sampleRBZLCRData.hqla.level2A.corporateBonds, '85%', sampleRBZLCRData.hqla.level2A.corporateBonds * 0.85, '15% haircut', ''],
      ['Covered Bonds', sampleRBZLCRData.hqla.level2A.coveredBonds, '85%', sampleRBZLCRData.hqla.level2A.coveredBonds * 0.85, '15% haircut', ''],
      ['Multilateral Securities', sampleRBZLCRData.hqla.level2A.multilateralSecurities, '85%', sampleRBZLCRData.hqla.level2A.multilateralSecurities * 0.85, '15% haircut', ''],
      ['Level 2A Total', '', '', sampleRBZLCRData.hqla.level2A.total * 0.85, '', ''],
      ['', '', '', '', '', ''],
      ['Level 2B Assets', '', '', '', '', ''],
      ['Lower Rated Bonds (BBB+)', sampleRBZLCRData.hqla.level2B.lowerRatedBonds, '50%', sampleRBZLCRData.hqla.level2B.lowerRatedBonds * 0.50, '50% haircut', ''],
      ['ZSE Listed Equities', sampleRBZLCRData.hqla.level2B.equities, '50%', sampleRBZLCRData.hqla.level2B.equities * 0.50, '50% haircut', ''],
      ['Level 2B Total', '', '', sampleRBZLCRData.hqla.level2B.total * 0.50, '', ''],
      ['', '', '', '', '', ''],
      ['TOTAL HQLA', '', '', sampleRBZLCRData.hqla.total * 0.85, '', ''],
      ['', '', '', '', '', ''],
      ['NET CASH OUTFLOWS', '', '', '', '', ''],
      ['Retail Deposits', '', '', '', '', ''],
      ['Stable Retail Deposits', sampleRBZLCRData.cashOutflows.retail.stable, '5%', sampleRBZLCRData.cashOutflows.retail.stable * 0.05, 'Stable relationship', ''],
      ['Less Stable Retail Deposits', sampleRBZLCRData.cashOutflows.retail.lessStable, '10%', sampleRBZLCRData.cashOutflows.retail.lessStable * 0.10, 'Single product', ''],
      ['High Value Retail Deposits', sampleRBZLCRData.cashOutflows.retail.highValue, '15%', sampleRBZLCRData.cashOutflows.retail.highValue * 0.15, '>$100,000', ''],
      ['Retail Total', '', '', sampleRBZLCRData.cashOutflows.retail.total * 0.10, '', ''],
      ['', '', '', '', '', ''],
      ['Wholesale Deposits', '', '', '', '', ''],
      ['Small Business Deposits', sampleRBZLCRData.cashOutflows.wholesale.smallBusiness, '5%', sampleRBZLCRData.cashOutflows.wholesale.smallBusiness * 0.05, '<$1M operational', ''],
      ['Operational Deposits', sampleRBZLCRData.cashOutflows.wholesale.operational, '25%', sampleRBZLCRData.cashOutflows.wholesale.operational * 0.25, 'Clearing accounts', ''],
      ['Non-Operational Deposits', sampleRBZLCRData.cashOutflows.wholesale.nonOperational, '40%', sampleRBZLCRData.cashOutflows.wholesale.nonOperational * 0.40, 'Non-operational', ''],
      ['Wholesale Total', '', '', sampleRBZLCRData.cashOutflows.wholesale.total * 0.30, '', ''],
      ['', '', '', '', '', ''],
      ['Secured Funding', '', '', '', '', ''],
      ['Level 2A Collateral', sampleRBZLCRData.cashOutflows.secured.level2ACollateral, '15%', sampleRBZLCRData.cashOutflows.secured.level2ACollateral * 0.15, 'Corporate bonds', ''],
      ['Other Collateral', sampleRBZLCRData.cashOutflows.secured.otherCollateral, '25%', sampleRBZLCRData.cashOutflows.secured.otherCollateral * 0.25, 'Non-HQLA', ''],
      ['Secured Total', '', '', sampleRBZLCRData.cashOutflows.secured.total * 0.20, '', ''],
      ['', '', '', '', '', ''],
      ['Additional Requirements', '', '', '', '', ''],
      ['Derivatives', sampleRBZLCRData.cashOutflows.additional.derivatives, '100%', sampleRBZLCRData.cashOutflows.additional.derivatives, 'Net outflows', ''],
      ['Credit Facilities', sampleRBZLCRData.cashOutflows.additional.creditFacilities, '100%', sampleRBZLCRData.cashOutflows.additional.creditFacilities, 'Undrawn facilities', ''],
      ['Trade Finance', sampleRBZLCRData.cashOutflows.additional.tradeFinance, '30%', sampleRBZLCRData.cashOutflows.additional.tradeFinance * 0.30, 'Letters of credit', ''],
      ['Additional Total', '', '', sampleRBZLCRData.cashOutflows.additional.total * 0.60, '', ''],
      ['', '', '', '', '', ''],
      ['TOTAL CASH OUTFLOWS', '', '', sampleRBZLCRData.cashOutflows.total * 0.25, '', ''],
      ['', '', '', '', '', ''],
      ['CASH INFLOWS', '', '', '', '', ''],
      ['Secured Lending', '', '', '', '', ''],
      ['Level 2A Collateral', sampleRBZLCRData.cashInflows.secured.level2ACollateral, '15%', sampleRBZLCRData.cashInflows.secured.level2ACollateral * 0.15, 'Corporate bonds', ''],
      ['Other Collateral', sampleRBZLCRData.cashInflows.secured.otherCollateral, '50%', sampleRBZLCRData.cashInflows.secured.otherCollateral * 0.50, 'Non-HQLA', ''],
      ['Secured Total', '', '', sampleRBZLCRData.cashInflows.secured.total * 0.35, '', ''],
      ['', '', '', '', '', ''],
      ['Other Inflows', '', '', '', '', ''],
      ['Interest Payments', sampleRBZLCRData.cashInflows.other.interestPayments, '50%', sampleRBZLCRData.cashInflows.other.interestPayments * 0.50, 'Expected receipts', ''],
      ['Maturing Securities', sampleRBZLCRData.cashInflows.other.maturingSecurities, '100%', sampleRBZLCRData.cashInflows.other.maturingSecurities, '30-day maturity', ''],
      ['Other Total', '', '', sampleRBZLCRData.cashInflows.other.total * 0.75, '', ''],
      ['', '', '', '', '', ''],
      ['TOTAL CASH INFLOWS', '', '', sampleRBZLCRData.cashInflows.total * 0.60, '', ''],
      ['', '', '', '', '', ''],
      ['NET CASH OUTFLOWS', '', '', currentLCR.netCashOutflows, 'Outflows - min(Inflows, 75% of Outflows)', ''],
      ['', '', '', '', '', ''],
      ['LIQUIDITY COVERAGE RATIO', '', '', '', '', ''],
      ['LCR Ratio', '', '', `${(currentLCR.lcr * 100).toFixed(1)}%`, '', ''],
      ['Minimum Requirement', '', '', '100%', '', ''],
      ['Target Ratio', '', '', '110%', '', ''],
      ['Compliance Status', '', '', currentLCR.compliance.status, '', ''],
      ['', '', '', '', '', ''],
      ['STRESS TESTING RESULTS', '', '', '', '', ''],
      ['Scenario', 'LCR Ratio', 'Status', 'Risk Level', 'Probability', ''],
      ['Base Case', `${(calculateRBZLCR('baseCase').lcr * 100).toFixed(1)}%`, calculateRBZLCR('baseCase').compliance.status, 'Low', '70%', ''],
      ['Adverse', `${(calculateRBZLCR('adverse').lcr * 100).toFixed(1)}%`, calculateRBZLCR('adverse').compliance.status, 'Medium', '25%', ''],
      ['Severely Adverse', `${(calculateRBZLCR('severelyAdverse').lcr * 100).toFixed(1)}%`, calculateRBZLCR('severelyAdverse').compliance.status, 'High', '5%', ''],
      ['Economic Sanctions', `${(calculateRBZLCR('sanctions').lcr * 100).toFixed(1)}%`, calculateRBZLCR('sanctions').compliance.status, 'High', '10%', ''],
      ['Hyperinflation', `${(calculateRBZLCR('hyperinflation').lcr * 100).toFixed(1)}%`, calculateRBZLCR('hyperinflation').compliance.status, 'High', '15%', ''],
      ['Agricultural Drought', `${(calculateRBZLCR('agriculturalDrought').lcr * 100).toFixed(1)}%`, calculateRBZLCR('agriculturalDrought').compliance.status, 'Medium', '20%', ''],
      ['', '', '', '', '', ''],
      ['REPORTING INFORMATION', '', '', '', '', ''],
      ['Report Generated:', new Date().toLocaleString(), '', '', '', ''],
      ['Generated By:', 'ALM System', '', '', '', ''],
      ['Report Version:', '1.0', '', '', '', ''],
      ['Compliance:', 'RBZ Prudential Standard No. 02-2022', '', '', '', '']
    ];

    const lcrSummarySheet = XLSX.utils.aoa_to_sheet(lcrSummaryData);
    
    // Enhanced formatting with colors and styles
    const range = XLSX.utils.decode_range(lcrSummarySheet['!ref']);
    
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
        font: { bold: true, size: 16, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FF0000" } }, // Red background for maximum visibility
        alignment: { horizontal: "left", vertical: "center" },
        border: {
          top: { style: "thick", color: { rgb: "000000" } },
          bottom: { style: "thick", color: { rgb: "000000" } },
          left: { style: "thick", color: { rgb: "000000" } },
          right: { style: "thick", color: { rgb: "000000" } }
        }
      },
      totalRowNumbers: {
        font: { bold: true, size: 16, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FF0000" } }, // Red background for maximum visibility
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
      complianceGood: {
        font: { bold: true, size: 11, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "70AD47" } }, // Green
        alignment: { horizontal: "center", vertical: "center" }
      },
      complianceWarning: {
        font: { bold: true, size: 11, color: { rgb: "FFFFFF" }, name: "Times New Roman" },
        fill: { fgColor: { rgb: "FFC000" } }, // Orange
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
        if (!lcrSummarySheet[cellAddress]) continue;
        
        const cell = lcrSummarySheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'RESERVE BANK OF ZIMBABWE') {
          // Style entire header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[headerCellAddress]) {
              lcrSummarySheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 1 && value === 'LIQUIDITY COVERAGE RATIO (LCR) REPORT') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[subHeaderCellAddress]) {
              lcrSummarySheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if (R === 4 && value === 'LCR CALCULATION SUMMARY') {
          // Style entire sub-header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const subHeaderCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[subHeaderCellAddress]) {
              lcrSummarySheet[subHeaderCellAddress].s = styles.subHeader;
            }
          }
        } else if (R === 6 && value === 'Item') {
          // Style entire table header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[headerCellAddress]) {
              lcrSummarySheet[headerCellAddress].s = styles.tableHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('HIGH QUALITY LIQUID ASSETS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('NET CASH OUTFLOWS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('CASH INFLOWS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('LIQUIDITY COVERAGE RATIO')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('STRESS TESTING RESULTS')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('REPORTING INFORMATION')) {
          // Style entire section header row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[sectionCellAddress]) {
              lcrSummarySheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && (value.includes('Total') || value.includes('TOTAL'))) {
          // Style entire total row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[totalCellAddress]) {
              if (col === 0) {
                lcrSummarySheet[totalCellAddress].s = styles.totalRow; // Text alignment for labels
              } else {
                lcrSummarySheet[totalCellAddress].s = styles.totalRowNumbers; // Right alignment for numbers
              }
            }
          }
        } else if (typeof value === 'string' && value.includes('%') && (value.includes('Above Target') || value.includes('Compliant'))) {
          cell.s = styles.complianceGood;
        } else if (typeof value === 'string' && value.includes('Non-Compliant')) {
          cell.s = styles.complianceBad;
        } else if (R > 6) {
          // Style entire data row
          for (let col = range.s.c; col <= range.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (lcrSummarySheet[dataCellAddress]) {
              if (col === 0) {
                lcrSummarySheet[dataCellAddress].s = styles.dataRow; // Text alignment for labels
              } else {
                lcrSummarySheet[dataCellAddress].s = styles.dataRowNumbers; // Right alignment for numbers
              }
            }
          }
        }
      }
    }
    
    // Set column widths
    lcrSummarySheet['!cols'] = [
      { wch: 30 }, // Column A - Wider for better readability
      { wch: 18 }, // Column B
      { wch: 12 }, // Column C
      { wch: 18 }, // Column D
      { wch: 25 }, // Column E - Wider for notes
      { wch: 12 }  // Column F
    ];

    XLSX.utils.book_append_sheet(workbook, lcrSummarySheet, 'LCR Summary');

    // Sheet 2: Detailed HQLA Breakdown with Enhanced Formatting
    const hqlaBreakdownData = [
      ['HQLA DETAILED BREAKDOWN', '', '', '', ''],
      ['', '', '', '', ''],
      ['Asset Level', 'Asset Type', 'Amount (USD)', 'Haircut', 'HQLA Value'],
      ['LEVEL 1 ASSETS (100% HQLA)', '', '', '', ''],
      ['Level 1', 'Cash & RBZ Reserves', sampleRBZLCRData.hqla.level1.cash + sampleRBZLCRData.hqla.level1.rbzReserves, '0%', sampleRBZLCRData.hqla.level1.cash + sampleRBZLCRData.hqla.level1.rbzReserves],
      ['Level 1', 'Zimbabwe Government Securities', sampleRBZLCRData.hqla.level1.treasuryBills + sampleRBZLCRData.hqla.level1.treasuryBonds, '0%', sampleRBZLCRData.hqla.level1.treasuryBills + sampleRBZLCRData.hqla.level1.treasuryBonds],
      ['', '', '', '', ''],
      ['LEVEL 2A ASSETS (85% HQLA)', '', '', '', ''],
      ['Level 2A', 'Corporate Bonds (AA- to A-)', sampleRBZLCRData.hqla.level2A.corporateBonds, '15%', sampleRBZLCRData.hqla.level2A.corporateBonds * 0.85],
      ['Level 2A', 'Covered Bonds (Zimbabwe)', sampleRBZLCRData.hqla.level2A.coveredBonds, '15%', sampleRBZLCRData.hqla.level2A.coveredBonds * 0.85],
      ['Level 2A', 'Multilateral Securities', sampleRBZLCRData.hqla.level2A.multilateralSecurities, '15%', sampleRBZLCRData.hqla.level2A.multilateralSecurities * 0.85],
      ['', '', '', '', ''],
      ['LEVEL 2B ASSETS (50% HQLA)', '', '', '', ''],
      ['Level 2B', 'Corporate Bonds (BBB+ to BBB-)', sampleRBZLCRData.hqla.level2B.lowerRatedBonds, '50%', sampleRBZLCRData.hqla.level2B.lowerRatedBonds * 0.50],
      ['Level 2B', 'ZSE Listed Equities', sampleRBZLCRData.hqla.level2B.equities, '50%', sampleRBZLCRData.hqla.level2B.equities * 0.50],
      ['', '', '', '', ''],
      ['TOTAL HQLA', '', sampleRBZLCRData.hqla.total, '', sampleRBZLCRData.hqla.total * 0.85],
      ['', '', '', '', ''],
      ['CAP LIMITS', '', '', '', ''],
      ['Level 1 Cap (40%)', '', '', '', ''],
      ['Level 2A Cap (40%)', '', '', '', ''],
      ['Level 2B Cap (15%)', '', '', '', ''],
      ['Total Level 2 Cap (40%)', '', '', '', '']
    ];

    const hqlaBreakdownSheet = XLSX.utils.aoa_to_sheet(hqlaBreakdownData);
    
    // Apply formatting to HQLA Breakdown sheet
    const hqlaRange = XLSX.utils.decode_range(hqlaBreakdownSheet['!ref']);
    
    for (let R = hqlaRange.s.r; R <= hqlaRange.e.r; ++R) {
      for (let C = hqlaRange.s.c; C <= hqlaRange.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!hqlaBreakdownSheet[cellAddress]) continue;
        
        const cell = hqlaBreakdownSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'HQLA DETAILED BREAKDOWN') {
          // Style entire header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[headerCellAddress]) {
              hqlaBreakdownSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 2 && value === 'Asset Level') {
          // Style entire table header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[headerCellAddress]) {
              hqlaBreakdownSheet[headerCellAddress].s = styles.tableHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('LEVEL 1 ASSETS')) {
          // Style entire section header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[sectionCellAddress]) {
              hqlaBreakdownSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('LEVEL 2A ASSETS')) {
          // Style entire section header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[sectionCellAddress]) {
              hqlaBreakdownSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('LEVEL 2B ASSETS')) {
          // Style entire section header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[sectionCellAddress]) {
              hqlaBreakdownSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('TOTAL HQLA')) {
          // Style entire total row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[totalCellAddress]) {
              if (col === 0) {
                hqlaBreakdownSheet[totalCellAddress].s = styles.totalRow; // Text alignment for labels
              } else {
                hqlaBreakdownSheet[totalCellAddress].s = styles.totalRowNumbers; // Right alignment for numbers
              }
            }
          }
        } else if (typeof value === 'string' && value.includes('CAP LIMITS')) {
          // Style entire section header row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[sectionCellAddress]) {
              hqlaBreakdownSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R > 2) {
          // Style entire data row
          for (let col = hqlaRange.s.c; col <= hqlaRange.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (hqlaBreakdownSheet[dataCellAddress]) {
              if (col === 0) {
                hqlaBreakdownSheet[dataCellAddress].s = styles.dataRow; // Text alignment for labels
              } else {
                hqlaBreakdownSheet[dataCellAddress].s = styles.dataRowNumbers; // Right alignment for numbers
              }
            }
          }
        }
      }
    }
    
    hqlaBreakdownSheet['!cols'] = [
      { wch: 20 }, { wch: 35 }, { wch: 18 }, { wch: 12 }, { wch: 18 }
    ];

    XLSX.utils.book_append_sheet(workbook, hqlaBreakdownSheet, 'HQLA Breakdown');

    // Sheet 3: Cash Flow Analysis with Enhanced Formatting
    const cashFlowData = [
      ['CASH FLOW ANALYSIS', '', '', '', ''],
      ['', '', '', '', ''],
      ['CASH OUTFLOWS', '', '', '', ''],
      ['Category', 'Subcategory', 'Amount (USD)', 'Factor', 'Weighted Amount'],
      ['Retail Deposits', 'Stable', sampleRBZLCRData.cashOutflows.retail.stable, '5%', sampleRBZLCRData.cashOutflows.retail.stable * 0.05],
      ['Retail Deposits', 'Less Stable', sampleRBZLCRData.cashOutflows.retail.lessStable, '10%', sampleRBZLCRData.cashOutflows.retail.lessStable * 0.10],
      ['Retail Deposits', 'High Value', sampleRBZLCRData.cashOutflows.retail.highValue, '15%', sampleRBZLCRData.cashOutflows.retail.highValue * 0.15],
      ['Wholesale Deposits', 'Small Business', sampleRBZLCRData.cashOutflows.wholesale.smallBusiness, '5%', sampleRBZLCRData.cashOutflows.wholesale.smallBusiness * 0.05],
      ['Wholesale Deposits', 'Operational', sampleRBZLCRData.cashOutflows.wholesale.operational, '25%', sampleRBZLCRData.cashOutflows.wholesale.operational * 0.25],
      ['Wholesale Deposits', 'Non-Operational', sampleRBZLCRData.cashOutflows.wholesale.nonOperational, '40%', sampleRBZLCRData.cashOutflows.wholesale.nonOperational * 0.40],
      ['Secured Funding', 'Level 2A Collateral', sampleRBZLCRData.cashOutflows.secured.level2ACollateral, '15%', sampleRBZLCRData.cashOutflows.secured.level2ACollateral * 0.15],
      ['Secured Funding', 'Other Collateral', sampleRBZLCRData.cashOutflows.secured.otherCollateral, '25%', sampleRBZLCRData.cashOutflows.secured.otherCollateral * 0.25],
      ['Additional', 'Derivatives', sampleRBZLCRData.cashOutflows.additional.derivatives, '100%', sampleRBZLCRData.cashOutflows.additional.derivatives],
      ['Additional', 'Credit Facilities', sampleRBZLCRData.cashOutflows.additional.creditFacilities, '100%', sampleRBZLCRData.cashOutflows.additional.creditFacilities],
      ['Additional', 'Trade Finance', sampleRBZLCRData.cashOutflows.additional.tradeFinance, '30%', sampleRBZLCRData.cashOutflows.additional.tradeFinance * 0.30],
      ['', '', '', '', ''],
      ['TOTAL CASH OUTFLOWS', '', sampleRBZLCRData.cashOutflows.total, '', sampleRBZLCRData.cashOutflows.total * 0.25],
      ['', '', '', '', ''],
      ['CASH INFLOWS', '', '', '', ''],
      ['Category', 'Subcategory', 'Amount (USD)', 'Factor', 'Weighted Amount'],
      ['Secured Lending', 'Level 2A Collateral', sampleRBZLCRData.cashInflows.secured.level2ACollateral, '15%', sampleRBZLCRData.cashInflows.secured.level2ACollateral * 0.15],
      ['Secured Lending', 'Other Collateral', sampleRBZLCRData.cashInflows.secured.otherCollateral, '50%', sampleRBZLCRData.cashInflows.secured.otherCollateral * 0.50],
      ['Other Inflows', 'Interest Payments', sampleRBZLCRData.cashInflows.other.interestPayments, '50%', sampleRBZLCRData.cashInflows.other.interestPayments * 0.50],
      ['Other Inflows', 'Maturing Securities', sampleRBZLCRData.cashInflows.other.maturingSecurities, '100%', sampleRBZLCRData.cashInflows.other.maturingSecurities],
      ['', '', '', '', ''],
      ['TOTAL CASH INFLOWS', '', sampleRBZLCRData.cashInflows.total, '', sampleRBZLCRData.cashInflows.total * 0.60],
      ['', '', '', '', ''],
      ['NET CASH OUTFLOWS', '', '', '', currentLCR.netCashOutflows]
    ];

    const cashFlowSheet = XLSX.utils.aoa_to_sheet(cashFlowData);
    
    // Apply formatting to Cash Flow Analysis sheet
    const cashFlowRange = XLSX.utils.decode_range(cashFlowSheet['!ref']);
    
    for (let R = cashFlowRange.s.r; R <= cashFlowRange.e.r; ++R) {
      for (let C = cashFlowRange.s.c; C <= cashFlowRange.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!cashFlowSheet[cellAddress]) continue;
        
        const cell = cashFlowSheet[cellAddress];
        const value = cell.v;
        
        // Apply styles based on content and position
        if (R === 0 && value === 'CASH FLOW ANALYSIS') {
          // Style entire header row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[headerCellAddress]) {
              cashFlowSheet[headerCellAddress].s = styles.header;
            }
          }
        } else if (R === 2 && value === 'CASH OUTFLOWS') {
          // Style entire section header row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[sectionCellAddress]) {
              cashFlowSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R === 3 && value === 'Category') {
          // Style entire table header row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[headerCellAddress]) {
              cashFlowSheet[headerCellAddress].s = styles.tableHeader;
            }
          }
        } else if (R === 18 && value === 'CASH INFLOWS') {
          // Style entire section header row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const sectionCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[sectionCellAddress]) {
              cashFlowSheet[sectionCellAddress].s = styles.sectionHeader;
            }
          }
        } else if (R === 19 && value === 'Category') {
          // Style entire table header row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const headerCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[headerCellAddress]) {
              cashFlowSheet[headerCellAddress].s = styles.tableHeader;
            }
          }
        } else if (typeof value === 'string' && value.includes('TOTAL CASH OUTFLOWS')) {
          // Style entire total row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[totalCellAddress]) {
              if (col === 0) {
                cashFlowSheet[totalCellAddress].s = styles.totalRow; // Text alignment for labels
              } else {
                cashFlowSheet[totalCellAddress].s = styles.totalRowNumbers; // Right alignment for numbers
              }
            }
          }
        } else if (typeof value === 'string' && value.includes('TOTAL CASH INFLOWS')) {
          // Style entire total row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[totalCellAddress]) {
              if (col === 0) {
                cashFlowSheet[totalCellAddress].s = styles.totalRow; // Text alignment for labels
              } else {
                cashFlowSheet[totalCellAddress].s = styles.totalRowNumbers; // Right alignment for numbers
              }
            }
          }
        } else if (typeof value === 'string' && value.includes('NET CASH OUTFLOWS')) {
          // Style entire total row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const totalCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[totalCellAddress]) {
              if (col === 0) {
                cashFlowSheet[totalCellAddress].s = styles.totalRow; // Text alignment for labels
              } else {
                cashFlowSheet[totalCellAddress].s = styles.totalRowNumbers; // Right alignment for numbers
              }
            }
          }
        } else if (R > 3 && R !== 19) {
          // Style entire data row
          for (let col = cashFlowRange.s.c; col <= cashFlowRange.e.c; col++) {
            const dataCellAddress = XLSX.utils.encode_cell({ r: R, c: col });
            if (cashFlowSheet[dataCellAddress]) {
              if (col === 0) {
                cashFlowSheet[dataCellAddress].s = styles.dataRow; // Text alignment for labels
              } else {
                cashFlowSheet[dataCellAddress].s = styles.dataRowNumbers; // Right alignment for numbers
              }
            }
          }
        }
      }
    }
    
    cashFlowSheet['!cols'] = [
      { wch: 20 }, { wch: 20 }, { wch: 18 }, { wch: 12 }, { wch: 18 }
    ];

    XLSX.utils.book_append_sheet(workbook, cashFlowSheet, 'Cash Flow Analysis');

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const filename = `RBZ_LCR_Report_${timestamp}.xlsx`;

    // Save the file
    XLSX.writeFile(workbook, filename);
  };

  return (
    <div className="space-y-4">
      {/* Header with Controls */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="bg-gray-700 px-4 py-2">
          <h3 className="text-sm font-semibold text-white">Liquidity Coverage Ratio (LCR) Analysis</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-600">Minimum Requirement: 100% | Target: 110%</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={exportToExcel}
                className="flex items-center space-x-1 text-xs bg-green-600 text-white px-3 py-1 hover:bg-green-700"
              >
                <Download className="h-3 w-3" />
                <span>Export to Excel</span>
              </button>
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={showRBZFeatures}
                  onChange={(e) => setShowRBZFeatures(e.target.checked)}
                  className="text-xs"
                />
                <span className="text-xs text-gray-600">Show RBZ Features</span>
              </label>
              {showRBZFeatures && (
                <>
                  <select
                    value={selectedScenario}
                    onChange={(e) => setSelectedScenario(e.target.value)}
                    className="text-xs border border-gray-300 px-2 py-1"
                  >
                    <option value="baseCase">Base Case</option>
                    <option value="adverse">Adverse Scenario</option>
                    <option value="severelyAdverse">Severely Adverse</option>
                    <option value="sanctions">Economic Sanctions</option>
                    <option value="hyperinflation">Hyperinflation</option>
                    <option value="agriculturalDrought">Agricultural Drought</option>
                  </select>
                  <button
                    onClick={() => setShowStressTesting(!showStressTesting)}
                    className="text-xs bg-blue-600 text-white px-2 py-1 hover:bg-blue-700"
                  >
                    {showStressTesting ? 'Hide' : 'Show'} Stress Testing
                  </button>
                </>
              )}
            </div>
          </div>

          {/* LCR Summary */}
          {showRBZFeatures && (
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="bg-gray-50 p-3 text-center">
                <h4 className="text-xs font-medium text-gray-600">LCR Ratio</h4>
                <p className={`text-lg font-bold ${getStatusColor(currentLCR.compliance.status)}`}>
                  {formatPercentage(currentLCR.lcr)}
                </p>
                <p className="text-xs text-gray-500">{currentLCR.compliance.status}</p>
              </div>
              <div className="bg-gray-50 p-3 text-center">
                <h4 className="text-xs font-medium text-gray-600">HQLA Stock</h4>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(currentLCR.hqla)}
                </p>
              </div>
              <div className="bg-gray-50 p-3 text-center">
                <h4 className="text-xs font-medium text-gray-600">Net Cash Outflows</h4>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(currentLCR.netCashOutflows)}
                </p>
              </div>
              <div className="bg-gray-50 p-3 text-center">
                <h4 className="text-xs font-medium text-gray-600">Scenario</h4>
                <p className="text-lg font-bold text-gray-900">
                  {rbzStressScenarios[selectedScenario]?.name || selectedScenario}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main LCR Analysis Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="px-2 py-1 text-left text-xs font-semibold text-white tracking-wider">
                  Item
                </th>
                <th className="px-2 py-1 text-center text-xs font-semibold text-white tracking-wider w-32">
                  Multiplier
                </th>
                <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                  Current Month
                </th>
                {showPrevMonth && (
                  <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                    Prev. Month
                  </th>
                )}
                <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                  Forecast (Year-end)
                </th>
                <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                  Multiplier Applied
                </th>
                {showPrevMonth && (
                  <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                    Prev. Month
                  </th>
                )}
                <th className="px-2 py-1 text-right text-xs font-semibold text-white tracking-wider w-28">
                  Year End F/Cast
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {liquidityRiskStructure.map((item) => (
                <tr key={item.id} className={getRowStyle(item)}>
                  <td className="px-2 py-1">
                    <div className={`${
                      item.type === 'main-header' ? 'text-sm font-bold text-gray-900' : 
                      item.type === 'sub-header' ? 'text-sm font-semibold text-gray-800' :
                      item.type === 'sub-sub-header' ? 'text-xs font-medium text-gray-700' :
                      item.type === 'calculation' ? 'text-sm font-bold text-gray-900' :
                      'text-xs font-medium text-gray-600'
                    }`}>
                      <span className={getIndentStyle(item.level)}>
                        {item.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-1 text-center">
                    {renderValue(item, 'factor')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {renderValue(item, 'currentMonth')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {showPrevMonth && renderValue(item, 'prevMonth')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {renderValue(item, 'forecast')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {renderValue(item, 'factorAppliedCurrent')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {showPrevMonth && renderValue(item, 'factorAppliedPrev')}
                  </td>
                  <td className="px-2 py-1 text-right">
                    {renderValue(item, 'factorAppliedForecast')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RBZ HQLA Composition */}
      {showRBZFeatures && (
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">HQLA Composition (RBZ Classification)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Asset Level</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Asset Type</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Amount</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Haircut</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">HQLA Value</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Cap</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Level 1 Assets */}
                <tr className="bg-gray-200 border-b-2 border-gray-400">
                  <td className="px-3 py-2 text-sm font-bold text-gray-900" colSpan="6">Level 1 Assets (100% HQLA)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 1</td>
                  <td className="px-3 py-2 text-xs text-gray-900">Cash & RBZ Reserves</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level1.cash + sampleRBZLCRData.hqla.level1.rbzReserves)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">0%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level1.cash + sampleRBZLCRData.hqla.level1.rbzReserves)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">40%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 1</td>
                  <td className="px-3 py-2 text-xs text-gray-900">Zimbabwe Government Securities</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level1.treasuryBills + sampleRBZLCRData.hqla.level1.treasuryBonds)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">0%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level1.treasuryBills + sampleRBZLCRData.hqla.level1.treasuryBonds)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">40%</td>
                </tr>

                {/* Level 2A Assets */}
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <td className="px-3 py-2 text-sm font-bold text-gray-800" colSpan="6">Level 2A Assets (85% HQLA)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 2A</td>
                  <td className="px-3 py-2 text-xs text-gray-900">Corporate Bonds (AA- to A-)</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2A.corporateBonds)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">15%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2A.corporateBonds * 0.85)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">40%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 2A</td>
                  <td className="px-3 py-2 text-xs text-gray-900">Covered Bonds (Zimbabwe)</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2A.coveredBonds)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">15%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2A.coveredBonds * 0.85)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">40%</td>
                </tr>

                {/* Level 2B Assets */}
                <tr className="bg-gray-50 border-b-2 border-gray-300">
                  <td className="px-3 py-2 text-sm font-bold text-gray-700" colSpan="6">Level 2B Assets (50% HQLA)</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 2B</td>
                  <td className="px-3 py-2 text-xs text-gray-900">Corporate Bonds (BBB+ to BBB-)</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2B.lowerRatedBonds)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">50%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2B.lowerRatedBonds * 0.50)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">15%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs text-gray-900">Level 2B</td>
                  <td className="px-3 py-2 text-xs text-gray-900">ZSE Listed Equities</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2B.equities)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">50%</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.level2B.equities * 0.50)}</td>
                  <td className="px-3 py-2 text-xs text-gray-900 text-right">15%</td>
                </tr>

                {/* Total */}
                <tr className="bg-gray-200 border-b-4 border-gray-400">
                  <td className="px-3 py-2 text-sm font-bold text-gray-900" colSpan="2">Total HQLA</td>
                  <td className="px-3 py-2 text-sm font-bold text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.total)}</td>
                  <td className="px-3 py-2 text-sm font-bold text-gray-900 text-right">-</td>
                  <td className="px-3 py-2 text-sm font-bold text-gray-900 text-right">{formatCurrency(sampleRBZLCRData.hqla.total * 0.85)}</td>
                  <td className="px-3 py-2 text-sm font-bold text-gray-900 text-right">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Stress Testing Results */}
      {showRBZFeatures && showStressTesting && (
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="bg-gray-700 px-4 py-2">
            <h3 className="text-sm font-semibold text-white">Stress Testing Results</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Scenario</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-white tracking-wider">Description</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Probability</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">LCR Ratio</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Status</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-white tracking-wider">Risk Level</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(rbzStressScenarios).map(([key, scenario]) => {
                  if (key === 'zimbabweSpecific') return null;
                  const lcrResult = calculateRBZLCR(key);
                  return (
                    <tr key={key} className={key === selectedScenario ? 'bg-blue-50' : ''}>
                      <td className="px-3 py-2 text-sm font-semibold text-gray-900">{scenario.name}</td>
                      <td className="px-3 py-2 text-xs text-gray-700">{scenario.description}</td>
                      <td className="px-3 py-2 text-xs font-medium text-gray-900 text-right">{scenario.probability}%</td>
                      <td className="px-3 py-2 text-xs font-bold text-right">
                        {formatPercentage(lcrResult.lcr)}
                      </td>
                      <td className="px-3 py-2 text-xs font-bold text-right">
                        {lcrResult.compliance.status}
                      </td>
                      <td className="px-3 py-2 text-xs font-medium text-gray-900 text-right">{scenario.stressLevel}</td>
                    </tr>
                  );
                })}
                {Object.entries(rbzStressScenarios.zimbabweSpecific).map(([key, scenario]) => {
                  const lcrResult = calculateRBZLCR(key);
                  return (
                    <tr key={key} className={key === selectedScenario ? 'bg-blue-50' : 'bg-yellow-50'}>
                      <td className="px-3 py-2 text-sm font-semibold text-gray-900">{scenario.name}</td>
                      <td className="px-3 py-2 text-xs text-gray-700">{scenario.description}</td>
                      <td className="px-3 py-2 text-xs font-medium text-gray-900 text-right">{scenario.probability}%</td>
                      <td className="px-3 py-2 text-xs font-bold text-right">
                        {formatPercentage(lcrResult.lcr)}
                      </td>
                      <td className="px-3 py-2 text-xs font-bold text-right">
                        {lcrResult.compliance.status}
                      </td>
                      <td className="px-3 py-2 text-xs font-medium text-gray-900 text-right">{scenario.stressLevel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LCRAnalysis;
