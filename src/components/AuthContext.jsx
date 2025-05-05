import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('easyconstructUser');
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // This is a mock login for demo purposes
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock user data
    const mockUser = {
      id: 'u1',
      name: 'John Doe',
      email,
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('easyconstructUser', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const register = async (name, email, password) => {
    // This is a mock registration for demo purposes
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock user data
    const mockUser = {
      id: 'u' + Date.now().toString(),
      name,
      email,
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('easyconstructUser', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('easyconstructUser');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
