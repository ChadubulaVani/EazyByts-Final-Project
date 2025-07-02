const Event = require("../models/eventModel");

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch events", error: err.message });
  }
};

// Get events by category
exports.getEventsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const events = await Event.find({ category });
    res.status(200).json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch category events", error: err.message });
  }
};
