// Time Bucket Gap Analysis Data
export const gapAnalysisData = [
  { bucket: 'Overnight', assets: 45000000, liabilities: 38000000, gap: 7000000, cumulativeGap: 7000000 },
  { bucket: '1-7 Days', assets: 68000000, liabilities: 72000000, gap: -4000000, cumulativeGap: 3000000 },
  { bucket: '8-30 Days', assets: 95000000, liabilities: 88000000, gap: 7000000, cumulativeGap: 10000000 },
  { bucket: '31-90 Days', assets: 125000000, liabilities: 135000000, gap: -10000000, cumulativeGap: 0 },
  { bucket: '91-180 Days', assets: 180000000, liabilities: 195000000, gap: -15000000, cumulativeGap: -15000000 },
  { bucket: '181-365 Days', assets: 220000000, liabilities: 240000000, gap: -20000000, cumulativeGap: -35000000 },
  { bucket: '1-3 Years', assets: 280000000, liabilities: 320000000, gap: -40000000, cumulativeGap: -75000000 },
  { bucket: '3-5 Years', assets: 320000000, liabilities: 380000000, gap: -60000000, cumulativeGap: -135000000 },
  { bucket: '5+ Years', assets: 450000000, liabilities: 520000000, gap: -70000000, cumulativeGap: -205000000 }
];

// NSFR Data
export const nsfrData = [
  { category: 'Available Stable Funding (ASF)', items: [
    { name: 'Tier 1 Capital', amount: 250000000, factor: 100, weighted: 250000000 },
    { name: 'Tier 2 Capital', amount: 180000000, factor: 100, weighted: 180000000 },
    { name: 'Stable deposits (retail)', amount: 450000000, factor: 95, weighted: 427500000 },
    { name: 'Stable deposits (SME)', amount: 280000000, factor: 85, weighted: 238000000 },
    { name: 'Less stable deposits', amount: 320000000, factor: 50, weighted: 160000000 },
    { name: 'Wholesale funding (stable)', amount: 180000000, factor: 75, weighted: 135000000 },
    { name: 'Other funding', amount: 120000000, factor: 0, weighted: 0 }
  ]},
  { category: 'Required Stable Funding (RSF)', items: [
    { name: 'Cash and equivalents', amount: 45000000, factor: 0, weighted: 0 },
    { name: 'Level 1 assets', amount: 195000000, factor: 5, weighted: 9750000 },
    { name: 'Level 2 assets', amount: 120000000, factor: 15, weighted: 18000000 },
    { name: 'Residential mortgages', amount: 280000000, factor: 65, weighted: 182000000 },
    { name: 'Corporate loans', amount: 420000000, factor: 85, weighted: 357000000 },
    { name: 'Other assets', amount: 180000000, factor: 100, weighted: 180000000 }
  ]}
];

// Loans to Deposit Ratio Data
export const ltdData = [
  { month: 'Jan', loans: 2850000000, deposits: 3200000000, ratio: 89.1 },
  { month: 'Feb', loans: 2870000000, deposits: 3220000000, ratio: 89.1 },
  { month: 'Mar', loans: 2890000000, deposits: 3240000000, ratio: 89.2 },
  { month: 'Apr', loans: 2910000000, deposits: 3260000000, ratio: 89.3 },
  { month: 'May', loans: 2930000000, deposits: 3280000000, ratio: 89.3 },
  { month: 'Jun', loans: 2950000000, deposits: 3300000000, ratio: 89.4 },
  { month: 'Jul', loans: 2970000000, deposits: 3320000000, ratio: 89.5 },
  { month: 'Aug', loans: 2990000000, deposits: 3340000000, ratio: 89.5 },
  { month: 'Sep', loans: 3010000000, deposits: 3360000000, ratio: 89.6 },
  { month: 'Oct', loans: 3030000000, deposits: 3380000000, ratio: 89.6 },
  { month: 'Nov', loans: 3050000000, deposits: 3400000000, ratio: 89.7 },
  { month: 'Dec', loans: 3070000000, deposits: 3420000000, ratio: 89.8 }
];

