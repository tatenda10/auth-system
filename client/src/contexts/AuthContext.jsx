import { createContext, useContext, useState } from 'react';
import BASE_URL from './Api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      // Simulate server authentication for specific credentials
      if (username === 'admin@mugonat.com' && password === 'Mugonat#99') {
        // Simulate server delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock successful response
        const mockUserData = {
          id: 1,
          username: 'admin@mugonat.com',
          role: 'System Administrator',
          email: 'admin@mugonat.com',
          name: 'System Administrator',
          permissions: ['admin', 'read', 'write']
        };
        
        const mockToken = 'mock-jwt-token-' + Date.now();
        
        console.log('✅ Simulated login successful, user:', mockUserData);
        
        setUser(mockUserData);
        setToken(mockToken);
        localStorage.setItem('token', mockToken);
        localStorage.setItem('user', JSON.stringify(mockUserData));
        
        return { success: true, user: mockUserData };
      }
      
      // Simulate server call for other credentials
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      // Check if response is JSON before trying to parse it
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('🔍 Backend response:', data);
      } else {
        // Handle non-JSON responses (like rate limiting errors)
        const textResponse = await response.text();
        console.log('🔍 Non-JSON response:', textResponse);
        
        if (response.status === 429) {
          throw new Error('Too many login attempts. Please wait a moment and try again.');
        } else {
          throw new Error(`Server error: ${textResponse}`);
        }
      }

      if (response.ok) {
        const { token: authToken, user: userData } = data;
        console.log('✅ Login successful, user:', userData);
        
        setUser(userData);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true, user: userData };
      } else {
        throw new Error(data.error || 'Username or password is wrong');
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
