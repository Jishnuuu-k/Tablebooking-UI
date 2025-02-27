import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userToken"); // Check if token exists

  if (!token) {
    return <Navigate to="/userlogin" replace />;
  }

  return children; // Ensure children is returned correctly
};

export default ProtectedRoute;