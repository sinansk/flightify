import React from "react";
import BagImage from "../assets/bag.png";
import HotelImage from "../assets/hotel.png";
import LegsImage from "../assets/legs.png";
import { CarFrontIcon, HotelIcon } from "lucide-react";
import UmbrellaSvg from "@/assets/UmbrellaSvg";

const categories = [
  { image: LegsImage, label: "CAR RENTALS", icon: <CarFrontIcon /> },
  { image: HotelImage, label: "HOTELS", icon: <HotelIcon /> },
  { image: BagImage, label: "TRAVEL PACKAGES", icon: <UmbrellaSvg /> },
];

const Categories = ({ className }) => {
  return (
    <div className={`flex w-full flex-col gap-6 px-2 ${className}`}>
      {categories.map(({ image, label, icon }, index) => (
        <div key={index} className="relative cursor-pointer">
          <div className="absolute bottom-5 left-4 flex items-center text-xl font-semibold text-white">
            {icon}
            <p className="ml-2">{label}</p>
          </div>
          <img src={image} alt={label} className="h-60 w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default Categories;
