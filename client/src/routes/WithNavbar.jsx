import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const WithNavbar = () => {
  return (
    <div className="p-2 sm:p-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default WithNavbar;
