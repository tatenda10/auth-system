// Credit Risk Data Structure (RBZ Standards)
// Based on Reserve Bank of Zimbabwe Credit Risk Management Guidelines

// Credit Portfolio Distribution by Asset Class
export const creditPortfolioData = {
  totalExposure: 33000000,
  totalRWA: 14420000,
  averageRiskWeight: 43.7,
  
  assetClasses: [
    {
      category: 'Sovereign & Central Bank',
      exposure: 8500000,
      percentage: 25.8,
      riskWeight: 0,
      rwa: 0,
      nplRate: 0.0,
      expectedLoss: 0,
      regulatoryLimit: 30.0,
      status: 'safe',
      subCategories: [
        { name: 'Zimbabwe Government (Local Currency)', exposure: 6000000, riskWeight: 0 },
        { name: 'Zimbabwe Government (Foreign Currency)', exposure: 2000000, riskWeight: 20 },
        { name: 'Reserve Bank of Zimbabwe', exposure: 500000, riskWeight: 0 }
      ]
    },
    {
      category: 'Banks & Financial Institutions',
      exposure: 5200000,
      percentage: 15.8,
      riskWeight: 20,
      rwa: 1040000,
      nplRate: 0.5,
      expectedLoss: 26000,
      regulatoryLimit: 20.0,
      status: 'safe',
      subCategories: [
        { name: 'RBZ-Regulated Banks', exposure: 3500000, riskWeight: 20 },
        { name: 'SADC Banks', exposure: 1200000, riskWeight: 20 },
        { name: 'Other African Banks', exposure: 500000, riskWeight: 100 }
      ]
    },
    {
      category: 'Corporate (Investment Grade)',
      exposure: 6800000,
      percentage: 20.6,
      riskWeight: 50,
      rwa: 3400000,
      nplRate: 1.2,
      expectedLoss: 81600,
      regulatoryLimit: 25.0,
      status: 'safe',
      subCategories: [
        { name: 'Large Corporates (AAA-BBB)', exposure: 4500000, riskWeight: 50 },
        { name: 'SMEs (Investment Grade)', exposure: 2300000, riskWeight: 50 }
      ]
    },
    {
      category: 'Corporate (Non-Investment Grade)',
      exposure: 4200000,
      percentage: 12.7,
      riskWeight: 100,
      rwa: 4200000,
      nplRate: 3.8,
      expectedLoss: 159600,
      regulatoryLimit: 15.0,
      status: 'warning',
      subCategories: [
        { name: 'Large Corporates (BB and below)', exposure: 2800000, riskWeight: 100 },
        { name: 'SMEs (Non-Investment Grade)', exposure: 1400000, riskWeight: 100 }
      ]
    },
    {
      category: 'SMEs (Agricultural)',
      exposure: 2800000,
      percentage: 8.5,
      riskWeight: 75,
      rwa: 2100000,
      nplRate: 4.2,
      expectedLoss: 117600,
      regulatoryLimit: 10.0,
      status: 'warning',
      subCategories: [
        { name: 'Commercial Farmers', exposure: 1800000, riskWeight: 75 },
        { name: 'Small-scale Farmers', exposure: 1000000, riskWeight: 75 }
      ]
    },
    {
      category: 'SMEs (Other Sectors)',
      exposure: 2200000,
      percentage: 6.7,
      riskWeight: 100,
      rwa: 2200000,
      nplRate: 5.1,
      expectedLoss: 112200,
      regulatoryLimit: 10.0,
      status: 'warning',
      subCategories: [
        { name: 'Manufacturing SMEs', exposure: 800000, riskWeight: 100 },
        { name: 'Services SMEs', exposure: 900000, riskWeight: 100 },
        { name: 'Mining SMEs', exposure: 500000, riskWeight: 150 }
      ]
    },
    {
      category: 'Retail (Residential Mortgages)',
      exposure: 1800000,
      percentage: 5.5,
      riskWeight: 35,
      rwa: 630000,
      nplRate: 2.1,
      expectedLoss: 37800,
      regulatoryLimit: 8.0,
      status: 'safe',
      subCategories: [
        { name: 'Qualifying Residential Mortgages', exposure: 1500000, riskWeight: 35 },
        { name: 'Non-Qualifying Mortgages', exposure: 300000, riskWeight: 75 }
      ]
    },
    {
      category: 'Retail (Other)',
      exposure: 1400000,
      percentage: 4.2,
      riskWeight: 75,
      rwa: 1050000,
      nplRate: 6.8,
      expectedLoss: 95200,
      regulatoryLimit: 8.0,
      status: 'critical',
      subCategories: [
        { name: 'Personal Loans', exposure: 800000, riskWeight: 75 },
        { name: 'Credit Cards', exposure: 400000, riskWeight: 75 },
        { name: 'Other Retail', exposure: 200000, riskWeight: 75 }
      ]
    },
    {
      category: 'Equity Investments',
      exposure: 800000,
      percentage: 2.4,
      riskWeight: 100,
      rwa: 800000,
      nplRate: 0.0,
      expectedLoss: 0,
      regulatoryLimit: 5.0,
      status: 'safe',
      subCategories: [
        { name: 'ZSE Listed Equities', exposure: 500000, riskWeight: 100 },
        { name: 'Unlisted Equities', exposure: 300000, riskWeight: 150 }
      ]
    }
  ]
};

