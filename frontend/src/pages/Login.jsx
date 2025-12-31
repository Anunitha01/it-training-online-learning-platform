import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Auth.css";

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
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
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
    </div>
  );
}

export default Login;
