import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // <-- NavLink for active class
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} className="nav-logo" alt="Logo" />
        </NavLink>

        {/* Hamburger / X Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "bar active" : "bar"}></span>
          <span className={menuOpen ? "bar active" : "bar"}></span>
          <span className={menuOpen ? "bar active" : "bar"}></span>
        </div>

        {/* Menu Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/programs" onClick={() => setMenuOpen(false)}>Program</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/campus" onClick={() => setMenuOpen(false)}>Campus</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>
          </li>
          <li>
            <NavLink className="btn" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
