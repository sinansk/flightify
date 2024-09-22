import { configureStore } from "@reduxjs/toolkit";
import searchFlightReducer from "./slices/searchFlightSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    searchFlight: searchFlightReducer,
    auth: authReducer,
  },
});
