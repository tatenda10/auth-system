// Model Risk Management Data
// Comprehensive framework for model validation, governance, and risk assessment

// Model Validation Framework Data
export const modelValidationData = {
  totalModels: 24,
  validatedModels: 18,
  pendingModels: 4,
  failedModels: 2,
  
  components: [
    {
      name: 'Conceptual Soundness',
      description: 'Assessment of model design, assumptions, and theoretical foundation',
      status: 'Passed',
      lastValidated: '2024-01-15'
    },
    {
      name: 'Data Quality Assessment',
      description: 'Evaluation of input data accuracy, completeness, and relevance',
      status: 'Passed',
      lastValidated: '2024-01-20'
    },
    {
      name: 'Model Performance',
      description: 'Statistical validation of model accuracy and predictive power',
      status: 'Passed',
      lastValidated: '2024-01-25'
    },
    {
      name: 'Implementation Testing',
      description: 'Verification of model implementation and system integration',
      status: 'Pending',
      lastValidated: '2024-01-10'
    },
    {
      name: 'Outcome Analysis',
      description: 'Comparison of model predictions with actual outcomes',
      status: 'Passed',
      lastValidated: '2024-01-30'
    },
    {
      name: 'Stress Testing',
      description: 'Model behavior under extreme market conditions',
      status: 'Failed',
      lastValidated: '2024-01-05'
    }
  ],

  process: [
    {
      name: 'Model Development',
      description: 'Initial model development and documentation',
      responsible: 'Model Development Team'
    },
    {
      name: 'Independent Review',
      description: 'Independent validation by Model Risk Management',
      responsible: 'Model Risk Management'
    },
    {
      name: 'Business Review',
      description: 'Business unit review and approval',
      responsible: 'Business Unit Head'
    },
    {
      name: 'Risk Committee Approval',
      description: 'Final approval by Risk Management Committee',
      responsible: 'Risk Management Committee'
    },
    {
      name: 'Implementation',
      description: 'Model deployment and monitoring',
      responsible: 'IT & Operations'
    }
  ]
};

// Model Governance Structure Data
export const modelGovernanceData = {
  structure: [
    {
      name: 'Board of Directors',
      description: 'Ultimate oversight and approval of model risk management framework',
      responsibilities: [
        'Approve model risk management policies',
        'Review high-risk model decisions',
        'Oversee model risk governance framework',
        'Approve model risk appetite statement'
      ]
    },
    {
      name: 'Risk Management Committee',
      description: 'Strategic oversight of model risk management activities',
      responsibilities: [
        'Review and approve model risk policies',
        'Monitor model risk metrics and trends',
        'Approve high-risk model validations',
        'Oversee model risk reporting'
      ]
    },
    {
      name: 'Model Risk Management',
      description: 'Independent validation and oversight of all models',
      responsibilities: [
        'Conduct independent model validation',
        'Maintain model inventory and risk assessments',
        'Develop validation standards and procedures',
        'Provide model risk training and guidance'
      ]
    }
  ],

  policies: [
    {
      name: 'Model Development Policy',
      description: 'Standards and procedures for model development and documentation',
      status: 'Active',
      lastUpdated: '2024-01-15'
    },
    {
      name: 'Model Validation Policy',
      description: 'Framework for independent model validation and review',
      status: 'Active',
      lastUpdated: '2024-01-20'
    },
    {
      name: 'Model Governance Policy',
      description: 'Roles, responsibilities, and approval workflows for models',
      status: 'Active',
      lastUpdated: '2024-01-25'
    },
    {
      name: 'Model Monitoring Policy',
      description: 'Ongoing monitoring and performance tracking procedures',
      status: 'Under Review',
      lastUpdated: '2023-12-15'
    },
    {
      name: 'Model Retirement Policy',
      description: 'Procedures for model decommissioning and replacement',
      status: 'Active',
      lastUpdated: '2024-01-10'
    }
  ],

  workflow: [
    {
      name: 'Model Development',
      description: 'Initial model development and documentation',
      approver: 'Model Development Team',
      status: 'Completed'
    },
    {
      name: 'Business Review',
      description: 'Business unit review and requirements validation',
      approver: 'Business Unit Head',
      status: 'Completed'
    },
    {
      name: 'Independent Validation',
      description: 'Independent validation by Model Risk Management',
      approver: 'Model Risk Management',
      status: 'Completed'
    },
    {
      name: 'Risk Committee Review',
      description: 'Review by Risk Management Committee',
      approver: 'Risk Management Committee',
      status: 'Pending'
    },
    {
      name: 'Board Approval',
      description: 'Final approval for high-risk models',
      approver: 'Board of Directors',
      status: 'Pending'
    }
  ]
};

