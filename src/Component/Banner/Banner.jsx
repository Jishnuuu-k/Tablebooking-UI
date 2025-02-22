  import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './banner.css';
import Axios from '../../Axios/Axios';

function Banner() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    Axios.get('/Shops/getallshop')
      .then((response) => {
        console.log(response.data.Result);
        setProducts(response.data.Result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Function to split the array into chunks of size 'chunkSize'
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedProducts = chunkArray(products, 5); // Split restaurants into groups of 5
  const maxRows = 2; // Maximum 3 rows before clicking the button

  return (
    <>
      <div className="banner-container">
        <div className="banner-slider">
          <div className="banner-slide">
            <img src="./Images/image5.webp" alt="Banner 1" />
          </div>
          <div className="banner-slide">
            <img src="./Images/image4.webp" alt="Banner 2" />
          </div>
          <div className="banner-slide">
            <img src="./Images/image3.jpeg" alt="Banner 3" />
          </div>
        </div>
      </div>

      <div className="Divfor-restaurant">
        <h2>RESTAURANTS</h2>
      </div>

      {/* Dynamically render up to 3 rows initially, then show all on button click */}
      {chunkedProducts.slice(0, showAll ? chunkedProducts.length : maxRows).map((group, index) => (
        <div className="Banner-cards" key={index}>
          {group.map((obj) => (
            <div className="Cards" key={obj.Id}>
              <div className="Binside-cards">
                <div className="Restaurant-details">
                  <h3>{obj.Name}</h3>
                  <p>Email: {obj.Email}</p>
                  <p>Id: {obj.Id}</p>
                </div>
                <div className="View-btn">
                  <Link to="/restaurant">
                    <button className="View">Click to view</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Show all button (ALWAYS VISIBLE) */}
      <div className="ShowAll-btn">
        <Link to="/restaurant">
          <button className="Showall">Show All Restaurants</button>
        </Link>
      </div>
    </>
  );
}

export default Banner;