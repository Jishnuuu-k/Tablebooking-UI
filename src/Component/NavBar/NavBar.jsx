import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convert token existence to true/false
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">BOOK-MY-TABLE</div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        
        {!isAuthenticated && <li><Link to="/shoplogin">Register as Shop Owner</Link></li>}
        {!isAuthenticated && <li><Link to="/userlogin">Login</Link></li>}

        {isAuthenticated && <li><Link to="/my-bookings">My Bookings</Link></li>}
        {isAuthenticated && <li><Link to="/restaurant">Restaurant</Link></li>}
        {isAuthenticated && <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>}
      </ul>
    </nav>
  );
}

export default NavBar;
