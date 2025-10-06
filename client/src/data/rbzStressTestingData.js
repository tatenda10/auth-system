// RBZ Stress Testing Data Structure
// Based on Reserve Bank of Zimbabwe Stress Testing Requirements
// Comprehensive framework for Zimbabwean banking stress testing regulations

// RBZ Zimbabwe-Specific Economic Scenarios
export const rbzZimbabweScenarios = {
  // Base Economic Scenarios
  baseScenarios: {
    baseline: {
      name: 'Baseline Scenario',
      description: 'Current economic conditions with moderate growth',
      probability: 60,
      stressLevel: 'Low',
      economicIndicators: {
        gdpGrowth: 3.5,
        inflationRate: 15.0,
        interestRate: 12.0,
        exchangeRate: 1.0,
        agriculturalOutput: 100,
        miningOutput: 100,
        tourismRevenue: 100,
        foreignDirectInvestment: 100
      },
      bankingImpact: {
        creditGrowth: 8.0,
        depositGrowth: 6.0,
        nonPerformingLoans: 4.5,
        netInterestMargin: 4.2,
        capitalAdequacyRatio: 15.8,
        liquidityCoverageRatio: 125.0
      }
    },
    adverse: {
      name: 'Adverse Scenario',
      description: 'Moderate economic stress with funding market disruption',
      probability: 30,
      stressLevel: 'Medium',
      economicIndicators: {
        gdpGrowth: -2.0,
        inflationRate: 25.0,
        interestRate: 18.0,
        exchangeRate: 1.5,
        agriculturalOutput: 80,
        miningOutput: 85,
        tourismRevenue: 70,
        foreignDirectInvestment: 60
      },
      bankingImpact: {
        creditGrowth: 2.0,
        depositGrowth: -5.0,
        nonPerformingLoans: 8.0,
        netInterestMargin: 3.8,
        capitalAdequacyRatio: 12.3,
        liquidityCoverageRatio: 95.0
      }
    },
    severelyAdverse: {
      name: 'Severely Adverse Scenario',
      description: 'Crisis conditions with severe funding market disruption',
      probability: 10,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -5.0,
        inflationRate: 40.0,
        interestRate: 25.0,
        exchangeRate: 2.0,
        agriculturalOutput: 60,
        miningOutput: 70,
        tourismRevenue: 50,
        foreignDirectInvestment: 40
      },
      bankingImpact: {
        creditGrowth: -5.0,
        depositGrowth: -15.0,
        nonPerformingLoans: 15.0,
        netInterestMargin: 3.2,
        capitalAdequacyRatio: 10.8,
        liquidityCoverageRatio: 75.0
      }
    }
  },

  // Zimbabwe-Specific Scenarios
  zimbabweSpecific: {
    economicSanctions: {
      name: 'Economic Sanctions Scenario',
      description: 'Impact of international economic sanctions on Zimbabwe',
      probability: 15,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -8.0,
        inflationRate: 50.0,
        interestRate: 30.0,
        exchangeRate: 3.0,
        agriculturalOutput: 50,
        miningOutput: 40,
        tourismRevenue: 30,
        foreignDirectInvestment: 20
      },
      bankingImpact: {
        creditGrowth: -10.0,
        depositGrowth: -25.0,
        nonPerformingLoans: 20.0,
        netInterestMargin: 2.8,
        capitalAdequacyRatio: 8.5,
        liquidityCoverageRatio: 60.0
      },
      specificFactors: [
        'Correspondent banking restrictions',
        'International payment limitations',
        'Trade finance constraints',
        'Foreign currency shortages',
        'Technology access restrictions'
      ]
    },
    hyperinflation: {
      name: 'Hyperinflation Scenario',
      description: 'Return to hyperinflationary conditions',
      probability: 20,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -10.0,
        inflationRate: 100.0,
        interestRate: 50.0,
        exchangeRate: 5.0,
        agriculturalOutput: 40,
        miningOutput: 50,
        tourismRevenue: 20,
        foreignDirectInvestment: 10
      },
      bankingImpact: {
        creditGrowth: -15.0,
        depositGrowth: -40.0,
        nonPerformingLoans: 25.0,
        netInterestMargin: 2.0,
        capitalAdequacyRatio: 6.5,
        liquidityCoverageRatio: 45.0
      },
      specificFactors: [
        'Currency devaluation',
        'Local currency depreciation',
        'Inflation accounting complexities',
        'Real value erosion',
        'Dollarization pressure'
      ]
    },
    agriculturalDrought: {
      name: 'Agricultural Drought Scenario',
      description: 'Severe drought affecting agricultural sector',
      probability: 25,
      stressLevel: 'Medium',
      economicIndicators: {
        gdpGrowth: -3.0,
        inflationRate: 20.0,
        interestRate: 15.0,
        exchangeRate: 1.3,
        agriculturalOutput: 45,
        miningOutput: 90,
        tourismRevenue: 80,
        foreignDirectInvestment: 70
      },
      bankingImpact: {
        creditGrowth: 1.0,
        depositGrowth: -8.0,
        nonPerformingLoans: 12.0,
        netInterestMargin: 3.5,
        capitalAdequacyRatio: 13.2,
        liquidityCoverageRatio: 88.0
      },
      specificFactors: [
        'Agricultural loan defaults',
        'Food security concerns',
        'Rural banking stress',
        'Agricultural commodity price volatility',
        'Weather-related business disruption'
      ]
    },
    currencyCrisis: {
      name: 'Currency Crisis Scenario',
      description: 'Severe currency volatility and foreign exchange crisis',
      probability: 18,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -6.0,
        inflationRate: 35.0,
        interestRate: 22.0,
        exchangeRate: 2.5,
        agriculturalOutput: 70,
        miningOutput: 75,
        tourismRevenue: 60,
        foreignDirectInvestment: 50
      },
      bankingImpact: {
        creditGrowth: -8.0,
        depositGrowth: -20.0,
        nonPerformingLoans: 18.0,
        netInterestMargin: 2.5,
        capitalAdequacyRatio: 9.8,
        liquidityCoverageRatio: 65.0
      },
      specificFactors: [
        'Foreign exchange shortages',
        'Parallel market premium',
        'Import restrictions',
        'Export revenue decline',
        'Cross-border payment issues'
      ]
    },
    miningSectorCrisis: {
      name: 'Mining Sector Crisis Scenario',
      description: 'Severe downturn in mining sector affecting key exports',
      probability: 12,
      stressLevel: 'Medium',
      economicIndicators: {
        gdpGrowth: -4.0,
        inflationRate: 18.0,
        interestRate: 14.0,
        exchangeRate: 1.4,
        agriculturalOutput: 85,
        miningOutput: 55,
        tourismRevenue: 75,
        foreignDirectInvestment: 65
      },
      bankingImpact: {
        creditGrowth: -3.0,
        depositGrowth: -10.0,
        nonPerformingLoans: 10.0,
        netInterestMargin: 3.6,
        capitalAdequacyRatio: 14.1,
        liquidityCoverageRatio: 92.0
      },
      specificFactors: [
        'Mining loan defaults',
        'Export revenue decline',
        'Foreign currency shortages',
        'Mining sector job losses',
        'Commodity price volatility'
      ]
    }
  }
};

