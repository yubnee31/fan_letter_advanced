import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
