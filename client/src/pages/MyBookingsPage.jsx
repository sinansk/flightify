import MyBookingCard from "@/components/MyBookingCard";
import TopBar from "@/components/TopBar";
import { fetchMyBookings } from "@/redux/thunks/myBookingsThunk";
import { getMyBookings } from "@/services/bookingService";
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
        {myBookings?.map((booking, index) => (
          <MyBookingCard booking={booking} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