// RBZ Regulatory Stress Testing Requirements
export const rbzRegulatoryStressTesting = {
  // RBZ Stress Testing Framework
  stressTestingFramework: {
    frequency: {
      annual: 'Comprehensive stress testing',
      quarterly: 'Regular stress testing updates',
      monthly: 'High-frequency stress testing',
      adHoc: 'Event-driven stress testing'
    },
    scope: {
      creditRisk: 'Portfolio-level credit risk stress testing',
      marketRisk: 'Interest rate and foreign exchange risk',
      liquidityRisk: 'Funding and liquidity stress testing',
      operationalRisk: 'Operational risk stress testing',
      concentrationRisk: 'Sector and counterparty concentration',
      sovereignRisk: 'Sovereign and country risk'
    },
    methodologies: {
      scenarioAnalysis: 'Forward-looking scenario analysis',
      sensitivityAnalysis: 'Parameter sensitivity testing',
      reverseStressTesting: 'Reverse stress testing',
      stressTesting: 'Comprehensive stress testing'
    }
  },

  // RBZ Regulatory Requirements
  regulatoryRequirements: {
    minimumScenarios: [
      'Baseline scenario',
      'Adverse scenario',
      'Severely adverse scenario',
      'Zimbabwe-specific scenarios'
    ],
    reportingRequirements: {
      frequency: 'Quarterly',
      deadline: '30th of following quarter',
      format: 'RBZ-prescribed templates',
      content: [
        'Scenario assumptions',
        'Impact on capital ratios',
        'Impact on liquidity ratios',
        'Impact on profitability',
        'Risk mitigation strategies'
      ]
    },
    governanceRequirements: {
      boardApproval: 'Annual stress testing plan',
      seniorManagement: 'Regular stress testing oversight',
      riskCommittee: 'Stress testing review and challenge',
      internalAudit: 'Independent validation'
    }
  },

  // RBZ Stress Testing Standards
  stressTestingStandards: {
    dataQuality: {
      requirements: [
        'Accurate and complete data',
        'Timely data updates',
        'Data validation procedures',
        'Historical data availability'
      ],
      zimbabweSpecific: [
        'Local currency data quality',
        'Agricultural sector data',
        'Mining sector data',
        'Foreign exchange data'
      ]
    },
    modelValidation: {
      requirements: [
        'Model accuracy validation',
        'Back-testing procedures',
        'Sensitivity analysis',
        'Model governance'
      ],
      zimbabweSpecific: [
        'Zimbabwe market validation',
        'Hyperinflation period testing',
        'Agricultural cycle testing',
        'Currency crisis testing'
      ]
    },
    scenarioDesign: {
      requirements: [
        'Realistic scenario assumptions',
        'Comprehensive risk coverage',
        'Forward-looking scenarios',
        'Severity calibration'
      ],
      zimbabweSpecific: [
        'Zimbabwe economic conditions',
        'Agricultural sector scenarios',
        'Mining sector scenarios',
        'Currency volatility scenarios'
      ]
    }
  }
};

