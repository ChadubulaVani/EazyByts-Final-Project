const mongoose = require("mongoose");

const subEventSchema = new mongoose.Schema({
  title: String,
  image: String,
  time: String,
  description: String,
  price: Number,
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: Date,
  location: String,
  description: String,
  category: String,
  subEvents: [subEventSchema],
});

module.exports = mongoose.model("Event", eventSchema);
