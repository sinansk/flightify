import Categories from "@/components/Categories";
import FlightList from "@/components/FlightList";
import SearchFlight from "@/components/SearchFlight";
import React from "react";

const HomePage = () => {
  return (
    <div className="gap-4 rounded-b-2xl bg-gray-100 sm:mx-auto sm:grid sm:w-[70vw] sm:grid-cols-5 sm:p-5">
      <div className="col-span-4">
        <SearchFlight />
        <FlightList />
      </div>
      <div className="col-span-1">
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
