import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP FOOTER */}
      <div className="footer-container">
        
        {/* BRAND */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="BrightPath Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Empowering learners with practical IT skills for the future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* CONTACT / SOCIAL */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>support@brightpath.edu</p>

          <div className="footer-socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🔗</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © 2025 BrightPath IT Academy & Learning Hub. All rights reserved.
        </p>
        <p className="footer-note">
          Designed for academic project purposes.
        </p>
      </div>
    </footer>
  );
}
