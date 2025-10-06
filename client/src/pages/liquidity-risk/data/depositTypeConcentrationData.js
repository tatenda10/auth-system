// Deposit Type Concentration Data Structure (RBZ Standards)
// Based on Reserve Bank of Zimbabwe Liquidity Risk Management Guidelines
// Comprehensive framework for deposit type concentration analysis

// Deposit Type Classification
export const depositTypeClassification = {
  // Retail Deposits
  retail: {
    currentAccounts: {
      name: 'Current Accounts',
      description: 'Demand deposit accounts for individuals',
      stability: 'High',
      riskWeight: 0.05,
      regulatoryLimit: 40.0
    },
    savingsAccounts: {
      name: 'Savings Accounts',
      description: 'Interest-bearing deposit accounts',
      stability: 'High',
      riskWeight: 0.05,
      regulatoryLimit: 30.0
    },
    personalTimeDeposits: {
      name: 'Personal Time Deposits',
      description: 'Fixed-term deposit accounts for individuals',
      stability: 'Medium',
      riskWeight: 0.10,
      regulatoryLimit: 25.0
    },
    personalNoticeDeposits: {
      name: 'Personal Notice Deposits',
      description: 'Notice period deposit accounts',
      stability: 'Medium',
      riskWeight: 0.10,
      regulatoryLimit: 20.0
    }
  },

  // Business Deposits
  business: {
    businessCurrentAccounts: {
      name: 'Business Current Accounts',
      description: 'Demand deposit accounts for businesses',
      stability: 'Medium',
      riskWeight: 0.25,
      regulatoryLimit: 35.0
    },
    businessTimeDeposits: {
      name: 'Business Time Deposits',
      description: 'Fixed-term deposit accounts for businesses',
      stability: 'Low',
      riskWeight: 0.40,
      regulatoryLimit: 30.0
    },
    businessNoticeDeposits: {
      name: 'Business Notice Deposits',
      description: 'Notice period deposit accounts for businesses',
      stability: 'Low',
      riskWeight: 0.40,
      regulatoryLimit: 25.0
    }
  },

  // Institutional Deposits
  institutional: {
    governmentDeposits: {
      name: 'Government Deposits',
      description: 'Deposits from government entities',
      stability: 'High',
      riskWeight: 0.00,
      regulatoryLimit: 15.0
    },
    corporateDeposits: {
      name: 'Corporate Deposits',
      description: 'Large corporate entity deposits',
      stability: 'Low',
      riskWeight: 0.40,
      regulatoryLimit: 20.0
    },
    financialInstitutionDeposits: {
      name: 'Financial Institution Deposits',
      description: 'Deposits from other financial institutions',
      stability: 'Low',
      riskWeight: 0.40,
      regulatoryLimit: 15.0
    }
  },

  // Special Deposits
  special: {
    highNetWorthDeposits: {
      name: 'High Net Worth Deposits',
      description: 'Deposits from high net worth individuals',
      stability: 'Medium',
      riskWeight: 0.15,
      regulatoryLimit: 10.0
    },
    foreignCurrencyDeposits: {
      name: 'Foreign Currency Deposits',
      description: 'Deposits denominated in foreign currencies',
      stability: 'Low',
      riskWeight: 0.50,
      regulatoryLimit: 25.0
    },
    structuredDeposits: {
      name: 'Structured Deposits',
      description: 'Complex structured deposit products',
      stability: 'Low',
      riskWeight: 0.60,
      regulatoryLimit: 15.0
    }
  }
};

