// RBZ LCR Data Structure
// Based on Reserve Bank of Zimbabwe Prudential Standard No. 02-2022
// Liquidity Coverage Ratio (LCR) Requirements

// Zimbabwe-Specific HQLA Classification
export const rbzHQLAClassification = {
  // Level 1 Assets (100% HQLA)
  level1Assets: [
    {
      category: 'Cash and Central Bank Reserves',
      items: [
        { name: 'Cash in Vault', factor: 1.0, description: 'Physical cash held in bank vaults' },
        { name: 'Reserve Bank of Zimbabwe Reserves', factor: 1.0, description: 'Reserves held with RBZ' },
        { name: 'SDR Holdings', factor: 1.0, description: 'Special Drawing Rights' },
        { name: 'Gold Bullion', factor: 1.0, description: 'Physical gold held in vaults' }
      ]
    },
    {
      category: 'Zimbabwe Government Securities',
      items: [
        { name: 'Treasury Bills (Zimbabwe)', factor: 1.0, description: 'Short-term government securities' },
        { name: 'Treasury Bonds (Zimbabwe)', factor: 1.0, description: 'Long-term government securities' },
        { name: 'RBZ Bills', factor: 1.0, description: 'Central bank securities' },
        { name: 'Government Guaranteed Securities', factor: 1.0, description: 'Securities with explicit government guarantee' }
      ]
    },
    {
      category: 'Foreign Sovereign Securities',
      items: [
        { name: 'US Treasury Securities', factor: 1.0, description: 'US government securities' },
        { name: 'UK Gilts', factor: 1.0, description: 'UK government securities' },
        { name: 'Eurozone Government Bonds', factor: 1.0, description: 'Eurozone government securities' },
        { name: 'SADC Government Securities', factor: 0.95, description: 'SADC member state securities' }
      ]
    }
  ],

  // Level 2A Assets (85% HQLA)
  level2AAssets: [
    {
      category: 'Corporate Bonds',
      items: [
        { name: 'AA- to A- Rated Corporate Bonds', factor: 0.85, description: 'High-quality corporate debt' },
        { name: 'Covered Bonds (Zimbabwe)', factor: 0.85, description: 'Covered bonds meeting RBZ criteria' },
        { name: 'Municipal Bonds', factor: 0.85, description: 'Local government securities' }
      ]
    },
    {
      category: 'Multilateral Development Bank Securities',
      items: [
        { name: 'World Bank Securities', factor: 0.85, description: 'World Bank issued securities' },
        { name: 'African Development Bank Securities', factor: 0.85, description: 'AfDB issued securities' },
        { name: 'SADC Development Fund Securities', factor: 0.85, description: 'SADC development securities' }
      ]
    }
  ],

  // Level 2B Assets (50% HQLA)
  level2BAssets: [
    {
      category: 'Lower Rated Corporate Bonds',
      items: [
        { name: 'BBB+ to BBB- Rated Corporate Bonds', factor: 0.50, description: 'Investment grade corporate debt' },
        { name: 'Residential Mortgage-Backed Securities', factor: 0.50, description: 'RMBS meeting RBZ criteria' },
        { name: 'Commercial Mortgage-Backed Securities', factor: 0.50, description: 'CMBS meeting RBZ criteria' }
      ]
    },
    {
      category: 'Equity Securities',
      items: [
        { name: 'ZSE Listed Equities', factor: 0.50, description: 'Zimbabwe Stock Exchange listed shares' },
        { name: 'Regional Exchange Equities', factor: 0.50, description: 'SADC regional exchange shares' }
      ]
    }
  ]
};