// Back-Testing Data
export const backTestingData = {
  modelsTested: 18,
  testPeriod: '12 months',
  successRate: 85,

  results: [
    {
      model: 'Credit Risk Model',
      type: 'PD/LGD/EAD',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Excellent',
      accuracy: 92.5,
      status: 'Passed'
    },
    {
      model: 'Market Risk VaR',
      type: 'Value at Risk',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Good',
      accuracy: 87.3,
      status: 'Passed'
    },
    {
      model: 'Liquidity Risk Model',
      type: 'LCR/NSFR',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Good',
      accuracy: 89.1,
      status: 'Passed'
    },
    {
      model: 'Operational Risk Model',
      type: 'Loss Distribution',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Fair',
      accuracy: 78.4,
      status: 'Failed'
    },
    {
      model: 'Interest Rate Risk Model',
      type: 'EVE/NII',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Good',
      accuracy: 85.7,
      status: 'Passed'
    },
    {
      model: 'FX Risk Model',
      type: 'Currency Risk',
      testPeriod: 'Jan 2023 - Dec 2023',
      performance: 'Excellent',
      accuracy: 94.2,
      status: 'Passed'
    }
  ],

  procedures: [
    {
      name: 'Historical Back-Testing',
      description: 'Comparison of model predictions with historical outcomes',
      frequency: 'Quarterly',
      methodology: 'Statistical analysis of prediction accuracy'
    },
    {
      name: 'Out-of-Sample Testing',
      description: 'Testing model performance on unseen data',
      frequency: 'Annually',
      methodology: 'Holdout sample validation'
    },
    {
      name: 'Stress Testing',
      description: 'Model behavior under extreme scenarios',
      frequency: 'Semi-annually',
      methodology: 'Scenario-based stress testing'
    },
    {
      name: 'Benchmark Comparison',
      description: 'Comparison with industry benchmarks and peer models',
      frequency: 'Annually',
      methodology: 'Peer group analysis'
    }
  ]
};

// Model Risk Assessment Data
export const modelRiskAssessmentData = {
  highRisk: 3,
  mediumRisk: 8,
  lowRisk: 13,
  totalModels: 24,

  assessments: [
    {
      model: 'Credit Risk Model',
      type: 'PD/LGD/EAD',
      businessImpact: 'High',
      complexity: 'High',
      dataQuality: 'High',
      overallRisk: 'Medium'
    },
    {
      model: 'Market Risk VaR',
      type: 'Value at Risk',
      businessImpact: 'High',
      complexity: 'Medium',
      dataQuality: 'High',
      overallRisk: 'Medium'
    },
    {
      model: 'Liquidity Risk Model',
      type: 'LCR/NSFR',
      businessImpact: 'High',
      complexity: 'Medium',
      dataQuality: 'Medium',
      overallRisk: 'Medium'
    },
    {
      model: 'Operational Risk Model',
      type: 'Loss Distribution',
      businessImpact: 'Medium',
      complexity: 'High',
      dataQuality: 'Low',
      overallRisk: 'High'
    },
    {
      model: 'Interest Rate Risk Model',
      type: 'EVE/NII',
      businessImpact: 'High',
      complexity: 'Medium',
      dataQuality: 'High',
      overallRisk: 'Medium'
    },
    {
      model: 'FX Risk Model',
      type: 'Currency Risk',
      businessImpact: 'Medium',
      complexity: 'Low',
      dataQuality: 'High',
      overallRisk: 'Low'
    },
    {
      model: 'Capital Planning Model',
      type: 'Capital Adequacy',
      businessImpact: 'High',
      complexity: 'High',
      dataQuality: 'Medium',
      overallRisk: 'High'
    },
    {
      model: 'Pricing Model',
      type: 'Product Pricing',
      businessImpact: 'Medium',
      complexity: 'Medium',
      dataQuality: 'High',
      overallRisk: 'Low'
    }
  ]
};

