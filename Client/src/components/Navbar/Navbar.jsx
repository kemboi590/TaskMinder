import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import Icon from "../../Images/Icon.png";

function Navbar() {
  return (
    <div className="navbar_page">
      <ul>
        {/* first nav div */}
        <div className="first_nav">
        <div className="myLogo">
            <img src={Icon} alt="icon" />
          </div>
          <li>
            <Link to="/"> Dashboard </Link>
          </li>
          <li>
            <Link to="/tasks"> Tasks </Link>
          </li>
        </div>
        {/* second nav div */}
        <div className="second_nav">
          <li>
            <Link to="/register"> Register </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
