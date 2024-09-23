import MyBookingCard from "@/components/MyBookingCard";
import TopBar from "@/components/TopBar";
import { fetchMyBookings } from "@/redux/thunks/myBookingsThunk";
import { ChevronDownIcon, InfoIcon } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyBookingsPage = () => {
  const token = useSelector((state) => state.auth?.user?.token);
  const myBookings = useSelector((state) => state.myBookings?.bookings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyBookings(token));
  }, []);
  return (
    <div className="ml-auto mr-auto sm:w-[70vw]">
      <TopBar />
      <div className="ml-auto mr-auto flex w-full flex-col gap-4 rounded-b-2xl bg-gray-100 p-10 p-5 sm:w-[70vw]">
        <div className="mt-10 flex h-14 items-center justify-between px-1 sm:mt-0">
          <div className="flex gap-2">
            <p className="font-semibold">Sort by:</p>
            <span className="flex items-center gap-1 font-bold">
              Recommended <ChevronDownIcon size={14} />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <InfoIcon size={18} color="#5AA2FA" />
            <p>
              Avg Fare: <span className="font-semibold">$225</span>
            </p>
          </div>
        </div>
        {myBookings?.map((booking, index) => (
          <MyBookingCard booking={booking} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
