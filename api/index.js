require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const flightRoutes = require("./routes/flightRoutes");

connectDB();

const app = express();

app.get("/", (req, res) => {
  console.log("here");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/flights", flightRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on ${PORT}`);
});
