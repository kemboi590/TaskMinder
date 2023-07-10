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
          <Link to="/">
            <li>
              <ImHome />
              Dashboard
            </li>
          </Link>
          {/* tasks */}
          <Link to="/tasks">
            <li>
              <FaTasks />
              Tasks
            </li>
          </Link>
        </div>
        {/* second nav div */}
        <div className="second_nav">
          {/* register */}
          <Link to="/register">
            <li>
              <GiArchiveRegister />
              Register
            </li>
          </Link>
          {/* login */}
          <Link to="/login">
            <li>
              <MdOutlineLogin />
              Login
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
