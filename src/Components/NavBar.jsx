import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css"
const NavBar = () => {
  return (
    <nav className="nav">
      <img src="#" alt="Logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