// RBZ-Specific Cash Outflow Factors
export const rbzCashOutflowFactors = {
  // Retail Deposits
  retailDeposits: {
    stable: {
      factor: 0.05,
      description: 'Stable retail deposits with relationship banking',
      conditions: 'Customer has multiple products, long-term relationship'
    },
    lessStable: {
      factor: 0.10,
      description: 'Less stable retail deposits',
      conditions: 'Single product relationship, short-term customer'
    },
    highValue: {
      factor: 0.15,
      description: 'High-value retail deposits (>$100,000)',
      conditions: 'Deposits above RBZ threshold'
    }
  },

  // Unsecured Wholesale Funding
  unsecuredWholesale: {
    smallBusiness: {
      factor: 0.05,
      description: 'Small business deposits',
      conditions: 'Business deposits < $1M, operational relationship'
    },
    operational: {
      factor: 0.25,
      description: 'Operational deposits',
      conditions: 'Deposits for operational purposes, clearing accounts'
    },
    nonOperational: {
      factor: 0.40,
      description: 'Non-operational deposits',
      conditions: 'Deposits not for operational purposes'
    },
    financialInstitution: {
      factor: 0.40,
      description: 'Financial institution deposits',
      conditions: 'Deposits from other financial institutions'
    }
  },

  // Secured Funding
  securedFunding: {
    level1Collateral: {
      factor: 0.00,
      description: 'Secured with Level 1 HQLA',
      conditions: 'Collateralized with government securities, cash'
    },
    level2ACollateral: {
      factor: 0.15,
      description: 'Secured with Level 2A HQLA',
      conditions: 'Collateralized with corporate bonds, covered bonds'
    },
    level2BCollateral: {
      factor: 0.25,
      description: 'Secured with Level 2B HQLA',
      conditions: 'Collateralized with lower-rated securities'
    },
    otherCollateral: {
      factor: 0.25,
      description: 'Secured with other collateral',
      conditions: 'Collateralized with non-HQLA assets'
    }
  },

  // Additional Requirements
  additionalRequirements: {
    derivatives: {
      factor: 1.0,
      description: 'Derivatives cash outflows',
      conditions: 'Net derivative cash outflows'
    },
    creditFacilities: {
      factor: 1.0,
      description: 'Credit and liquidity facilities',
      conditions: 'Undrawn credit and liquidity facilities'
    },
    tradeFinance: {
      factor: 0.30,
      description: 'Trade finance commitments',
      conditions: 'Letters of credit, guarantees'
    }
  }
};

// RBZ-Specific Cash Inflow Factors
export const rbzCashInflowFactors = {
  // Secured Lending
  securedLending: {
    level1Collateral: {
      factor: 0.00,
      description: 'Secured lending against Level 1 HQLA',
      conditions: 'Lending secured by government securities'
    },
    level2ACollateral: {
      factor: 0.15,
      description: 'Secured lending against Level 2A HQLA',
      conditions: 'Lending secured by corporate bonds'
    },
    level2BCollateral: {
      factor: 0.25,
      description: 'Secured lending against Level 2B HQLA',
      conditions: 'Lending secured by lower-rated securities'
    },
    otherCollateral: {
      factor: 0.50,
      description: 'Secured lending against other collateral',
      conditions: 'Lending secured by non-HQLA assets'
    }
  },

  // Other Inflows
  otherInflows: {
    interestPayments: {
      factor: 0.50,
      description: 'Interest and dividend payments',
      conditions: 'Expected interest and dividend receipts'
    },
    maturingSecurities: {
      factor: 1.0,
      description: 'Maturing securities',
      conditions: 'Securities maturing within 30 days'
    },
    committedLines: {
      factor: 0.00,
      description: 'Committed credit lines',
      conditions: 'Undrawn committed credit lines'
    }
  }
};

