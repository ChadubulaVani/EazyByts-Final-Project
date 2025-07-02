import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../components/userAuthContext";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      console.log("Login success:", res.data);
      login(res.data.user, res.data.token);
      alert("Login successful!");

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper" style={{ marginTop: "80px" }}>
      <marquee
        className="login-marquee"
        behavior="scroll"
        direction="left"
        scrollamount="15"
      >
        🎟️ Welcome back! Your next amazing event awaits — log in and make it
        yours! ✨
      </marquee>

      <div className="login-page">
        <div className="login-card">
          <div className="login-left">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240704/pngtree-new-event-management-outdoor-background-image_15957681.jpg"
              alt="Event"
            />
          </div>
          <div className="login-right">
            <h2>Login to Continue</h2>
            <p style={{ fontSize: "20px" }}>
              Don’t have an account?{" "}
              <a href="/register" style={{ color: "black", fontSize: "22px" }}>
                Register here
              </a>
            </p>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
