import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styles } from "./Header.module.css";
const Header = () => {
  const navStyle = ({ isActive }) =>
    `px-3 py-2 transition ${
      isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
    }`;
  return (
    <header class="bg-blue-600 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold">MyApp</h1>

        <nav class="space-x-6">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>
          <NavLink to="about" className={navStyle}>
            About
          </NavLink>
          <NavLink to="contactUs" className={navStyle}>
            Contact
          </NavLink>
          <NavLink to="counterRedux" className={navStyle}>
            Counter redux
          </NavLink>
          <NavLink to="counterRedux1" className={navStyle}>
            Counter redux1
          </NavLink>
          <NavLink to="counterRedux2" className={navStyle}>
            Counter redux2
          </NavLink>
          <NavLink to="cloneElement" className={navStyle}>
            Clone Element
          </NavLink>

          <NavLink to="user" className={navStyle}>
            User
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
