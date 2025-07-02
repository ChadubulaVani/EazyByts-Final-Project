import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Ticket.css";

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subEventTitle, price } = location.state || {};
  const ticketRef = useRef();

  const [darkMode, setDarkMode] = useState(false);

  const handleGoToDashboard = () => {
    navigate("/dashboard", { state: { refresh: true } });
  };

  const handleDownloadPDF = async () => {
    const input = ticketRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Event_Ticket.pdf");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard", { state: { refresh: true } });
    }, 300000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`ticket-page ${darkMode ? "dark-theme" : "light-theme"}`}
      style={{ marginTop: "80px" }}
    >
      <div className="theme-toggle-wrapper">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="ticket-card" ref={ticketRef}>
        <h2>🎟️ Your Event Ticket</h2>
        <p>
          <strong>Event:</strong> {subEventTitle}
        </p>
        <p>
          <strong>Price:</strong> ₹{price}
        </p>
        <p>
          <strong>Status:</strong> ✅ Confirmed
        </p>
        <p>
          <strong>Date:</strong> {new Date().toLocaleDateString()}
        </p>
        <img
          src="https://cdn.osxdaily.com/wp-content/uploads/2022/04/qr-code-example.jpg"
          alt="QR Code"
          className="ticket-qr"
        />
        <p className="note">Show this ticket at the event entry.</p>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          className="confirm-btn mt-3"
          style={{ width: "40%", margin: "10px auto", fontSize: "30px" }}
          onClick={handleDownloadPDF}
        >
          ⬇️ Download Ticket as PDF
        </button>

        <button
          className="btn btn-primary"
          onClick={handleGoToDashboard}
          style={{ margin: "10px auto", fontSize: "20px" }}
        >
          🎫 View Your Booked Events
        </button>
      </div>
    </div>
  );
};

export default TicketPage;
