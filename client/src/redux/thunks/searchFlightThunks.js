import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFlights } from "@/services/flightsService";

export const fetchFlights = createAsyncThunk(
  "searchFlight/fetchFlights",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await getFlights(formData);
      return response.flights;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
