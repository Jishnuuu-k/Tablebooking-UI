import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./shoplogin.css";
import Axios from "../../Axios/Axios";

function Shoplogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrorMessage((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage({ email: "", password: "" }); // Reset error messages

    try {
      const response = await Axios.post("/Shops/auth/shopLogin", formData);

      console.log("Response from backend:", response.data);

      if (response.data.success) {
        const token = response.data.result;

        if (token.includes("Password Or Email is incorrect")) {
          setErrorMessage({
            email: "Invalid email or password",
            password: "Invalid email or password",
          });
        } else {
          localStorage.setItem("token", token);
          alert("Login successful!");
          // Redirect to dashboard or homepage after successful login
        }
      } else {
        setErrorMessage({ email: "Login failed. Please try again." });
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setErrorMessage({ email: "An error occurred. Please try again later." });
    }
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
              {errorMessage.email && <p className="error-message">{errorMessage.email}</p>}
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
              Don't have an account?{" "}
              <Link to="/shopregistration">Register Your Restaurant</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shoplogin;
