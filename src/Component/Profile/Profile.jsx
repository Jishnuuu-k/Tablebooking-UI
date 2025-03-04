import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './profile.css';

function Profile() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState(null); // Store original user data
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    place: "",
    joinedDate: "",
    totalBookings: 0,
    favoriteRestaurants: 0,
    profilePic: ""
  });

  // ✅ Fetch user data once on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
        setOriginalData(parsedUser); // Store original data
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setOriginalData(userData); // Save original state before editing
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ Save updated data
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUserData(originalData); // Restore original data on cancel
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

  const handleLogout = () => setShowLogoutModal(true);
  
  const confirmLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");
    navigate("/userlogin");
  };

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
                {isEditing && <input type="file" onChange={handleFileChange} />}
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
              <Link to="/mybookings" className='Nav-optionslink'>
                <button className="nav-option">📅 Bookings</button>
              </Link>
              <Link to="/favourites" className='Nav-optionslink'>
                <button className="nav-option">❤️ Favorites</button>
              </Link>
              <Link to="/mybookings" className='Nav-optionslink'>
                <button className="nav-option">⭐ Reviews</button>
              </Link>
              <Link to="/activenow" className='Nav-optionslink'>
                <button className="nav-option">🕒 Active Reservations</button>
              </Link>
              
            </div>
            <div className="logout-container">
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>

          {isEditing && (
            <div className="action-buttons">
              <button className="cancel-btn edit-cancel" onClick={handleCancelEdit}>Cancel</button>
              <button className="save-btn" onClick={handleSave}>Save Changes</button>
            </div>
          )}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Are you sure you want to logout?</h2>
            <div className="modal-buttons">
              <button className="modal-cancel-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button className="modal-confirm-btn" onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;