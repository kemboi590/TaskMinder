import React from "react";
import "./dashboard.css";

import TaskGif from "../../Images/DashboardGif.gif";

function Dashboard() {
  return (
    <div className="dashboard_page">
      <div className="right_page">
        <div className="imageGif">
          <img src={TaskGif} alt="TaskGif" />
        </div>
      </div>
      <div className="description_details">
        <h3 className="intro_base">Efficient Task Management Made Easy</h3>

        <div className="more_detail">
          <h4>Boost Your Productivity by Managing Tasks.</h4>

          <h3 className="teamwork">The power of Team Work</h3>
        </div>

        <p className="start_today"> Start Today: </p>

        <div className="home_buttons">
          <button>REGISTER</button>
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
