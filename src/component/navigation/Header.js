import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Infinity Finance</div>
      <nav className="navbar-nav">
        <Link to="/" className="navbar-link">Sign-Out</Link>
      </nav>
    </header>
  );
};

export default Header;