// Concentration Ratios Data
export const concentrationData = [
  { depositor: 'Top 1 Depositor', amount: 180000000, percentage: 5.6, limit: 10.0, status: 'safe' },
  { depositor: 'Top 5 Depositors', amount: 680000000, percentage: 21.3, limit: 25.0, status: 'safe' },
  { depositor: 'Top 10 Depositors', amount: 980000000, percentage: 30.6, limit: 40.0, status: 'safe' },
  { depositor: 'Top 20 Depositors', amount: 1280000000, percentage: 40.0, limit: 50.0, status: 'safe' },
  { depositor: 'Corporate Sector', amount: 1920000000, percentage: 60.0, limit: 70.0, status: 'safe' },
  { depositor: 'Retail Sector', amount: 1280000000, percentage: 40.0, limit: 50.0, status: 'safe' }
];

// Loan Repayment Modeling Data
export const loanRepaymentData = [
  { rateChange: '-2.00%', prepaymentRate: 8.5, refinancing: 12.3, newOriginations: 15.7, totalImpact: 36.5 },
  { rateChange: '-1.50%', prepaymentRate: 7.2, refinancing: 10.8, newOriginations: 13.4, totalImpact: 31.4 },
  { rateChange: '-1.00%', prepaymentRate: 6.1, refinancing: 9.2, newOriginations: 11.8, totalImpact: 27.1 },
  { rateChange: '-0.50%', prepaymentRate: 5.2, refinancing: 7.8, newOriginations: 10.3, totalImpact: 23.3 },
  { rateChange: '0.00%', prepaymentRate: 4.5, refinancing: 6.5, newOriginations: 9.0, totalImpact: 20.0 },
  { rateChange: '+0.50%', prepaymentRate: 3.9, refinancing: 5.4, newOriginations: 7.8, totalImpact: 17.1 },
  { rateChange: '+1.00%', prepaymentRate: 3.4, refinancing: 4.6, newOriginations: 6.8, totalImpact: 14.8 },
  { rateChange: '+1.50%', prepaymentRate: 2.9, refinancing: 3.9, newOriginations: 5.9, totalImpact: 12.7 },
  { rateChange: '+2.00%', prepaymentRate: 2.5, refinancing: 3.3, newOriginations: 5.1, totalImpact: 10.9 }
];

// Core Deposit Modeling Data
export const coreDepositData = [
  { accountType: 'Current Accounts', totalBalance: 850000000, corePortion: 680000000, volatilePortion: 170000000, stabilityFactor: 80.0, historicalRunoff: 2.5, behavioralMaturity: 12.5, contractualMaturity: 0.0 },
  { accountType: 'Savings Accounts', totalBalance: 650000000, corePortion: 520000000, volatilePortion: 130000000, stabilityFactor: 80.0, historicalRunoff: 3.2, behavioralMaturity: 18.2, contractualMaturity: 0.0 },
  { accountType: 'Personal Time Deposits', totalBalance: 420000000, corePortion: 294000000, volatilePortion: 126000000, stabilityFactor: 70.0, historicalRunoff: 8.5, behavioralMaturity: 24.8, contractualMaturity: 12.0 },
  { accountType: 'Business Time Deposits', totalBalance: 380000000, corePortion: 228000000, volatilePortion: 152000000, stabilityFactor: 60.0, historicalRunoff: 12.3, behavioralMaturity: 31.5, contractualMaturity: 18.0 },
  { accountType: 'High-Net-Worth Accounts', totalBalance: 280000000, corePortion: 196000000, volatilePortion: 84000000, stabilityFactor: 70.0, historicalRunoff: 6.8, behavioralMaturity: 22.4, contractualMaturity: 0.0 },
  { accountType: 'Institutional Deposits', totalBalance: 320000000, corePortion: 128000000, volatilePortion: 192000000, stabilityFactor: 40.0, historicalRunoff: 18.5, behavioralMaturity: 8.2, contractualMaturity: 6.0 }
];

