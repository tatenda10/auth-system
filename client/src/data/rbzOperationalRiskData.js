// RBZ Operational Risk Data Structure
// Based on Reserve Bank of Zimbabwe Operational Risk Management Requirements
// Comprehensive framework for Zimbabwean banking operational risk regulations

// RBZ Operational Risk Capital Calculations
export const rbzOperationalRiskCapital = {
  // Basic Indicator Approach (BIA)
  basicIndicatorApproach: {
    alpha: 0.15, // 15% alpha factor as per RBZ requirements
    calculationPeriod: 3, // 3-year average
    grossIncomeComponents: {
      netInterestIncome: 1.0,
      netNonInterestIncome: 1.0,
      tradingIncome: 1.0,
      otherIncome: 1.0
    },
    exclusions: [
      'Extraordinary items',
      'Income from insurance activities',
      'Realized gains/losses from sale of securities',
      'Income from banking book positions'
    ]
  },

  // Standardized Approach (TSA)
  standardizedApproach: {
    businessLines: {
      corporateFinance: {
        name: 'Corporate Finance',
        beta: 0.18,
        description: 'Mergers and acquisitions, underwriting, privatization, securitization',
        activities: [
          'Mergers and acquisitions',
          'Underwriting',
          'Privatization',
          'Securitization',
          'Research',
          'Debt/equity underwriting'
        ]
      },
      tradingAndSales: {
        name: 'Trading and Sales',
        beta: 0.18,
        description: 'Fixed income, equity, foreign exchange, commodities, credit, funding',
        activities: [
          'Sales',
          'Market making',
          'Proprietary positions',
          'Treasury'
        ]
      },
      retailBanking: {
        name: 'Retail Banking',
        beta: 0.12,
        description: 'Retail lending and deposits, banking services, trust and estates',
        activities: [
          'Retail lending and deposits',
          'Banking services',
          'Trust and estates',
          'Private banking'
        ]
      },
      commercialBanking: {
        name: 'Commercial Banking',
        beta: 0.15,
        description: 'Project finance, real estate, export finance, trade finance',
        activities: [
          'Project finance',
          'Real estate',
          'Export finance',
          'Trade finance',
          'Factoring',
          'Leasing'
        ]
      },
      paymentAndSettlement: {
        name: 'Payment and Settlement',
        beta: 0.18,
        description: 'Payments and collections, funds transfer, clearing and settlement',
        activities: [
          'Payments and collections',
          'Funds transfer',
          'Clearing and settlement',
          'Netting'
        ]
      },
      agencyServices: {
        name: 'Agency Services',
        beta: 0.15,
        description: 'Escrow, depository receipts, securities lending',
        activities: [
          'Escrow',
          'Depository receipts',
          'Securities lending',
          'Corporate actions'
        ]
      },
      assetManagement: {
        name: 'Asset Management',
        beta: 0.12,
        description: 'Discretionary and non-discretionary fund management',
        activities: [
          'Discretionary fund management',
          'Non-discretionary fund management',
          'Pooled funds'
        ]
      },
      retailBrokerage: {
        name: 'Retail Brokerage',
        beta: 0.12,
        description: 'Execution and full service',
        activities: [
          'Execution and full service',
          'Retail brokerage'
        ]
      }
    },
    calculationMethod: {
      description: 'Sum of gross income for each business line multiplied by beta factor',
      formula: 'Operational Risk Capital = Σ(Gross Income × Beta Factor)',
      minimumThreshold: 0.1, // 10% of total operational risk capital
      maximumThreshold: 0.25 // 25% of total operational risk capital
    }
  },

  // Zimbabwe-Specific Operational Risk Factors
  zimbabweSpecificFactors: {
    hyperinflationRisk: {
      weight: 0.25,
      description: 'Operational risks associated with hyperinflationary environment',
      factors: [
        'Currency devaluation impact',
        'Inflation accounting complexities',
        'Real value erosion',
        'Dollarization pressure'
      ]
    },
    agriculturalSectorRisk: {
      weight: 0.20,
      description: 'Operational risks related to agricultural sector exposure',
      factors: [
        'Weather-related business disruption',
        'Agricultural commodity price volatility',
        'Seasonal lending patterns',
        'Rural banking operations'
      ]
    },
    miningSectorRisk: {
      weight: 0.15,
      description: 'Operational risks associated with mining sector',
      factors: [
        'Commodity price volatility',
        'Mining sector job losses',
        'Export revenue fluctuations',
        'Foreign currency shortages'
      ]
    },
    technologyInfrastructureRisk: {
      weight: 0.20,
      description: 'Technology and infrastructure operational risks',
      factors: [
        'IT system reliability',
        'Cybersecurity threats',
        'Digital banking risks',
        'Infrastructure limitations'
      ]
    },
    regulatoryComplianceRisk: {
      weight: 0.20,
      description: 'Regulatory compliance operational risks',
      factors: [
        'RBZ regulatory changes',
        'Compliance monitoring',
        'Reporting requirements',
        'Supervisory oversight'
      ]
    }
  }
};