// Credit Risk Metrics
export const creditMetricsData = {
  portfolioMetrics: {
    totalExposure: 33000000,
    totalRWA: 14420000,
    averageRiskWeight: 43.7,
    totalExpectedLoss: 631000,
    portfolioPD: 2.8,
    portfolioLGD: 38.5,
    creditRiskCapital: 1153600,
    capitalAdequacyRatio: 12.5
  },
  
  qualityMetrics: {
    nplRatio: 2.8,
    nplCoverage: 85.2,
    provisionCoverage: 92.1,
    watchListExposure: 1250000,
    pastDueRatio: 1.2,
    restructuredLoans: 680000,
    impairedLoans: 924000,
    specificProvisions: 786000,
    generalProvisions: 49500
  },
  
  concentrationMetrics: {
    largestExposure: 850000,
    top5Exposures: 2850000,
    top10Exposures: 4200000,
    sectorConcentration: 45.2,
    geographicConcentration: 78.5,
    currencyConcentration: 32.1,
    singleBorrowerLimit: 2.6,
    connectedLending: 1850000
  }
};

// Stress Testing Scenarios (RBZ Requirements)
export const stressTestScenarios = [
  {
    scenario: 'Baseline',
    pdIncrease: 0,
    lgdIncrease: 0,
    exposureChange: 0,
    capitalImpact: 0,
    rwaImpact: 0,
    description: 'Current economic conditions'
  },
  {
    scenario: 'Mild Recession',
    pdIncrease: 25,
    lgdIncrease: 10,
    exposureChange: -5,
    capitalImpact: -185000,
    rwaImpact: 8.5,
    description: 'GDP growth slows to 2%'
  },
  {
    scenario: 'Severe Recession',
    pdIncrease: 50,
    lgdIncrease: 20,
    exposureChange: -15,
    capitalImpact: -420000,
    rwaImpact: 18.2,
    description: 'GDP contracts by 3%'
  },
  {
    scenario: 'Agricultural Crisis',
    pdIncrease: 75,
    lgdIncrease: 15,
    exposureChange: -10,
    capitalImpact: -285000,
    rwaImpact: 12.8,
    description: 'Drought impacts 60% of agricultural loans'
  },
  {
    scenario: 'Currency Crisis',
    pdIncrease: 40,
    lgdIncrease: 25,
    exposureChange: -20,
    capitalImpact: -520000,
    rwaImpact: 22.5,
    description: 'ZWL depreciates by 50%'
  },
  {
    scenario: 'Interest Rate Shock',
    pdIncrease: 30,
    lgdIncrease: 5,
    exposureChange: -8,
    capitalImpact: -225000,
    rwaImpact: 10.5,
    description: 'Interest rates increase by 300bps'
  },
  {
    scenario: 'Sector-Specific Crisis',
    pdIncrease: 60,
    lgdIncrease: 18,
    exposureChange: -12,
    capitalImpact: -315000,
    rwaImpact: 14.2,
    description: 'Mining sector collapse'
  }
];

