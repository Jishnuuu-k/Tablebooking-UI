import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css'
function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "John Doe",
    username: "johndoe123",
    email: "john@example.com",
    mobile: "+1 234 567 8900",
    place: "New York",
    joinedDate: "January 2024",
    totalBookings: 12,
    favoriteRestaurants: 5,
    profilePic: ""
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving user data:', userData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const navigationOptions = [
    { title: 'Booking History', path: '/bookinghistory', icon: '📅' },
    { title: 'Favorite Restaurants', path: '/favorites', icon: '⭐' },
    { title: 'Active Reservations', path: '/active-reservations', icon: '🕒' },
    { title: 'Payment Methods', path: '/payment-methods', icon: '💳' },
    { title: 'Reviews & Ratings', path: '/reviews', icon: '⭐' },
    { title: 'Notifications Settings', path: '/notifications', icon: '🔔' }
  ];

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <h1>My Profile</h1>
          {!isEditing && <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>}
        </div>

        <div className="profile-content">
          <div className="profile-section main-info">
            <div className="avatar-section">
              <label className="avatar">
                {userData.profilePic ? (
                  <img src={userData.profilePic} alt="Profile" />
                ) : (
                  userData.name.charAt(0).toUpperCase()
                )}
              </label>
              <div className="user-title">
                <h2>{userData.name}</h2>
                <p>@{userData.username}</p>
              </div>
            </div>
            
            <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">{userData.totalBookings}</span>
                <span className="stat-label">Bookings</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{userData.favoriteRestaurants}</span>
                <span className="stat-label">Favorites</span>
              </div>
            </div>
          </div>

          <div className="profile-section details">
            <h3>Personal Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                {isEditing ? <input type="text" name="name" value={userData.name} onChange={handleChange} /> : <p>{userData.name}</p>}
              </div>

              <div className="info-item">
                <label>Email</label>
                {isEditing ? <input type="email" name="email" value={userData.email} onChange={handleChange} /> : <p>{userData.email}</p>}
              </div>

              <div className="info-item">
                <label>Mobile</label>
                {isEditing ? <input type="tel" name="mobile" value={userData.mobile} onChange={handleChange} /> : <p>{userData.mobile}</p>}
              </div>

              <div className="info-item">
                <label>Place</label>
                {isEditing ? <input type="text" name="place" value={userData.place} onChange={handleChange} /> : <p>{userData.place}</p>}
              </div>
            </div>
          </div>

          <div className="profile-section navigation-options">
            <h3>Quick Actions</h3>
            <div className="options-grid">
              {navigationOptions.map((option, index) => (
                <button
                  key={index}
                  className="nav-option"
                  onClick={() => navigate(option.path)}
                >
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-title">{option.title}</span>
                </button>
              ))}
            </div>
          </div>

          {isEditing && (
            <div className="action-buttons">
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
              <button className="save-btn" onClick={handleSave}>Save Changes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;