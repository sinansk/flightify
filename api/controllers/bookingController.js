const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const { flightName, prefixICAO, departure, arrival, date } = req.body;
  const userId = req.user._id;
  console.log(req, "req backed");
  try {
    const booking = await Booking.create({
      user: userId,
      flightName,
      prefixICAO,
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
