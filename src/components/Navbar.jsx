import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <NavLink to={"/nombres"}>listado nombres</NavLink>
        </li>
        <li>
          <NavLink to={"/AOE2"}>Age of Empire II</NavLink>
        </li>
        <li>
          <NavLink to={"/text"}>Result</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
