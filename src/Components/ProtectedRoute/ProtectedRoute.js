import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

//this uses the navigate function to redirect the user if not authenticated
const ProtectedRoute = ({ element: Component, ...rest }) => {
    if (checkUser()) {
      return <Component {...rest} />;
    } else {
      return <Navigate to="/auth" replace />;
    }
  };
  
  export default ProtectedRoute;