import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", formData);

      localStorage.setItem("token", res.data.token);

      alert("Registration Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="register">
      <h2 className="registerh2">Register</h2>

      <form onSubmit={handleSubmit} className="registerform">
        <input
          className="registerinput"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          className="registerinput"
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
          className="registerinput"
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

        <button type="submit" className="registerbutton">Register</button>
      </form>

      <br />

      <p className="registerp">
        Already have an account?{" "}
        <Link to="/" className="registerlink">Login</Link>
      </p>
    </div>
  );
}