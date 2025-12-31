import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Auth.css";

import robot from "../assets/robot_6.png";
import laptop from "../assets/laptop_auth.png";
import courseIcon from "../assets/icon_course.png";
import certIcon from "../assets/icon_certificate.png";
import supportIcon from "../assets/icon_support.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 1000);
    } catch {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <main className="auth-main">

        {/* HERO */}
        <div className="auth-hero">
          <h1>Create Your Account</h1>
          <p>
            Join BrightPath and start your journey into modern IT learning.
            Build skills that matter in today’s industry.
          </p>
        </div>

        {/* CARD + IMAGES */}
        <div className="auth-visuals">
          <img src={robot} alt="Robot" className="auth-image left" />

          <section className="auth-card">
            <h2>Register</h2>

            <form className="auth-form" onSubmit={handleRegister}>
              <label>Full Name</label>
              <input
                placeholder="ADAM MATHEW"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
                required
              />

              <label>Email Address</label>
              <input
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Create a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Create Account</button>
            </form>

            {message && <p className="auth-message">{message}</p>}

            <p className="auth-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </section>

          <img src={laptop} alt="Laptop" className="auth-image right" />
        </div>

        {/* FEATURES */}
        <div className="auth-features">
          <div className="feature-item">
            <img src={courseIcon} alt="" />
            <span>Expert-led courses</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <img src={certIcon} alt="" />
            <span>Certificates</span>
          </div>

          <div className="feature-divider"></div>

          <div className="feature-item">
            <img src={supportIcon} alt="" />
            <span>24/7 Support</span>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Register;
