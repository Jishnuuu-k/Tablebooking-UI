import React, { useState } from 'react';
import './userlogin.css';
import { Link, useNavigate } from "react-router-dom";
import Axios from '../../Axios/Axios';

function Userlogin() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState(""); // ✅ State to store error message

  const navigate = useNavigate();

  // Function to update state when user types in input fields
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setErrorMessage(""); // ✅ Clear previous error messages before new request

    try {
      const response = await Axios.post("/Users/auth/userLogin", form); 
      console.log("Login Response:", response.data);

      if (!response.data.success) { // ✅ Check if login failed
        setErrorMessage("Email or Password is incorrect"); 
        return;
      }

      localStorage.setItem("userToken", response.data.result);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      navigate("/"); // ✅ Navigate to home page after successful login
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      setErrorMessage("Something went wrong. Please try again."); // ✅ Handle server errors
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">BOOK MY TABLE</h1>
          
          {/* Form for user login */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Enter your email" 
                autoComplete="email" 
                value={form.email} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                placeholder="Enter your password" 
                autoComplete="current-password" 
                value={form.password} 
                onChange={handleChange} 
              />
            </div>

            {/* ✅ Show error message if login fails */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

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
