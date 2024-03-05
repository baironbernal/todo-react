import { useEffect, useState } from 'react';

const useAuthentication = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') ? localStorage.getItem('isAuthenticated') : false );
    
    const userAllowed = {
      username: 'baironbernal',
      password: '1234'
    }

    useEffect(() => {
      localStorage.setItem('isAuthenticated', isAuthenticated.toString());
    }, [isAuthenticated]);
    
   
    const login = (formData) => {
      return new Promise((resolve) => {
        if (formData.username === userAllowed.username && formData.password === userAllowed.password) {
          setIsAuthenticated(true);
          localStorage.setItem('isAuthenticated', 'true'); // Update localStorage
          resolve(true);
        } else {
          setIsAuthenticated(false); // Set to false if login fails
          resolve(false);
        }
      });
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    };

  return { logout, login, isAuthenticated};
  
}

export default useAuthentication;