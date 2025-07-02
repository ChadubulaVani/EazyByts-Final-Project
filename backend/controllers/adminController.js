const Booking = require("../models/bookingModel.js");
const Event = require("../models/eventModel.js");

// ✅ GET all bookings (Admin only)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("event")
      .populate({ path: "subEvent", strictPopulate: false });

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Admin getAllBookings error:", error);
    res.status(500).json({ message: "Server error while fetching bookings" });
  }
};

// ✅ GET all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch events", error: error.message });
  }
};

// ✅ CREATE new event
const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event created", event: newEvent });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create event", error: error.message });
  }
};

// ✅ UPDATE existing event
const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event updated", event: updatedEvent });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update event", error: error.message });
  }
};

// ✅ DELETE an event
const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete event", error: error.message });
  }
};
const Feedback = require("../models/contact");

const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ submittedAt: -1 });
    res.status(200).json({ feedbacks });
  } catch (error) {
    console.error("Fetch feedback error:", error);
    res.status(500).json({ message: "Error fetching feedback" });
  }
};

module.exports = {
  getAllBookings,
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getAllFeedback,
};
