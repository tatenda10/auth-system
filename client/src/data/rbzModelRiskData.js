// RBZ Model Risk Management Data Structure
// Based on Reserve Bank of Zimbabwe Model Risk Management Prudential Standard
// Comprehensive framework for Zimbabwean banking regulations

// RBZ Model Validation Framework - Zimbabwean Regulations
export const rbzModelValidationFramework = {
  // RBZ-Specific Validation Requirements
  rbzValidationRequirements: [
    {
      category: 'Conceptual Soundness',
      requirements: [
        {
          name: 'Zimbabwe Economic Context Validation',
          description: 'Model must account for Zimbabwe-specific economic factors including hyperinflation, currency volatility, and economic sanctions',
          rbzRequirement: 'RBZ PS 05-2023 Section 3.1',
          status: 'Required',
          validationFrequency: 'Quarterly'
        },
        {
          name: 'Local Market Data Validation',
          description: 'Model must use Zimbabwe Stock Exchange (ZSE) data and local market indicators',
          rbzRequirement: 'RBZ PS 05-2023 Section 3.2',
          status: 'Required',
          validationFrequency: 'Monthly'
        },
        {
          name: 'Agricultural Sector Modeling',
          description: 'Models must incorporate Zimbabwe-specific agricultural sector risks and seasonal patterns',
          rbzRequirement: 'RBZ PS 05-2023 Section 3.3',
          status: 'Required',
          validationFrequency: 'Semi-annually'
        }
      ]
    },
    {
      category: 'Data Quality Assessment',
      requirements: [
        {
          name: 'RBZ Data Standards Compliance',
          description: 'Data must meet RBZ quality standards for accuracy, completeness, and timeliness',
          rbzRequirement: 'RBZ PS 05-2023 Section 4.1',
          status: 'Required',
          validationFrequency: 'Monthly'
        },
        {
          name: 'Local Currency Data Validation',
          description: 'All currency conversions must use RBZ-approved exchange rates',
          rbzRequirement: 'RBZ PS 05-2023 Section 4.2',
          status: 'Required',
          validationFrequency: 'Daily'
        },
        {
          name: 'Zimbabwe Banking Sector Data',
          description: 'Use of RBZ banking sector statistics and regulatory reporting data',
          rbzRequirement: 'RBZ PS 05-2023 Section 4.3',
          status: 'Required',
          validationFrequency: 'Quarterly'
        }
      ]
    },
    {
      category: 'Model Performance',
      requirements: [
        {
          name: 'Zimbabwe-Specific Stress Testing',
          description: 'Models must include RBZ-prescribed stress scenarios for Zimbabwe',
          rbzRequirement: 'RBZ PS 05-2023 Section 5.1',
          status: 'Required',
          validationFrequency: 'Quarterly'
        },
        {
          name: 'Local Market Performance Metrics',
          description: 'Performance metrics must be benchmarked against Zimbabwe market conditions',
          rbzRequirement: 'RBZ PS 05-2023 Section 5.2',
          status: 'Required',
          validationFrequency: 'Monthly'
        },
        {
          name: 'Agricultural Cycle Performance',
          description: 'Models must demonstrate performance across agricultural cycles',
          rbzRequirement: 'RBZ PS 05-2023 Section 5.3',
          status: 'Required',
          validationFrequency: 'Annually'
        }
      ]
    }
  ],

  // RBZ Validation Process
  rbzValidationProcess: [
    {
      step: 1,
      name: 'RBZ Pre-Validation Review',
      description: 'Initial review by RBZ Model Risk Management team',
      responsible: 'RBZ Model Risk Management',
      timeline: '30 days',
      requirements: ['Model documentation', 'Data quality report', 'Initial validation results']
    },
    {
      step: 2,
      name: 'Zimbabwe Market Testing',
      description: 'Testing model performance with Zimbabwe-specific market data',
      responsible: 'Bank Model Development Team',
      timeline: '60 days',
      requirements: ['Local market data', 'ZSE performance data', 'Agricultural sector data']
    },
    {
      step: 3,
      name: 'RBZ Stress Scenario Testing',
      description: 'Testing against RBZ-prescribed stress scenarios',
      responsible: 'RBZ Model Risk Management',
      timeline: '45 days',
      requirements: ['Stress test results', 'Scenario analysis', 'Sensitivity testing']
    },
    {
      step: 4,
      name: 'RBZ Final Approval',
      description: 'Final approval by RBZ for model deployment',
      responsible: 'RBZ Banking Supervision',
      timeline: '15 days',
      requirements: ['Complete validation report', 'Risk assessment', 'Monitoring plan']
    }
  ]
};

