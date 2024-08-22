import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Infinity Finance</div>
      <nav className="navbar-nav">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/aboutus" className="navbar-link text-white">Aboutus</Link>
        <Link to="/enquiry" className="navbar-link">Enquiry</Link>
        <Link to="/ourservices" className="navbar-link">Our Services</Link>
        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
