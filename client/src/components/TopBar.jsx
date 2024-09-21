import React from "react";
import { Button } from "./ui/button";
import {
  ChevronDownIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { StarOffIcon } from "lucide-react";
import { StarsIcon } from "lucide-react";

const TopBar = () => {
  const filterOptions = [
    {
      label: "Times",
    },
    { label: "Stops" },
    {
      label: "Airlines",
    },
    {
      label: "Airports",
    },
    {
      label: "Amenities",
    },
  ];

  const ratings = [
    {
      rating: ["★", "★", "☆", "☆", "☆", "☆"],
    },
    {
      rating: ["★", "★", "★", "☆", "☆", "☆"],
    },
    {
      rating: ["★", "★", "★", "★", "☆", "☆"],
    },
    {
      rating: ["★", "★", "★", "★", "★", "☆"],
    },
    {
      rating: ["★", "★", "★", "★", "★", "★"],
    },
  ];

  return (
    <div className="grid h-20 w-full grid-cols-2 border-b-2 border-slate-200 bg-white px-5">
      <div className="flex items-center justify-evenly">
        {filterOptions.map((item) => (
          <Button key={item?.label} variant="outline">
            {item?.label}
          </Button>
        ))}
        <a className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-blue-400">
          Edit Search <ChevronDownIcon />
        </a>
      </div>

      <div className="flex items-center justify-center space-x-6 divide-x">
        {ratings.map((item, index) => (
          <div key={index} className="flex flex-col items-center pl-6">
            <div className="grid grid-cols-3">
              {item.rating.map((star, starIndex) => (
                <span key={starIndex} className="">
                  {star}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
