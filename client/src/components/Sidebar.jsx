import React from "react";
import { SelectInput } from "./SelectInput";
import { RadioInput } from "./RadioInput";
import {
  priceFilterOptions,
  arrivalTimeOptions,
  stopOptions,
  airlinesOptions,
} from "../data/sideBarFilterOptions";

const SideBar = () => {
  return (
    <div className="mt-5 flex flex-col items-start gap-6 sm:w-full">
      <div className="w-full">
        <h4 className="mb-2 font-semibold">Sort by:</h4>
        <SelectInput options={priceFilterOptions} className="bg-white" />
      </div>
      <div className="w-full">
        <h4 className="mb-4 font-semibold">Arrival Time</h4>
        <RadioInput options={arrivalTimeOptions} />
      </div>
      <div className="w-full">
        <h4 className="mb-4 font-semibold">Stops</h4>
        <RadioInput options={stopOptions} />
      </div>
      <div className="w-full">
        <h4 className="mb-4 font-semibold">Airlines Inculed</h4>
        <RadioInput options={airlinesOptions} />
      </div>
    </div>
  );
};

export default SideBar;
