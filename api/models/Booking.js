const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
