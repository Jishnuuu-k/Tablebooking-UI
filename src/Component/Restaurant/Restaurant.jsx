import React, { useEffect, useState } from 'react';
import Axios from '../../Axios/Axios'; // Import Axios instance
import './restaurant.css'; // Make sure to style properly

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    Axios.get('/Shops/getallshop')
      .then(response => {
        setRestaurants(response.data.Result);
      })
      .catch(error => {
        console.log('Error fetching restaurants:', error);
      });
  }, []);

  return (
    <div className="restaurant-container">
      <div className="restaurant-grid">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.Id}>
              <h3>{restaurant.Name}</h3>
              <p>Email: {restaurant.Email}</p>
              <p>Id: {restaurant.Id}</p>
              <button className="view-btn">View Details</button>
            </div>
          ))
        ) : (
          <p>Loading restaurants...</p>
        )}
      </div>
    </div>
  );
}

export default Restaurant;
