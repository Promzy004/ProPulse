// function Footer() {
//     return(
//         <>
//             <div className="footer">
//                 <div className="footer-logo">
//                     <img src="" alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Shop Categories</h3>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/fashion">Fashion</Link>
        <Link to="/gaming">Gaming</Link>
        <Link to="/appliances">Home Appliances</Link>
      </div>
      
      <div className="footer-section">
        <h3>Customer Service</h3>
        <Link to="/help">Help Center</Link>
        <Link to="/returns">Returns</Link>
        <Link to="/shipping">Shipping Info</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p>Phone: +234 7058149298</p>
        <p>Email: promiseedwin242@gmail.com</p>
        <p>Address: 1, Bankole street</p>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 ProPulse Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
