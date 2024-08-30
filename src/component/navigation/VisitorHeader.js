import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';

const VisitorHeader = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Infinity Finance</div>
      <nav className="navbar-nav">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/aboutus" className="navbar-link text-white">Aboutus</Link>
        <Link to="/enquiry" className="navbar-link">Enquiry</Link>
      
        {/* <select className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <option defaultValue>Our Services</option>
                <option><Link to={'/homeloan'} className="navbar-link">Home Loan</Link></option>
                <option>Two-Wheeler Loan</option>
                <option>Foue-Wheeler Loan</option>
                <option>Business Loan</option>
        </select> */}
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Our Services
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dopdown-item" to="/homeloan">Home Loan</Link></li>
    <li><Link className="dropdown-item" to="/business-loan">Business Loan</Link></li>
    <li><Link className="dropdown-item" to="/twowheeler-loan">Two Wheeler Loan</Link></li>
    <li><Link className="dropdown-item" to="/fourwheeler-loan">Four Wheeler Loan</Link></li>
  </ul>
</div>
      
        <Link to="/contact" className="navbar-link">Contact Us</Link>
        <Link to="/signin" className="navbar-link">Sign In</Link>
      </nav>
    </header>
  );
};

export default VisitorHeader;
