import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/users/me`, {
          method: "GET",
          credentials: "include",
        });
        if (response) {
          const data = await response.json();
          console.log(data);
          setUser(data.user);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCurrentUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
