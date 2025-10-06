// RBZ Supervisory Rating Scale (SRS) Data Structure
// Based on Reserve Bank of Zimbabwe Technical Guidance on Basel II

export const rbzSRSData = {
  // 10-Tier Classification System with Sub-ratings
  classifications: [
    {
      tier: 1,
      subRating: 'A',
      description: 'Excellent',
      riskLevel: 'Minimal',
      riskWeight: 20,
      provisioning: 1.5,
      description: 'Highest quality assets with minimal credit risk'
    },
    {
      tier: 2,
      subRating: 'B',
      description: 'Strong',
      riskLevel: 'Low',
      riskWeight: 20,
      provisioning: 1.5,
      description: 'High quality assets with low credit risk'
    },
    {
      tier: 3,
      subRating: 'C',
      description: 'Good',
      riskLevel: 'Low',
      riskWeight: 50,
      provisioning: 1.5,
      description: 'Good quality assets with acceptable credit risk'
    },
    {
      tier: 4,
      subRating: 'A',
      description: 'Satisfactory',
      riskLevel: 'Moderate',
      riskWeight: 100,
      provisioning: 1.5,
      description: 'Satisfactory assets with moderate credit risk'
    },
    {
      tier: 5,
      subRating: 'B',
      description: 'Fair',
      riskLevel: 'Acceptable with care',
      riskWeight: 100,
      provisioning: 10,
      description: 'Fair quality assets requiring careful monitoring'
    },
    {
      tier: 6,
      subRating: 'A',
      description: 'Speculative',
      riskLevel: 'Management Attention',
      riskWeight: 150,
      provisioning: 20,
      description: 'Assets requiring management attention'
    },
    {
      tier: 7,
      subRating: 'B',
      description: 'Highly Speculative',
      riskLevel: 'Special Attention',
      riskWeight: 150,
      provisioning: 20,
      description: 'Assets requiring special attention'
    },
    {
      tier: 8,
      subRating: 'C',
      description: 'Substandard',
      riskLevel: 'Vulnerable',
      riskWeight: 150,
      provisioning: 20,
      description: 'Substandard assets with high default risk'
    },
    {
      tier: 9,
      subRating: '',
      description: 'Doubtful',
      riskLevel: 'High Default',
      riskWeight: 200,
      provisioning: 50,
      description: 'Doubtful assets with very high default risk'
    },
    {
      tier: 10,
      subRating: '',
      description: 'Loss',
      riskLevel: 'Bankrupt',
      riskWeight: 200,
      provisioning: 100,
      description: 'Loss assets requiring full provisioning'
    }
  ],

  // Risk Weights for Different Asset Classes
  riskWeights: {
    domesticSovereigns: {
      'AAA to AA-': 0,
      'A+ to A-': 20,
      'BBB+ to BBB-': 50,
      'BB+ to B-': 100,
      'Below B-': 150,
      'Unrated': 100
    },
    foreignSovereigns: {
      'AAA to AA-': 0,
      'A+ to A-': 20,
      'BBB+ to BBB-': 50,
      'BB+ to B-': 100,
      'Below B-': 150,
      'Unrated': 100
    },
    banks: {
      'AAA to AA-': 20,
      'A+ to A-': 50,
      'BBB+ to BBB-': 100,
      'BB+ to B-': 100,
      'Below B-': 150,
      'Unrated': 100
    },
    corporates: {
      'AAA to AA-': 20,
      'A+ to A-': 50,
      'BBB+ to BBB-': 100,
      'BB+ to B-': 100,
      'Below B-': 150,
      'Unrated': 100
    },
    retail: {
      'Qualifying Revolving': 75,
      'Residential Mortgages': 35,
      'Other Retail': 100
    },
    nonPerformingAssets: {
      'Substandard': 150,
      'Doubtful': 200,
      'Loss': 200
    }
  },

  // Provisioning Requirements
  provisioningRequirements: {
    standard: 1.5,
    specialMention: 10,
    substandard: 20,
    doubtful: 50,
    loss: 100
  },

  // Credit Conversion Factors (CCF) for Off-Balance Sheet Items
  creditConversionFactors: {
    'Commitments': {
      'Original maturity ≤ 1 year': 20,
      'Original maturity > 1 year': 50
    },
    'Note Issuance Facilities': 50,
    'Revolving Underwriting Facilities': 50,
    'Other Commitments': 100
  }
};

// Helper function to get SRS classification by tier and sub-rating
export const getSRSClassification = (tier, subRating = '') => {
  return rbzSRSData.classifications.find(
    item => item.tier === tier && item.subRating === subRating
  );
};

// Helper function to calculate risk-weighted assets
export const calculateRiskWeightedAssets = (exposure, riskWeight) => {
  return exposure * (riskWeight / 100);
};

// Helper function to calculate provisioning requirement
export const calculateProvisioning = (exposure, provisioningRate) => {
  return exposure * (provisioningRate / 100);
};

// Helper function to get risk weight for asset class and rating
export const getRiskWeight = (assetClass, rating) => {
  const weights = rbzSRSData.riskWeights[assetClass];
  return weights ? weights[rating] || weights['Unrated'] : 100;
};
