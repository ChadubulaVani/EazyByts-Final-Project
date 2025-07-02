const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

const {
  getAllBookings,
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getAllFeedback,
} = require("../controllers/adminController");

// Admin Bookings
router.get("/bookings", authenticateUser, adminOnly, getAllBookings);

// Admin Events Management
router.get("/events", authenticateUser, adminOnly, getAllEvents);
router.post("/events", authenticateUser, adminOnly, createEvent);
router.put("/events/:id", authenticateUser, adminOnly, updateEvent);
router.delete("/events/:id", authenticateUser, adminOnly, deleteEvent);
router.get("/contacts", authenticateUser, adminOnly, getAllFeedback);

module.exports = router;
