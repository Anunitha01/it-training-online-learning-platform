import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Auth.css";

import robot from "../assets/robot_6.png";
import laptop from "../assets/laptop_auth.png";
import courseIcon from "../assets/icon_course.png";
import certIcon from "../assets/icon_certificate.png";
import supportIcon from "../assets/icon_support.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("🎉 Welcome back!");
      setTimeout(() => navigate("/courses"), 1000);
    } catch {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="auth-page">
      <main className="auth-main">

        <div className="auth-hero">
          <h1>Welcome Back</h1>
          <p>Log in to continue your learning journey.</p>
        </div>

        <div className="auth-visuals">
          <img src={robot} className="auth-image left" alt="" />

          <section className="auth-card">
            <h2>Login</h2>

            <form className="auth-form" onSubmit={handleLogin}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>
            </form>

            {message && <p className="auth-message">{message}</p>}

            <p className="auth-link">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>

            <p className="auth-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </section>

          <img src={laptop} className="auth-image right" alt="" />
        </div>

        <div className="auth-features">
          <div className="feature-item">
            <img src={courseIcon} alt="" /> Expert-led courses
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <img src={certIcon} alt="" /> Certificates
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <img src={supportIcon} alt="" /> 24/7 Support
          </div>
        </div>

      </main>
    </div>
  );
}

export default Login;
