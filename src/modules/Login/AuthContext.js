
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = (email) => {
    // Logic to authenticate the user (e.g., make an API request)
    // Set the user data in the state if authentication is successful
    setUser({ email }); // You can store more user data as needed

    // You might also want to store a token in localStorage or cookies for future requests
  };

  const logoutUser = () => {
    // Logic to log the user out (e.g., clear user data and tokens)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};