import Main from "./Main/Main.js";
import Form from "./Form/Form.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//This is where the main components are, so far we have main and a user input formthat doesn't connect to anything
export default function Components() {
  return (
    <Router>
      <Footer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}