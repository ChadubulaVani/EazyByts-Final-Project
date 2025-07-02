import React from "react";

const AdminDashboard = () => {
  return (
    <div style={{ backgroundColor: "yellow", height: "900px" }}>
      <div
        className="admin-dashboard container"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <h1>🛠️ Admin Dashboard</h1>
        <h3>Welcome, Admin! Here are your controls:</h3>

        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body" style={{ fontSize: "20px" }}>
                <h3 className="card-title">Manage Events</h3>
                <p className="card-text">
                  Create, edit or delete events & sub-events.
                </p>
                <a
                  href="/admin/events"
                  className="btn btn-primary"
                  style={{ fontSize: "25px" }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className="card shadow-sm">
              <div className="card-body" style={{ fontSize: "20px" }}>
                <h3 className="card-title">View Bookings</h3>
                <p className="card-text">See all user bookings and details.</p>
                <a
                  href="/admin/bookings"
                  className="btn btn-success"
                  style={{ fontSize: "25px" }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body" style={{ fontSize: "20px" }}>
                <h3 className="card-title">Feedback & Contacts</h3>
                <p className="card-text">
                  Review user feedback and contact queries.
                </p>
                <a
                  href="/admin/feedback"
                  className="btn btn-warning"
                  style={{ fontSize: "25px" }}
                >
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
