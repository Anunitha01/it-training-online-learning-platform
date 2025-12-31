import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/auth.css"; // make sure path matches your CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Password validation regex
  // At least 8 characters, one letter, one number, one special char
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔒 Frontend validation before sending request
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email (e.g., xxx@gmail.com)");
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 8 characters, include letters, numbers, and a special symbol."
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("🎉 Welcome back! You’ve logged in successfully.");

      setTimeout(() => {
        navigate("/courses");
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("🔑 Login failed — check your email and password, then try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="xxx@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="login-message">{message}</p>}

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>

      {/* 🔑 Forgot Password Option */}
      <p>
        <Link to="/forgot-password" className="forgot-link">
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default Login;