// Deposit Stability Analysis by Customer Segment
export const depositStabilityData = [
  { segment: 'Retail - Mass Market', totalDeposits: 1200000000, coreDeposits: 1080000000, stabilityScore: 90.0, avgRelationship: 8.5, productPenetration: 3.2, runoffRisk: 'Low' },
  { segment: 'Retail - Affluent', totalDeposits: 680000000, coreDeposits: 578000000, stabilityScore: 85.0, avgRelationship: 12.3, productPenetration: 4.8, runoffRisk: 'Low' },
  { segment: 'SME - Micro', totalDeposits: 420000000, coreDeposits: 336000000, stabilityScore: 80.0, avgRelationship: 6.8, productPenetration: 2.1, runoffRisk: 'Medium' },
  { segment: 'SME - Small', totalDeposits: 580000000, coreDeposits: 406000000, stabilityScore: 70.0, avgRelationship: 9.2, productPenetration: 2.8, runoffRisk: 'Medium' },
  { segment: 'SME - Medium', totalDeposits: 720000000, coreDeposits: 432000000, stabilityScore: 60.0, avgRelationship: 11.5, productPenetration: 3.5, runoffRisk: 'High' },
  { segment: 'Corporate - Large', totalDeposits: 950000000, coreDeposits: 285000000, stabilityScore: 30.0, avgRelationship: 4.2, productPenetration: 1.8, runoffRisk: 'Very High' }
];

// Behavioral Maturity vs Contractual Maturity
export const maturityComparisonData = [
  { accountType: 'Demand Deposits', contractualMaturity: 0.0, behavioralMaturity: 15.2, difference: 15.2, stabilityFactor: 85.0 },
  { accountType: '7-Day Notice', contractualMaturity: 0.1, behavioralMaturity: 18.5, difference: 18.4, stabilityFactor: 82.0 },
  { accountType: '30-Day Notice', contractualMaturity: 1.0, behavioralMaturity: 24.8, difference: 23.8, stabilityFactor: 78.0 },
  { accountType: '3-Month Fixed', contractualMaturity: 3.0, behavioralMaturity: 28.2, difference: 25.2, stabilityFactor: 75.0 },
  { accountType: '6-Month Fixed', contractualMaturity: 6.0, behavioralMaturity: 32.5, difference: 26.5, stabilityFactor: 72.0 },
  { accountType: '12-Month Fixed', contractualMaturity: 12.0, behavioralMaturity: 36.8, difference: 24.8, stabilityFactor: 70.0 },
  { accountType: '24-Month Fixed', contractualMaturity: 24.0, behavioralMaturity: 42.1, difference: 18.1, stabilityFactor: 68.0 },
  { accountType: '36-Month Fixed', contractualMaturity: 36.0, behavioralMaturity: 45.3, difference: 9.3, stabilityFactor: 65.0 }
];

// Core Deposit Ratio Calculations
export const coreDepositRatios = [
  { ratio: 'Core Deposit Ratio', current: 65.3, target: 70.0, minimum: 60.0, status: 'below' },
  { ratio: 'Sticky Deposit Ratio', current: 72.8, target: 75.0, minimum: 65.0, status: 'below' },
  { ratio: 'Core Funding Ratio', current: 58.4, target: 65.0, minimum: 55.0, status: 'below' },
  { ratio: 'Stable Funding Ratio', current: 68.9, target: 72.0, minimum: 65.0, status: 'below' },
  { ratio: 'Volatile Deposit Ratio', current: 34.7, target: 30.0, maximum: 35.0, status: 'above' },
  { ratio: 'Core Deposit Stability Score', current: 78.5, target: 80.0, minimum: 75.0, status: 'below' }
];

// Cash Projections Under Various Scenarios Data
export const cashProjectionScenarios = [
  { scenario: 'Base Case', description: 'Normal economic conditions with stable funding markets', stressLevel: 'Low', probability: 70 },
  { scenario: 'Adverse Scenario', description: 'Moderate economic stress with funding market disruption', stressLevel: 'Medium', probability: 25 },
  { scenario: 'Severely Adverse', description: 'Crisis conditions with severe funding market disruption', stressLevel: 'High', probability: 5 }
];

