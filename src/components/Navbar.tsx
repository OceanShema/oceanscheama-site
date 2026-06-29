import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <img src="/oceanschemalogo.png" alt="OceanSchema Logo" />
          <span>OceanSchema</span>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#problem" className="nav-links">The Problem</a>
          </li>
           <li className="nav-item">
            <a href="#product" className="nav-links">Product</a>
          </li>
           <li className="nav-item">
            <a href="#market" className="nav-links">Market</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links btn-primary">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

