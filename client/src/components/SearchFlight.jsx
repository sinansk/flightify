import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchLocation from "./SearchLocation";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import PlaneSvg from "@/assets/PlaneSvg";
import { useDispatch, useSelector } from "react-redux";
import {
  setDepartureDate,
  setFlightType,
  setReturnDate,
} from "@/redux/slices/searchFlightSlice";
import { fetchFlights } from "../redux/thunks/searchFlightThunks";

const SearchFlight = () => {
  const dispatch = useDispatch();
  const flightType = useSelector((state) => state.searchFlight.flightType);
  const departureDate = useSelector(
    (state) => state.searchFlight.departure?.departureDate,
  );
  const returnDate = useSelector(
    (state) => state.searchFlight.arrival?.returnDate,
  );
  const flightDirection = useSelector(
    (state) => state.searchFlight.flightDirection,
  );
  const route = useSelector((state) => state.searchFlight.route);
  const formData = {
    scheduleDate: departureDate,
    flightDirection: flightDirection,
    route: route,
  };

  const handleSearch = () => {
    dispatch(fetchFlights(formData));
  };

  const handleTabChange = (value) => {
    dispatch(setFlightType(value));
  };

  const handleDepartureDateChange = (date) => {
    dispatch(setDepartureDate(date));
  };

  const handleReturnDateChange = (date) => {
    dispatch(setReturnDate(date));
  };

  return (
    <div className="relative w-full rounded-xl bg-white shadow-sm sm:h-48">
      <div className="mb-4 flex flex-col items-center justify-between">
        <div className="ml-0 flex items-center self-start p-4">
          <PlaneSvg className="h-6 text-black" />
          <h2 className="font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <Tabs
          defaultValue="One Way"
          value={flightType}
          className="w-[400px]"
          onValueChange={handleTabChange}
        >
          <TabsList className="absolute right-4 top-4 rounded-full p-0">
            <TabsTrigger className="h-full rounded-l-full" value="Round Trip">
              Round Trip
            </TabsTrigger>
            <TabsTrigger className="h-full rounded-r-full" value="One Way">
              One Way
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="Round Trip"
            className="flex flex-col items-center justify-center gap-3 sm:mt-3 sm:flex-row"
          >
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="relative items-center">
                <SearchLocation
                  className="rounded-l-full"
                  variant="departure"
                />
              </div>
              <SearchLocation className="rounded-r-full" variant="arrival" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <DatePicker
                className="rounded-l-full"
                value={departureDate}
                onChange={handleDepartureDateChange}
              />
              <DatePicker
                className="rounded-r-full"
                value={returnDate}
                onChange={handleReturnDateChange}
              />
            </div>
          </TabsContent>
          <TabsContent
            value="One Way"
            className="flex items-center justify-end gap-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="relative items-center">
                <SearchLocation
                  className="rounded-l-full"
                  variant="departure"
                />
              </div>
              <SearchLocation className="rounded-r-full" variant="arrival" />
            </div>
            <div className="flex items-center justify-start">
              <DatePicker
                className="rounded-l-full"
                value={departureDate}
                onChange={handleDepartureDateChange}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Button
        variant="default"
        className="sm:absolute sm:bottom-5 sm:left-5"
        onClick={handleSearch}
      >
        Show flights
      </Button>
    </div>
  );
};

export default SearchFlight;
