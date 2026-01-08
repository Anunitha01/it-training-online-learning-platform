import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* LEFT: Logo */}
      <div className="nav-left">
        <img src={logo} alt="BrightPath Logo" className="nav-logo" />
      </div>

      {/* CENTER: Scroll Links */}
      <nav className="nav-links">
        <ScrollLink to="bp-hero" smooth={true} duration={500} offset={-60}>
          Home
        </ScrollLink>
        <ScrollLink to="bp-paths" smooth={true} duration={500} offset={-60}>
          Courses
        </ScrollLink>
        <ScrollLink to="bp-about" smooth={true} duration={500} offset={-60}>
          About
        </ScrollLink>
        <ScrollLink to="bp-team" smooth={true} duration={500} offset={-60}>
          Team
        </ScrollLink>
        <ScrollLink to="bp-faq" smooth={true} duration={500} offset={-60}>
          Help
        </ScrollLink>
      </nav>

      {/* RIGHT section removed — no login button */}
      {/* Removed completely to maintain alignment */}
    </header>
  );
}
