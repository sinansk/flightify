import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AuthRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace={true} />;
  }
};

export default AuthRoutes;
