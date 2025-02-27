import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";


function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className="footer-logo">
            <h2>Book My Table</h2>
            <p>Reserve Your Perfect Dining Experience</p>
          </div>
          <p className="footer-description">
            Book My Table helps you discover and book the best restaurants in your city with just a few clicks.
            No more waiting in lines or making phone calls.
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/search">Find Restaurants</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/blog">Food Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Help & Support</h3>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/refunds">Cancellation & Refunds</Link></li>
            <li><Link to="/report">Report an Issue</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fa fa-map-marker"></i>
              <span>123 Restaurant Avenue, Foodie District, NY 10001</span>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <span>(123) 456-7890</span>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <span>support@bookmytable.com</span>
            </li>
          </ul>
          
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
            <FaFacebookF/>
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
            <FaXTwitter/>
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
            <FiInstagram/>
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="app-badges">
          <p>Download Our Mobile App</p>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <i className="fa fa-apple"></i> App Store
            </a>
            <a href="#" className="app-button">
              <i className="fa fa-android"></i> Google Play
            </a>
          </div>
        </div>
        
        <div className="subscribe-form">
          <p>Subscribe to our newsletter</p>
          <div className="form-container">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="payment-methods">
        <p>Accepted Payment Methods:</p>
        <div className="payment-icons">
          <i className="fa fa-cc-visa"></i>
          <i className="fa fa-cc-mastercard"></i>
          <i className="fa fa-cc-amex"></i>
          <i className="fa fa-cc-discover"></i>
          <i className="fa fa-cc-paypal"></i>
          <i className="fa fa-google-wallet"></i>
          <i className="fa fa-cc-apple-pay"></i>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} Book My Table. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <p className="attribution">Designed with <span className="heart">♥</span> by speedmonn</p>
      </div>
    </footer>
  );
}

export default Footer;