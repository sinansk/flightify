import { createSlice } from "@reduxjs/toolkit";
import { fetchMyBookings } from "../thunks/myBookingsThunk";

const initialState = {
  bookings: null,
  status: "idle",
  error: null,
};

const myBookingSlice = createSlice({
  name: "myBookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMyBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload;
      })
      .addCase(fetchMyBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {} = myBookingSlice.actions;
export default myBookingSlice.reducer;
