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

  return <button onClick={logoutHandler} className="border-blue-700 border rounded-md py-2 px-3 text-blue-700 hover:bg-blue-700 hover:text-white">Logout</button>;
};

export default AuthLogout;