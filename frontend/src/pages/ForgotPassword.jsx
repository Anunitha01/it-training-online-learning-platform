import { useState } from "react";
import axios from "axios";
import "../Style/Auth.css";

import robot from "../assets/robot_6.png";
import laptop from "../assets/laptop_auth.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.message || "Reset link sent!");
    } catch {
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="auth-page">
      <main className="auth-main">

        <div className="auth-hero">
          <h1>Forgot Password</h1>
          <p>Enter your email to receive a reset link.</p>
        </div>

        <div className="auth-visuals">
          {/* LEFT IMAGE */}
          <img src={robot} className="auth-image left" alt="Robot" />

          {/* CARD */}
          <section className="auth-card">
            <h2>Reset Password</h2>

            <form className="auth-form" onSubmit={handleForgotPassword}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">Send Reset Link</button>
            </form>

            {message && <p className="auth-message">{message}</p>}
          </section>

          {/* RIGHT IMAGE */}
          <img src={laptop} className="auth-image right" alt="Laptop" />
        </div>

      </main>
    </div>
  );
}

export default ForgotPassword;
