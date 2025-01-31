import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shoplogin.css";

function Shoplogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    console.log("Logging in with:", { email, password });
    setError("");
  };

  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title & Tagline */}
      <div className="login-content">
        <h1>BOOKMYTABLE</h1>
        <p>Book and Manage Your Tables Easily!</p>
      </div>

      {/* Login Box */}
      <div className="login-card">
        <h2>Shop Owner Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Register Now Link */}
        <div className="register-link">
          <p>Not registered yet? <Link to="/shopregisterion">Register Now</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Shoplogin;