// Deposit Type Concentration Data
export const depositTypeConcentrationData = {
  // Current Month Data
  currentMonth: {
    totalDeposits: 3200000000,
    byType: [
      {
        type: 'Current Accounts',
        category: 'retail',
        amount: 850000000,
        percentage: 26.6,
        regulatoryLimit: 40.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 42500000
      },
      {
        type: 'Savings Accounts',
        category: 'retail',
        amount: 650000000,
        percentage: 20.3,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 32500000
      },
      {
        type: 'Personal Time Deposits',
        category: 'retail',
        amount: 420000000,
        percentage: 13.1,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'Medium',
        riskWeight: 0.10,
        weightedAmount: 42000000
      },
      {
        type: 'Business Current Accounts',
        category: 'business',
        amount: 580000000,
        percentage: 18.1,
        regulatoryLimit: 35.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.25,
        weightedAmount: 145000000
      },
      {
        type: 'Business Time Deposits',
        category: 'business',
        amount: 380000000,
        percentage: 11.9,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 152000000
      },
      {
        type: 'Corporate Deposits',
        category: 'institutional',
        amount: 200000000,
        percentage: 6.3,
        regulatoryLimit: 20.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 80000000
      },
      {
        type: 'Government Deposits',
        category: 'institutional',
        amount: 120000000,
        percentage: 3.8,
        regulatoryLimit: 15.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.00,
        weightedAmount: 0
      },
      {
        type: 'Foreign Currency Deposits',
        category: 'special',
        amount: 180000000,
        percentage: 5.6,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.50,
        weightedAmount: 90000000
      },
      {
        type: 'High Net Worth Deposits',
        category: 'special',
        amount: 100000000,
        percentage: 3.1,
        regulatoryLimit: 10.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.15,
        weightedAmount: 15000000
      }
    ]
  },

  // Previous Month Data
  previousMonth: {
    totalDeposits: 3150000000,
    byType: [
      {
        type: 'Current Accounts',
        category: 'retail',
        amount: 830000000,
        percentage: 26.3,
        regulatoryLimit: 40.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 41500000
      },
      {
        type: 'Savings Accounts',
        category: 'retail',
        amount: 640000000,
        percentage: 20.3,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 32000000
      },
      {
        type: 'Personal Time Deposits',
        category: 'retail',
        amount: 410000000,
        percentage: 13.0,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'Medium',
        riskWeight: 0.10,
        weightedAmount: 41000000
      },
      {
        type: 'Business Current Accounts',
        category: 'business',
        amount: 570000000,
        percentage: 18.1,
        regulatoryLimit: 35.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.25,
        weightedAmount: 142500000
      },
      {
        type: 'Business Time Deposits',
        category: 'business',
        amount: 375000000,
        percentage: 11.9,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 150000000
      },
      {
        type: 'Corporate Deposits',
        category: 'institutional',
        amount: 195000000,
        percentage: 6.2,
        regulatoryLimit: 20.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 78000000
      },
      {
        type: 'Government Deposits',
        category: 'institutional',
        amount: 115000000,
        percentage: 3.7,
        regulatoryLimit: 15.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.00,
        weightedAmount: 0
      },
      {
        type: 'Foreign Currency Deposits',
        category: 'special',
        amount: 175000000,
        percentage: 5.6,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.50,
        weightedAmount: 87500000
      },
      {
        type: 'High Net Worth Deposits',
        category: 'special',
        amount: 95000000,
        percentage: 3.0,
        regulatoryLimit: 10.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.15,
        weightedAmount: 14250000
      }
    ]
  },

  // Forecast Data
  forecast: {
    totalDeposits: 3250000000,
    byType: [
      {
        type: 'Current Accounts',
        category: 'retail',
        amount: 870000000,
        percentage: 26.8,
        regulatoryLimit: 40.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 43500000
      },
      {
        type: 'Savings Accounts',
        category: 'retail',
        amount: 660000000,
        percentage: 20.3,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.05,
        weightedAmount: 33000000
      },
      {
        type: 'Personal Time Deposits',
        category: 'retail',
        amount: 430000000,
        percentage: 13.2,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'Medium',
        riskWeight: 0.10,
        weightedAmount: 43000000
      },
      {
        type: 'Business Current Accounts',
        category: 'business',
        amount: 590000000,
        percentage: 18.2,
        regulatoryLimit: 35.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.25,
        weightedAmount: 147500000
      },
      {
        type: 'Business Time Deposits',
        category: 'business',
        amount: 385000000,
        percentage: 11.8,
        regulatoryLimit: 30.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 154000000
      },
      {
        type: 'Corporate Deposits',
        category: 'institutional',
        amount: 205000000,
        percentage: 6.3,
        regulatoryLimit: 20.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.40,
        weightedAmount: 82000000
      },
      {
        type: 'Government Deposits',
        category: 'institutional',
        amount: 125000000,
        percentage: 3.8,
        regulatoryLimit: 15.0,
        status: 'Compliant',
        riskLevel: 'Low',
        stability: 'High',
        riskWeight: 0.00,
        weightedAmount: 0
      },
      {
        type: 'Foreign Currency Deposits',
        category: 'special',
        amount: 185000000,
        percentage: 5.7,
        regulatoryLimit: 25.0,
        status: 'Compliant',
        riskLevel: 'High',
        stability: 'Low',
        riskWeight: 0.50,
        weightedAmount: 92500000
      },
      {
        type: 'High Net Worth Deposits',
        category: 'special',
        amount: 105000000,
        percentage: 3.2,
        regulatoryLimit: 10.0,
        status: 'Compliant',
        riskLevel: 'Medium',
        stability: 'Medium',
        riskWeight: 0.15,
        weightedAmount: 15750000
      }
    ]
  }
};

