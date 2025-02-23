import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shoplogin.css";

function Shoplogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="shop-login-wrapper">
      <div className="shop-login-container">
        <div className="shop-login-box">
          <h1 className="logo">BOOK MY TABLE</h1>
          <h2 className="subtitle">Restaurant Login</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your restaurant email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="register-link">
              Don't have an account?{' '}
              <Link to="/shopregisterion">Register Your Restaurant</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shoplogin;