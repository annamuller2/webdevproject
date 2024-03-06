import Main from "./Main/Main.js";
import Form from "./Form/Form.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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