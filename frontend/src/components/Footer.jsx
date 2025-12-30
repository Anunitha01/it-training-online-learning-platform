import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: LOGO */}
        <div className="footer-left">
          <img src={logo} alt="BrightPath Logo" className="footer-logo" />
        </div>

        {/* MIDDLE: DESCRIPTION */}
        <div className="footer-middle">
          <p className="footer-description">
            An academic-focused IT learning hub built for practical, industry-ready skills.
          </p>
        </div>

        {/* RIGHT: CONTACT */}
        <div className="footer-right">
          <p className="footer-contact-title">Contact Us</p>
          <p className="footer-contact-item">📞 012-3456789</p>
          <p className="footer-contact-item">📧 brightpath@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 BrightPath IT Academy & Learning Hub. All rights reserved.
      </div>
    </footer>
  );
}
