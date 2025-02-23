import React from 'react';
import './userlogin.css';
import { Link } from "react-router-dom";

function Userlogin() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">BOOK MY TABLE</h1>
          
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" autoComplete="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required placeholder="Enter your password" autoComplete="current-password" />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <div className="register-link">
              Don't have an account? <Link to="/userregistration">Register Now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
