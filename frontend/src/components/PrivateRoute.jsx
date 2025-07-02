import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "./UserAuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(UserAuthContext);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
