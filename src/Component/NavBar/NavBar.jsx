import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BOOK-MY-TABLE</div>

      <ul className="navbar-links">
        <li> <Link to="/">Home</Link> </li>
        <li><a href="/my-bookings">My Bookings</a></li>
        <li><Link to="/restaurant">Restaurant</Link></li>
        <li><Link to="/shoplogin">Register as Shop Owner</Link></li>
        <li><Link to="/userlogin">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;