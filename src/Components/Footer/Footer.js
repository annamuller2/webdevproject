import { Link } from "react-router-dom";
import Main from "../Main/Main.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

//This is the code for the routing footer
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/" element={<ProtectedRoute path="/" element={Main} />}>Recipes</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
