import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/auth.css"; // make sure path matches your CSS file

function ResetPassword() {
  const { token } = useParams(); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Password validation regex
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // 🔒 Validate password
    if (!passwordRegex.test(password)) {
      setMessage(
        "Password must be at least 8 characters, include letters, numbers, and a special symbol."
      );
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      setMessage(res.data.message || "Success! Your new password is ready to use.");

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (err.response && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("🔄 Password reset failed — let’s give it another shot.");
      }
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>

      <form className="reset-form" onSubmit={handleResetPassword}>
        <label>New Password:</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>
      </form>

      {message && <p className="reset-message">{message}</p>}
    </div>
  );
}

export default ResetPassword;
