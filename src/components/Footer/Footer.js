import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer-2-cols" className="site-footer">
        <div id="footer-container">
          <div id="footer-grid">
            <div id="left-footer-section" className="footer-section">
              <div id="footer-search">
                <form action="">
                  <input type="search" placeholder="Photographer" />
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="footer-information">
                <p>
                  <img src="https://img.icons8.com/ios-filled/12/999999/marker.png" alt=""/>
                  Kallanpur, Dhaka, Bangladesh.
                </p>
                <p>
                  <img src="https://img.icons8.com/ios-filled/12/999999/phone.png" alt=""/>
                  01779312970
                </p>
                <p>
                  <img src="https://img.icons8.com/ios-filled/12/999999/mail.png" alt=""/>
                  khandoker15-1992@diu.edu.bd
                </p>
                <p>
                  <img src="https://img.icons8.com/ios-filled/12/999999/clock.png" alt=""/>
                  8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
            <div id="right-footer-section" className="footer-section">
              <div className="footer-links">
                <ul>
                  <li role="menuitem">
                    <Link to="/">Home</Link>
                  </li>
                  
                  <li role="menuitem">
                    <Link to="/">Message Us</Link>
                  </li>
                  <li role="menuitem">
                    <Link to="/">Leave a Feedback</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="copyright-information">
            <div id="footer-logo-section">
              <div id="footer-logo">
                <img
                  src="https://raw.githubusercontent.com/taviskaron/2-3-4-column-footers/main/img/logo.png"
                  alt=""
                />
              </div>
            </div>
            <div id="copyright-text">
              &copy; Khandoker Shamimul Haque 2022. All rights reserved.
            </div>
            <div id="social-buttons">
              <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png" alt=""/>
              <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png" alt=""/>
              <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png" alt=""/>
              <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png" alt=""/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
