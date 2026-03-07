import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const UserLayout = () => {
  const navigate = useNavigate();
  const logouthandler = () => {
    navigate("/");
  };
  const userId = 2;
  const navStyle = ({ isActive }) =>
    `px-3 py-2 transition ${
      isActive ? "text-red font-semibold" : "text-gray-300 hover:text-red"
    }`;

  return (
    <div>
      <nav class="space-x-6">
        <NavLink to={`${userId}/info`} className={navStyle}>
          Info
        </NavLink>
        <NavLink to="edit" className={navStyle}>
          Edit
        </NavLink>
        <a onClick={logouthandler}>Logout</a>

        <NavLink to="login" className={navStyle}>
          Login
        </NavLink>

        <NavLink to="register" className={navStyle}>
          Register
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default UserLayout;
