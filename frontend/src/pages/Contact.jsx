import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/", formData);
      setStatus(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`contact-container ${darkMode ? "dark" : "light"}`}
      style={{ marginTop: "80px" }}
    >
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <h2>Contact Us 📬</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default Contact;
