const express = require("express");
const { getFlights } = require("../controllers/flightsController");
const router = express.Router();

router.post("/", getFlights);

module.exports = router;
