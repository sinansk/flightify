import { configureStore } from "@reduxjs/toolkit";
import searchFlightReducer from "./searchFlightSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    searchFlight: searchFlightReducer,
    auth: authReducer,
  },
});
