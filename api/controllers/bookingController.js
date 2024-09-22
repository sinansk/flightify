const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { flightNumber, departure, arrival, date } = req.body;
  const userId = req.user.id;

  try {
    const booking = await Booking.create({
      user: userId,
      flightNumber,
      departure,
      arrival,
      date,
    });

    res.status(201).json({ message: "Your ticket successfully created!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking!" });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings!" });
  }
};