// RBZ Model Governance Structure
export const rbzModelGovernanceStructure = {
  // RBZ-Required Governance Levels
  governanceLevels: [
    {
      level: 'RBZ Banking Supervision',
      description: 'Regulatory oversight and approval of model risk management framework',
      responsibilities: [
        'Approve model risk management policies',
        'Review high-risk model validations',
        'Oversee compliance with RBZ regulations',
        'Conduct regulatory examinations',
        'Enforce corrective actions'
      ],
      reportingFrequency: 'Quarterly',
      rbzRequirement: 'RBZ PS 05-2023 Section 6.1'
    },
    {
      level: 'Bank Board of Directors',
      description: 'Ultimate responsibility for model risk management compliance',
      responsibilities: [
        'Approve RBZ-compliant model risk policies',
        'Review model risk reports quarterly',
        'Approve high-risk model decisions',
        'Ensure adequate resources for model risk management',
        'Oversee RBZ compliance framework'
      ],
      reportingFrequency: 'Quarterly',
      rbzRequirement: 'RBZ PS 05-2023 Section 6.2'
    },
    {
      level: 'Model Risk Management Committee',
      description: 'Strategic oversight of model risk management activities',
      responsibilities: [
        'Review and approve model risk policies',
        'Monitor RBZ compliance metrics',
        'Approve model validations',
        'Oversee model risk reporting to RBZ',
        'Review stress testing results'
      ],
      reportingFrequency: 'Monthly',
      rbzRequirement: 'RBZ PS 05-2023 Section 6.3'
    },
    {
      level: 'Independent Model Validation',
      description: 'Independent validation of all models as required by RBZ',
      responsibilities: [
        'Conduct independent model validation',
        'Maintain model inventory and risk assessments',
        'Develop RBZ-compliant validation standards',
        'Provide model risk training',
        'Report validation results to RBZ'
      ],
      reportingFrequency: 'Monthly',
      rbzRequirement: 'RBZ PS 05-2023 Section 6.4'
    }
  ],

  // RBZ-Required Policies
  rbzPolicies: [
    {
      name: 'RBZ Model Development Policy',
      description: 'Standards and procedures for model development compliant with RBZ regulations',
      status: 'Active',
      lastUpdated: '2024-01-15',
      rbzRequirement: 'RBZ PS 05-2023 Section 7.1',
      keyRequirements: [
        'Zimbabwe-specific economic factors',
        'Local market data requirements',
        'Agricultural sector considerations',
        'Currency volatility modeling'
      ]
    },
    {
      name: 'RBZ Model Validation Policy',
      description: 'Framework for independent model validation as required by RBZ',
      status: 'Active',
      lastUpdated: '2024-01-20',
      rbzRequirement: 'RBZ PS 05-2023 Section 7.2',
      keyRequirements: [
        'RBZ validation requirements',
        'Zimbabwe stress scenarios',
        'Local market testing',
        'Regulatory reporting'
      ]
    },
    {
      name: 'RBZ Model Governance Policy',
      description: 'Roles, responsibilities, and approval workflows compliant with RBZ',
      status: 'Active',
      lastUpdated: '2024-01-25',
      rbzRequirement: 'RBZ PS 05-2023 Section 7.3',
      keyRequirements: [
        'RBZ oversight requirements',
        'Board responsibilities',
        'Committee structures',
        'Reporting frameworks'
      ]
    },
    {
      name: 'RBZ Model Monitoring Policy',
      description: 'Ongoing monitoring and performance tracking as required by RBZ',
      status: 'Under Review',
      lastUpdated: '2023-12-15',
      rbzRequirement: 'RBZ PS 05-2023 Section 7.4',
      keyRequirements: [
        'Performance monitoring',
        'Risk assessment',
        'Regulatory reporting',
        'Corrective actions'
      ]
    }
  ]
};

