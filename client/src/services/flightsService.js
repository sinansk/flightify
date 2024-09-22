import axios from "axios";

const API_URL = "http://localhost:5000/api/flights"; //

export const getFlights = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
