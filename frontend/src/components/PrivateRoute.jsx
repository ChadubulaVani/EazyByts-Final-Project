import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "./userAuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(UserAuthContext);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