// RBZ Model Risk Assessment and Monitoring Procedures
export const rbzModelRiskAssessment = {
  // RBZ-Specific Risk Assessment Framework
  rbzRiskAssessmentFramework: {
    riskFactors: [
      {
        factor: 'Zimbabwe Economic Risk',
        weight: 0.25,
        description: 'Risk from Zimbabwe-specific economic conditions',
        assessmentCriteria: [
          'Hyperinflation impact',
          'Currency volatility',
          'Economic sanctions',
          'Agricultural sector performance'
        ]
      },
      {
        factor: 'Local Market Risk',
        weight: 0.20,
        description: 'Risk from Zimbabwe market conditions',
        assessmentCriteria: [
          'ZSE performance',
          'Local interest rates',
          'Market liquidity',
          'Regulatory changes'
        ]
      },
      {
        factor: 'Agricultural Sector Risk',
        weight: 0.15,
        description: 'Risk from agricultural sector performance',
        assessmentCriteria: [
          'Drought impact',
          'Crop yields',
          'Agricultural loan performance',
          'Seasonal patterns'
        ]
      },
      {
        factor: 'Regulatory Compliance Risk',
        weight: 0.20,
        description: 'Risk from RBZ regulatory requirements',
        assessmentCriteria: [
          'RBZ compliance status',
          'Regulatory reporting',
          'Policy changes',
          'Enforcement actions'
        ]
      },
      {
        factor: 'Model Performance Risk',
        weight: 0.20,
        description: 'Risk from model performance issues',
        assessmentCriteria: [
          'Accuracy metrics',
          'Back-testing results',
          'Stress testing performance',
          'Data quality issues'
        ]
      }
    ],

    riskRatingMatrix: {
      low: { score: '1-2', actions: 'Standard monitoring', frequency: 'Quarterly' },
      medium: { score: '3-4', actions: 'Enhanced monitoring', frequency: 'Monthly' },
      high: { score: '5', actions: 'Immediate attention required', frequency: 'Weekly' }
    }
  },

  // RBZ Monitoring Procedures
  rbzMonitoringProcedures: [
    {
      procedure: 'Daily Monitoring',
      description: 'Daily monitoring of model performance and risk metrics',
      requirements: [
        'Model output validation',
        'Data quality checks',
        'Performance metrics review',
        'Risk limit monitoring'
      ],
      responsible: 'Model Risk Management Team',
      rbzRequirement: 'RBZ PS 05-2023 Section 8.1'
    },
    {
      procedure: 'Weekly Risk Assessment',
      description: 'Weekly assessment of model risk and performance',
      requirements: [
        'Risk metric calculation',
        'Performance trend analysis',
        'Issue identification',
        'Corrective action planning'
      ],
      responsible: 'Model Risk Management Committee',
      rbzRequirement: 'RBZ PS 05-2023 Section 8.2'
    },
    {
      procedure: 'Monthly RBZ Reporting',
      description: 'Monthly reporting to RBZ on model risk and performance',
      requirements: [
        'Risk assessment report',
        'Performance metrics',
        'Compliance status',
        'Corrective actions taken'
      ],
      responsible: 'Chief Risk Officer',
      rbzRequirement: 'RBZ PS 05-2023 Section 8.3'
    },
    {
      procedure: 'Quarterly Board Review',
      description: 'Quarterly review by Board of Directors',
      requirements: [
        'Comprehensive risk assessment',
        'Performance review',
        'Policy compliance review',
        'Strategic recommendations'
      ],
      responsible: 'Board of Directors',
      rbzRequirement: 'RBZ PS 05-2023 Section 8.4'
    }
  ]
};

