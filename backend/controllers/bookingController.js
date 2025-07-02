const Booking = require("../models/bookingModel.js");

// Create a new booking with subEvent
exports.bookEvent = async (req, res) => {
  try {
    const { eventId, subEvent } = req.body;

    if (!eventId || !subEvent?.title) {
      return res.status(400).json({ message: "Invalid booking data" });
    }

    const newBooking = new Booking({
      user: req.user.userId,
      event: eventId,
      price: subEvent.price,
      subEventDetails: {
        title: subEvent.title,
        image: subEvent.image,
        time: subEvent.time,
        description: subEvent.description,
        price: subEvent.price,
      },
    });

    await newBooking.save();
    res
      .status(201)
      .json({ message: "Event booked successfully", booking: newBooking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
};

// Get all bookings for the logged-in user
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId }).populate(
      "event"
    );

    res.status(200).json(bookings);
  } catch (err) {
    console.error("🔥 Booking Fetch Error:", err);
    res.status(500).json({
      message: "Failed to fetch bookings",
      error: err.message,
    });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findOneAndDelete({
      _id: bookingId,
      user: req.user.userId,
    });

    if (!booking) {
      return res
        .status(404)
        .json({ message: "Booking not found or unauthorized" });
    }

    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to cancel booking", error: err.message });
  }
};
