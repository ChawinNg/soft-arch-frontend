import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/users/me`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          window.location.href = `http://localhost:3000/login`;
          throw new Error("Failed to fetch current user");
        }
        const data = await response.json();
        console.log(data);
        setUser(data.user);
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
