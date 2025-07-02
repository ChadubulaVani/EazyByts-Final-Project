const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  price: Number,
  timestamp: { type: Date, default: Date.now },
  subEventDetails: {
    title: String,
    description: String,
    image: String,
    time: String,
    price: Number,
  },
});

module.exports =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
