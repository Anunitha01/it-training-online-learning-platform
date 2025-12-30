import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Auth.css"; // shared CSS with Register

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // for redirect after login

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page refresh
    try {
      // 1️⃣ Send login request to backend
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // 2️⃣ Save token in localStorage
      localStorage.setItem("token", res.data.token);

      // 3️⃣ Show success message
      setMessage("Login successful!");

      // 4️⃣ Redirect to courses page after 1 second
      setTimeout(() => {
        navigate("/courses");
      }, 1000);
    } catch (err) {
      // Show backend message if exists
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
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
    </div>
  );
}

export default Login;