// RBZ Back-Testing Framework for Model Accuracy
export const rbzBackTestingFramework = {
  // RBZ-Specific Back-Testing Requirements
  rbzBackTestingRequirements: [
    {
      category: 'Historical Back-Testing',
      requirements: [
        {
          name: 'Zimbabwe Market Historical Testing',
          description: 'Back-testing using Zimbabwe market historical data',
          period: '5 years minimum',
          frequency: 'Quarterly',
          dataRequirements: [
            'ZSE historical data',
            'Local interest rate history',
            'Currency exchange rate history',
            'Agricultural sector data'
          ],
          rbzRequirement: 'RBZ PS 05-2023 Section 9.1'
        },
        {
          name: 'Hyperinflation Period Testing',
          description: 'Back-testing during hyperinflation periods',
          period: '2000-2009, 2019-2020',
          frequency: 'Annually',
          dataRequirements: [
            'Inflation rate data',
            'Currency devaluation data',
            'Economic performance data',
            'Banking sector data'
          ],
          rbzRequirement: 'RBZ PS 05-2023 Section 9.2'
        },
        {
          name: 'Agricultural Cycle Testing',
          description: 'Back-testing across agricultural cycles',
          period: '10 years minimum',
          frequency: 'Annually',
          dataRequirements: [
            'Crop yield data',
            'Agricultural loan performance',
            'Seasonal patterns',
            'Drought impact data'
          ],
          rbzRequirement: 'RBZ PS 05-2023 Section 9.3'
        }
      ]
    },
    {
      category: 'Stress Scenario Back-Testing',
      requirements: [
        {
          name: 'RBZ Prescribed Stress Scenarios',
          description: 'Back-testing against RBZ-prescribed stress scenarios',
          scenarios: [
            'Economic sanctions scenario',
            'Hyperinflation scenario',
            'Agricultural drought scenario',
            'Currency crisis scenario'
          ],
          frequency: 'Quarterly',
          rbzRequirement: 'RBZ PS 05-2023 Section 9.4'
        },
        {
          name: 'Zimbabwe-Specific Crisis Testing',
          description: 'Back-testing during Zimbabwe-specific crisis periods',
          scenarios: [
            '2008 hyperinflation crisis',
            '2019 currency crisis',
            '2020 COVID-19 impact',
            'Agricultural sector crises'
          ],
          frequency: 'Annually',
          rbzRequirement: 'RBZ PS 05-2023 Section 9.5'
        }
      ]
    }
  ],

  // RBZ Back-Testing Performance Standards
  rbzPerformanceStandards: {
    accuracyThresholds: {
      creditRisk: { minimum: 85, target: 90, excellent: 95 },
      marketRisk: { minimum: 80, target: 85, excellent: 90 },
      liquidityRisk: { minimum: 85, target: 90, excellent: 95 },
      operationalRisk: { minimum: 75, target: 80, excellent: 85 }
    },
    performanceMetrics: [
      'Mean Absolute Error (MAE)',
      'Root Mean Square Error (RMSE)',
      'Hit Rate (for classification models)',
      'Calibration Accuracy',
      'Discrimination Ability'
    ],
    reportingRequirements: [
      'Monthly performance reports',
      'Quarterly detailed analysis',
      'Annual comprehensive review',
      'RBZ regulatory reporting'
    ]
  }
};

