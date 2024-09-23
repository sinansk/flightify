import AirlineLogoSvg from "@/assets/AirlineLogoSvg";
import { formatTime } from "@/utils/formatTime";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const MyBookingCard = ({ booking }) => {
  const pricingOptions = [
    { price: "$156", label: "Main" },
    { price: "$204", label: "Comfort" },
    { price: null, label: null, isEmpty: true },
    { price: "$386", label: "Delta One" },
    { price: null, label: null, isEmpty: true },
  ];

  return (
    <div className="grid w-full content-center rounded-lg bg-white shadow-md sm:h-40 sm:grid-cols-2 sm:p-5">
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
      <div className="ml-auto mr-5 grid grid-cols-5 items-center text-center sm:gap-2">
        {pricingOptions.map(({ price, label, isEmpty }, index) => (
          <div
            key={index}
            className={`grid h-16 w-16 content-center border-[0.5px] border-gray-200 shadow-md sm:h-24 sm:w-24 sm:gap-3 ${
              isEmpty ? "bg-gray-100" : ""
            }`}
          >
            {!isEmpty ? (
              <>
                <p className="font-bold">{price}</p>
                <p>{label}</p>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingCard;
