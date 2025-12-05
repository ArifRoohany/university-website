import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="edu-footer">
      <div className="footer-container">

        {/* ===== Column 1 : Logo + About ===== */}
        <div className="footer-col">
          <h2 className="footer-logo">Educity</h2>
          <p className="footer-about">
            EduLearn provides modern digital education resources for students and teachers.
            Join us for high-quality learning.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* ===== Column 2 : Quick Links ===== */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* ===== Column 3 : Student Resources ===== */}
        <div className="footer-col">
          <h3>Student Resources</h3>
          <ul className="footer-links">
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Online Library</a></li>
            <li><a href="#">Enroll Now</a></li>
          </ul>
        </div>

        {/* ===== Column 4 : Contact Info ===== */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p className="footer-contact">📍 Kabul, Afghanistan</p>
          <p className="footer-contact">📞 +93 780 000 000</p>
          <p className="footer-contact">📧 info@edulearn.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Educity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
