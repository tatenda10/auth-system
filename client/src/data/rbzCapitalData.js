// RBZ Capital Calculations Data Structure
// Based on Reserve Bank of Zimbabwe Capital Adequacy Requirements
// Comprehensive framework for Zimbabwean banking capital regulations

// RBZ Risk Weights for Different Asset Classes
export const rbzRiskWeights = {
  // Sovereign and Central Bank Exposures
  sovereignExposures: {
    'Zimbabwe Government (Local Currency)': 0,
    'Zimbabwe Government (Foreign Currency)': 20,
    'Reserve Bank of Zimbabwe': 0,
    'Other SADC Governments': 20,
    'Other African Governments': 50,
    'OECD Governments': 0,
    'Non-OECD Governments': 100
  },

  // Bank Exposures
  bankExposures: {
    'RBZ-Regulated Banks (Short-term)': 20,
    'RBZ-Regulated Banks (Long-term)': 50,
    'SADC Banks (Short-term)': 20,
    'SADC Banks (Long-term)': 50,
    'Other African Banks': 100,
    'OECD Banks (Short-term)': 20,
    'OECD Banks (Long-term)': 50,
    'Non-OECD Banks': 100
  },

  // Corporate Exposures
  corporateExposures: {
    'Large Corporates (Investment Grade)': 50,
    'Large Corporates (Non-Investment Grade)': 100,
    'SMEs (Agricultural Sector)': 75,
    'SMEs (Manufacturing Sector)': 100,
    'SMEs (Services Sector)': 100,
    'SMEs (Mining Sector)': 150,
    'Unrated Corporates': 100
  },

  // Retail Exposures
  retailExposures: {
    'Residential Mortgages': 35,
    'Qualifying Revolving Retail': 75,
    'Other Retail': 75,
    'Agricultural Loans': 75,
    'Microfinance Loans': 100
  },

  // Equity Exposures
  equityExposures: {
    'ZSE Listed Equities': 100,
    'Unlisted Equities': 150,
    'Private Equity': 150,
    'Venture Capital': 200
  },

  // Other Assets
  otherAssets: {
    'Cash and Cash Equivalents': 0,
    'Gold Bullion': 0,
    'Claims on RBZ': 0,
    'Claims on Zimbabwe Government': 0,
    'Claims Collateralized by Cash': 0,
    'Claims Collateralized by Gold': 0,
    'Claims Collateralized by Zimbabwe Government Securities': 0,
    'Claims Collateralized by RBZ Securities': 0,
    'Other Claims': 100
  }
};

// RBZ Capital Adequacy Ratio Calculations
export const rbzCapitalAdequacyCalculations = {
  // Minimum Capital Requirements
  minimumRequirements: {
    totalCapitalRatio: 12.0, // RBZ requirement (higher than Basel III)
    tier1CapitalRatio: 8.5,  // RBZ requirement
    commonEquityTier1Ratio: 6.0, // RBZ requirement
    leverageRatio: 3.0, // RBZ requirement
    liquidityCoverageRatio: 100, // RBZ requirement
    netStableFundingRatio: 100 // RBZ requirement
  },

  // Capital Buffers
  capitalBuffers: {
    conservationBuffer: 2.5, // RBZ requirement
    countercyclicalBuffer: 0.0, // RBZ requirement (varies by economic conditions)
    systemicRiskBuffer: 1.0, // RBZ requirement for systemically important banks
    domesticSystemicallyImportantBankBuffer: 0.5 // RBZ requirement
  },

  // Risk-Weighted Assets Calculation
  riskWeightedAssetsCalculation: {
    creditRisk: {
      standardisedApproach: true,
      internalRatingsBasedApproach: false, // Not yet approved by RBZ
      foundationIRB: false,
      advancedIRB: false
    },
    marketRisk: {
      standardisedApproach: true,
      internalModelsApproach: false // Not yet approved by RBZ
    },
    operationalRisk: {
      basicIndicatorApproach: true,
      standardisedApproach: false, // Not yet approved by RBZ
      advancedMeasurementApproach: false // Not yet approved by RBZ
    }
  },

  // Zimbabwe-Specific Adjustments
  zimbabweSpecificAdjustments: {
    hyperinflationAdjustment: true,
    currencyVolatilityAdjustment: true,
    agriculturalSectorAdjustment: true,
    economicSanctionsAdjustment: true,
    localMarketConditionsAdjustment: true
  }
};

// RBZ Operational Risk Capital Requirements
export const rbzOperationalRiskCapital = {
  // Basic Indicator Approach (BIA) - RBZ Approved Method
  basicIndicatorApproach: {
    alpha: 0.15, // RBZ requirement (15% of average gross income)
    calculationPeriod: 3, // Years of gross income data required
    grossIncomeDefinition: {
      netInterestIncome: true,
      netNonInterestIncome: true,
      excludes: [
        'Realized profits/losses from sale of securities',
        'Extraordinary/irregular items',
        'Income derived from insurance'
      ]
    }
  },

  // Operational Risk Event Categories (RBZ Classification)
  operationalRiskEvents: {
    'Internal Fraud': {
      weight: 0.15,
      examples: [
        'Unauthorized activity',
        'Theft and fraud',
        'Insider trading',
        'Embezzlement'
      ]
    },
    'External Fraud': {
      weight: 0.10,
      examples: [
        'Theft and fraud',
        'System security',
        'Forgery',
        'Check kiting'
      ]
    },
    'Employment Practices and Workplace Safety': {
      weight: 0.10,
      examples: [
        'Employee compensation',
        'Employee benefits',
        'Wrongful termination',
        'Workplace safety'
      ]
    },
    'Clients, Products and Business Practices': {
      weight: 0.25,
      examples: [
        'Suitability, disclosure and fiduciary',
        'Improper business or market practices',
        'Product flaws',
        'Selection, sponsorship and exposure'
      ]
    },
    'Damage to Physical Assets': {
      weight: 0.05,
      examples: [
        'Disasters and other events',
        'Natural disasters',
        'Terrorism',
        'Vandalism'
      ]
    },
    'Business Disruption and System Failures': {
      weight: 0.15,
      examples: [
        'Systems',
        'Hardware',
        'Software',
        'Telecommunications'
      ]
    },
    'Execution, Delivery and Process Management': {
      weight: 0.20,
      examples: [
        'Transaction capture, execution and maintenance',
        'Monitoring and reporting',
        'Customer intake and documentation',
        'Customer/client account management'
      ]
    }
  },

  // Zimbabwe-Specific Operational Risk Factors
  zimbabweSpecificOperationalRisk: {
    'Hyperinflation Impact': {
      weight: 0.05,
      description: 'Operational risks arising from hyperinflation environment',
      factors: [
        'Currency volatility impact on systems',
        'Inflation accounting complexities',
        'Staff retention challenges',
        'Technology upgrade costs'
      ]
    },
    'Economic Sanctions Impact': {
      weight: 0.03,
      description: 'Operational risks from economic sanctions',
      factors: [
        'Correspondent banking restrictions',
        'International payment limitations',
        'Technology access restrictions',
        'Staff training limitations'
      ]
    },
    'Agricultural Sector Concentration': {
      weight: 0.02,
      description: 'Operational risks from agricultural sector focus',
      factors: [
        'Seasonal loan processing volumes',
        'Agricultural commodity price volatility',
        'Weather-related business disruption',
        'Agricultural expertise requirements'
      ]
    }
  }
};

// RBZ Capital Quality Requirements
export const rbzCapitalQualityRequirements = {
  // Tier 1 Capital Components
  tier1Capital: {
    commonEquityTier1: {
      'Ordinary shares': 100,
      'Share premium': 100,
      'Retained earnings': 100,
      'Other comprehensive income': 100,
      'Regulatory adjustments': -100
    },
    additionalTier1: {
      'Perpetual non-cumulative preference shares': 100,
      'Perpetual subordinated debt': 100,
      'Regulatory adjustments': -100
    }
  },

  // Tier 2 Capital Components
  tier2Capital: {
    'Subordinated debt': 100,
    'Preference shares': 100,
    'Revaluation reserves': 55,
    'General provisions': 100,
    'Regulatory adjustments': -100
  },

  // Regulatory Adjustments
  regulatoryAdjustments: {
    'Goodwill': -100,
    'Intangible assets': -100,
    'Deferred tax assets': -100,
    'Defined benefit pension fund assets': -100,
    'Investments in own shares': -100,
    'Reciprocal cross-holdings': -100,
    'Investments in financial institutions': -100,
    'Shortfall of provisions to expected losses': -100
  }
};

// RBZ Capital Planning Scenarios
export const rbzCapitalPlanningScenarios = {
  // Stress Testing Scenarios
  stressScenarios: {
    'Baseline Scenario': {
      gdpGrowth: 3.5,
      inflationRate: 15.0,
      interestRate: 12.0,
      exchangeRate: 1.0,
      agriculturalOutput: 100
    },
    'Adverse Scenario': {
      gdpGrowth: -2.0,
      inflationRate: 25.0,
      interestRate: 18.0,
      exchangeRate: 1.5,
      agriculturalOutput: 80
    },
    'Severe Adverse Scenario': {
      gdpGrowth: -5.0,
      inflationRate: 40.0,
      interestRate: 25.0,
      exchangeRate: 2.0,
      agriculturalOutput: 60
    }
  },

  // Capital Planning Horizons
  planningHorizons: {
    shortTerm: 1, // Year
    mediumTerm: 3, // Years
    longTerm: 5 // Years
  },

  // Capital Planning Assumptions
  planningAssumptions: {
    'Asset Growth Rate': 8.0, // Annual percentage
    'Risk-Weighted Asset Growth': 10.0, // Annual percentage
    'Profit Retention Rate': 60.0, // Percentage
    'Dividend Payout Ratio': 40.0, // Percentage
    'Cost of Capital': 15.0, // Annual percentage
    'Target ROE': 18.0 // Annual percentage
  }
};