// RBZ Scenario-Based Capital Planning
export const rbzScenarioCapitalPlanning = {
  // Capital Planning Scenarios
  capitalPlanningScenarios: {
    baseline: {
      name: 'Baseline Capital Plan',
      horizon: '3 years',
      assumptions: {
        assetGrowth: 8.0,
        riskWeightedAssetGrowth: 10.0,
        profitRetention: 60.0,
        dividendPayout: 40.0,
        costOfCapital: 15.0,
        targetROE: 18.0
      },
      capitalProjections: {
        year1: { totalCapital: 15.8, tier1Capital: 12.5, commonEquity: 10.2 },
        year2: { totalCapital: 16.2, tier1Capital: 12.8, commonEquity: 10.5 },
        year3: { totalCapital: 16.5, tier1Capital: 13.0, commonEquity: 10.8 }
      }
    },
    adverse: {
      name: 'Adverse Capital Plan',
      horizon: '3 years',
      assumptions: {
        assetGrowth: 2.0,
        riskWeightedAssetGrowth: 5.0,
        profitRetention: 80.0,
        dividendPayout: 20.0,
        costOfCapital: 18.0,
        targetROE: 12.0
      },
      capitalProjections: {
        year1: { totalCapital: 12.3, tier1Capital: 9.8, commonEquity: 7.5 },
        year2: { totalCapital: 12.8, tier1Capital: 10.2, commonEquity: 7.8 },
        year3: { totalCapital: 13.2, tier1Capital: 10.5, commonEquity: 8.0 }
      }
    },
    severelyAdverse: {
      name: 'Severely Adverse Capital Plan',
      horizon: '3 years',
      assumptions: {
        assetGrowth: -5.0,
        riskWeightedAssetGrowth: -2.0,
        profitRetention: 100.0,
        dividendPayout: 0.0,
        costOfCapital: 25.0,
        targetROE: 5.0
      },
      capitalProjections: {
        year1: { totalCapital: 10.8, tier1Capital: 8.5, commonEquity: 6.2 },
        year2: { totalCapital: 11.2, tier1Capital: 8.8, commonEquity: 6.5 },
        year3: { totalCapital: 11.5, tier1Capital: 9.0, commonEquity: 6.8 }
      }
    }
  },

  // Capital Planning Requirements
  capitalPlanningRequirements: {
    planningHorizons: {
      shortTerm: '1 year',
      mediumTerm: '3 years',
      longTerm: '5 years'
    },
    stressTestingIntegration: {
      requirements: [
        'Capital adequacy under stress',
        'Capital buffer requirements',
        'Recovery planning',
        'Resolution planning'
      ],
      zimbabweSpecific: [
        'Hyperinflation impact on capital',
        'Currency crisis capital planning',
        'Agricultural sector capital planning',
        'Mining sector capital planning'
      ]
    },
    capitalActions: {
      capitalConservation: [
        'Dividend restrictions',
        'Share buyback limitations',
        'Bonus payment restrictions',
        'Capital preservation measures'
      ],
      capitalEnhancement: [
        'Equity issuance',
        'Retained earnings retention',
        'Asset sales',
        'Risk-weighted asset optimization'
      ],
      capitalRecovery: [
        'Business model adjustments',
        'Risk appetite recalibration',
        'Portfolio rebalancing',
        'Cost structure optimization'
      ]
    }
  },

  // RBZ Capital Planning Reporting
  capitalPlanningReporting: {
    reportingTemplates: {
      'RBZ CAP PLAN 001': 'Capital Planning Summary',
      'RBZ CAP PLAN 002': 'Scenario Analysis Results',
      'RBZ CAP PLAN 003': 'Capital Actions Plan',
      'RBZ CAP PLAN 004': 'Stress Testing Integration',
      'RBZ CAP PLAN 005': 'Recovery Planning'
    },
    reportingFrequency: {
      annual: 'Comprehensive capital planning',
      quarterly: 'Capital planning updates',
      monthly: 'Capital monitoring',
      adHoc: 'Event-driven updates'
    },
    reportingDeadlines: {
      annual: '31st March of following year',
      quarterly: '30th of following quarter',
      monthly: '15th of following month',
      adHoc: 'Within 5 business days'
    }
  }
};

