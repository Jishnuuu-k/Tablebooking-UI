import React, { useState } from 'react';
import './shopreg.css';
import axios from 'axios';

function Shopreg() {
  const [formData, setFormData] = useState({
    shopName: '',
    shopId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your API endpoint here
      const response = await axios.post('/api/shop/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="shop-register-wrapper">
      <div className="shop-register-container">
        <div className="shop-register-box">
          <h1 className="logo">BOOK MY TABLE</h1>
          <h2 className="subtitle">Restaurant Registration</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="shopName">Shop Name</label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your restaurant name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="shopId">Shop ID</label>
                <input
                  type="text"
                  id="shopId"
                  name="shopId"
                  value={formData.shopId}
                  onChange={handleChange}
                  required
                  placeholder="Enter your shop ID"
                />
              </div>
            </div>

            <div className="form-group full-width">
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

            <div className="form-row">
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

              <div className="form-group">
                <label htmlFor="confirmPassword">Re-enter Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <button type="submit" className="register-btn">
              Register Restaurant
            </button>

            <div className="login-link">
              Already registered? <a href="/shoplogin">Login Here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shopreg;