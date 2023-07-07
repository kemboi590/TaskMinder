import React from "react";
import "./login.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authimage from "../../Images/authimage.jpg";

const schema = yup.object().shape({
  UserName: yup.string().required("Full name is required"),
  Email: yup.string().email("Email is invalid").required("Email is required"),
  Password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <div className="login_page">
      <div className="login_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="login_title">LOGIN YOUR ACCOUNT</h3>
          {/* Input username */}
          <>
            <input
              className="inputFieldLogin"
              type="text"
              placeholder="Your username"
              {...register("UserName")}
            />
            <p>{errors.UserName?.message}</p>

          </>
          <br />
          {/* Input email */}
          <>
            <input
              className="inputFieldLogin"
              type="email"
              placeholder="Your email"
              {...register("Email")}
            />
            <p>{errors.Email?.message}</p>
          </>
          <br />

          {/* Input password */}
          <>
            <input
              className="inputFieldLogin"
              type="password"
              placeholder="Your password"
              {...register("Password")}
            />
            <p>{errors.Password?.message}</p>
          </>
          <br />
          {/* Confirm password */}

          <>
            <input type="submit" value="LOGIN" className="submit_btn" />
          </>
          <br />
        </form>
      </div>
      <div className="login_image">
        <div className="bg_image">
          <img src={authimage} alt="authimage" />
        </div>
      </div>
    </div>
  );
}

export default Login;
