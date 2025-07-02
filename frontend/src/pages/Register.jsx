import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        ...formData,
        role: "user",
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-wrapper" style={{ marginTop: "80px" }}>
      <marquee
        className="register-marquee"
        behavior="scroll"
        direction="left"
        scrollamount="15"
      >
        🎉 Great memories start with great events. Don’t miss out — register
        now! 🎟️
      </marquee>
      <div className="register-page">
        <div className="register-card">
          <div className="register-left">
            <img src="https://wallpapercave.com/wp/wp7488460.jpg" alt="Event" />
          </div>
          <div className="register-right">
            <h2>Register for Events</h2>
            <p style={{ fontSize: "20px" }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: "black", fontSize: "22px" }}>
                Login here
              </a>
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
