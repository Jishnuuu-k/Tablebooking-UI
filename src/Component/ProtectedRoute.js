import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if token exists
  return token ? children : <Navigate to="/userlogin" replace />; // Redirect if not authenticated
};

export default ProtectedRoute;
