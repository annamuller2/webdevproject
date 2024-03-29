import React from "react";
import { logoutUser } from "./AuthService";
import { useNavigate } from "react-router-dom";

//this is the logout button
const AuthLogout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    logoutUser(); 
    alert("Logged out successfully");
    navigate("/auth"); 
  };

  return <button onClick={logoutHandler}>Logout</button>;
};

export default AuthLogout;