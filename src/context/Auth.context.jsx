import { createContext, useState } from "react";
import { useLocation } from "react-router";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  const [user, setUser] = useState(
    localStorage.getItem("userData") || sessionStorage.getItem("userData")
  );

  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("userData");
    setToken(null);
  }
  return (
    <AuthContext.Provider
      value={{ token, setToken, userEmail, setUserEmail, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
