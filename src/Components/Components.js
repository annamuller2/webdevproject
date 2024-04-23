import Main from "./Main/Main.js";
import Form from "./Form/Form.js";
import UserRecipes from "./UserRecipes/UserRecipes.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import Navbar from "./Footer/Navbar.js";

//These are the routing components, including protected routes, auth, and the main recipes page and form page
export default function Components() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={Main} />}
        />
        <Route
          path="/form"
          element={<ProtectedRoute path="/form" element={Form} />}
        />
        <Route
          path="/userRecipes"
          element={<ProtectedRoute path="/userRecipes" element={UserRecipes} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}