// Early Warning Indicators
export const earlyWarningIndicators = [
  {
    indicator: 'NPL Ratio Trend',
    currentValue: 2.8,
    threshold: 3.0,
    trend: 'increasing',
    status: 'warning',
    description: 'NPL ratio approaching regulatory threshold',
    frequency: 'Monthly',
    owner: 'Credit Risk Team'
  },
  {
    indicator: 'Provision Coverage',
    currentValue: 92.1,
    threshold: 90.0,
    trend: 'stable',
    status: 'safe',
    description: 'Adequate provision coverage maintained',
    frequency: 'Monthly',
    owner: 'Credit Risk Team'
  },
  {
    indicator: 'Sector Concentration',
    currentValue: 45.2,
    threshold: 40.0,
    trend: 'increasing',
    status: 'warning',
    description: 'High concentration in agricultural sector',
    frequency: 'Quarterly',
    owner: 'Portfolio Management'
  },
  {
    indicator: 'Largest Exposure',
    currentValue: 2.6,
    threshold: 2.0,
    trend: 'stable',
    status: 'warning',
    description: 'Largest exposure exceeds internal limit',
    frequency: 'Monthly',
    owner: 'Credit Risk Team'
  },
  {
    indicator: 'Past Due Ratio',
    currentValue: 1.2,
    threshold: 1.5,
    trend: 'decreasing',
    status: 'safe',
    description: 'Past due ratio within acceptable range',
    frequency: 'Weekly',
    owner: 'Collections Team'
  },
  {
    indicator: 'Watch List Exposure',
    currentValue: 1250000,
    threshold: 1500000,
    trend: 'stable',
    status: 'safe',
    description: 'Watch list exposure below threshold',
    frequency: 'Monthly',
    owner: 'Credit Risk Team'
  },
  {
    indicator: 'Restructured Loans',
    currentValue: 680000,
    threshold: 800000,
    trend: 'increasing',
    status: 'warning',
    description: 'Restructured loans approaching limit',
    frequency: 'Monthly',
    owner: 'Credit Risk Team'
  },
  {
    indicator: 'Geographic Concentration',
    currentValue: 78.5,
    threshold: 80.0,
    trend: 'stable',
    status: 'safe',
    description: 'Geographic concentration within limits',
    frequency: 'Quarterly',
    owner: 'Portfolio Management'
  }
];

// Credit Risk Limits and Thresholds (RBZ Standards)
export const creditRiskLimits = {
  regulatoryLimits: {
    singleBorrowerLimit: 25, // % of regulatory capital
    largeExposuresLimit: 800, // % of regulatory capital
    insiderLendingLimit: 100, // % of regulatory capital
    sectorConcentrationLimit: 40, // % of total portfolio
    geographicConcentrationLimit: 80, // % of total portfolio
    currencyConcentrationLimit: 40, // % of total assets
    nplRatioThreshold: 5, // % of total loans
    provisionCoverageThreshold: 90 // % of NPLs
  },
  
  internalLimits: {
    singleBorrowerLimit: 20, // % of regulatory capital
    largeExposuresLimit: 600, // % of regulatory capital
    sectorConcentrationLimit: 35, // % of total portfolio
    geographicConcentrationLimit: 75, // % of total portfolio
    nplRatioThreshold: 3, // % of total loans
    provisionCoverageThreshold: 95 // % of NPLs
  }
};

// Credit Risk Reporting Framework
export const creditRiskReporting = {
  reportingFrequency: {
    daily: ['NPL Ratio', 'Past Due Ratio', 'Large Exposures'],
    weekly: ['Watch List Exposure', 'Restructured Loans'],
    monthly: ['Portfolio Analysis', 'Credit Metrics', 'Early Warning Indicators'],
    quarterly: ['Stress Testing', 'Concentration Analysis', 'Regulatory Reporting']
  },
  
  regulatoryReports: [
    'RBZ Credit Risk Return',
    'Large Exposures Report',
    'NPL and Provisioning Report',
    'Sector Concentration Report',
    'Insider Lending Report'
  ],
  
  internalReports: [
    'Credit Portfolio Dashboard',
    'Credit Risk Metrics Report',
    'Early Warning Indicators Report',
    'Stress Testing Results',
    'Credit Risk Capital Report'
  ]
};

// Credit Risk Capital Calculation (RBZ Standards)
export const creditRiskCapitalCalculation = {
  capitalRequirements: {
    minimumCapitalRatio: 12.0, // % of RWA
    tier1CapitalRatio: 8.5, // % of RWA
    commonEquityTier1Ratio: 6.0, // % of RWA
    leverageRatio: 3.0, // % of total exposure
    creditRiskCapital: 1153600 // USD
  },
  
  riskWeightedAssets: {
    creditRisk: 14420000,
    marketRisk: 2450000,
    operationalRisk: 1850000,
    totalRWA: 18720000
  },
  
  capitalBuffers: {
    conservationBuffer: 2.5, // % of RWA
    countercyclicalBuffer: 0.0, // % of RWA (varies by economic conditions)
    systemicRiskBuffer: 1.0, // % of RWA for systemically important banks
    domesticSystemicallyImportantBankBuffer: 0.5 // % of RWA
  }
};
