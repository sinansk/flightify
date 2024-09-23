const axios = require("axios");

exports.getFlights = async (req, res) => {
  const { scheduleDate, flightDirection, route } = req.body;

  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        params: {
          scheduleDate,
          flightDirection,
          route,
          includedelays: false,
          page: 0,
          sort: "scheduleTime",
        },
        headers: {
          ResourceVersion: "v4",
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_APP_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights!" });
  }
};
