import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // Track user type
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  
  const [user, setUsername] = useState("")
  const navigate = useNavigate();

  // ✅ Check authentication & user type from localStorage
  useEffect(() => {
    const token = localStorage.getItem("userToken"); // ✅ Get token
    const user = localStorage.getItem("user"); // ✅ Get user data
  
    if (token && user) {
      try {
        const parsedUser = JSON.parse(user); // ✅ Safe parse
        console.log(parsedUser, "from nav"); // ✅ Debugging log
        setIsAuthenticated(true);
        setUserType(parsedUser.userType); // ✅ Store user type
        setUsername(parsedUser.username)
      } catch (error) {
        console.error("Error parsing user data:", error);
        setIsAuthenticated(false);
        setUserType(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserType(null);
    }
  }, []);
  
  // Show logout confirmation modal
  const confirmLogout = () => {
    setShowLogoutConfirmation(true);
  };

  // Cancel logout
  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  // ✅ Logout function: Removes token and user data
  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Remove token
    localStorage.removeItem("user"); // Remove user data
    setIsAuthenticated(false);
    setUserType(null);
    setShowLogoutConfirmation(false);
    navigate("/"); // Redirect to home
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-main">
            <div className="navbar-brand">
              <Link to="/" className="brand-link">
                <span className="brand-text">Book My Table</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-menu">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/restaurant" className="nav-link">Restaurants</Link>

              {/* If not authenticated, show login/register options */}
              {!isAuthenticated ? (
                <div className="dropdown">
                  <button 
                    onClick={() => setShowAuthMenu(!showAuthMenu)}
                    className="dropdown-button"
                  >
                    <span>Account</span>
                    <span className={`dropdown-arrow ${showAuthMenu ? 'open' : ''}`}>⮩</span>
                  </button>

                  {showAuthMenu && (
                    <div className="dropdown-menu">
                      <Link to="/userlogin" className="dropdown-item">User Login</Link>
                      <Link to="/userregistration" className="dropdown-item">User Register</Link>
                      <div className="dropdown-divider"></div>
                      <Link to="/shoplogin" className="dropdown-item">Restaurant Login</Link>
                      <Link to="/shopregistration" className="dropdown-item">Restaurant Register</Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* If authenticated, show user-specific pages */}
                  <Link to="/bookings" className="nav-link">My Bookings</Link>

                  {/* ✅ Show profile option only for logged-in users */}
                  <Link to="/profile" className="profile-button">
                    <svg className="profile-icon" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span>{user}</span>
                  </Link>

                  <button className="logout-button" onClick={confirmLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="mobile-link">Home</Link>
              <Link to="/restaurant" className="mobile-link">Restaurants</Link>
              <div className="mobile-divider"></div>

              {!isAuthenticated ? (
                <>
                  <Link to="/userlogin" className="mobile-link">User Login</Link>
                  <Link to="/userregistration" className="mobile-link">User Register</Link>
                  <Link to="/shoplogin" className="mobile-link">Restaurant Login</Link>
                  <Link to="/shopregistration" className="mobile-link">Restaurant Register</Link>
                </>
              ) : (
                <>
                  <Link to="/mybookings" className="mobile-link">My Bookings</Link>
                  <Link to="/dashboard" className="mobile-link">Dashboard</Link>

                  {/* ✅ Show profile option only if logged in */}
                  <Link to="/profile" className="mobile-link profile-link">
                    <svg className="profile-icon" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span>Profile</span>
                  </Link>

                  <button className="logout-button" onClick={confirmLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <div className="logout-modal-content">
              <h2>Confirm Logout</h2>
              <p>Are you sure you want to logout?</p>
              <div className="logout-modal-buttons">
                <button className="cancel-button" onClick={cancelLogout}>Cancel</button>
                <button className="confirm-button" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;