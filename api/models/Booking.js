const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  flightName: { type: String, required: true },
  prefixICAO: { type: String, required: true },
  departure: { type: Object, required: true },
  arrival: { type: Object, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
