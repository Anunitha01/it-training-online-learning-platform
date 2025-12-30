import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  return (
    <header className="navbar">
      {/* LEFT: Logo only */}
      <div className="nav-left">
        <img
          src={logo}
          alt="BrightPath Logo"
          className="nav-logo"
        />
      </div>

      {/* CENTER: Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>  {/* ✅ updated */}
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      {/* RIGHT: Login */}
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </header>
  );
}
