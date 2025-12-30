import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // shared CSS with Register

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Password validation regex
  // At least 8 characters, one letter, one number, one special char
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔒 Frontend validation before sending request
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email (e.g., name@gmail.com)");
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
      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/courses");
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Invalid email or password");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="name@gmail.com"
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

      {message && <p className="message">{message}</p>}

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
