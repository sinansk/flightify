import { configureStore } from "@reduxjs/toolkit";
import searchFlightReducer from "./slices/searchFlightSlice";
import authReducer from "./slices/authSlice";
import myBookingsReducer from "./slices/myBookingsSlice";

export const store = configureStore({
  reducer: {
    searchFlight: searchFlightReducer,
    auth: authReducer,
    myBookings: myBookingsReducer,
  },
});
