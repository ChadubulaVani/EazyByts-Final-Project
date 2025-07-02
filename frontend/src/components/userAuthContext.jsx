import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          id: decoded.id,
          role: decoded.role,
          email: decoded.email,
          name: decoded.name,
          token: token,
        });
      } catch (error) {
        console.error("Invalid token:", error.message);
        setUser(null);
      }
    }
  }, [token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.clear();
  };

  return (
    <UserAuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};
