import React from 'react'
import './Footer.css'
import { InstagramLogo, FacebookLogo, GithubLogo } from 'phosphor-react'
import footerlogo from '../../Images/HireMeLogoFooter.svg'
const Footer = () => {
  return (
    <>
         <footer className="footer">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="logoContainer">
          <img src={footerlogo} alt="Company Logo" className="logo" />
          {/* You can replace "/path/to/logo.png" with the actual path to your company logo */}
        </div>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook"><InstagramLogo size={32} /></i></a>
          <a href="#twitter"><i className="fab fa-twitter"><FacebookLogo size={32} /></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"><GithubLogo size={32} /></i></a>
          {/* You can use Font Awesome or other icon libraries to add social media icons */}
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <ul>
          <li><a href="#products">Our Products</a></li>
          <li><a href="#company">Our Company</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="copywrite">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
