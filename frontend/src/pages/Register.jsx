import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Auth.css";

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

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
