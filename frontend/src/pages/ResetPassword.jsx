import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Auth.css";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );
      setMessage(res.data.message || "Password reset successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      setMessage("Reset failed. Try again.");
    }
  };

  return (
    <div className="auth-page">
      <main className="auth-main">

        <div className="auth-hero">
          <h1>Reset Password</h1>
          <p>Choose a new secure password.</p>
        </div>

        <div className="auth-visuals">
          <section className="auth-card">
            <h2>New Password</h2>

            <form className="auth-form" onSubmit={handleReset}>
              <label>New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit">Reset Password</button>
            </form>

            {message && <p className="auth-message">{message}</p>}
          </section>
        </div>

      </main>
    </div>
  );
}

export default ResetPassword;
