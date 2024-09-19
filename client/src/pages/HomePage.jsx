import FlightCard from "@/components/FlightCard";
import SearchFlight from "@/components/SearchFlight";
import React from "react";

const HomePage = () => {
  return (
  <div className="w-[65vw] p-5 ml-auto mr-auto">
    <SearchFlight />
    <FlightCard />
    </div>
  )
};

export default HomePage;
