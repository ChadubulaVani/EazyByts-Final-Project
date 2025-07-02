import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "./userAuthContext.jsx";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(UserAuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/761/473/original/ex-logo-e-x-design-white-ex-letter-ex-letter-logo-design-initial-letter-ex-linked-circle-uppercase-monogram-logo-vector.jpg"
            alt="Logo"
            className="logo"
          />
          <span style={{ fontSize: "2.1rem", fontWeight: "bold" }}>
            EventXpress
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color:"blue"}}>
                Home
              </Link>
            </li>

            {user?.role === "user" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard" style={{color:"blue"}}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events" style={{color:"blue"}}>
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </>
            )}

            {user?.role === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard" style={{color:"blue"}}>
                    Admin Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/events" style={{color:"blue"}}>
                    Manage Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/bookings" style={{color:"blue"}}>
                    Manage Bookings
                  </Link>
                </li>
              </>
            )}

            {user ? (
              <li className="nav-item">
                <button onClick={logout} className="logout-btn-custom ">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{color:"blue"}}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{color:"blue"}}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
