import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authimage from "../../Images/authimage.jpg";

const schema = yup.object().shape({
  UserName: yup.string().required("Full name is required"),
  Email: yup.string().email("Email is invalid").required("Email is required"),
  Role: yup.string().required("Role is required"),
  Password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function Register() {
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
    <div className="registration_page">
      <div className="registration_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="auth_title">REGISTER YOUR ACCOUNT</h3>
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
          {/* Select role */}
          <>
            <label htmlFor="Role"></label>
            <select id="Role" {...register("Role")}>
              <option value="">Select Your Role</option>
              <option value="TeamLead">TeamLead</option>
              <option value="Teammate">Teammate</option>
            </select>
            <p>{errors.Role?.message}</p>
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
            <input
              className="inputFieldLogin"
              type="password"
              placeholder="Confirm your password"
              {...register("ConfirmPassword")}
            />
            <p>{errors.ConfirmPassword?.message}</p>
          </>
          <br />
          <>
            <input type="submit" value="REGISTER" className="submit_btn" />
          </>
          <br />
        </form>
      </div>
      <div className="registration_image">
        <div className="bg_image">
          <img src={authimage} alt="authimage" />
        </div>
      </div>
    </div>
  );
}

export default Register;
