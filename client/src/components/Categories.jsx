import React from "react";
import { cn } from "@/lib/utils";
import BagImage from "../assets/bag.png";
import HotelImage from "../assets/hotel.png";
import LegsImage from "../assets/legs.png";
import { CarFrontIcon } from "lucide-react";
import { HotelIcon } from "lucide-react";
import UmbrellaSvg from "@/assets/UmbrellaSvg";
const Categories = ({ className }) => {
  return (
    <div className={"flex w-full flex-col gap-6 px-2"}>
      <div className="relative cursor-pointer">
        <div className="absolute bottom-5 left-4 text-xl font-semibold text-white">
          <CarFrontIcon />
          <p>CAR RENTALS</p>
        </div>
        <img src={LegsImage} className="h-60 w-full rounded-xl" />
      </div>
      <div className="relative cursor-pointer">
        <div className="absolute bottom-5 left-4 text-xl font-semibold text-white">
          <HotelIcon />
          <p>HOTELS</p>
        </div>
        <img src={HotelImage} className="h-60 w-full rounded-xl" />
      </div>
      <div className="relative cursor-pointer">
        <div className="absolute bottom-5 left-4 text-xl font-semibold text-white">
          <UmbrellaSvg />
          <p>TRAVEL PACKAGES</p>
        </div>
        <img src={BagImage} className="h-60 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Categories;
