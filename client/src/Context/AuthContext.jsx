import { jwtDecode } from "jwt-decode";

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setUserLoading(true);
    const saveToken = localStorage.getItem("Authorization");

    if (saveToken) {
      const decodedTokenInfo = jwtDecode(saveToken);
      setUser(decodedTokenInfo);
      setUserLoading(false);
    }
  }, [token]);

  const authValue = {
    user,
    token,
    userLoading,
    setUser,
    setToken,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
