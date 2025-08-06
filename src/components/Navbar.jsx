import "./styles/Navbar.css";
import React, { useState } from "react";
import HKNLogo from "../assets/HKN-Logo-New-Blue.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand home-link Outreach">
        <a className="navbar-logo-text" href="/">
          <span className="navbar-logo">
            <img src={HKNLogo} alt="Logo" />
          </span>
          Outreach
        </a>
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      {/* Responsive links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <button className="contact-button">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;