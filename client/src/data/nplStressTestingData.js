// NPL Stress Testing Data Structure (RBZ Standards)
// Based on Reserve Bank of Zimbabwe NPL Stress Testing Requirements
// Comprehensive framework for Non-Performing Loan stress testing

// NPL Stress Testing Scenarios (Zimbabwe-Specific)
export const nplStressScenarios = {
  // Base Economic Scenarios
  baseScenarios: {
    baseline: {
      name: 'Baseline Scenario',
      description: 'Current economic conditions with stable NPL levels',
      probability: 60,
      stressLevel: 'Low',
      economicIndicators: {
        gdpGrowth: 3.5,
        inflationRate: 15.0,
        interestRate: 12.0,
        unemploymentRate: 8.5,
        agriculturalOutput: 100,
        miningOutput: 100,
        manufacturingOutput: 100
      },
      nplImpact: {
        overallNPLIncrease: 0,
        retailNPLIncrease: 0,
        corporateNPLIncrease: 0,
        agriculturalNPLIncrease: 0,
        smeNPLIncrease: 0,
        mortgageNPLIncrease: 0
      }
    },
    adverse: {
      name: 'Adverse Scenario',
      description: 'Moderate economic stress with increased NPL levels',
      probability: 30,
      stressLevel: 'Medium',
      economicIndicators: {
        gdpGrowth: -2.0,
        inflationRate: 25.0,
        interestRate: 18.0,
        unemploymentRate: 12.5,
        agriculturalOutput: 80,
        miningOutput: 85,
        manufacturingOutput: 75
      },
      nplImpact: {
        overallNPLIncrease: 45,
        retailNPLIncrease: 50,
        corporateNPLIncrease: 40,
        agriculturalNPLIncrease: 60,
        smeNPLIncrease: 55,
        mortgageNPLIncrease: 35
      }
    },
    severelyAdverse: {
      name: 'Severely Adverse Scenario',
      description: 'Crisis conditions with severe NPL increases',
      probability: 10,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -5.0,
        inflationRate: 40.0,
        interestRate: 25.0,
        unemploymentRate: 18.0,
        agriculturalOutput: 60,
        miningOutput: 70,
        manufacturingOutput: 55
      },
      nplImpact: {
        overallNPLIncrease: 85,
        retailNPLIncrease: 90,
        corporateNPLIncrease: 80,
        agriculturalNPLIncrease: 120,
        smeNPLIncrease: 100,
        mortgageNPLIncrease: 70
      }
    }
  },

  // Zimbabwe-Specific NPL Scenarios
  zimbabweSpecific: {
    agriculturalCrisis: {
      name: 'Agricultural Crisis Scenario',
      description: 'Severe drought affecting agricultural sector and rural NPLs',
      probability: 25,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -3.0,
        inflationRate: 20.0,
        interestRate: 15.0,
        unemploymentRate: 15.0,
        agriculturalOutput: 45,
        miningOutput: 90,
        manufacturingOutput: 80
      },
      nplImpact: {
        overallNPLIncrease: 65,
        retailNPLIncrease: 70,
        corporateNPLIncrease: 45,
        agriculturalNPLIncrease: 150,
        smeNPLIncrease: 80,
        mortgageNPLIncrease: 50
      },
      specificFactors: [
        'Drought impact on agricultural loans',
        'Rural banking stress',
        'Food security concerns',
        'Agricultural commodity price volatility',
        'Weather-related business disruption'
      ]
    },
    hyperinflation: {
      name: 'Hyperinflation Scenario',
      description: 'Return to hyperinflationary conditions affecting all loan categories',
      probability: 20,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -10.0,
        inflationRate: 100.0,
        interestRate: 50.0,
        unemploymentRate: 25.0,
        agriculturalOutput: 40,
        miningOutput: 50,
        manufacturingOutput: 45
      },
      nplImpact: {
        overallNPLIncrease: 120,
        retailNPLIncrease: 130,
        corporateNPLIncrease: 110,
        agriculturalNPLIncrease: 140,
        smeNPLIncrease: 125,
        mortgageNPLIncrease: 100
      },
      specificFactors: [
        'Currency devaluation impact',
        'Real value erosion',
        'Inflation accounting complexities',
        'Dollarization pressure',
        'Economic uncertainty'
      ]
    },
    currencyCrisis: {
      name: 'Currency Crisis Scenario',
      description: 'Severe currency volatility affecting foreign currency loans',
      probability: 18,
      stressLevel: 'High',
      economicIndicators: {
        gdpGrowth: -6.0,
        inflationRate: 35.0,
        interestRate: 22.0,
        unemploymentRate: 20.0,
        agriculturalOutput: 70,
        miningOutput: 75,
        manufacturingOutput: 65
      },
      nplImpact: {
        overallNPLIncrease: 75,
        retailNPLIncrease: 80,
        corporateNPLIncrease: 70,
        agriculturalNPLIncrease: 85,
        smeNPLIncrease: 90,
        mortgageNPLIncrease: 60
      },
      specificFactors: [
        'Foreign exchange shortages',
        'Parallel market premium',
        'Import restrictions impact',
        'Export revenue decline',
        'Cross-border payment issues'
      ]
    },
    miningSectorCrisis: {
      name: 'Mining Sector Crisis Scenario',
      description: 'Severe downturn in mining sector affecting related loans',
      probability: 12,
      stressLevel: 'Medium',
      economicIndicators: {
        gdpGrowth: -4.0,
        inflationRate: 18.0,
        interestRate: 14.0,
        unemploymentRate: 14.0,
        agriculturalOutput: 85,
        miningOutput: 55,
        manufacturingOutput: 70
      },
      nplImpact: {
        overallNPLIncrease: 55,
        retailNPLIncrease: 60,
        corporateNPLIncrease: 65,
        agriculturalNPLIncrease: 45,
        smeNPLIncrease: 70,
        mortgageNPLIncrease: 40
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

// NPL Portfolio Data by Category
export const nplPortfolioData = {
  totalLoans: 3300000000,
  totalNPLs: 92400000,
  currentNPLRatio: 2.8,
  
  byCategory: [
    {
      category: 'Retail Loans',
      totalExposure: 1800000000,
      currentNPLs: 54000000,
      currentNPLRatio: 3.0,
      subCategories: [
        {
          name: 'Personal Loans',
          exposure: 800000000,
          npls: 32000000,
          nplRatio: 4.0,
          riskWeight: 75
        },
        {
          name: 'Credit Cards',
          exposure: 400000000,
          npls: 16000000,
          nplRatio: 4.0,
          riskWeight: 75
        },
        {
          name: 'Residential Mortgages',
          exposure: 600000000,
          npls: 6000000,
          nplRatio: 1.0,
          riskWeight: 35
        }
      ]
    },
    {
      category: 'Corporate Loans',
      totalExposure: 1100000000,
      currentNPLs: 27500000,
      currentNPLRatio: 2.5,
      subCategories: [
        {
          name: 'Large Corporates',
          exposure: 680000000,
          npls: 13600000,
          nplRatio: 2.0,
          riskWeight: 50
        },
        {
          name: 'SMEs',
          exposure: 420000000,
          npls: 13900000,
          nplRatio: 3.3,
          riskWeight: 100
        }
      ]
    },
    {
      category: 'Agricultural Loans',
      totalExposure: 280000000,
      currentNPLs: 8400000,
      currentNPLRatio: 3.0,
      subCategories: [
        {
          name: 'Commercial Farmers',
          exposure: 180000000,
          npls: 3600000,
          nplRatio: 2.0,
          riskWeight: 75
        },
        {
          name: 'Small-scale Farmers',
          exposure: 100000000,
          npls: 4800000,
          nplRatio: 4.8,
          riskWeight: 75
        }
      ]
    },
    {
      category: 'Mining Sector Loans',
      totalExposure: 120000000,
      currentNPLs: 2500000,
      currentNPLRatio: 2.1,
      subCategories: [
        {
          name: 'Large Mining Companies',
          exposure: 80000000,
          npls: 800000,
          nplRatio: 1.0,
          riskWeight: 50
        },
        {
          name: 'Mining SMEs',
          exposure: 40000000,
          npls: 1700000,
          nplRatio: 4.3,
          riskWeight: 150
        }
      ]
    }
  ]
};

// NPL Stress Testing Calculations
export const nplStressCalculations = {
  // Calculate NPL impact under stress scenario
  calculateNPLImpact: (baseNPLs, scenario) => {
    const impact = {};
    Object.keys(baseNPLs).forEach(category => {
      const stressFactor = scenario.nplImpact[category] || 0;
      impact[category] = baseNPLs[category] * (1 + stressFactor / 100);
    });
    return impact;
  },

  // Calculate provision requirements under stress
  calculateProvisionRequirements: (npls, scenario) => {
    const baseProvisionRate = 0.85; // 85% base provision rate
    const stressProvisionRate = baseProvisionRate + (scenario.stressLevel === 'High' ? 0.15 : 0.10);
    
    const provisions = {};
    Object.keys(npls).forEach(category => {
      provisions[category] = npls[category] * stressProvisionRate;
    });
    
    return provisions;
  },

  // Calculate capital impact from NPL stress
  calculateCapitalImpact: (npls, provisions, riskWeights) => {
    const capitalImpact = {};
    Object.keys(npls).forEach(category => {
      const riskWeight = riskWeights[category] || 100;
      const capitalCharge = (npls[category] - provisions[category]) * (riskWeight / 100) * 0.08;
      capitalImpact[category] = capitalCharge;
    });
    
    return capitalImpact;
  },

  // Calculate overall portfolio impact
  calculatePortfolioImpact: (basePortfolio, stressScenario) => {
    const impact = {
      totalNPLs: 0,
      totalProvisions: 0,
      totalCapitalImpact: 0,
      nplRatio: 0,
      provisionCoverage: 0
    };

    // Calculate stressed NPLs
    const stressedNPLs = nplStressCalculations.calculateNPLImpact(basePortfolio.npls, stressScenario);
    impact.totalNPLs = Object.values(stressedNPLs).reduce((sum, npl) => sum + npl, 0);

    // Calculate provisions
    const provisions = nplStressCalculations.calculateProvisionRequirements(stressedNPLs, stressScenario);
    impact.totalProvisions = Object.values(provisions).reduce((sum, prov) => sum + prov, 0);

    // Calculate capital impact
    const capitalImpact = nplStressCalculations.calculateCapitalImpact(stressedNPLs, provisions, basePortfolio.riskWeights);
    impact.totalCapitalImpact = Object.values(capitalImpact).reduce((sum, cap) => sum + cap, 0);

    // Calculate ratios
    impact.nplRatio = (impact.totalNPLs / basePortfolio.totalLoans) * 100;
    impact.provisionCoverage = (impact.totalProvisions / impact.totalNPLs) * 100;

    return impact;
  }
};

// NPL Stress Testing Regulatory Requirements
export const nplRegulatoryRequirements = {
  // RBZ NPL Stress Testing Requirements
  rbzRequirements: {
    frequency: {
      annual: 'Comprehensive NPL stress testing',
      quarterly: 'Regular NPL stress testing updates',
      monthly: 'High-frequency NPL monitoring',
      adHoc: 'Event-driven NPL stress testing'
    },
    scenarios: {
      minimum: [
        'Baseline scenario',
        'Adverse scenario',
        'Severely adverse scenario',
        'Zimbabwe-specific scenarios'
      ],
      zimbabweSpecific: [
        'Agricultural crisis scenario',
        'Hyperinflation scenario',
        'Currency crisis scenario',
        'Mining sector crisis scenario'
      ]
    },
    reporting: {
      frequency: 'Quarterly',
      deadline: '30th of following quarter',
      format: 'RBZ-prescribed templates',
      content: [
        'NPL stress testing results',
        'Scenario assumptions',
        'Impact on capital ratios',
        'Provision requirements',
        'Risk mitigation strategies'
      ]
    }
  },

  // NPL Stress Testing Standards
  standards: {
    dataQuality: {
      requirements: [
        'Accurate NPL classification',
        'Timely NPL data updates',
        'Historical NPL data availability',
        'Sector-specific NPL data'
      ],
      zimbabweSpecific: [
        'Agricultural sector NPL data',
        'Mining sector NPL data',
        'Currency-specific NPL data',
        'Hyperinflation period NPL data'
      ]
    },
    modelValidation: {
      requirements: [
        'NPL prediction model accuracy',
        'Back-testing procedures',
        'Sensitivity analysis',
        'Model governance'
      ],
      zimbabweSpecific: [
        'Zimbabwe market validation',
        'Agricultural cycle testing',
        'Currency crisis testing',
        'Hyperinflation period testing'
      ]
    }
  }
};

// Sample NPL Stress Testing Results
export const sampleNPLStressResults = {
  baseline: {
    totalNPLs: 92400000,
    nplRatio: 2.8,
    totalProvisions: 78600000,
    provisionCoverage: 85.1,
    capitalImpact: 1104000
  },
  adverse: {
    totalNPLs: 134040000,
    nplRatio: 4.06,
    totalProvisions: 120636000,
    provisionCoverage: 90.0,
    capitalImpact: 1072320
  },
  severelyAdverse: {
    totalNPLs: 171240000,
    nplRatio: 5.19,
    totalProvisions: 154116000,
    provisionCoverage: 90.0,
    capitalImpact: 1369920
  },
  agriculturalCrisis: {
    totalNPLs: 152460000,
    nplRatio: 4.62,
    totalProvisions: 137214000,
    provisionCoverage: 90.0,
    capitalImpact: 1219680
  },
  hyperinflation: {
    totalNPLs: 203280000,
    nplRatio: 6.16,
    totalProvisions: 182952000,
    provisionCoverage: 90.0,
    capitalImpact: 1626240
  },
  currencyCrisis: {
    totalNPLs: 161700000,
    nplRatio: 4.90,
    totalProvisions: 145530000,
    provisionCoverage: 90.0,
    capitalImpact: 1293600
  },
  miningSectorCrisis: {
    totalNPLs: 143220000,
    nplRatio: 4.34,
    totalProvisions: 128898000,
    provisionCoverage: 90.0,
    capitalImpact: 1145760
  }
};

// Helper Functions for NPL Stress Testing
export const nplStressHelpers = {
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

  // Get stress level color
  getStressLevelColor: (level) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  },

  // Get NPL ratio status
  getNPLRatioStatus: (ratio) => {
    if (ratio < 3.0) return { status: 'Safe', color: 'text-green-600' };
    if (ratio < 5.0) return { status: 'Warning', color: 'text-yellow-600' };
    return { status: 'Critical', color: 'text-red-600' };
  },

  // Calculate scenario impact percentage
  calculateImpactPercentage: (baseline, stressed) => {
    return ((stressed - baseline) / baseline) * 100;
  }
};
