import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

//this is the authentication page
const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

//login and register buttons
  return (
    <div>
      
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">My Digital Cookbook</span></h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at My Digital Cookbook we encourage users to browse our extensive collection of digitized home recipes, and to document their own recipes! Register for an account below if you are a new user, or login if you are a returning one. Happy cooking!</p>

      <div class="flex justify-center">
        <div class="max-w-xs flex flex-col rounded-lg shadow-sm">
          <a href="/auth/register" class="py-3 px-4 inline-flex items-center gap-x-2 rounded-md text-base font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
            Register
          </a>
          <br />
          <br />
          <a href="/auth/login" class="-mt-px py-3 px-4 inline-flex items-center gap-x-2 text-base font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthModule;