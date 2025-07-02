import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "./userAuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserAuthContext);

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />; 
  }

  return children;
};

export default AdminRoute;
