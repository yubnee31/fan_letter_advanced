import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ successLogin }) {
  if (!successLogin) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
