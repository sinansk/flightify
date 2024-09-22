const express = require("express");
const {
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my-flights", protect, getMyBookings);

module.exports = router;
