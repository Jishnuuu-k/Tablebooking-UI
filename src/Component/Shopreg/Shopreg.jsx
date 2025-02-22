import React, { useState } from 'react';
import './shopreg.css';
import axios from 'axios'; // For making API calls

function Shopreg() {
  const [shopName, setShopName] = useState('');
  const [shopId, setShopId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // For displaying messages
  const [isRegistered, setIsRegistered] = useState(false); // To track registration status

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      // Send registration data to the backend
      const response = await axios.post('/api/register', {
        shopName,
        shopId,
        email,
        password,
      });

      if (response.data.success) {
        setMessage('Registration successful! Please check your email to verify your account.');
        setIsRegistered(true);
      } else {
        setMessage(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  const handleResendVerification = async () => {
    try {
      const response = await axios.post('/api/resend-verification', { email });
      setMessage(response.data.message || 'Verification email sent!');
    } catch (error) {
      setMessage('Failed to resend verification email. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="shopreg-container">
      <h2>Shop Registration</h2>
      {!isRegistered ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="shopName">Shop Name</label>
            <input
              type="text"
              id="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shopId">Shop ID</label>
            <input
              type="text"
              id="shopId"
              value={shopId}
              onChange={(e) => setShopId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      ) : (
        <div>
          <p>{message}</p>
          <button onClick={handleResendVerification} className="resend-btn">
            Resend Verification Email
          </button>
        </div>
      )}
      {message && !isRegistered && <p>{message}</p>}
    </div>
  );
}

export default Shopreg;