import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../components/userAuthContext";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const { user, token, logout } = useContext(UserAuthContext);
  const [bookedEvents, setBookedEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings/mybookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookedEvents(res.data);
      console.log("📦 Booked events:", res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBookings();
    }
  }, [token, location.state?.refresh]);

  const handleCancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmCancel) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/cancel/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookedEvents((prev) => prev.filter((b) => b._id !== bookingId));
      alert("❌ Booking cancelled.");
    } catch (err) {
      console.error("Cancel error:", err);
      alert("Failed to cancel booking.");
    }
  };

  return (
    <div className="dashboard-page" style={{ marginTop: "80px" }}>
      <div className="dashboard-container">
        <h1>🎉 Welcome back, {user?.name}!</h1>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
        <button onClick={handleLogout}>Logout</button>

        <div className="booked-events-section">
          <h3>🎫 Your Booked Events</h3>
          {bookedEvents.filter((b) => b.event).length === 0 ? (
            <p>No events booked yet.</p>
          ) : (
            <div className="events-grid">
              {bookedEvents
                .filter((booking) => booking.event)
                .map((booking) => (
                  <div className="event-card" key={booking._id}>
                    {booking.subEventDetails?.image && (
                      <img
                        src={booking.subEventDetails.image}
                        alt={booking.subEventDetails.title || "Sub Event"}
                        className="event-img"
                      />
                    )}

                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleCancelBooking(booking._id)}
                    >
                      Cancel Booking
                    </button>

                    <div className="event-info">
                      <h5>
                        {booking.event.title} -{" "}
                        {booking.subEventDetails?.title || "Main Event"}
                      </h5>
                      {booking.subEventDetails?.description && (
                        <p>{booking.subEventDetails.description}</p>
                      )}
                      {booking.subEventDetails?.time && (
                        <p>🕒 {booking.subEventDetails.time}</p>
                      )}
                      <p>
                        📅 {new Date(booking.event.date).toLocaleDateString()}
                      </p>
                      <p>📍 {booking.event.location}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
