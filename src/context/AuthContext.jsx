
import { createContext, useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { logout, login, isAuthenticated } = useAuthentication();

  return (
    <AuthContext.Provider value={{ logout, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}


