import React from "react";
import FlightCard from "./FlightCard";
import SideBar from "./Sidebar";
import { useSelector } from "react-redux";
const FlightList = () => {
  const flights = useSelector((state) => state?.searchFlight?.flights);
  return (
    <div className="gap-4 sm:grid sm:w-full sm:grid-cols-4">
      <div className="col-span-3 flex flex-col gap-5">
        {flights?.map((flight, index) => (
          <FlightCard flightData={flight} key={index} />
        ))}
      </div>
      <div className="col-start-4">
        <SideBar />
      </div>
    </div>
  );
};

export default FlightList;