// Cash Flow Projections by Scenario and Horizon
export const cashFlowProjections = [
  // Base Case
  { scenario: 'Base Case', horizon: '30 Days', cashInflows: 285000000, cashOutflows: 485000000, netCashFlow: -200000000, liquidityBuffer: 195000000, netPosition: -5000000, status: 'Adequate' },
  { scenario: 'Base Case', horizon: '90 Days', cashInflows: 850000000, cashOutflows: 1420000000, netCashFlow: -570000000, liquidityBuffer: 195000000, netPosition: -375000000, status: 'Adequate' },
  { scenario: 'Base Case', horizon: '1 Year', cashInflows: 3200000000, cashOutflows: 4850000000, netCashFlow: -1650000000, liquidityBuffer: 195000000, netPosition: -1455000000, status: 'Adequate' },
  
  // Adverse Scenario
  { scenario: 'Adverse Scenario', horizon: '30 Days', cashInflows: 228000000, cashOutflows: 533500000, netCashFlow: -305500000, liquidityBuffer: 195000000, netPosition: -110500000, status: 'Warning' },
  { scenario: 'Adverse Scenario', horizon: '90 Days', cashInflows: 680000000, cashOutflows: 1562000000, netCashFlow: -882000000, liquidityBuffer: 195000000, netPosition: -687000000, status: 'Warning' },
  { scenario: 'Adverse Scenario', horizon: '1 Year', cashInflows: 2560000000, cashOutflows: 5335000000, netCashFlow: -2775000000, liquidityBuffer: 195000000, netPosition: -2580000000, status: 'Warning' },
  
  // Severely Adverse
  { scenario: 'Severely Adverse', horizon: '30 Days', cashInflows: 171000000, cashOutflows: 582000000, netCashFlow: -411000000, liquidityBuffer: 195000000, netPosition: -216000000, status: 'Critical' },
  { scenario: 'Severely Adverse', horizon: '90 Days', cashInflows: 510000000, cashOutflows: 1704000000, netCashFlow: -1194000000, liquidityBuffer: 195000000, netPosition: -999000000, status: 'Critical' },
  { scenario: 'Severely Adverse', horizon: '1 Year', cashInflows: 1920000000, cashOutflows: 5820000000, netCashFlow: -3900000000, liquidityBuffer: 195000000, netPosition: -3705000000, status: 'Critical' }
];

// Funding Stress Scenarios
export const fundingStressScenarios = [
  { stressType: 'Deposit Runoff', baseCase: 0, adverse: 15, severelyAdverse: 35, impact: 'Reduced funding base, increased reliance on wholesale funding' },
  { stressType: 'Market Disruption', baseCase: 0, adverse: 25, severelyAdverse: 50, impact: 'Limited access to interbank markets, increased funding costs' },
  { stressType: 'Counterparty Credit', baseCase: 0, adverse: 10, severelyAdverse: 25, impact: 'Reduced credit lines, increased collateral requirements' },
  { stressType: 'Asset Price Volatility', baseCase: 0, adverse: 20, severelyAdverse: 40, impact: 'Reduced asset values, increased haircuts on collateral' },
  { stressType: 'Currency Stress', baseCase: 0, adverse: 15, severelyAdverse: 30, impact: 'FX funding constraints, cross-currency basis widening' }
];

// Contingency Funding Plans
export const contingencyFundingPlans = [
  { fundingSource: 'Central Bank Facilities', availability: 'Unlimited', cost: 'Base rate + 100bps', accessTime: 'Immediate', conditions: 'Eligible collateral required', status: 'Available' },
  { fundingSource: 'Asset Securitization', availability: 'Up to $2.5B', cost: 'Market rate + 150bps', accessTime: '30-60 days', conditions: 'Eligible asset pool', status: 'Available' },
  { fundingSource: 'Interbank Lines', availability: 'Up to $1.8B', cost: 'LIBOR + 200bps', accessTime: '1-7 days', conditions: 'Credit approval', status: 'Limited' },
  { fundingSource: 'Retail Deposit Campaign', availability: 'Up to $1.2B', cost: 'Market rate + 50bps', accessTime: '30-90 days', conditions: 'Marketing campaign', status: 'Available' },
  { fundingSource: 'Asset Sales', availability: 'Up to $3.2B', cost: 'Market price - 5%', accessTime: '7-30 days', conditions: 'Market liquidity', status: 'Available' },
  { fundingSource: 'Capital Markets', availability: 'Up to $2.0B', cost: 'Market rate + 300bps', accessTime: '60-90 days', conditions: 'Market conditions', status: 'Limited' }
];

// Scenario-Based Liquidity Ratios
export const scenarioLiquidityRatios = [
  { ratio: 'LCR', baseCase: 97.5, adverse: 78.2, severelyAdverse: 58.9, minimum: 100.0, status: 'Below minimum in all scenarios' },
  { ratio: 'NSFR', baseCase: 108.7, adverse: 95.3, severelyAdverse: 82.1, minimum: 100.0, status: 'Below minimum in adverse scenarios' },
  { ratio: 'Liquid Assets Ratio', baseCase: 18.2, adverse: 14.6, severelyAdverse: 11.8, minimum: 15.0, status: 'Below minimum in adverse scenarios' },
  { ratio: 'Core Funding Ratio', baseCase: 58.4, adverse: 52.1, severelyAdverse: 45.8, minimum: 55.0, status: 'Below minimum in adverse scenarios' },
  { ratio: 'Wholesale Funding Ratio', baseCase: 34.7, adverse: 42.3, severelyAdverse: 51.8, maximum: 40.0, status: 'Above maximum in adverse scenarios' }
];

