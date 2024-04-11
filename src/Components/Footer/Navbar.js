import { Link } from "react-router-dom";
import AuthLogout from "../Auth/AuthLogout";

const Navbar = () => (
  <div>
    <nav className="bg-white border-blue-700 dark:border-gray-600 dark:bg-gray-900 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://i.pinimg.com/474x/56/b3/e5/56b3e56b44599e97dfd60afeda9b734d.jpg" className="h-20" alt="Cookbook Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Digital Cookbook</span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <AuthLogout  />
        </div>
        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 active:text-blue-700 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 text-lg">Recipes</Link>
            </li>
            <li>
              <Link to="/form" className="block py-2 px-3 text-gray-900 active:text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg">Add a Recipe!</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
