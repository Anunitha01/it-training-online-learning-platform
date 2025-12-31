import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email (e.g., name@gmail.com)");
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be exactly 8 characters, include letters, numbers, and a special symbol."
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Oops! Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form className="register-form" onSubmit={handleRegister}>
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="ADAM MATHEW"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          required
        />

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
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="register-message">{message}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
