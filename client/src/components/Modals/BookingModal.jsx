import React from "react";
import { Button } from "../ui/button";
import { PlaneTakeoffIcon, PlaneLandingIcon } from "lucide-react";
import Divider from "../Divider";
import { formatTime } from "@/utils/formatTime";
import { useSelector } from "react-redux";
import {
  selectArrival,
  selectDeparture,
} from "@/redux/slices/searchFlightSlice";
import { createBooking } from "@/services/bookingService";
import PlaneSvg from "@/assets/PlaneSvg";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import { destroyAllModal } from "@/utils/modalHooks";
import { useNavigate } from "react-router-dom";
const BookingModal = (data) => {
  const { toast } = useToast();
  const flightData = data.data.flightData;
  const departure = useSelector(selectDeparture);
  const arrival = useSelector(selectArrival);
  const userId = useSelector((state) => state.auth?.user?.user.id);
  const userEmail = useSelector((state) => state.auth?.user.user.email);
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
      if (data) {
        toast({
          title: "Booking completed!",
          description: "You can see your flights on the My Flights page.",
        });
        destroyAllModal();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error during booking!",
        description: "Error during booking",
      });
      console.log(error, "error");
    }
  };
  return (
    <div className="relative max-w-lg rounded-lg bg-white p-1 shadow-lg sm:w-full sm:p-6">
      <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
        Confirm Your Booking
      </h2>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-col items-center whitespace-nowrap">
          <div className="flex gap-2">
            <PlaneTakeoffIcon size={18} />
            <p>{departure.city}</p>
          </div>
          <p className="text-lg font-bold">
            {flightData.scheduleDateTime
              ? formatTime(flightData?.scheduleDateTime)
              : "Unknown"}
          </p>
          <p>Airport: {departure?.name}</p>
        </div>
        <Divider className="sm:w-10" />
        <div className="flex flex-col items-center">
          <p className="font-semibold"></p>
          <PlaneSvg className="text-gray-600" />
          <p></p>
        </div>
        <Divider className="sm:w-10" />
        <div className="flex flex-col items-center whitespace-nowrap">
          <div className="flex gap-2">
            <PlaneLandingIcon size={18} />
            <p>{arrival.city}</p>
          </div>
          <p className="text-lg font-bold">
            {flightData.estimatedLandingTime
              ? formatTime(flightData.estimatedLandingTime)
              : "Unknown"}
          </p>
          <p>Airport: {arrival.name}</p>
        </div>
      </div>
      <div className="my-4 flex flex-col items-center justify-center">
        <p className="font-bold text-violet-900">Price: $200</p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Your flight details will send your email!
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Input type="email" placeholder="Email" defaultValue={userEmail} />
        <Button
          onClick={handleBooking}
          variant="default"
          size="lg"
          className="w-full rounded-lg py-3 text-white"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingModal;
