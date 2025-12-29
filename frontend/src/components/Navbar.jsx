import "./Navbar.css";
import logo from "../assets/logo.png";

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
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">FAQ</a>
      </nav>

      {/* RIGHT: Login */}
      <button className="login-btn">Login</button>
    </header>
  );
}
