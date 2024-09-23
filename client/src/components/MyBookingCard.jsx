import AirlineLogoSvg from "@/assets/AirlineLogoSvg";
import { formatTime } from "@/utils/formatTime";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const MyBookingCard = ({ booking }) => {
  return (
    <div className="grid h-40 w-full grid-cols-2 content-center rounded-lg bg-white p-5 shadow-md">
      <div className="grid grid-rows-2">
        <div className="flex items-center justify-start">
          <AirlineLogoSvg className="h-20 w-20" />
          <p className="inline text-2xl font-semibold">
            {booking.departure?.departureTime
              ? formatTime(booking.departure?.departureTime)
              : "Unknown"}{" "}
            -{" "}
            {booking.arrival?.arrivalTime
              ? formatTime(booking.arrival.arrivalTime)
              : "Unknown"}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-evenly">
            <div className="">
              <h4 className="font-bold">{booking?.prefixICAO} Airlines</h4>
              <a className="flex items-center gap-1 text-sm font-semibold text-blue-300">
                Flight Details <ChevronDownIcon size={16} />
              </a>
            </div>
            <div className="">
              <h4 className="font-bold">Nonstop</h4>
              <a className="">1h 32m</a>
            </div>
            <div className="">
              <h4 className="font-bold">
                {booking.departure?.iata_code} TO {booking.arrival?.iata_code}
              </h4>
              <a className="">{booking?.flightName}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto mr-5 grid grid-cols-5 items-center gap-2 text-center">
        <div className="h-24 w-24 content-center border-[0.5px] border-gray-200 shadow-md">
          <p className="font-bold">$156</p>
          <p>Main</p>
        </div>
        <div className="h-24 w-24 content-center border-[0.5px] border-gray-200 shadow-md">
          <p className="font-bold">$204</p>
          <p>Comfort</p>
        </div>
        <div className="h-24 w-24 content-center border-[0.5px] border-gray-200 shadow-md"></div>
        <div className="h-24 w-24 content-center border-[0.5px] border-gray-200 shadow-md">
          <p className="font-bold">$386</p>
          <p>Delta One</p>
        </div>
        <div className="h-24 w-24 content-center border-[0.5px] border-gray-200 shadow-md"></div>
      </div>
    </div>
  );
};

export default MyBookingCard;
