
import "./styles/Navbar.css";
import React, { useState } from "react";
import HKNLogo from "../assets/HKN-Logo-New-Blue.png";
const Navbar = () => (

  <nav className="navbar">


    <div className="navbar-brand home-link Outreach">
      <a className="navbar-logo-text" href="/">
        <span className="navbar-logo">
          <img src={HKNLogo} alt="Logo" />
        </span>
        Outreach
      </a>
    </div>


    <div className="navbar-links">

      <a href="/about">About Us</a>

      <a href="/services">Services</a>

      <button className="contact-button">Contact</button>

    </div>


  </nav>

);

export default Navbar;