// Deposit Type Risk Analysis
export const depositTypeRiskAnalysis = {
  // Concentration Risk
  concentrationRisk: {
    highConcentration: ['Current Accounts', 'Business Current Accounts'],
    mediumConcentration: ['Savings Accounts', 'Personal Time Deposits', 'Business Time Deposits'],
    lowConcentration: ['Government Deposits', 'High Net Worth Deposits'],
    diversificationScore: 78.5,
    herfindahlIndex: 0.15
  },

  // Stability Analysis
  stabilityAnalysis: {
    highStability: ['Current Accounts', 'Savings Accounts', 'Government Deposits'],
    mediumStability: ['Personal Time Deposits', 'High Net Worth Deposits'],
    lowStability: ['Business Time Deposits', 'Corporate Deposits', 'Foreign Currency Deposits'],
    overallStabilityScore: 72.3
  },

  // Regulatory Compliance
  regulatoryCompliance: {
    compliantTypes: 9,
    totalTypes: 9,
    complianceRate: 100.0,
    riskLevels: {
      low: 4,
      medium: 3,
      high: 2
    }
  }
};

// Deposit Type Stress Testing
export const depositTypeStressTesting = {
  // Stress Scenarios
  scenarios: {
    depositRunoff: {
      name: 'Deposit Runoff Scenario',
      description: '15% runoff across all deposit types',
      impact: 'Reduced funding base, increased liquidity risk'
    },
    retailRunoff: {
      name: 'Retail Deposit Runoff',
      description: '20% runoff in retail deposits only',
      impact: 'Reduced stable funding, increased wholesale dependency'
    },
    businessRunoff: {
      name: 'Business Deposit Runoff',
      description: '25% runoff in business deposits',
      impact: 'Reduced corporate funding, increased concentration risk'
    },
    foreignCurrencyRunoff: {
      name: 'Foreign Currency Runoff',
      description: '30% runoff in foreign currency deposits',
      impact: 'Reduced FX funding, increased currency risk'
    }
  },

  // Stress Testing Results
  stressResults: {
    depositRunoff: {
      totalDeposits: 2720000000,
      reduction: 480000000,
      reductionPercent: 15.0,
      impact: 'High liquidity risk'
    },
    retailRunoff: {
      totalDeposits: 3040000000,
      reduction: 160000000,
      reductionPercent: 5.0,
      impact: 'Medium liquidity risk'
    },
    businessRunoff: {
      totalDeposits: 3010000000,
      reduction: 190000000,
      reductionPercent: 5.9,
      impact: 'Medium liquidity risk'
    },
    foreignCurrencyRunoff: {
      totalDeposits: 3146000000,
      reduction: 54000000,
      reductionPercent: 1.7,
      impact: 'Low liquidity risk'
    }
  }
};

// Helper Functions for Deposit Type Concentration
export const depositTypeHelpers = {
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

  // Get status color
  getStatusColor: (status) => {
    switch (status) {
      case 'Compliant': return 'text-green-600';
      case 'Warning': return 'text-yellow-600';
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

  // Get stability color
  getStabilityColor: (stability) => {
    switch (stability) {
      case 'High': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Calculate concentration ratio
  calculateConcentrationRatio: (amount, total) => {
    return (amount / total) * 100;
  },

  // Check regulatory compliance
  checkCompliance: (percentage, limit) => {
    if (percentage <= limit) return 'Compliant';
    if (percentage <= limit * 1.1) return 'Warning';
    return 'Exceeded';
  },

  // Calculate weighted amount
  calculateWeightedAmount: (amount, riskWeight) => {
    return amount * riskWeight;
  }
};
