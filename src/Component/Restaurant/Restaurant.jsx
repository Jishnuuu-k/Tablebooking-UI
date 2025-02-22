import React, { useEffect, useState } from 'react';
import Axios from '../../Axios/Axios';
import './restaurant.css';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({}); // Stores input values dynamically

  useEffect(() => {
    Axios.get('/Shops/getallshop')
      .then((response) => {
        setRestaurants(response.data.Result);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching restaurants:', error);
        setLoading(false);
      });
  }, []);

  // Function to handle input changes dynamically for each restaurant
  const handleInputChange = (event, restaurantId) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [restaurantId]: {
        ...prevData[restaurantId],
        [name]: value,
      },
    }));
  };

  // Function to call API with ID, Date, Time, and Number of Seats
  const Checkseats = (Id) => {
    const { date, time, seats } = formData[Id] || {}; // Get values for specific restaurant
  
    if (!date || !time || !seats) {
      alert("Please enter date, time, and number of seats!");
      return;
    }
  
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTVjZmQxYmVkZGQwM2M5ODlkMzVlYyIsImlhdCI6MTc0MDIxMTQ1MiwiZXhwIjoxNzQwMjE1MDUyfQ.9xJ2YixGAEiWY8N0yyFhPmF8UE5LPWDjB5uYY0SXpTA";
  
    Axios.post(
      '/Users/SeatAvailabilitycheck',
      {
        Id, // ✅ Matches schema
        Date: date, // ✅ Matches schema
        StartingTime: time, // ✅ Matches schema
        Nofseats: seats, // ✅ Matches schema
      },
      {
        headers: {
          Authorization: token, // ✅ Send token without "Bearer "
          "Content-Type": "application/json",
        },
      }
    )
    .then(response => {
      console.log("Response:", response.data);
    })
    .catch(error => {
      console.log("Error calling API:", error);
    });
  };
  
  

  return (
    <div className="restaurant-container">
      <div className="restaurant-grid">
        {loading ? (
          <p>Loading restaurants...</p>
        ) : restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.Id}>
              <div className="site-name">
                <span>Book My Table</span>
              </div>
              <div className="restaurant-details">
                <h3>{restaurant.Name}</h3>
                <p>Email: {restaurant.Email}</p>
                <p>Id: {restaurant.Id}</p>
                <p>Available Seats: {restaurant.SeatsAvailable}</p>

                {/* Date Input */}
                <input
                  type="date"
                  name="date"
                  className="input"
                  onChange={(e) => handleInputChange(e, restaurant.Id)}
                />

                {/* Time Select */}
                <select
                  name="time"
                  className="input"
                  onChange={(e) => handleInputChange(e, restaurant.Id)}
                >
                  <option value="">Select Time</option>
                  {[
                    '09:00',
                    '09:30',
                    '10:00',
                    '10:30',
                    '11:00',
                    '11:30',
                    '12:00',
                    '12:30',
                    '13:00',
                    '13:30',
                    '14:00',
                    '14:30',
                    '15:00',
                    '15:30',
                    '16:00',
                    '16:30',
                    '17:00',
                    '17:30',
                    '18:00',
                    '18:30',
                    '19:00',
                    '19:30',
                    '20:00',
                    '20:30',
                    '21:00',
                    '21:30',
                    '22:00',
                    '22:30',
                  ].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                {/* Number of Seats Input */}
                <input
                  type="number"
                  name="seats"
                  className="input"
                  placeholder="Enter the number of seats"
                  onChange={(e) => handleInputChange(e, restaurant.Id)}
                />
              </div>

              <div className="restaurant-details">
                <button className="btn" onClick={() => Checkseats(restaurant.Id)}>
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Restaurant;
