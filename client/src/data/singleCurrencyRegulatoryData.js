// Single Currency Regulatory 5% Calculation Data Structure (RBZ Standards)
// Based on Reserve Bank of Zimbabwe Foreign Exchange Risk Management Guidelines
// Comprehensive framework for single currency regulatory limit calculations

// Single Currency Regulatory Requirements
export const singleCurrencyRegulatory = {
  // RBZ Regulatory Limits
  rbzLimits: {
    singleCurrencyLimit: 5.0, // 5% of regulatory capital
    calculationMethod: 'Both methods required',
    reportingFrequency: 'Monthly',
    complianceThreshold: 5.0
  },

  // Calculation Methods
  calculationMethods: {
    method1: {
      name: 'Method 1: Net Open Position',
      description: 'Net open position in single currency as % of regulatory capital',
      formula: 'Net Open Position / Regulatory Capital * 100',
      applicableTo: 'All currencies',
      rbzApproved: true
    },
    method2: {
      name: 'Method 2: Gross Position',
      description: 'Gross position in single currency as % of regulatory capital',
      formula: 'Gross Position / Regulatory Capital * 100',
      applicableTo: 'All currencies',
      rbzApproved: true
    }
  },

  // Currency Classification
  currencyClassification: {
    major: ['USD', 'EUR', 'GBP', 'JPY'],
    regional: ['ZAR', 'BWP', 'NAD', 'SZL'],
    local: ['ZWL'],
    other: ['CNY', 'AUD', 'CAD', 'CHF']
  },

  // Regulatory Capital Components
  regulatoryCapital: {
    tier1Capital: 15800000,
    tier2Capital: 4200000,
    totalRegulatoryCapital: 20000000,
    currency: 'USD'
  }
};

