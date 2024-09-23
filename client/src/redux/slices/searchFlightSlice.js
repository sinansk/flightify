import { createSlice } from "@reduxjs/toolkit";
import { fetchFlights } from "../thunks/searchFlightThunks";
import { format } from "date-fns";
const initialState = {
  departure: {
    name: "Sabiha Gokcen",
    iata_code: "SAW",
    city: "Istanbul",
    departureDate: null,
  },
  arrival: {
    name: "Amsterdam Schiphol",
    iata_code: "AMS",
    city: "Amsterdam",
    returnDate: null,
  },
  flightType: "One Way",
  flightDirection: "A",
  route: "IST",
  flights: [],
  status: "idle",
  error: null,
};

const searchFlightSlice = createSlice({
  name: "searchFlight",
  initialState,
  reducers: {
    setDeparture: (state, action) => {
      state.departure = action.payload;
      if (action.payload) {
        state.arrival = {
          name: "Amsterdam Schiphol",
          iata_code: "AMS",
          city: "Amsterdam",
        };
        state.flightDirection = "A";
        state.route = action.payload?.iata_code;
      }
    },
    setArrival: (state, action) => {
      state.arrival = action.payload;
      if (action.payload) {
        state.departure = {
          name: "Amsterdam Schiphol",
          iata_code: "AMS",
          city: "Amsterdam",
        };
        state.flightDirection = "D";
        state.route = action.payload?.iata_code;
      }
    },
    setFlightType: (state, action) => {
      state.flightType = action.payload;
      if (action.payload === "One Way") {
        state.returnDate = null;
      }
    },
    setDepartureDate: (state, action) => {
      state.departure.departureDate = format(action.payload, "yyyy-MM-dd");
    },
    setReturnDate: (state, action) => {
      state.arrival.returnDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.flights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setDeparture,
  setArrival,
  setFlightType,
  setDepartureDate,
  setReturnDate,
} = searchFlightSlice.actions;
export default searchFlightSlice.reducer;