// RBZ Operational Risk Event Tracking
export const rbzOperationalRiskEvents = {
  // Event Categories (Basel II Event Types)
  eventCategories: {
    internalFraud: {
      name: 'Internal Fraud',
      description: 'Losses due to acts of a type intended to defraud, misappropriate property or circumvent regulations, the law or company policy',
      examples: [
        'Unauthorized activity',
        'Theft and fraud',
        'Insider trading',
        'Embezzlement'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    externalFraud: {
      name: 'External Fraud',
      description: 'Losses due to acts of a type intended to defraud, misappropriate property or circumvent the law, by a third party',
      examples: [
        'Theft and fraud',
        'System security',
        'Forgery',
        'Check kiting'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    employmentPractices: {
      name: 'Employment Practices and Workplace Safety',
      description: 'Losses arising from acts inconsistent with employment, health or safety laws or agreements',
      examples: [
        'Employee compensation',
        'Employee benefits',
        'Termination',
        'Workplace safety'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    clientsProducts: {
      name: 'Clients, Products and Business Practices',
      description: 'Losses arising from an unintentional or negligent failure to meet a professional obligation to specific clients',
      examples: [
        'Suitability, disclosure and fiduciary',
        'Improper business or market practices',
        'Product flaws',
        'Selection, sponsorship and exposure'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    damageToPhysicalAssets: {
      name: 'Damage to Physical Assets',
      description: 'Losses arising from loss or damage to physical assets from natural disaster or other events',
      examples: [
        'Natural disasters',
        'Other events',
        'Terrorism',
        'Vandalism'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    businessDisruption: {
      name: 'Business Disruption and System Failures',
      description: 'Losses arising from disruption of business or system failures',
      examples: [
        'System',
        'Hardware',
        'Software',
        'Telecommunications'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    },
    executionDelivery: {
      name: 'Execution, Delivery and Process Management',
      description: 'Losses from failed transaction processing or process management',
      examples: [
        'Transaction capture, execution and maintenance',
        'Monitoring and reporting',
        'Customer intake and documentation',
        'Customer/client account management'
      ],
      severityLevels: {
        low: { threshold: 10000, description: 'Losses up to $10,000' },
        medium: { threshold: 100000, description: 'Losses $10,000 to $100,000' },
        high: { threshold: 1000000, description: 'Losses $100,000 to $1,000,000' },
        critical: { threshold: 10000000, description: 'Losses above $1,000,000' }
      }
    }
  },

  // Sample Operational Risk Events
  sampleEvents: [
    {
      id: 'EVT001',
      date: '2024-01-15',
      category: 'internalFraud',
      description: 'Unauthorized trading by junior trader',
      severity: 'high',
      lossAmount: 250000,
      businessLine: 'tradingAndSales',
      status: 'resolved',
      mitigationActions: [
        'Enhanced monitoring systems',
        'Additional training for traders',
        'Improved segregation of duties'
      ],
      lessonsLearned: 'Need for real-time monitoring of trading activities'
    },
    {
      id: 'EVT002',
      date: '2024-02-03',
      category: 'externalFraud',
      description: 'Phishing attack targeting customer accounts',
      severity: 'medium',
      lossAmount: 75000,
      businessLine: 'retailBanking',
      status: 'investigating',
      mitigationActions: [
        'Enhanced cybersecurity measures',
        'Customer education programs',
        'Improved fraud detection systems'
      ],
      lessonsLearned: 'Importance of customer awareness and robust security'
    },
    {
      id: 'EVT003',
      date: '2024-02-20',
      category: 'businessDisruption',
      description: 'System outage affecting online banking services',
      severity: 'high',
      lossAmount: 180000,
      businessLine: 'retailBanking',
      status: 'resolved',
      mitigationActions: [
        'System redundancy implementation',
        'Improved disaster recovery procedures',
        'Enhanced monitoring and alerting'
      ],
      lessonsLearned: 'Critical need for robust IT infrastructure and backup systems'
    },
    {
      id: 'EVT004',
      date: '2024-03-10',
      category: 'clientsProducts',
      description: 'Mis-selling of investment products',
      severity: 'medium',
      lossAmount: 95000,
      businessLine: 'retailBanking',
      status: 'investigating',
      mitigationActions: [
        'Enhanced product training for staff',
        'Improved suitability assessment procedures',
        'Better disclosure documentation'
      ],
      lessonsLearned: 'Importance of proper product knowledge and suitability assessment'
    },
    {
      id: 'EVT005',
      date: '2024-03-25',
      category: 'executionDelivery',
      description: 'Payment processing error affecting multiple transactions',
      severity: 'low',
      lossAmount: 15000,
      businessLine: 'paymentAndSettlement',
      status: 'resolved',
      mitigationActions: [
        'Enhanced payment validation procedures',
        'Improved reconciliation processes',
        'Additional quality checks'
      ],
      lessonsLearned: 'Need for robust payment processing controls'
    }
  ]
};

// RBZ Standardized Approach for Operational Risk
export const rbzStandardizedApproach = {
  // Eligibility Criteria
  eligibilityCriteria: {
    minimumRequirements: [
      'Sound operational risk management framework',
      'Comprehensive operational risk event database',
      'Regular operational risk reporting',
      'Independent operational risk management function',
      'Board and senior management oversight'
    ],
    dataRequirements: [
      'At least 5 years of operational risk event data',
      'Comprehensive business line mapping',
      'Accurate gross income allocation',
      'Regular data quality reviews',
      'Independent validation of data'
    ],
    governanceRequirements: [
      'Board approval of operational risk framework',
      'Senior management oversight',
      'Independent operational risk function',
      'Regular internal audit reviews',
      'External validation requirements'
    ]
  },

  // Business Line Mapping
  businessLineMapping: {
    mappingCriteria: {
      primary: 'Primary business line based on revenue contribution',
      secondary: 'Secondary business lines for diversified activities',
      allocation: 'Proportional allocation based on revenue or activity level'
    },
    mappingRules: [
      'Each activity must be mapped to one primary business line',
      'Activities with multiple business lines require proportional allocation',
      'Mapping must be consistent across reporting periods',
      'Changes to mapping require regulatory approval'
    ]
  },

  // Capital Calculation Methodology
  capitalCalculation: {
    formula: 'Operational Risk Capital = Σ(Gross Income × Beta Factor)',
    components: {
      grossIncome: {
        definition: 'Net interest income plus net non-interest income',
        calculation: 'GI = Net Interest Income + Net Non-Interest Income',
        exclusions: [
          'Extraordinary items',
          'Income from insurance activities',
          'Realized gains/losses from sale of securities',
          'Income from banking book positions'
        ]
      },
      betaFactors: {
        description: 'Risk weights for each business line',
        values: {
          corporateFinance: 0.18,
          tradingAndSales: 0.18,
          retailBanking: 0.12,
          commercialBanking: 0.15,
          paymentAndSettlement: 0.18,
          agencyServices: 0.15,
          assetManagement: 0.12,
          retailBrokerage: 0.12
        }
      }
    },
    minimumCapital: {
      description: 'Minimum operational risk capital requirement',
      calculation: 'Minimum Capital = 12% of total operational risk capital',
      floor: 'Operational risk capital cannot be less than 12% of total capital'
    }
  }
};

// RBZ Operational Risk Compliance Status
export const rbzOperationalRiskCompliance = {
  overallCompliance: {
    status: 'Compliant',
    score: 87.5,
    lastAssessment: '2024-01-31',
    nextAssessment: '2024-04-30'
  },
  
  complianceAreas: [
    {
      area: 'Operational Risk Capital Calculations',
      status: 'Compliant',
      score: 92,
      gaps: ['Advanced measurement approach not yet implemented'],
      actions: ['Implement advanced measurement approach by Q4 2024']
    },
    {
      area: 'Operational Risk Event Tracking',
      status: 'Compliant',
      score: 85,
      gaps: ['Event database needs enhancement for Zimbabwe-specific events'],
      actions: ['Enhance event database with Zimbabwe-specific categories by Q2 2024']
    },
    {
      area: 'Standardized Approach Implementation',
      status: 'Partially Compliant',
      score: 78,
      gaps: ['Business line mapping needs refinement'],
      actions: ['Refine business line mapping by Q3 2024']
    },
    {
      area: 'Zimbabwe-Specific Risk Factors',
      status: 'Compliant',
      score: 91,
      gaps: ['Mining sector risk factors need updating'],
      actions: ['Update mining sector risk factors by Q2 2024']
    }
  ],

  rbzFindings: [
    {
      finding: 'Business line mapping requires refinement for Zimbabwe market',
      severity: 'Medium',
      deadline: '2024-09-30',
      status: 'In Progress'
    },
    {
      finding: 'Advanced measurement approach not yet implemented',
      severity: 'High',
      deadline: '2024-12-31',
      status: 'Planned'
    },
    {
      finding: 'Event database needs Zimbabwe-specific event categories',
      severity: 'Medium',
      deadline: '2024-06-30',
      status: 'Not Started'
    }
  ]
};

// Helper Functions for RBZ Operational Risk
export const rbzOperationalRiskHelpers = {
  // Calculate operational risk capital using BIA
  calculateBIACapital: (grossIncome) => {
    const alpha = rbzOperationalRiskCapital.basicIndicatorApproach.alpha;
    return grossIncome * alpha;
  },

  // Calculate operational risk capital using TSA
  calculateTSACapital: (businessLineIncome) => {
    let totalCapital = 0;
    Object.entries(businessLineIncome).forEach(([businessLine, income]) => {
      const beta = rbzOperationalRiskCapital.standardizedApproach.businessLines[businessLine]?.beta || 0;
      totalCapital += income * beta;
    });
    return totalCapital;
  },

  // Calculate Zimbabwe-specific risk adjustment
  calculateZimbabweRiskAdjustment: (baseCapital) => {
    let adjustment = 0;
    Object.entries(rbzOperationalRiskCapital.zimbabweSpecificFactors).forEach(([factor, data]) => {
      adjustment += baseCapital * data.weight;
    });
    return adjustment;
  },

  // Validate operational risk event
  validateOperationalRiskEvent: (event) => {
    const validation = {
      valid: true,
      errors: [],
      warnings: []
    };

    // Check required fields
    if (!event.category || !event.description || !event.lossAmount) {
      validation.valid = false;
      validation.errors.push('Missing required fields: category, description, or loss amount');
    }

    // Check loss amount
    if (event.lossAmount < 0) {
      validation.valid = false;
      validation.errors.push('Loss amount cannot be negative');
    }

    // Check category validity
    const validCategories = Object.keys(rbzOperationalRiskEvents.eventCategories);
    if (!validCategories.includes(event.category)) {
      validation.valid = false;
      validation.errors.push(`Invalid category. Must be one of: ${validCategories.join(', ')}`);
    }

    return validation;
  },

  // Generate operational risk report
  generateOperationalRiskReport: (events, capitalCalculations, compliance) => {
    return {
      reportDate: new Date().toISOString().split('T')[0],
      events: events,
      capitalCalculations: capitalCalculations,
      compliance: compliance,
      recommendations: compliance.complianceAreas
        .filter(area => area.score < 90)
        .map(area => area.actions)
        .flat()
    };
  },

  // Calculate event severity
  calculateEventSeverity: (lossAmount, category) => {
    const severityLevels = rbzOperationalRiskEvents.eventCategories[category]?.severityLevels;
    if (!severityLevels) return 'unknown';

    if (lossAmount <= severityLevels.low.threshold) return 'low';
    if (lossAmount <= severityLevels.medium.threshold) return 'medium';
    if (lossAmount <= severityLevels.high.threshold) return 'high';
    return 'critical';
  }
};
