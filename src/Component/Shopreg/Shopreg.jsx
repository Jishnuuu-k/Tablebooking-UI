import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './shopreg.css';
import Axios from '../../Axios/Axios';

function Shopreg() {
  const [formData, setFormData] = useState({
    shopName: '',
    shopId: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear message when the user starts typing
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.shopName || !formData.shopId || !formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({ text: 'Password must be at least 6 characters.', type: 'error' });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    try {
      const response = await Axios.post('/Shops/auth/shopregister', {
        Name: formData.shopName,
        Id: formData.shopId,
        Email: formData.email,
        Password: formData.password,
      });

      console.log('Registration Response:', response.data);

      if (response.data.success) {
        setMessage({ text: response.data.message, type: 'success' });

        // Reset form after success
        setFormData({
          shopName: '',
          shopId: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

        navigate('/tableaddsection');
      } else {
        setMessage({ text: response.data.message || 'Registration failed.', type: 'error' });
      }
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      setMessage({ text: error.response?.data?.message || 'An error occurred. Please try again.', type: 'error' });
    }
  };

  return (
    <div className="shop-register-wrapper">
      <div className="shop-register-container">
        <div className="shop-register-box">
          <h1 className="logo">BOOK MY TABLE</h1>
          <h2 className="subtitle">Restaurant Registration</h2>

          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}

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
