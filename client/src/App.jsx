import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import Dashboard from './pages/shared/Dashboard';
import InputData from './pages/input-data/InputData';
import CapitalPlan from './pages/capital-plan/CapitalPlan';
import NotFound from './pages/shared/NotFound';
import LiquidityRisk from './pages/liquidity-risk/LiquidityRisk';
import LiquidityGap from './pages/liquidity-gap/LiquidityGap';
import InterestRisk from './pages/interest-risk/InterestRisk';
import RiskAppetiteStatement from './pages/risk-appetite-statement/RiskAppetiteStatement';
import FxRisk from './pages/fx-risk/FxRisk';
import CreditRisk from './pages/credit-risk/CreditRisk';
import OperationalRisk from './pages/operational-risk/OperationalRisk';
import Configurations from './pages/configurations/Configurations';
import FinancialPerformance from './pages/financial-performance/FinancialPerformance';
import ModelRisk from './pages/model-risk/ModelRisk';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<ProtectedRoute>
          <Layout />
        </ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="input-data" element={<InputData />} />
        <Route path="capital-plan" element={<CapitalPlan />} />
        <Route path="liquidity-risk" element={<LiquidityRisk />} />
        <Route path="liquidity-gap" element={<LiquidityGap />} />
        <Route path="interest-risk" element={<InterestRisk />} />
        <Route path="ras" element={<RiskAppetiteStatement />} />
        <Route path="credit-risk" element={<CreditRisk />} />
        <Route path="fx-risk" element={<FxRisk />} />
        <Route path="operational-risk" element={<OperationalRisk />} />
        <Route path="configurations" element={<Configurations />} />
        <Route path="financial-performance" element={<FinancialPerformance />} />
        <Route path="model-risk" element={<ModelRisk />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
