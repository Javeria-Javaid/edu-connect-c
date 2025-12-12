import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    const normalizedRole = userData.role || 'admin';
    const authenticatedUser = {
      ...userData,
      role: normalizedRole
    };
    console.log('🔐 AuthContext Login:', {
      email: authenticatedUser.email,
      role: authenticatedUser.role,
      fullData: authenticatedUser
    });
    setUser(authenticatedUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      role: user?.role ?? null,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

