import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login">
      <h2 className="loginh2">Login</h2>

      {/* Login Form */}

      <form onSubmit={handleSubmit} className="loginform">
        <input
          className="logininput"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          className="logininput"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit" className="loginbutton">
          Login
        </button>
      </form>

      <br />

      <p className="loginp">
        Don't have an account?{" "}
        <Link to="/register" className="loginlink">
          Register
        </Link>
      </p>
    </div>
  );
}
