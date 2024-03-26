import { Link } from "react-router-dom";

//This is the code for the routing footer
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
