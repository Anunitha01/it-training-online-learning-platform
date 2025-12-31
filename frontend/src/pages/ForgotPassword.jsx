import { useState } from "react";
import axios from "axios";
import "../Style/Auth.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setMessage("⚠️ Please enter a valid email (e.g., name@gmail.com)");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(res.data.message || "📩 Password reset link sent to your email!");
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(`❌ ${err.response.data.message}`);
      } else {
        setMessage("😅 Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="page-wrapper">
      {/* Render Navbar only if not already mounted */}
      {document.querySelectorAll("nav").length === 0 && <Navbar />}

      <div className="page-content">
        <div className="forgot-container">
          <h2>Forgot Password</h2>

          <form className="forgot-form" onSubmit={handleForgotPassword}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Send Reset Link</button>
          </form>

          {message && <p className="forgot-message">{message}</p>}
        </div>
      </div>

      {/* Render Footer only if not already mounted */}
      {document.querySelectorAll("footer").length === 0 && <Footer />}
    </div>
  );
}

export default ForgotPassword;
