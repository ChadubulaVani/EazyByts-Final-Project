import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminEventManager.css"; 

const AdminEventManager = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [editingEventId, setEditingEventId] = useState(null);
  const [token] = useState(localStorage.getItem("token"));

  // ✅ Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/admin/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEvents(res.data.events || []);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ Create a new event
  const handleCreate = async () => {
    try {
      await axios.post("/api/admin/events", newEvent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewEvent({ title: "", description: "", date: "", location: "" });
      fetchEvents();
      alert("✅ Event created successfully");
    } catch (err) {
      console.error("Create error:", err);
      alert("Failed to create event");
    }
  };

  // ✅ Update an event
  const handleUpdate = async (id) => {
    try {
      await axios.put(`/api/admin/events/${id}`, newEvent, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingEventId(null);
      setNewEvent({ title: "", description: "", date: "", location: "" });
      fetchEvents();
      alert("✅ Event updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update event");
    }
  };

  // ✅ Delete an event
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEvents();
      alert("❌ Event deleted");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete event");
    }
  };

  return (
    <div className="admin-events-page container">
      <h1>📅 Manage Events</h1>

      <div className="event-form mt-4">
        <h4>{editingEventId ? "✏️ Edit Event" : "➕ Create New Event"}</h4>
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
        />
        <button
          className="btn btn-success mt-3"
          onClick={() =>
            editingEventId ? handleUpdate(editingEventId) : handleCreate()
          }
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          {editingEventId ? "Update" : "Create"}
        </button>
      </div>

      <hr />

      <div className="event-list mt-4">
        <h4>📋 Existing Events</h4>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev._id}>
                  <td>{ev.title}</td>
                  <td>{new Date(ev.date).toLocaleDateString()}</td>
                  <td>{ev.location}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => {
                        setEditingEventId(ev._id);
                        setNewEvent({
                          title: ev.title,
                          description: ev.description,
                          date: ev.date.slice(0, 10),
                          location: ev.location,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(ev._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminEventManager;
