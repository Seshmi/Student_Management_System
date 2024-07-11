import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/login">Admin Login</Link>
        </li>
        <li>
          <Link to="/student/login">Student Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
