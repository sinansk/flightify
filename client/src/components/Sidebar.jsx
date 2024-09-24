import React from "react";
import { SelectInput } from "./SelectInput";
import { RadioInput } from "./RadioInput";
import {
  priceFilterOptions,
  arrivalTimeOptions,
  stopOptions,
  airlinesOptions,
} from "../data/sideBarFilterOptions";

const FilterSection = ({ title, options, isSelect = false }) => {
  return (
    <div className="w-full">
      <h4 className="mb-4 font-semibold">{title}</h4>
      {isSelect ? (
        <SelectInput options={options} className="bg-white" />
      ) : (
        <RadioInput options={options} />
      )}
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="mb-5 mt-5 flex flex-col items-start gap-6 sm:w-full">
      <FilterSection title="Sort by:" options={priceFilterOptions} isSelect />
      <FilterSection title="Arrival Time" options={arrivalTimeOptions} />
      <FilterSection title="Stops" options={stopOptions} />
      <FilterSection title="Airlines Included" options={airlinesOptions} />
    </div>
  );
};

export default SideBar;
