import React from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { logOutuser } from "../../Redux/apiCall";

function Profile() {
  const userData = useSelector((state) => state.user.user);
  console.log(userData);

  const dispatch = useDispatch();
  const hadleLogOut = () => {
    logOutuser(dispatch);
    alert("logout success");
  };
  return (
    <div className="profile_page">
      <h1 className="profile_title">Profile</h1>
      <h2>User ID: {userData?.user_id}</h2>
      <h2>User Name: {userData?.username} </h2>
      <h2>Email:{userData?.email} </h2>
      <h2>Role: {userData?.role} </h2>

      <button onClick={hadleLogOut}>Logout</button>
    </div>
  );
}

export default Profile;