// RBZ Stress Scenarios
export const rbzStressScenarios = {
  // Base Case Scenario
  baseCase: {
    name: 'Base Case',
    description: 'Normal economic conditions with stable funding markets',
    probability: 70,
    stressLevel: 'Low',
    adjustments: {
      depositRunoff: 0,
      marketDisruption: 0,
      assetPriceVolatility: 0,
      currencyStress: 0
    }
  },

  // Adverse Scenario
  adverse: {
    name: 'Adverse Scenario',
    description: 'Moderate economic stress with funding market disruption',
    probability: 25,
    stressLevel: 'Medium',
    adjustments: {
      depositRunoff: 15,
      marketDisruption: 25,
      assetPriceVolatility: 20,
      currencyStress: 15
    }
  },

  // Severely Adverse Scenario
  severelyAdverse: {
    name: 'Severely Adverse Scenario',
    description: 'Crisis conditions with severe funding market disruption',
    probability: 5,
    stressLevel: 'High',
    adjustments: {
      depositRunoff: 35,
      marketDisruption: 50,
      assetPriceVolatility: 40,
      currencyStress: 30
    }
  },

  // Zimbabwe-Specific Scenarios
  zimbabweSpecific: {
    // Economic Sanctions Scenario
    sanctions: {
      name: 'Economic Sanctions Scenario',
      description: 'Impact of international economic sanctions on Zimbabwe',
      probability: 10,
      stressLevel: 'High',
      adjustments: {
        depositRunoff: 40,
        marketDisruption: 60,
        assetPriceVolatility: 50,
        currencyStress: 45,
        foreignExchangeConstraints: 70
      }
    },

    // Hyperinflation Scenario
    hyperinflation: {
      name: 'Hyperinflation Scenario',
      description: 'Return to hyperinflationary conditions',
      probability: 15,
      stressLevel: 'High',
      adjustments: {
        depositRunoff: 50,
        marketDisruption: 75,
        assetPriceVolatility: 60,
        currencyStress: 80,
        localCurrencyDepreciation: 90
      }
    },

    // Agricultural Drought Scenario
    agriculturalDrought: {
      name: 'Agricultural Drought Scenario',
      description: 'Severe drought affecting agricultural sector',
      probability: 20,
      stressLevel: 'Medium',
      adjustments: {
        depositRunoff: 20,
        marketDisruption: 30,
        assetPriceVolatility: 25,
        currencyStress: 20,
        agriculturalLoanDefaults: 35
      }
    }
  }
};

// RBZ LCR Calculation Methodology
export const rbzLCRCalculation = {
  // HQLA Calculation
  hqlaCalculation: {
    level1Cap: 0.40, // 40% cap on Level 1 assets
    level2ACap: 0.40, // 40% cap on Level 2A assets
    level2BCap: 0.15, // 15% cap on Level 2B assets
    totalCap: 0.40, // 40% cap on total Level 2 assets
    haircuts: {
      level1: 0.00, // No haircut for Level 1
      level2A: 0.15, // 15% haircut for Level 2A
      level2B: 0.50 // 50% haircut for Level 2B
    }
  },

  // Net Cash Outflow Calculation
  netCashOutflowCalculation: {
    formula: 'Total Cash Outflows - min(Total Cash Inflows, 75% of Total Cash Outflows)',
    cashInflowCap: 0.75, // 75% cap on cash inflows
    minimumOutflow: 0.25 // Minimum 25% of total outflows
  },

  // LCR Formula
  lcrFormula: {
    formula: 'Stock of HQLA / Net Cash Outflows over 30 days',
    minimum: 1.0, // 100% minimum requirement
    target: 1.1, // 110% target ratio
    reporting: 'Monthly reporting to RBZ'
  }
};

// RBZ LCR Reporting Requirements
export const rbzLCRReporting = {
  // Reporting Frequency
  frequency: {
    daily: 'Daily calculation for internal monitoring',
    weekly: 'Weekly reporting to senior management',
    monthly: 'Monthly reporting to RBZ',
    quarterly: 'Quarterly public disclosure'
  },

  // Reporting Templates
  templates: {
    rbzlcr001: 'RBZ LCR 001 - HQLA Composition',
    rbzlcr002: 'RBZ LCR 002 - Cash Outflows',
    rbzlcr003: 'RBZ LCR 003 - Cash Inflows',
    rbzlcr004: 'RBZ LCR 004 - LCR Calculation',
    rbzlcr005: 'RBZ LCR 005 - Stress Testing Results'
  },

  // Disclosure Requirements
  disclosure: {
    public: [
      'LCR ratio and components',
      'HQLA composition by level',
      'Major drivers of LCR changes',
      'Stress testing results summary'
    ],
    regulatory: [
      'Detailed LCR calculation',
      'HQLA eligibility assessment',
      'Cash flow projections',
      'Stress scenario analysis',
      'Remedial action plans'
    ]
  }
};

