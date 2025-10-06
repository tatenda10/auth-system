// Market-Wide Stress Testing Data Structure (RBZ Standards)
// Based on Reserve Bank of Zimbabwe Liquidity Risk Management Guidelines
// Comprehensive framework for market-wide liquidity stress testing

// Market-Wide Stress Scenarios
export const marketWideStressScenarios = {
  // Base Scenarios
  baseScenarios: {
    baseline: {
      name: 'Baseline Scenario',
      description: 'Normal market conditions with stable liquidity',
      probability: 60,
      stressLevel: 'Low',
      marketConditions: {
        interbankRate: 12.0,
        governmentBondYield: 14.0,
        corporateBondSpread: 200,
        foreignExchangeVolatility: 5.0,
        equityMarketVolatility: 15.0
      },
      liquidityImpact: {
        depositRunoff: 0,
        wholesaleFundingCost: 0,
        assetLiquidity: 0,
        marketAccess: 0,
        counterpartyRisk: 0
      }
    },
    adverse: {
      name: 'Adverse Market Scenario',
      description: 'Moderate market stress with funding disruptions',
      probability: 30,
      stressLevel: 'Medium',
      marketConditions: {
        interbankRate: 18.0,
        governmentBondYield: 20.0,
        corporateBondSpread: 400,
        foreignExchangeVolatility: 15.0,
        equityMarketVolatility: 25.0
      },
      liquidityImpact: {
        depositRunoff: 15,
        wholesaleFundingCost: 200,
        assetLiquidity: 25,
        marketAccess: 30,
        counterpartyRisk: 20
      }
    },
    severelyAdverse: {
      name: 'Severely Adverse Market Scenario',
      description: 'Crisis conditions with severe funding market disruption',
      probability: 10,
      stressLevel: 'High',
      marketConditions: {
        interbankRate: 25.0,
        governmentBondYield: 28.0,
        corporateBondSpread: 800,
        foreignExchangeVolatility: 30.0,
        equityMarketVolatility: 40.0
      },
      liquidityImpact: {
        depositRunoff: 35,
        wholesaleFundingCost: 500,
        assetLiquidity: 50,
        marketAccess: 60,
        counterpartyRisk: 40
      }
    }
  },

  // Zimbabwe-Specific Market Scenarios
  zimbabweSpecific: {
    currencyCrisis: {
      name: 'Currency Crisis Scenario',
      description: 'Severe currency volatility and foreign exchange crisis',
      probability: 20,
      stressLevel: 'High',
      marketConditions: {
        interbankRate: 30.0,
        governmentBondYield: 35.0,
        corporateBondSpread: 1000,
        foreignExchangeVolatility: 50.0,
        equityMarketVolatility: 45.0
      },
      liquidityImpact: {
        depositRunoff: 40,
        wholesaleFundingCost: 600,
        assetLiquidity: 60,
        marketAccess: 70,
        counterpartyRisk: 50
      },
      specificFactors: [
        'Foreign exchange shortages',
        'Parallel market premium',
        'Cross-border payment restrictions',
        'Correspondent banking issues',
        'International payment delays'
      ]
    },
    hyperinflation: {
      name: 'Hyperinflation Scenario',
      description: 'Return to hyperinflationary conditions',
      probability: 15,
      stressLevel: 'High',
      marketConditions: {
        interbankRate: 50.0,
        governmentBondYield: 60.0,
        corporateBondSpread: 1500,
        foreignExchangeVolatility: 80.0,
        equityMarketVolatility: 60.0
      },
      liquidityImpact: {
        depositRunoff: 50,
        wholesaleFundingCost: 800,
        assetLiquidity: 70,
        marketAccess: 80,
        counterpartyRisk: 60
      },
      specificFactors: [
        'Currency devaluation',
        'Inflation accounting complexities',
        'Real value erosion',
        'Dollarization pressure',
        'Economic uncertainty'
      ]
    },
    economicSanctions: {
      name: 'Economic Sanctions Scenario',
      description: 'International economic sanctions impact',
      probability: 10,
      stressLevel: 'High',
      marketConditions: {
        interbankRate: 35.0,
        governmentBondYield: 40.0,
        corporateBondSpread: 1200,
        foreignExchangeVolatility: 60.0,
        equityMarketVolatility: 50.0
      },
      liquidityImpact: {
        depositRunoff: 45,
        wholesaleFundingCost: 700,
        assetLiquidity: 65,
        marketAccess: 75,
        counterpartyRisk: 55
      },
      specificFactors: [
        'Correspondent banking restrictions',
        'International payment limitations',
        'Trade finance constraints',
        'Technology access restrictions',
        'Foreign currency shortages'
      ]
    },
    agriculturalCrisis: {
      name: 'Agricultural Crisis Scenario',
      description: 'Severe drought affecting agricultural sector and rural banking',
      probability: 25,
      stressLevel: 'Medium',
      marketConditions: {
        interbankRate: 20.0,
        governmentBondYield: 22.0,
        corporateBondSpread: 500,
        foreignExchangeVolatility: 20.0,
        equityMarketVolatility: 30.0
      },
      liquidityImpact: {
        depositRunoff: 25,
        wholesaleFundingCost: 300,
        assetLiquidity: 35,
        marketAccess: 40,
        counterpartyRisk: 30
      },
      specificFactors: [
        'Rural banking stress',
        'Agricultural loan defaults',
        'Food security concerns',
        'Weather-related business disruption',
        'Agricultural commodity price volatility'
      ]
    }
  }
};

