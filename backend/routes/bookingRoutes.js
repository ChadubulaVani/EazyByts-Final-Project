const express = require("express");
const router = express.Router();
const {
  bookEvent,
  getUserBookings,
  cancelBooking,
} = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/book", authMiddleware, bookEvent); // POST - /api/bookings/book
router.get("/mybookings", authMiddleware, getUserBookings); // GET - /api/bookings/mybookings
router.delete("/cancel/:bookingId", authMiddleware, cancelBooking);

module.exports = router;