// Main Liquidity Risk Structure Data
export const liquidityRiskStructure = [
  { id: 1, category: 'STOCK OF HIGH-QUALITY LIQUID ASSET', type: 'main-header', level: 0, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 2, category: 'Cash and balances with central banks', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 3, category: 'Cash', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 45000000, prevMonth: 44000000, forecast: 46000000, factorAppliedCurrent: 45000000, factorAppliedPrev: 44000000, factorAppliedForecast: 46000000 },
  { id: 4, category: 'RBZ Reserves', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 35000000, prevMonth: 34000000, forecast: 36000000, factorAppliedCurrent: 35000000, factorAppliedPrev: 34000000, factorAppliedForecast: 36000000 },
  { id: 4.1, category: 'SDR Holdings', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 15000000, prevMonth: 14500000, forecast: 15500000, factorAppliedCurrent: 15000000, factorAppliedPrev: 14500000, factorAppliedForecast: 15500000 },
  { id: 4.2, category: 'Gold Bullion', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 25000000, prevMonth: 24000000, forecast: 26000000, factorAppliedCurrent: 25000000, factorAppliedPrev: 24000000, factorAppliedForecast: 26000000 },
  { id: 5, category: 'Level 1 assets', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 6, category: 'Zimbabwe Government Securities', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 200000000, prevMonth: 195000000, forecast: 205000000, factorAppliedCurrent: 200000000, factorAppliedPrev: 195000000, factorAppliedForecast: 205000000 },
  { id: 6.1, category: 'Treasury Bills (Zimbabwe)', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 120000000, prevMonth: 118000000, forecast: 122000000, factorAppliedCurrent: 120000000, factorAppliedPrev: 118000000, factorAppliedForecast: 122000000 },
  { id: 6.2, category: 'Treasury Bonds (Zimbabwe)', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 80000000, prevMonth: 78000000, forecast: 82000000, factorAppliedCurrent: 80000000, factorAppliedPrev: 78000000, factorAppliedForecast: 82000000 },
  { id: 7, category: 'RBZ Bills', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 40000000, prevMonth: 39000000, forecast: 41000000, factorAppliedCurrent: 40000000, factorAppliedPrev: 39000000, factorAppliedForecast: 41000000 },
  { id: 7.1, category: 'SADC Government Securities', type: 'sub-sub-header', level: 2, factor: 0.95, currentMonth: 25000000, prevMonth: 24000000, forecast: 26000000, factorAppliedCurrent: 23750000, factorAppliedPrev: 22800000, factorAppliedForecast: 24700000 },
  { id: 8, category: 'Total Level 1 assets', type: 'calculation', level: 1, factor: '', currentMonth: 280000000, prevMonth: 273000000, forecast: 287000000, factorAppliedCurrent: 280000000, factorAppliedPrev: 273000000, factorAppliedForecast: 287000000 },
  { id: 9, category: 'Level 2 assets', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 10, category: 'Corporate bonds (AA- to A-)', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 60000000, prevMonth: 58000000, forecast: 62000000, factorAppliedCurrent: 51000000, factorAppliedPrev: 49300000, factorAppliedForecast: 52700000 },
  { id: 10.1, category: 'Covered Bonds (Zimbabwe)', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 30000000, prevMonth: 29000000, forecast: 31000000, factorAppliedCurrent: 25500000, factorAppliedPrev: 24650000, factorAppliedForecast: 26350000 },
  { id: 11, category: 'Multilateral Development Bank Securities', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 20000000, prevMonth: 19500000, forecast: 20500000, factorAppliedCurrent: 17000000, factorAppliedPrev: 16575000, factorAppliedForecast: 17425000 },
  { id: 11.1, category: 'World Bank Securities', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 10000000, prevMonth: 9500000, forecast: 10500000, factorAppliedCurrent: 8500000, factorAppliedPrev: 8075000, factorAppliedForecast: 8925000 },
  { id: 11.2, category: 'African Development Bank Securities', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 7000000, prevMonth: 6800000, forecast: 7200000, factorAppliedCurrent: 5950000, factorAppliedPrev: 5780000, factorAppliedForecast: 6120000 },
  { id: 11.3, category: 'SADC Development Fund Securities', type: 'sub-sub-header', level: 2, factor: 0.85, currentMonth: 3000000, prevMonth: 2900000, forecast: 3100000, factorAppliedCurrent: 2550000, factorAppliedPrev: 2465000, factorAppliedForecast: 2635000 },
  { id: 12, category: 'Total Level 2 assets', type: 'calculation', level: 1, factor: '', currentMonth: 110000000, prevMonth: 107000000, forecast: 113000000, factorAppliedCurrent: 93500000, factorAppliedPrev: 90800000, factorAppliedForecast: 96200000 },
  { id: 13, category: 'Total HQLA', type: 'calculation', level: 0, factor: '', currentMonth: 390000000, prevMonth: 380000000, forecast: 400000000, factorAppliedCurrent: 373500000, factorAppliedPrev: 363800000, factorAppliedForecast: 383200000 },
  { id: 14, category: 'CASH OUTFLOWS', type: 'main-header', level: 0, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 15, category: 'Retail deposits', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 16, category: 'Stable deposits', type: 'sub-sub-header', level: 2, factor: 0.05, currentMonth: 1200000000, prevMonth: 1180000000, forecast: 1220000000, factorAppliedCurrent: 60000000, factorAppliedPrev: 59000000, factorAppliedForecast: 61000000 },
  { id: 17, category: 'Less stable deposits', type: 'sub-sub-header', level: 2, factor: 0.10, currentMonth: 800000000, prevMonth: 780000000, forecast: 820000000, factorAppliedCurrent: 80000000, factorAppliedPrev: 78000000, factorAppliedForecast: 82000000 },
  { id: 18, category: 'Total retail deposits', type: 'calculation', level: 1, factor: '', currentMonth: 2000000000, prevMonth: 1960000000, forecast: 2040000000, factorAppliedCurrent: 140000000, factorAppliedPrev: 137000000, factorAppliedForecast: 143000000 },
  { id: 19, category: 'Unsecured wholesale funding', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 20, category: 'Small business deposits', type: 'sub-sub-header', level: 2, factor: 0.05, currentMonth: 600000000, prevMonth: 580000000, forecast: 620000000, factorAppliedCurrent: 30000000, factorAppliedPrev: 29000000, factorAppliedForecast: 31000000 },
  { id: 21, category: 'Operational deposits', type: 'sub-sub-header', level: 2, factor: 0.25, currentMonth: 400000000, prevMonth: 390000000, forecast: 410000000, factorAppliedCurrent: 100000000, factorAppliedPrev: 97500000, factorAppliedForecast: 102500000 },
  { id: 22, category: 'Non-operational deposits', type: 'sub-sub-header', level: 2, factor: 0.40, currentMonth: 300000000, prevMonth: 290000000, forecast: 310000000, factorAppliedCurrent: 120000000, factorAppliedPrev: 116000000, factorAppliedForecast: 124000000 },
  { id: 23, category: 'Total unsecured wholesale funding', type: 'calculation', level: 1, factor: '', currentMonth: 1300000000, prevMonth: 1260000000, forecast: 1340000000, factorAppliedCurrent: 250000000, factorAppliedPrev: 242500000, factorAppliedForecast: 257500000 },
  { id: 24, category: 'Secured funding', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 25, category: 'Secured funding (30 days)', type: 'sub-sub-header', level: 2, factor: 0.25, currentMonth: 500000000, prevMonth: 480000000, forecast: 520000000, factorAppliedCurrent: 125000000, factorAppliedPrev: 120000000, factorAppliedForecast: 130000000 },
  { id: 26, category: 'Total secured funding', type: 'calculation', level: 1, factor: '', currentMonth: 500000000, prevMonth: 480000000, forecast: 520000000, factorAppliedCurrent: 125000000, factorAppliedPrev: 120000000, factorAppliedForecast: 130000000 },
  { id: 27, category: 'Additional requirements', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 28, category: 'Derivatives cash outflows', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 25000000, prevMonth: 24000000, forecast: 26000000, factorAppliedCurrent: 25000000, factorAppliedPrev: 24000000, factorAppliedForecast: 26000000 },
  { id: 29, category: 'Credit and liquidity facilities', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 15000000, prevMonth: 14000000, forecast: 16000000, factorAppliedCurrent: 15000000, factorAppliedPrev: 14000000, factorAppliedForecast: 16000000 },
  { id: 30, category: 'Other contractual outflows', type: 'sub-sub-header', level: 2, factor: 1.0, currentMonth: 10000000, prevMonth: 9500000, forecast: 10500000, factorAppliedCurrent: 10000000, factorAppliedPrev: 9500000, factorAppliedForecast: 10500000 },
  { id: 31, category: 'Total additional requirements', type: 'calculation', level: 1, factor: '', currentMonth: 50000000, prevMonth: 47500000, forecast: 52500000, factorAppliedCurrent: 50000000, factorAppliedPrev: 47500000, factorAppliedForecast: 52500000 },
  { id: 32, category: 'Total net cash outflows', type: 'calculation', level: 0, factor: '', currentMonth: 508000000, prevMonth: 495000000, forecast: 521000000, factorAppliedCurrent: 508000000, factorAppliedPrev: 495000000, factorAppliedForecast: 521000000 },
  { id: 33, category: 'CASH INFLOWS', type: 'main-header', level: 0, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 34, category: 'Secured lending', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 35, category: 'Secured lending (30 days)', type: 'sub-sub-header', level: 2, factor: 0.50, currentMonth: 300000000, prevMonth: 290000000, forecast: 310000000, factorAppliedCurrent: 150000000, factorAppliedPrev: 145000000, factorAppliedForecast: 155000000 },
  { id: 36, category: 'Total secured lending', type: 'calculation', level: 1, factor: '', currentMonth: 300000000, prevMonth: 290000000, forecast: 310000000, factorAppliedCurrent: 150000000, factorAppliedPrev: 145000000, factorAppliedForecast: 155000000 },
  { id: 37, category: 'Other inflows', type: 'sub-header', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 38, category: 'Interest and dividend payments', type: 'sub-sub-header', level: 2, factor: 0.50, currentMonth: 40000000, prevMonth: 39000000, forecast: 41000000, factorAppliedCurrent: 20000000, factorAppliedPrev: 19500000, factorAppliedForecast: 20500000 },
  { id: 39, category: 'Total other inflows', type: 'calculation', level: 1, factor: '', currentMonth: 40000000, prevMonth: 39000000, forecast: 41000000, factorAppliedCurrent: 20000000, factorAppliedPrev: 19500000, factorAppliedForecast: 20500000 },
  { id: 40, category: 'Total cash inflows', type: 'calculation', level: 0, factor: '', currentMonth: 115000000, prevMonth: 112000000, forecast: 118000000, factorAppliedCurrent: 115000000, factorAppliedPrev: 112000000, factorAppliedForecast: 118000000 },
  { id: 41, category: 'SUMMARY CALCULATIONS', type: 'main-header', level: 0, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0, factorAppliedPrev: 0, factorAppliedForecast: 0 },
  { id: 42, category: 'Net cash outflows', type: 'calculation', level: 1, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 393000000, factorAppliedPrev: 383000000, factorAppliedForecast: 403000000 },
  { id: 43, category: 'LCR', type: 'calculation', level: 0, factor: '', currentMonth: 0, prevMonth: 0, forecast: 0, factorAppliedCurrent: 0.95, factorAppliedPrev: 0.95, factorAppliedForecast: 0.95 }
];

// Prudential Ratios Data
export const prudentialRatios = [
  { ratio: 'Liquidity Coverage Ratio', current: 70.1, target: 100.0, minimum: 100.0, status: 'below' },
  { ratio: 'Net Stable Funding Ratio', current: 108.7, target: 100.0, minimum: 100.0, status: 'above' },
  { ratio: 'Loans to Deposits Ratio', current: 89.8, target: 85.0, maximum: 90.0, status: 'above' },
  { ratio: 'Core Funding Ratio', current: 58.4, target: 65.0, minimum: 55.0, status: 'below' },
  { ratio: 'Liquid Assets Ratio', current: 18.2, target: 20.0, minimum: 15.0, status: 'below' },
  { ratio: 'Wholesale Funding Ratio', current: 34.7, target: 30.0, maximum: 35.0, status: 'above' }
];