// RBZ Capital Reporting Requirements
export const rbzCapitalReportingRequirements = {
  // Reporting Frequency
  reportingFrequency: {
    monthly: [
      'Capital adequacy ratios',
      'Risk-weighted assets',
      'Capital components',
      'Regulatory adjustments'
    ],
    quarterly: [
      'Detailed capital adequacy report',
      'Stress testing results',
      'Capital planning projections',
      'Operational risk capital'
    ],
    annually: [
      'Comprehensive capital adequacy assessment',
      'Capital planning strategy',
      'Stress testing framework',
      'Capital management policy review'
    ]
  },

  // Reporting Templates
  reportingTemplates: {
    'RBZ CAP 001': 'Capital Adequacy Ratio Report',
    'RBZ CAP 002': 'Risk-Weighted Assets Report',
    'RBZ CAP 003': 'Capital Components Report',
    'RBZ CAP 004': 'Operational Risk Capital Report',
    'RBZ CAP 005': 'Capital Planning Report',
    'RBZ CAP 006': 'Stress Testing Report'
  },

  // Reporting Deadlines
  reportingDeadlines: {
    monthly: '15th of following month',
    quarterly: '30th of following quarter',
    annually: '31st March of following year'
  }
};

// RBZ Capital Compliance Status
export const rbzCapitalComplianceStatus = {
  overallCompliance: {
    status: 'Compliant',
    score: 92.5,
    lastAssessment: '2024-01-31',
    nextAssessment: '2024-04-30'
  },

  complianceAreas: [
    {
      area: 'Total Capital Ratio',
      status: 'Compliant',
      score: 95,
      requirement: 12.0,
      actual: 12.5,
      buffer: 0.5
    },
    {
      area: 'Tier 1 Capital Ratio',
      status: 'Compliant',
      score: 94,
      requirement: 8.5,
      actual: 8.75,
      buffer: 0.25
    },
    {
      area: 'Common Equity Tier 1 Ratio',
      status: 'Compliant',
      score: 96,
      requirement: 6.0,
      actual: 6.2,
      buffer: 0.2
    },
    {
      area: 'Leverage Ratio',
      status: 'Compliant',
      score: 90,
      requirement: 3.0,
      actual: 6.25,
      buffer: 3.25
    },
    {
      area: 'Operational Risk Capital',
      status: 'Compliant',
      score: 88,
      requirement: 'BIA 15%',
      actual: 'BIA 15%',
      buffer: 'Adequate'
    }
  ],

  rbzFindings: [
    {
      finding: 'Capital planning needs to incorporate Zimbabwe-specific stress scenarios',
      severity: 'Medium',
      deadline: '2024-06-30',
      status: 'In Progress'
    },
    {
      finding: 'Operational risk capital calculation needs agricultural sector adjustments',
      severity: 'Low',
      deadline: '2024-09-30',
      status: 'Planned'
    },
    {
      finding: 'Capital quality assessment needs hyperinflation impact analysis',
      severity: 'Medium',
      deadline: '2024-12-31',
      status: 'Not Started'
    }
  ]
};

// Helper Functions for RBZ Capital Calculations
export const rbzCapitalHelpers = {
  // Calculate Risk-Weighted Assets
  calculateRiskWeightedAssets: (exposures, riskWeights) => {
    let totalRWA = 0;
    for (const [assetClass, amount] of Object.entries(exposures)) {
      const riskWeight = riskWeights[assetClass] || 100;
      totalRWA += amount * (riskWeight / 100);
    }
    return totalRWA;
  },

  // Calculate Capital Adequacy Ratio
  calculateCapitalAdequacyRatio: (totalCapital, riskWeightedAssets) => {
    return (totalCapital / riskWeightedAssets) * 100;
  },

  // Calculate Operational Risk Capital (BIA)
  calculateOperationalRiskCapital: (grossIncome, alpha = 0.15) => {
    return grossIncome * alpha;
  },

  // Check Capital Compliance
  checkCapitalCompliance: (actualRatio, requiredRatio, buffer = 0) => {
    const totalRequirement = requiredRatio + buffer;
    return {
      compliant: actualRatio >= totalRequirement,
      buffer: actualRatio - totalRequirement,
      status: actualRatio >= totalRequirement ? 'Compliant' : 'Non-Compliant'
    };
  },

  // Generate Capital Report
  generateCapitalReport: (capitalData) => {
    return {
      reportDate: new Date().toISOString().split('T')[0],
      totalCapitalRatio: capitalData.totalCapitalRatio,
      tier1CapitalRatio: capitalData.tier1CapitalRatio,
      commonEquityTier1Ratio: capitalData.commonEquityTier1Ratio,
      leverageRatio: capitalData.leverageRatio,
      operationalRiskCapital: capitalData.operationalRiskCapital,
      overallCompliance: capitalData.overallCompliance
    };
  }
};