// Market-Wide Liquidity Risk Factors
export const marketWideLiquidityFactors = {
  // Funding Sources
  fundingSources: {
    retailDeposits: {
      name: 'Retail Deposits',
      baseAmount: 2000000000,
      stability: 'High',
      stressFactors: {
        depositRunoff: 0.15,
        rateSensitivity: 0.20,
        relationshipDependency: 0.10
      }
    },
    wholesaleDeposits: {
      name: 'Wholesale Deposits',
      baseAmount: 800000000,
      stability: 'Low',
      stressFactors: {
        depositRunoff: 0.40,
        rateSensitivity: 0.60,
        relationshipDependency: 0.30
      }
    },
    interbankFunding: {
      name: 'Interbank Funding',
      baseAmount: 400000000,
      stability: 'Low',
      stressFactors: {
        depositRunoff: 0.50,
        rateSensitivity: 0.80,
        relationshipDependency: 0.40
      }
    },
    centralBankFacilities: {
      name: 'Central Bank Facilities',
      baseAmount: 200000000,
      stability: 'High',
      stressFactors: {
        depositRunoff: 0.00,
        rateSensitivity: 0.10,
        relationshipDependency: 0.05
      }
    }
  },

  // Asset Liquidity
  assetLiquidity: {
    cashAndEquivalents: {
      name: 'Cash and Equivalents',
      baseAmount: 450000000,
      liquidity: 'High',
      stressFactors: {
        haircut: 0.00,
        marketAccess: 1.00,
        priceVolatility: 0.00
      }
    },
    governmentSecurities: {
      name: 'Government Securities',
      baseAmount: 800000000,
      liquidity: 'High',
      stressFactors: {
        haircut: 0.05,
        marketAccess: 0.90,
        priceVolatility: 0.10
      }
    },
    corporateBonds: {
      name: 'Corporate Bonds',
      baseAmount: 600000000,
      liquidity: 'Medium',
      stressFactors: {
        haircut: 0.15,
        marketAccess: 0.70,
        priceVolatility: 0.20
      }
    },
    loans: {
      name: 'Loans',
      baseAmount: 3000000000,
      liquidity: 'Low',
      stressFactors: {
        haircut: 0.30,
        marketAccess: 0.50,
        priceVolatility: 0.25
      }
    }
  }
};

// Market-Wide Stress Testing Results
export const marketWideStressResults = {
  baseline: {
    totalLiquidity: 1950000000,
    netCashOutflows: 1500000000,
    lcr: 130.0,
    nsfr: 115.0,
    liquidityBuffer: 450000000,
    status: 'Adequate'
  },
  adverse: {
    totalLiquidity: 1650000000,
    netCashOutflows: 1800000000,
    lcr: 91.7,
    nsfr: 98.0,
    liquidityBuffer: 300000000,
    status: 'Warning'
  },
  severelyAdverse: {
    totalLiquidity: 1200000000,
    netCashOutflows: 2200000000,
    lcr: 54.5,
    nsfr: 75.0,
    liquidityBuffer: 150000000,
    status: 'Critical'
  },
  currencyCrisis: {
    totalLiquidity: 1100000000,
    netCashOutflows: 2400000000,
    lcr: 45.8,
    nsfr: 68.0,
    liquidityBuffer: 100000000,
    status: 'Critical'
  },
  hyperinflation: {
    totalLiquidity: 900000000,
    netCashOutflows: 2600000000,
    lcr: 34.6,
    nsfr: 58.0,
    liquidityBuffer: 50000000,
    status: 'Critical'
  },
  economicSanctions: {
    totalLiquidity: 1000000000,
    netCashOutflows: 2500000000,
    lcr: 40.0,
    nsfr: 62.0,
    liquidityBuffer: 75000000,
    status: 'Critical'
  },
  agriculturalCrisis: {
    totalLiquidity: 1400000000,
    netCashOutflows: 2000000000,
    lcr: 70.0,
    nsfr: 85.0,
    liquidityBuffer: 200000000,
    status: 'Warning'
  }
};

