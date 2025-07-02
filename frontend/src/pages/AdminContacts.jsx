import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminContacts.css";

const AdminContacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/api/admin/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching contact messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

  return (
    <div className="container py-4">
      <h2 className="mb-3">📬 Contact Messages</h2>
      {loading ? (
        <p>Loading...</p>
      ) : messages.length === 0 ? (
        <p>No messages submitted yet.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={msg._id}>
                <td>{index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContacts;
