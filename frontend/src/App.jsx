import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import MainEvents from "./pages/MainEvents";
import SubEvents from "./pages/SubEvents";
import PaymentPage from "./pages/Payment";
import Ticket from "./components/Ticket";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoutes";
import AdminBookings from "./pages/AdminBookings";
import AdminEventManager from "./pages/AdminEventManager";
import AdminContacts from "./pages/AdminContacts";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/events"
        element={
          <Layout>
            <MainEvents />
          </Layout>
        }
      />

      <Route
        path="/events/:category"
        element={
          <Layout>
            <SubEvents />
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <Layout>
            <PaymentPage />
          </Layout>
        }
      />
      <Route
        path="/ticket"
        element={
          <Layout>
            <Ticket />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/events" element={<AdminEventManager />} />
      <Route
        path="/admin/feedback"
        element={
          <AdminRoute>
            <AdminContacts />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;
