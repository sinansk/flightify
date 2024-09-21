import MyFlightCard from "@/components/MyFlightCard";
import TopBar from "@/components/TopBar";
import React from "react";

const MyFlights = () => {
  return (
    <div className="ml-auto mr-auto sm:w-[70vw]">
      <TopBar />
      <div className="ml-auto mr-auto flex w-full flex-col gap-4 rounded-b-2xl bg-gray-100 p-10 p-5 sm:w-[70vw]">
        <MyFlightCard />
        <MyFlightCard />
        <MyFlightCard />
        <MyFlightCard />
      </div>
    </div>
  );
};

export default MyFlights;
