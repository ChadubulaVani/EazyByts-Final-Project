import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserAuthContext } from "../components/userAuthContext";
import "./AdminBookings.css";

const AdminBookings = () => {
  const { token } = useContext(UserAuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(res.data.bookings);
    } catch (err) {
      console.error("Failed to fetch admin bookings:", err);
      setError("Error fetching bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchBookings();
  }, [token]);

  return (
    <div className="admin-bookings container py-4">
      <h2 className="mb-3">📋 All Event Bookings</h2>

      {loading && <p>Loading bookings...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && bookings.length === 0 && <p>No bookings found.</p>}

      {!loading && bookings.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th style={{ fontSize: "26px" }}>#</th>

                <th style={{ fontSize: "26px" }}>Event</th>
                <th style={{ fontSize: "26px" }}>Sub Event</th>
                <th style={{ fontSize: "26px" }}>Price</th>
                <th style={{ fontSize: "26px" }}>Booked At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td style={{ fontSize: "24px", fontWeight: "600" }}>
                    {index + 1}
                  </td>

                  <td style={{ fontSize: "24px", fontWeight: "600" }}>
                    {booking.event?.title || "N/A"}
                  </td>
                  <td style={{ fontSize: "24px", fontWeight: "600" }}>
                    {booking.subEvent?.title || "Main Event"}
                  </td>
                  <td style={{ fontSize: "24px", fontWeight: "600" }}>
                    ₹{booking.price}
                  </td>
                  <td style={{ fontSize: "24px", fontWeight: "600" }}>
                    {new Date(booking.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
