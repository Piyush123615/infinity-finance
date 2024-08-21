import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Infinity Finance. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-developer">
        <p>Developed by: Piyush, Ram, Rajkumar, Mukul, Nitin, Pankaj, Prajakta</p>
      </div>
    </footer>
  );
};

export default Footer;