// Model Inventory Data
export const modelInventoryData = {
  activeModels: 18,
  inDevelopment: 4,
  retiredModels: 2,

  models: [
    {
      name: 'Credit Risk Model v2.1',
      description: 'Probability of Default, Loss Given Default, Exposure at Default',
      type: 'Credit Risk',
      status: 'Active',
      owner: 'Credit Risk Team',
      lastUpdated: '2024-01-15',
      version: '2.1'
    },
    {
      name: 'Market Risk VaR Model',
      description: 'Value at Risk calculation for trading portfolio',
      type: 'Market Risk',
      status: 'Active',
      owner: 'Market Risk Team',
      lastUpdated: '2024-01-20',
      version: '1.8'
    },
    {
      name: 'Liquidity Risk Model',
      description: 'LCR and NSFR calculation and monitoring',
      type: 'Liquidity Risk',
      status: 'Active',
      owner: 'Liquidity Risk Team',
      lastUpdated: '2024-01-25',
      version: '1.5'
    },
    {
      name: 'Operational Risk Model',
      description: 'Operational risk loss distribution and capital calculation',
      type: 'Operational Risk',
      status: 'Active',
      owner: 'Operational Risk Team',
      lastUpdated: '2024-01-10',
      version: '1.2'
    },
    {
      name: 'Interest Rate Risk Model',
      description: 'Economic Value of Equity and Net Interest Income simulation',
      type: 'Interest Rate Risk',
      status: 'Active',
      owner: 'ALM Team',
      lastUpdated: '2024-01-30',
      version: '2.0'
    },
    {
      name: 'FX Risk Model',
      description: 'Foreign exchange risk measurement and monitoring',
      type: 'FX Risk',
      status: 'Active',
      owner: 'Treasury Team',
      lastUpdated: '2024-01-05',
      version: '1.6'
    },
    {
      name: 'Capital Planning Model',
      description: 'Capital adequacy assessment and planning',
      type: 'Capital Management',
      status: 'Active',
      owner: 'Capital Management Team',
      lastUpdated: '2024-01-12',
      version: '1.9'
    },
    {
      name: 'Pricing Model v3.0',
      description: 'Product pricing and profitability analysis',
      type: 'Pricing',
      status: 'In Development',
      owner: 'Product Development Team',
      lastUpdated: '2024-01-28',
      version: '3.0'
    },
    {
      name: 'Stress Testing Model',
      description: 'Comprehensive stress testing framework',
      type: 'Stress Testing',
      status: 'In Development',
      owner: 'Risk Management Team',
      lastUpdated: '2024-01-22',
      version: '1.0'
    },
    {
      name: 'Machine Learning Credit Model',
      description: 'AI-powered credit risk assessment',
      type: 'Credit Risk',
      status: 'In Development',
      owner: 'Data Science Team',
      lastUpdated: '2024-01-18',
      version: '1.0'
    }
  ]
};

