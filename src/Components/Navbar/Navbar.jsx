import React from 'react';
import './Navbar.css';
import logo from '../../Images/HireMeMenuLogo.svg'

const Navbar = () => {
  return (
  <nav className="navbar">
    {/* Company Logo */}
    <div className="logoContainer">
      <img src={logo} alt="Company Logo" className="logo" />
    </div>

    {/* Navigation Options */}
    <div className="navOptions">
      <a href="#products" className="navLink">Products</a>
      <a href="#company" className="navLink">Company</a>
      <a href="#resources" className="navLink">Resources</a>
      <a href="#pricing" className="navLink">Pricing</a>
    </div>

    {/* Buttons */}
    <div className="buttonContainer">
      <button className="button">Login</button>
      <button className="button">Get Started</button>
    </div>
  </nav>
  );
};
export default Navbar;
