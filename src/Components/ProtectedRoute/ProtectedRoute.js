import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
    if (checkUser()) {
      return <Component {...rest} />;
    } else {
      return <Navigate to="/auth" replace />;
    }
  };
  
  export default ProtectedRoute;