// RBZ Model Risk Reporting Requirements
export const rbzModelRiskReporting = {
  // RBZ Reporting Templates
  rbzReportingTemplates: [
    {
      template: 'RBZ MRM 001',
      name: 'Model Inventory Report',
      frequency: 'Monthly',
      description: 'Comprehensive inventory of all models with RBZ compliance status',
      sections: [
        'Model identification and classification',
        'RBZ compliance status',
        'Validation status',
        'Risk ratings',
        'Ownership and responsibility'
      ]
    },
    {
      template: 'RBZ MRM 002',
      name: 'Model Validation Report',
      frequency: 'Quarterly',
      description: 'Detailed validation results for all models',
      sections: [
        'Validation methodology',
        'RBZ requirement compliance',
        'Performance metrics',
        'Risk assessment',
        'Recommendations'
      ]
    },
    {
      template: 'RBZ MRM 003',
      name: 'Model Risk Assessment Report',
      frequency: 'Monthly',
      description: 'Comprehensive risk assessment of all models',
      sections: [
        'Risk metrics calculation',
        'Zimbabwe-specific risk factors',
        'Performance trends',
        'Issue identification',
        'Mitigation actions'
      ]
    },
    {
      template: 'RBZ MRM 004',
      name: 'Back-Testing Results Report',
      frequency: 'Quarterly',
      description: 'Detailed back-testing results and analysis',
      sections: [
        'Historical back-testing results',
        'Stress scenario testing',
        'Performance accuracy',
        'Model stability analysis',
        'Recommendations'
      ]
    },
    {
      template: 'RBZ MRM 005',
      name: 'Model Governance Report',
      frequency: 'Quarterly',
      description: 'Governance framework compliance and effectiveness',
      sections: [
        'Governance structure compliance',
        'Policy implementation status',
        'Committee effectiveness',
        'RBZ oversight activities',
        'Improvement recommendations'
      ]
    }
  ],

  // RBZ Reporting Deadlines
  rbzReportingDeadlines: {
    monthly: '15th of following month',
    quarterly: '30th of following quarter',
    annually: '31st March of following year',
    adHoc: 'Within 5 business days of request'
  }
};

// RBZ Model Risk Compliance Status
export const rbzModelRiskComplianceStatus = {
  overallCompliance: {
    status: 'Compliant',
    score: 87.5,
    lastAssessment: '2024-01-31',
    nextAssessment: '2024-04-30'
  },
  
  complianceAreas: [
    {
      area: 'Model Validation Framework',
      status: 'Compliant',
      score: 92,
      gaps: ['Agricultural sector modeling needs enhancement'],
      actions: ['Enhance agricultural sector modeling by Q2 2024']
    },
    {
      area: 'Model Governance Structure',
      status: 'Compliant',
      score: 88,
      gaps: ['Board reporting frequency needs improvement'],
      actions: ['Increase board reporting frequency to monthly']
    },
    {
      area: 'Risk Assessment Procedures',
      status: 'Partially Compliant',
      score: 75,
      gaps: ['Zimbabwe-specific stress scenarios incomplete'],
      actions: ['Complete stress scenario implementation by Q1 2024']
    },
    {
      area: 'Back-Testing Framework',
      status: 'Non-Compliant',
      score: 65,
      gaps: ['Hyperinflation period testing not implemented'],
      actions: ['Implement hyperinflation testing by Q2 2024']
    }
  ],

  rbzFindings: [
    {
      finding: 'Model validation framework needs Zimbabwe-specific enhancements',
      severity: 'Medium',
      deadline: '2024-06-30',
      status: 'In Progress'
    },
    {
      finding: 'Back-testing framework missing hyperinflation scenarios',
      severity: 'High',
      deadline: '2024-03-31',
      status: 'Not Started'
    },
    {
      finding: 'Agricultural sector modeling requires improvement',
      severity: 'Medium',
      deadline: '2024-09-30',
      status: 'Planned'
    }
  ]
};

// Helper Functions for RBZ Model Risk Management
export const rbzModelRiskHelpers = {
  // Calculate RBZ compliance score
  calculateRBZComplianceScore: (assessments) => {
    const totalWeight = assessments.reduce((sum, assessment) => sum + assessment.weight, 0);
    const weightedScore = assessments.reduce((score, assessment) => 
      score + (assessment.score * assessment.weight), 0);
    return weightedScore / totalWeight;
  },

  // Check RBZ requirement compliance
  checkRBZRequirementCompliance: (requirement, status) => {
    return {
      requirement: requirement,
      compliant: status === 'Compliant',
      status: status,
      nextReview: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
  },

  // Generate RBZ compliance report
  generateRBZComplianceReport: (modelData) => {
    return {
      reportDate: new Date().toISOString().split('T')[0],
      modelCount: modelData.length,
      compliantModels: modelData.filter(m => m.rbzCompliance === 'Compliant').length,
      nonCompliantModels: modelData.filter(m => m.rbzCompliance !== 'Compliant').length,
      overallCompliance: (modelData.filter(m => m.rbzCompliance === 'Compliant').length / modelData.length) * 100
    };
  }
};