// Single Currency Position Data
export const singleCurrencyPositions = {
  // Current Month Positions
  currentMonth: {
    USD: {
      longPosition: 2500000,
      shortPosition: 1200000,
      netPosition: 1300000,
      grossPosition: 3700000,
      regulatoryCapital: 20000000,
      netPositionPercent: 6.5,
      grossPositionPercent: 18.5,
      status: 'Exceeded',
      riskLevel: 'High'
    },
    EUR: {
      longPosition: 850000,
      shortPosition: 420000,
      netPosition: 430000,
      grossPosition: 1270000,
      regulatoryCapital: 20000000,
      netPositionPercent: 2.15,
      grossPositionPercent: 6.35,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    GBP: {
      longPosition: 450000,
      shortPosition: 180000,
      netPosition: 270000,
      grossPosition: 630000,
      regulatoryCapital: 20000000,
      netPositionPercent: 1.35,
      grossPositionPercent: 3.15,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZAR: {
      longPosition: 1200000,
      shortPosition: 680000,
      netPosition: 520000,
      grossPosition: 1880000,
      regulatoryCapital: 20000000,
      netPositionPercent: 2.6,
      grossPositionPercent: 9.4,
      status: 'Compliant',
      riskLevel: 'Medium'
    },
    CNY: {
      longPosition: 320000,
      shortPosition: 150000,
      netPosition: 170000,
      grossPosition: 470000,
      regulatoryCapital: 20000000,
      netPositionPercent: 0.85,
      grossPositionPercent: 2.35,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZWL: {
      longPosition: 1800000,
      shortPosition: 800000,
      netPosition: 1000000,
      grossPosition: 2600000,
      regulatoryCapital: 20000000,
      netPositionPercent: 5.0,
      grossPositionPercent: 13.0,
      status: 'At Limit',
      riskLevel: 'Medium'
    }
  },

  // Previous Month Positions
  previousMonth: {
    USD: {
      longPosition: 2400000,
      shortPosition: 1180000,
      netPosition: 1220000,
      grossPosition: 3580000,
      regulatoryCapital: 19600000,
      netPositionPercent: 6.22,
      grossPositionPercent: 18.27,
      status: 'Exceeded',
      riskLevel: 'High'
    },
    EUR: {
      longPosition: 820000,
      shortPosition: 410000,
      netPosition: 410000,
      grossPosition: 1230000,
      regulatoryCapital: 19600000,
      netPositionPercent: 2.09,
      grossPositionPercent: 6.28,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    GBP: {
      longPosition: 430000,
      shortPosition: 175000,
      netPosition: 255000,
      grossPosition: 605000,
      regulatoryCapital: 19600000,
      netPositionPercent: 1.30,
      grossPositionPercent: 3.09,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZAR: {
      longPosition: 1150000,
      shortPosition: 650000,
      netPosition: 500000,
      grossPosition: 1800000,
      regulatoryCapital: 19600000,
      netPositionPercent: 2.55,
      grossPositionPercent: 9.18,
      status: 'Compliant',
      riskLevel: 'Medium'
    },
    CNY: {
      longPosition: 310000,
      shortPosition: 145000,
      netPosition: 165000,
      grossPosition: 455000,
      regulatoryCapital: 19600000,
      netPositionPercent: 0.84,
      grossPositionPercent: 2.32,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZWL: {
      longPosition: 1750000,
      shortPosition: 780000,
      netPosition: 970000,
      grossPosition: 2530000,
      regulatoryCapital: 19600000,
      netPositionPercent: 4.95,
      grossPositionPercent: 12.91,
      status: 'Compliant',
      riskLevel: 'Low'
    }
  },

  // Forecast Positions
  forecast: {
    USD: {
      longPosition: 2600000,
      shortPosition: 1220000,
      netPosition: 1380000,
      grossPosition: 3820000,
      regulatoryCapital: 20400000,
      netPositionPercent: 6.76,
      grossPositionPercent: 18.73,
      status: 'Exceeded',
      riskLevel: 'High'
    },
    EUR: {
      longPosition: 880000,
      shortPosition: 430000,
      netPosition: 450000,
      grossPosition: 1310000,
      regulatoryCapital: 20400000,
      netPositionPercent: 2.21,
      grossPositionPercent: 6.42,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    GBP: {
      longPosition: 470000,
      shortPosition: 185000,
      netPosition: 285000,
      grossPosition: 655000,
      regulatoryCapital: 20400000,
      netPositionPercent: 1.40,
      grossPositionPercent: 3.21,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZAR: {
      longPosition: 1250000,
      shortPosition: 710000,
      netPosition: 540000,
      grossPosition: 1960000,
      regulatoryCapital: 20400000,
      netPositionPercent: 2.65,
      grossPositionPercent: 9.61,
      status: 'Compliant',
      riskLevel: 'Medium'
    },
    CNY: {
      longPosition: 330000,
      shortPosition: 155000,
      netPosition: 175000,
      grossPosition: 485000,
      regulatoryCapital: 20400000,
      netPositionPercent: 0.86,
      grossPositionPercent: 2.38,
      status: 'Compliant',
      riskLevel: 'Low'
    },
    ZWL: {
      longPosition: 1850000,
      shortPosition: 820000,
      netPosition: 1030000,
      grossPosition: 2670000,
      regulatoryCapital: 20400000,
      netPositionPercent: 5.05,
      grossPositionPercent: 13.09,
      status: 'Exceeded',
      riskLevel: 'High'
    }
  }
};

// Single Currency Risk Analysis
export const singleCurrencyRiskAnalysis = {
  // Risk Assessment
  riskAssessment: {
    highRisk: ['USD', 'ZWL'],
    mediumRisk: ['ZAR'],
    lowRisk: ['EUR', 'GBP', 'CNY'],
    totalExposure: 0,
    weightedRiskScore: 0
  },

  // Concentration Analysis
  concentrationAnalysis: {
    largestExposure: 'USD',
    largestExposurePercent: 6.5,
    top3Exposures: ['USD', 'ZWL', 'ZAR'],
    top3ExposurePercent: 10.15,
    diversificationScore: 75.5
  },

  // Regulatory Compliance
  regulatoryCompliance: {
    compliantCurrencies: ['EUR', 'GBP', 'ZAR', 'CNY'],
    nonCompliantCurrencies: ['USD', 'ZWL'],
    overallCompliance: 'Non-Compliant',
    complianceScore: 66.7,
    requiredActions: [
      'Reduce USD exposure below 5%',
      'Reduce ZWL exposure below 5%',
      'Implement hedging strategies',
      'Review currency risk limits'
    ]
  }
};

// Single Currency Stress Testing
export const singleCurrencyStressTesting = {
  // Stress Scenarios
  scenarios: {
    currencyAppreciation: {
      name: 'Currency Appreciation (5%)',
      description: '5% appreciation of all foreign currencies against ZWL',
      impact: 'Positive for long positions, negative for short positions'
    },
    currencyDepreciation: {
      name: 'Currency Depreciation (5%)',
      description: '5% depreciation of all foreign currencies against ZWL',
      impact: 'Negative for long positions, positive for short positions'
    },
    usdAppreciation: {
      name: 'USD Appreciation (10%)',
      description: '10% appreciation of USD against ZWL',
      impact: 'Significant impact on USD positions'
    },
    usdDepreciation: {
      name: 'USD Depreciation (10%)',
      description: '10% depreciation of USD against ZWL',
      impact: 'Significant impact on USD positions'
    },
    marketVolatility: {
      name: 'High Market Volatility',
      description: 'Increased volatility in all currency markets',
      impact: 'Higher risk across all positions'
    }
  },

  // Stress Testing Results
  stressResults: {
    currencyAppreciation: {
      usd: { impact: 65000, newPosition: 1365000, newPercent: 6.83 },
      eur: { impact: 21500, newPosition: 451500, newPercent: 2.26 },
      gbp: { impact: 13500, newPosition: 283500, newPercent: 1.42 },
      zar: { impact: 26000, newPosition: 546000, newPercent: 2.73 },
      cny: { impact: 8500, newPosition: 178500, newPercent: 0.89 },
      zwl: { impact: 50000, newPosition: 1050000, newPercent: 5.25 }
    },
    currencyDepreciation: {
      usd: { impact: -65000, newPosition: 1235000, newPercent: 6.18 },
      eur: { impact: -21500, newPosition: 408500, newPercent: 2.04 },
      gbp: { impact: -13500, newPosition: 256500, newPercent: 1.28 },
      zar: { impact: -26000, newPosition: 494000, newPercent: 2.47 },
      cny: { impact: -8500, newPosition: 161500, newPercent: 0.81 },
      zwl: { impact: -50000, newPosition: 950000, newPercent: 4.75 }
    }
  }
};

// Single Currency Risk Mitigation
export const singleCurrencyRiskMitigation = {
  // Hedging Strategies
  hedgingStrategies: {
    forwardContracts: {
      description: 'Use forward contracts to hedge currency exposure',
      effectiveness: 'High',
      cost: 'Medium',
      implementation: 'Immediate'
    },
    currencySwaps: {
      description: 'Enter into currency swaps to manage exposure',
      effectiveness: 'High',
      cost: 'Medium',
      implementation: '1-2 weeks'
    },
    options: {
      description: 'Use currency options for flexible hedging',
      effectiveness: 'Medium',
      cost: 'High',
      implementation: '1 week'
    },
    naturalHedging: {
      description: 'Match assets and liabilities in same currency',
      effectiveness: 'High',
      cost: 'Low',
      implementation: 'Medium-term'
    }
  },

  // Risk Limits
  riskLimits: {
    singleCurrencyLimit: 5.0,
    totalForeignCurrencyLimit: 25.0,
    concentrationLimit: 10.0,
    varLimit: 2.0
  },

  // Monitoring and Reporting
  monitoring: {
    frequency: 'Daily',
    reporting: 'Monthly',
    escalation: 'Immediate for breaches',
    review: 'Quarterly'
  }
};

// Helper Functions for Single Currency Regulatory
export const singleCurrencyHelpers = {
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
    return `${value.toFixed(2)}%`;
  },

  // Get status color
  getStatusColor: (status) => {
    switch (status) {
      case 'Compliant': return 'text-green-600';
      case 'At Limit': return 'text-yellow-600';
      case 'Exceeded': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Get risk level color
  getRiskLevelColor: (level) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Calculate position percentage
  calculatePositionPercentage: (position, regulatoryCapital) => {
    return (position / regulatoryCapital) * 100;
  },

  // Check compliance
  checkCompliance: (percentage, limit = 5.0) => {
    if (percentage <= limit) return 'Compliant';
    if (percentage <= limit * 1.1) return 'At Limit';
    return 'Exceeded';
  },

  // Calculate stress impact
  calculateStressImpact: (position, stressPercent) => {
    return position * (stressPercent / 100);
  }
};
