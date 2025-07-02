import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SubEvents.css";

const SubEvents = () => {
  const { category } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchSubEvents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/events/category/${category}`
      );
      setEvent(res.data[0]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleBook = async (eventId, subEvent) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to book.");

    try {
      await axios.post(
        "https://eazybyts-final-project-3.onrender.com/api/bookings/book",
        {
          eventId: eventId,
          subEvent: subEvent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Booking successful!");
      navigate("/payment", {
        state: {
          subEventTitle: subEvent.title,
          price: subEvent.price,
        },
      });
    } catch (err) {
      console.error(err);
      alert(`❌ Booking failed: ${err.response?.data?.message || err.message}`);
    }
  };

  useEffect(() => {
    fetchSubEvents();
  }, [category]);

  if (loading) return <p>Loading sub-events...</p>;

  return (
    <div className="main-container" style={{ marginTop: "80px" }}>
      <h2 className="mb-2">{event?.title} Events</h2>
      <p className="p1">{event?.description}</p>
      <div className="row">
        {event?.subEvents?.map((sub, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="c1">
              <img
                src={sub.image}
                className="card-img-top"
                alt={sub.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h3>{sub.title}</h3>
                <p style={{ fontSize: "18px" }}>{sub.description}</p>
                <p style={{ fontSize: "15px" }}>🕒 {sub.time}</p>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  💰 Price: ₹{sub.price}
                </p>

                <button
                  className="btn btn-warning"
                  onClick={() => handleBook(event._id, sub)}
                >
                  Book Now - Just ₹{sub.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubEvents;
