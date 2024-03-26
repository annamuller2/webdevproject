import Main from "./Main/Main.js";
import Form from "./Form/Form.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";

//This is where the main components are, so far we have main and a user input formthat doesn't connect to anything
export default function Components() {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}