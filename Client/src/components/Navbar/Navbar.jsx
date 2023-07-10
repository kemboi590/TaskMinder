import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import Icon from "../../Images/Icon.png";
import { ImHome } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar_page">
      <ul>
        {/* first nav div */}
        <div className="first_nav">
          <div className="myLogo">
            <img src={Icon} alt="icon" />
          </div>
      {/* dasboard */}
          <li>
            <Link to="/">
              <ImHome />
              Dashboard
            </Link>
          </li>
      {/* tasks */}
          <li>
            <Link to="/tasks">
              <FaTasks />
              Tasks
            </Link>
          </li>

        </div>
        {/* second nav div */}
        <div className="second_nav">

        {/* register */}
          <li>
            <Link to="/register">
              <GiArchiveRegister />
              Register
            </Link>
          </li>
        {/* login */}
          <li>
            <Link to="/login">
              <MdOutlineLogin />
              Login
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
