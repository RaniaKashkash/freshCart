import { createContext, useState } from "react";
import { useLocation } from "react-router";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  let userId = null;
  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded?.id;
  }
  console.log(userId);

  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("userData");
    setToken(null);
  }
  return (
    <AuthContext.Provider
      value={{ token, setToken, userEmail, setUserEmail, logout, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
}