// RBZ Stress Testing Compliance Status
export const rbzStressTestingCompliance = {
  overallCompliance: {
    status: 'Compliant',
    score: 89.5,
    lastAssessment: '2024-01-31',
    nextAssessment: '2024-04-30'
  },
  
  complianceAreas: [
    {
      area: 'Zimbabwe-Specific Scenarios',
      status: 'Compliant',
      score: 92,
      gaps: ['Mining sector crisis scenario needs enhancement'],
      actions: ['Enhance mining sector scenario by Q2 2024']
    },
    {
      area: 'Regulatory Stress Testing',
      status: 'Compliant',
      score: 88,
      gaps: ['Reverse stress testing not fully implemented'],
      actions: ['Implement reverse stress testing by Q1 2024']
    },
    {
      area: 'Scenario-Based Capital Planning',
      status: 'Partially Compliant',
      score: 78,
      gaps: ['Capital recovery planning incomplete'],
      actions: ['Complete capital recovery planning by Q3 2024']
    },
    {
      area: 'Stress Testing Integration',
      status: 'Compliant',
      score: 91,
      gaps: ['Agricultural sector integration needs improvement'],
      actions: ['Improve agricultural sector integration by Q2 2024']
    }
  ],

  rbzFindings: [
    {
      finding: 'Mining sector crisis scenario needs more comprehensive coverage',
      severity: 'Medium',
      deadline: '2024-06-30',
      status: 'In Progress'
    },
    {
      finding: 'Reverse stress testing framework incomplete',
      severity: 'High',
      deadline: '2024-03-31',
      status: 'Not Started'
    },
    {
      finding: 'Capital recovery planning requires enhancement',
      severity: 'Medium',
      deadline: '2024-09-30',
      status: 'Planned'
    }
  ]
};

// Helper Functions for RBZ Stress Testing
export const rbzStressTestingHelpers = {
  // Calculate stress impact on capital ratios
  calculateStressImpact: (baselineRatios, scenario) => {
    const impact = {};
    Object.keys(baselineRatios).forEach(ratio => {
      const stressFactor = scenario.bankingImpact[ratio] || 1.0;
      impact[ratio] = baselineRatios[ratio] * stressFactor;
    });
    return impact;
  },

  // Check stress testing compliance
  checkStressTestingCompliance: (scenarios, requirements) => {
    const compliance = {
      compliant: true,
      gaps: [],
      recommendations: []
    };

    // Check for required scenarios
    requirements.minimumScenarios.forEach(scenario => {
      if (!scenarios.find(s => s.name.toLowerCase().includes(scenario.toLowerCase()))) {
        compliance.compliant = false;
        compliance.gaps.push(`Missing required scenario: ${scenario}`);
        compliance.recommendations.push(`Implement ${scenario} scenario`);
      }
    });

    return compliance;
  },

  // Generate stress testing report
  generateStressTestingReport: (scenarios, results, compliance) => {
    return {
      reportDate: new Date().toISOString().split('T')[0],
      scenarios: scenarios,
      results: results,
      compliance: compliance,
      recommendations: compliance.recommendations
    };
  },

  // Validate Zimbabwe-specific scenarios
  validateZimbabweScenarios: (scenarios) => {
    const validation = {
      valid: true,
      errors: [],
      warnings: []
    };

    // Check for Zimbabwe-specific factors
    const zimbabweFactors = [
      'agricultural',
      'mining',
      'hyperinflation',
      'currency',
      'sanctions'
    ];

    scenarios.forEach(scenario => {
      const hasZimbabweFactors = zimbabweFactors.some(factor => 
        scenario.name.toLowerCase().includes(factor) ||
        scenario.description.toLowerCase().includes(factor)
      );

      if (!hasZimbabweFactors) {
        validation.warnings.push(`Scenario "${scenario.name}" may not include Zimbabwe-specific factors`);
      }
    });

    return validation;
  }
};
