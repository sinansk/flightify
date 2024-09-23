import React from "react";
import { Button } from "./ui/button";
import PlaneSvg from "@/assets/PlaneSvg";
import { PlaneTakeoffIcon } from "lucide-react";
import Divider from "./Divider";
import { PlaneLandingIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { formatTime } from "@/utils/formatTime";
import { createBooking } from "@/services/bookingService";
const FlightCard = ({ flightData }) => {
  const departure = useSelector((state) => state.searchFlight.departure);
  const arrival = useSelector((state) => state.searchFlight.arrival);
  const flightType = useSelector((state) => state.searchFlight.flightType);
  const userId = useSelector((state) => state.auth?.user?.user.id);
  const token = useSelector((state) => state.auth?.user?.token);
  const date = useSelector(
    (state) => state.searchFlight.departure?.departureDate,
  );

  const bookingData = {
    user: userId,
    flightName: flightData?.flightName,
    prefixICAO: flightData.prefixICAO ? flightData.prefixICAO : "",
    departure: { departureTime: flightData?.scheduleDateTime, ...departure },
    arrival: { arrivalTime: flightData?.estimatedLandingTime, ...arrival },
    date,
  };
  const handleBooking = async () => {
    try {
      const data = await createBooking(bookingData, token);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="h-50 relative my-5 flex min-w-fit flex-col gap-4 rounded-lg bg-white p-5 shadow-sm hover:shadow-lg sm:w-full">
      <h3 className="font-bold">{`${departure.city} - ${arrival.city}`}</h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex gap-2">
            <PlaneTakeoffIcon size={18} />
            <p>Departure</p>
          </div>
          <p className="text-lg font-bold">
            {flightData.scheduleDateTime
              ? formatTime(flightData?.scheduleDateTime)
              : "Unknown"}
          </p>
          <p>Airport: {departure.iata_code}</p>
        </div>
        <Divider />
        <div className="flex flex-col items-center">
          <p className="font-semibold">{flightData?.prefixICAO}</p>
          <PlaneSvg />
          <p>{flightData?.flightName}</p>
        </div>
        <Divider />
        <div className="flex flex-col items-start">
          <div className="flex gap-2">
            <PlaneLandingIcon size={18} />
            <p>Arrival</p>
          </div>
          <p className="text-lg font-bold">
            {flightData.estimatedLandingTime
              ? formatTime(flightData.estimatedLandingTime)
              : "Unknown"}
          </p>
          <p>Airport: {arrival.iata_code}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-violet-900">Price: $200</p>
          <p className="text-sm font-semibold">{flightType}</p>
        </div>
        <Button
          onClick={handleBooking}
          variant="default"
          size="lg"
          className="absolute bottom-0 right-0 h-16 rounded-none rounded-br-lg rounded-tl-lg"
        >
          Book Flight
        </Button>
      </div>
      <div className="absolute left-0 top-full cursor-pointer rounded-b-lg bg-purple-300/20 px-5 py-2 font-semibold text-primary underline">
        Check details
      </div>
    </div>
  );
};

export default FlightCard;
