import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getMyBookings } from "@/services/bookingService";

export const fetchMyBookings = createAsyncThunk(
  "myBookings/fetchMyBookings",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getMyBookings(token);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
