import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subEventTitle, price } = location.state || {};

  const [darkMode, setDarkMode] = useState(false);

  const handleConfirm = () => {
    alert("✅ Payment Successful! Ticket booked.");

    navigate("/ticket", {
      state: {
        subEventTitle,
        price,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        eventId: Math.floor(Math.random() * 1000000),
        eventTitle: location.state?.eventTitle,
      },
    });
  };

  return (
    <div
      className={`payment-container ${darkMode ? "dark" : "light"}`}
      style={{ marginTop: "80px" }}
    >
      <button
        className="theme-toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <h2 className="payment-heading">💳 Secure Payment</h2>

      <div className="payment-box">
        <div className="event-summary">
          <h4>🎫 Event: {subEventTitle}</h4>
          <p>Amount to Pay: ₹{price}</p>
        </div>

        <div className="scanner-section">
          <h5>Scan & Pay</h5>
          <img
            src="https://cdn.osxdaily.com/wp-content/uploads/2022/04/qr-code-example.jpg"
            alt="QR Scanner"
            className="qr-code"
          />
          <p>Scan with your UPI app to proceed.</p>
        </div>

        <div className="payment-methods">
          <h6>Other Payment Modes</h6>
          <ul>
            <li>✅ UPI</li>
            <li>💳 Debit / Credit Card</li>
            <li>🏦 Net Banking</li>
            <li>📱 Wallets</li>
          </ul>
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>
          ✅ Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
