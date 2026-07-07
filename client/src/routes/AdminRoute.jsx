import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isUser = true; // Change to false to test redirect

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
