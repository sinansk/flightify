import Categories from "@/components/Categories";
import FlightList from "@/components/FlightList";
import SearchFlight from "@/components/SearchFlight";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <div className="ml-auto mr-auto gap-4 rounded-b-2xl bg-gray-100 p-5 sm:grid sm:w-[70vw] sm:grid-cols-5">
        <div className="col-span-4">
          <SearchFlight />
          <FlightList />
        </div>
        <div className="col-span-1">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
