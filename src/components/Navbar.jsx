import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import ResultContext from "../store/result-context";
const Navbar = () => {
  const { totalResult } = useContext(ResultContext);
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <NavLink to={"/users"}>User list</NavLink>
        </li>
        <li>
          <NavLink to={"/AOE2"}>Age of Empire II</NavLink>
        </li>
        <li>
          <NavLink to={"/location"}>Get Location</NavLink>
        </li>
        <li>
          <NavLink to={"/result"}>Result</NavLink>
          <span className="total-result">{totalResult}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