// Helper Functions for RBZ LCR Calculations
export const rbzLCRHelpers = {
  // Calculate HQLA with RBZ haircuts
  calculateHQLA: (assets, level) => {
    const haircuts = rbzLCRCalculation.hqlaCalculation.haircuts;
    const haircut = haircuts[level] || 0;
    return assets * (1 - haircut);
  },

  // Apply RBZ stress scenario adjustments
  applyStressScenario: (baseValue, scenario) => {
    const adjustments = rbzStressScenarios[scenario]?.adjustments || {};
    let adjustedValue = baseValue;
    
    Object.values(adjustments).forEach(adjustment => {
      adjustedValue = adjustedValue * (1 - adjustment / 100);
    });
    
    return adjustedValue;
  },

  // Calculate net cash outflows with RBZ methodology
  calculateNetCashOutflows: (totalOutflows, totalInflows) => {
    const cap = rbzLCRCalculation.netCashOutflowCalculation.cashInflowCap;
    const cappedInflows = Math.min(totalInflows, totalOutflows * cap);
    return totalOutflows - cappedInflows;
  },

  // Calculate LCR ratio
  calculateLCR: (hqla, netCashOutflows) => {
    if (netCashOutflows === 0) return 0;
    return hqla / netCashOutflows;
  },

  // Check LCR compliance
  checkLCRCompliance: (lcr) => {
    const minimum = rbzLCRCalculation.lcrFormula.minimum;
    const target = rbzLCRCalculation.lcrFormula.target;
    
    return {
      compliant: lcr >= minimum,
      targetMet: lcr >= target,
      ratio: lcr,
      status: lcr >= target ? 'Above Target' : lcr >= minimum ? 'Compliant' : 'Non-Compliant'
    };
  }
};

// Sample RBZ LCR Data for Testing
export const sampleRBZLCRData = {
  // HQLA Composition
  hqla: {
    level1: {
      cash: 45000000,
      rbzReserves: 35000000,
      treasuryBills: 120000000,
      treasuryBonds: 80000000,
      total: 280000000
    },
    level2A: {
      corporateBonds: 60000000,
      coveredBonds: 30000000,
      multilateralSecurities: 20000000,
      total: 110000000
    },
    level2B: {
      lowerRatedBonds: 25000000,
      equities: 15000000,
      total: 40000000
    },
    total: 430000000
  },

  // Cash Outflows
  cashOutflows: {
    retail: {
      stable: 60000000,
      lessStable: 80000000,
      highValue: 20000000,
      total: 160000000
    },
    wholesale: {
      smallBusiness: 30000000,
      operational: 100000000,
      nonOperational: 120000000,
      total: 250000000
    },
    secured: {
      level1Collateral: 0,
      level2ACollateral: 18000000,
      otherCollateral: 32000000,
      total: 50000000
    },
    additional: {
      derivatives: 25000000,
      creditFacilities: 15000000,
      tradeFinance: 8000000,
      total: 48000000
    },
    total: 508000000
  },

  // Cash Inflows
  cashInflows: {
    secured: {
      level1Collateral: 0,
      level2ACollateral: 15000000,
      otherCollateral: 30000000,
      total: 45000000
    },
    other: {
      interestPayments: 20000000,
      maturingSecurities: 50000000,
      total: 70000000
    },
    total: 115000000
  },

  // LCR Calculation
  lcrCalculation: {
    netCashOutflows: 393000000, // 508M - min(115M, 508M * 0.75)
    lcr: 1.09, // 430M / 393M
    status: 'Above Target',
    compliant: true
  }
};
