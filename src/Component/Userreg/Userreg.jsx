import React, { useState } from "react";
import "./userreg.css";
import { Link } from "react-router-dom";
import Axios from "../../Axios/Axios";

function Userreg() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    place: "",
    password: "",
    confirmPassword: "",
  });

  const [usernameError, setUsernameError] = useState(""); // State for username error
  const [emailError, setEmailError] = useState(""); // State for email error

  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    // Clear error if user starts typing
    if (event.target.name === "username") {
      setUsernameError("");
    }
    if (event.target.name === "email") {
      setEmailError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await Axios.post("/Users/auth/userRegister", form);
      console.log(response.data); // Debugging: Check response data

      if (!response.data.success) {
        if (response.data.message === "Username is already taken") {
          setUsernameError("Username already taken");
          setForm((prevForm) => ({
            ...prevForm,
            username: "", // Clear username field when taken
          }));
        } else if (response.data.message === "Email already registered. Please login.") {
          setEmailError("Email already registered, Please Login");
          setForm((prevForm) => ({
            ...prevForm,
            email: "", // Clear email field when taken
          }));
        }
      } else {
        alert("Registration successful!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-box">
          <h1 className="logo">BOOK MY TABLE</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  onChange={handleInput}
                  id="name"
                  name="name"
                  value={form.name}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  onChange={handleInput}
                  id="username"
                  name="username"
                  value={form.username}
                  required
                  placeholder={usernameError || "Choose a username"}
                  style={{
                    borderColor: usernameError ? "red" : "",
                    color: usernameError ? "red" : "",
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={handleInput}
                  id="email"
                  name="email"
                  value={form.email}
                  required
                  placeholder={emailError || "Enter your email"}
                  style={{
                    borderColor: emailError ? "red" : "",
                    color: emailError ? "red" : "",
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  onChange={handleInput}
                  id="mobile"
                  name="mobile"
                  value={form.mobile}
                  required
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input
                  type="text"
                  onChange={handleInput}
                  id="place"
                  name="place"
                  value={form.place}
                  required
                  placeholder="Enter your place"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInput}
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="confirmPassword">Re-enter Password</label>
              <input
                type="password"
                onChange={handleInput}
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                required
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>

            <div className="login-link">
              Already have an account? <Link to="/userlogin">Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userreg;