// Market-Wide Risk Mitigation
export const marketWideRiskMitigation = {
  // Liquidity Risk Management
  liquidityRiskManagement: {
    contingencyFundingPlans: [
      {
        source: 'Central Bank Facilities',
        availability: 'Unlimited',
        cost: 'Base rate + 100bps',
        accessTime: 'Immediate',
        conditions: 'Eligible collateral required'
      },
      {
        source: 'Asset Securitization',
        availability: 'Up to $2.5B',
        cost: 'Market rate + 150bps',
        accessTime: '30-60 days',
        conditions: 'Eligible asset pool'
      },
      {
        source: 'Interbank Lines',
        availability: 'Up to $1.8B',
        cost: 'LIBOR + 200bps',
        accessTime: '1-7 days',
        conditions: 'Credit approval'
      },
      {
        source: 'Retail Deposit Campaign',
        availability: 'Up to $1.2B',
        cost: 'Market rate + 50bps',
        accessTime: '30-90 days',
        conditions: 'Marketing campaign'
      }
    ],
    assetLiquidityManagement: [
      {
        strategy: 'Maintain high-quality liquid assets',
        target: '20% of total assets',
        current: '18.2%',
        status: 'Below target'
      },
      {
        strategy: 'Diversify asset portfolio',
        target: 'No single asset > 30%',
        current: 'Loans 75%',
        status: 'Exceeded'
      },
      {
        strategy: 'Regular asset sales program',
        target: 'Monthly sales of $100M',
        current: 'Monthly sales of $50M',
        status: 'Below target'
      }
    ]
  },

  // Market Risk Management
  marketRiskManagement: {
    interestRateRisk: [
      {
        strategy: 'Interest rate hedging',
        instruments: 'Swaps, Options, Futures',
        coverage: '60% of rate-sensitive assets',
        cost: '50bps per annum'
      },
      {
        strategy: 'Asset-liability matching',
        target: 'Match maturities within 30 days',
        current: 'Match maturities within 60 days',
        status: 'Below target'
      }
    ],
    foreignExchangeRisk: [
      {
        strategy: 'Currency hedging',
        instruments: 'Forwards, Options, Swaps',
        coverage: '80% of foreign currency exposure',
        cost: '100bps per annum'
      },
      {
        strategy: 'Natural hedging',
        target: 'Match foreign currency assets and liabilities',
        current: '60% matched',
        status: 'Below target'
      }
    ]
  }
};

// Market-Wide Monitoring and Reporting
export const marketWideMonitoring = {
  // Key Risk Indicators
  keyRiskIndicators: [
    {
      indicator: 'Liquidity Coverage Ratio',
      current: 97.5,
      threshold: 100.0,
      trend: 'decreasing',
      status: 'Warning'
    },
    {
      indicator: 'Net Stable Funding Ratio',
      current: 108.7,
      threshold: 100.0,
      trend: 'stable',
      status: 'Safe'
    },
    {
      indicator: 'Wholesale Funding Ratio',
      current: 34.7,
      threshold: 30.0,
      trend: 'increasing',
      status: 'Warning'
    },
    {
      indicator: 'Deposit Concentration',
      current: 45.2,
      threshold: 40.0,
      trend: 'increasing',
      status: 'Warning'
    },
    {
      indicator: 'Asset Liquidity Ratio',
      current: 18.2,
      threshold: 20.0,
      trend: 'decreasing',
      status: 'Warning'
    }
  ],

  // Stress Testing Frequency
  stressTestingFrequency: {
    daily: 'High-frequency stress testing',
    weekly: 'Regular stress testing updates',
    monthly: 'Comprehensive stress testing',
    quarterly: 'Regulatory stress testing reporting',
    adHoc: 'Event-driven stress testing'
  },

  // Reporting Requirements
  reportingRequirements: {
    internal: [
      'Daily liquidity risk dashboard',
      'Weekly stress testing results',
      'Monthly risk committee report',
      'Quarterly board risk report'
    ],
    regulatory: [
      'RBZ liquidity risk return',
      'Stress testing results report',
      'Contingency funding plan',
      'Risk management framework report'
    ]
  }
};

// Helper Functions for Market-Wide Stress Testing
export const marketWideHelpers = {
  // Format currency
  formatCurrency: (amount) => {
    if (amount === 0) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  },

  // Format percentage
  formatPercentage: (value) => {
    return `${value.toFixed(1)}%`;
  },

  // Get stress level color
  getStressLevelColor: (level) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Get status color
  getStatusColor: (status) => {
    switch (status) {
      case 'Adequate': return 'text-green-600';
      case 'Warning': return 'text-yellow-600';
      case 'Critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Calculate stress impact
  calculateStressImpact: (baseValue, stressFactor) => {
    return baseValue * (1 - stressFactor / 100);
  },

  // Calculate liquidity ratios
  calculateLiquidityRatios: (liquidity, outflows) => {
    const lcr = (liquidity / outflows) * 100;
    const status = lcr >= 100 ? 'Adequate' : lcr >= 80 ? 'Warning' : 'Critical';
    return { lcr, status };
  }
};
