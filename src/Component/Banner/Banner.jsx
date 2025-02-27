import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Banner.css';

function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('pulse');
          setTimeout(() => {
            card.classList.remove('pulse');
          }, 1000);
        }, index * 300);
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="banner-container">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">Book My Table</h1>
          <h2 className="hero-subtitle">Reserve Your Perfect Dining Experience</h2>
          <p className="hero-description">
            Discover and book the best restaurants in your city with just a few clicks.
            No more waiting in lines or making phone calls.
          </p>
          <div className="cta-buttons">
            <Link to="/restaurant" className="cta-button primary">Find Restaurants</Link>
            <Link to="/how-it-works" className="cta-button secondary">Chat Now</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="floating-plate"></div>
            <div className="floating-fork"></div>
            <div className="floating-knife"></div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose Book My Table?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-calendar-check-o"></i>
            </div>
            <h3>Easy Reservations</h3>
            <p>Book a table with just a few taps, anytime, anywhere.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-cutlery"></i>
            </div>
            <h3>Top Restaurants</h3>
            <p>Access to the finest dining establishments in your city.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-percent"></i>
            </div>
            <h3>Exclusive Deals</h3>
            <p>Special offers and discounts for our loyal customers.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa fa-star"></i>
            </div>
            <h3>Verified Reviews</h3>
            <p>Real feedback from diners to help you choose the perfect spot.</p>
          </div>
        </div>
      </div>
      
      <div className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search</h3>
            <p>Find restaurants by cuisine, location, or availability</p>
          </div>
          <div className="step-arrow"></div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Select</h3>
            <p>Choose your preferred time and party size</p>
          </div>
          <div className="step-arrow"></div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Book</h3>
            <p>Confirm your reservation with a single click</p>
          </div>
          <div className="step-arrow"></div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy</h3>
            <p>Arrive and enjoy your meal without waiting</p>
          </div>
        </div>
      </div>
      
      <div className="popular-cities">
        <h2 className="section-title">Popular Cities</h2>
        <div className="cities-grid">
          <div className="city-card">
            <div className="city-image city-1"></div>
            <h3>New York</h3>
          </div>
          <div className="city-card">
            <div className="city-image city-2"></div>
            <h3>Chicago</h3>
          </div>
          <div className="city-card">
            <div className="city-image city-3"></div>
            <h3>Los Angeles</h3>
          </div>
          <div className="city-card">
            <div className="city-image city-4"></div>
            <h3>Miami</h3>
          </div>
          <div className="city-card">
            <div className="city-image city-5"></div>
            <h3>San Francisco</h3>
          </div>
          <div className="city-card">
            <div className="city-image city-6"></div>
            <h3>Seattle</h3>
          </div>
        </div>
      </div>
      
      <div className="app-download">
        <div className="app-content">
          <h2>Take Book My Table With You</h2>
          <p>Download our mobile app for a seamless booking experience on the go.</p>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <i className="fa fa-apple"></i> App Store
            </a>
            <a href="#" className="app-button">
              <i className="fa fa-android"></i> Google Play
            </a>
          </div>
        </div>
        <div className="app-image"></div>
      </div>
      
      <div className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <p>"Book My Table saved me so much time! I found a romantic spot for our anniversary in minutes."</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <div className="rating">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for exclusive offers and new restaurant alerts</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;