import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="ml-auto mr-auto gap-4 rounded-b-2xl bg-gray-100 p-5 sm:grid sm:w-[70vw] sm:grid-cols-5">
      {children}
    </div>
  );
};

export default MainLayout;
