import React from "react";
import FlightCard from "./FlightCard";
import SideBar from "./Sidebar";
const FlightList = () => {
  return (
    <div className="grid grid-cols-4 gap-4 sm:w-full">
      <div className="col-span-3 flex flex-col gap-5">
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
      <div className="col-start-4">
        <SideBar />
      </div>
    </div>
  );
};

export default FlightList;
