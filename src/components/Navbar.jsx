import "./styles/Navbar.css";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import HKNLogo from "../assets/HKN-Logo-New-Blue.png";

const FORM_URL = "https://forms.gle/VmK7A5yK789ofeEJA";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openFormWindow = useCallback(() => {
    const win = window.open(
      FORM_URL,
      "hknFormWindow",
      "width=900,height=700,resizable,scrollbars"
    );
    if (!win) {
      window.location.href = FORM_URL;
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <button className="contact-button" onClick={() => { closeMenu(); openFormWindow(); }}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;