import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings"; //

export const createBooking = async (bookingData, token) => {
  const response = await axios.post(API_URL, bookingData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getMyBookings = async (token) => {
  const response = await axios.get(`${API_URL}/my-flights`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