// Validation Results Data
export const validationResultsData = [
  {
    name: 'Credit Risk Model v2.1',
    description: 'PD/LGD/EAD calculation',
    type: 'Credit Risk',
    status: 'Validated',
    lastValidated: '2024-01-15',
    nextReview: '2024-04-15',
    riskRating: 'Medium'
  },
  {
    name: 'Market Risk VaR Model',
    description: 'Value at Risk calculation',
    type: 'Market Risk',
    status: 'Validated',
    lastValidated: '2024-01-20',
    nextReview: '2024-04-20',
    riskRating: 'Medium'
  },
  {
    name: 'Liquidity Risk Model',
    description: 'LCR and NSFR calculation',
    type: 'Liquidity Risk',
    status: 'Validated',
    lastValidated: '2024-01-25',
    nextReview: '2024-04-25',
    riskRating: 'Medium'
  },
  {
    name: 'Operational Risk Model',
    description: 'Operational risk assessment',
    type: 'Operational Risk',
    status: 'Failed',
    lastValidated: '2024-01-10',
    nextReview: '2024-02-10',
    riskRating: 'High'
  },
  {
    name: 'Interest Rate Risk Model',
    description: 'EVE and NII simulation',
    type: 'Interest Rate Risk',
    status: 'Validated',
    lastValidated: '2024-01-30',
    nextReview: '2024-04-30',
    riskRating: 'Medium'
  },
  {
    name: 'FX Risk Model',
    description: 'Foreign exchange risk measurement',
    type: 'FX Risk',
    status: 'Validated',
    lastValidated: '2024-01-05',
    nextReview: '2024-04-05',
    riskRating: 'Low'
  },
  {
    name: 'Capital Planning Model',
    description: 'Capital adequacy assessment',
    type: 'Capital Management',
    status: 'Pending',
    lastValidated: '2024-01-12',
    nextReview: '2024-02-12',
    riskRating: 'High'
  },
  {
    name: 'Pricing Model v3.0',
    description: 'Product pricing analysis',
    type: 'Pricing',
    status: 'Pending',
    lastValidated: '2024-01-28',
    nextReview: '2024-02-28',
    riskRating: 'Low'
  }
];

// Model Risk Metrics
export const modelRiskMetrics = {
  validationCoverage: 75.0,
  averageValidationScore: 87.5,
  modelsRequiringAttention: 3,
  criticalIssues: 1,
  validationBacklog: 4
};

// Model Risk Events
export const modelRiskEvents = [
  {
    date: '2024-01-15',
    event: 'Model Validation Failed',
    model: 'Operational Risk Model',
    severity: 'High',
    description: 'Model failed stress testing validation',
    status: 'Under Investigation'
  },
  {
    date: '2024-01-10',
    event: 'Model Performance Degradation',
    model: 'Credit Risk Model',
    severity: 'Medium',
    description: 'Model accuracy dropped below threshold',
    status: 'Resolved'
  },
  {
    date: '2024-01-05',
    event: 'Data Quality Issue',
    model: 'Market Risk VaR',
    severity: 'Low',
    description: 'Input data quality concerns identified',
    status: 'Resolved'
  }
];

// Model Risk Reporting
export const modelRiskReporting = {
  monthlyReports: [
    {
      period: 'January 2024',
      totalModels: 24,
      validatedModels: 18,
      pendingModels: 4,
      failedModels: 2,
      averageRiskScore: 2.3
    },
    {
      period: 'December 2023',
      totalModels: 23,
      validatedModels: 20,
      pendingModels: 2,
      failedModels: 1,
      averageRiskScore: 2.1
    }
  ],
  
  quarterlyReviews: [
    {
      quarter: 'Q4 2023',
      focus: 'Model Performance Review',
      keyFindings: 'Overall model performance stable, 2 models require attention',
      recommendations: 'Enhance stress testing procedures, improve data quality monitoring'
    },
    {
      quarter: 'Q3 2023',
      focus: 'Validation Framework Assessment',
      keyFindings: 'Validation framework effective, coverage improved',
      recommendations: 'Implement automated validation tools, enhance documentation'
    }
  ]
};
