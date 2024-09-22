import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departure: {
    name: "Yalova Schiphol",
    iata_code: "AMS",
    city: "Amsterdam",
  },
  arrival: {
    name: "Amsterdam Schiphol",
    iata_code: "AMS",
    city: "Amsterdam",
  },
  flightType: "one-way",
  date: null,
};

const searchFlightSlice = createSlice({
  name: "searchFlight",
  initialState,
  reducers: {
    setDeparture: (state, action) => {
      state.departure = action.payload;
      if (action.payload && state.arrival === null) {
        state.arrival = {
          name: "Amsterdam Schiphol",
          iata_code: "AMS",
          city: "Amsterdam",
        };
      }
    },
    setArrival: (state, action) => {
      state.arrival = action.payload;
      if (action.payload && state.departure === null) {
        state.departure = {
          name: "Amsterdam Schiphol",
          iata_code: "AMS",
          city: "Amsterdam",
        };
      }
    },
    setFlightType: (state, action) => {
      state.flightType = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setDeparture, setArrival, setFlightType, setDate } =
  searchFlightSlice.actions;
export default searchFlightSlice.reducer;
