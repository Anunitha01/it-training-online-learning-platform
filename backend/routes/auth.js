const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const router = express.Router();
const SECRET_KEY = "mySecretKey"; 


const usersFilePath = path.join(__dirname, "../data/users.json");


function readUsers() {
  if (!fs.existsSync(usersFilePath)) return [];
  const data = fs.readFileSync(usersFilePath, "utf-8");
  return JSON.parse(data);
}


function writeUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const users = readUsers();

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });

  writeUsers(users);

  res.json({ message: "User registered successfully" });
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});


router.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User with this email does not exist" });
  }

  
  const resetToken = crypto.randomBytes(32).toString("hex");
  const expiry = Date.now() + 3600000; 

  
  user.resetToken = resetToken;
  user.resetTokenExpiry = expiry;
  writeUsers(users);

  
  const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
  res.json({ message: "Password reset link generated", resetLink });
});


router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const users = readUsers();
  const user = users.find(
    u => u.resetToken === token && u.resetTokenExpiry > Date.now()
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;

  
  delete user.resetToken;
  delete user.resetTokenExpiry;

  writeUsers(users);

  res.json({ message: "Password reset successful. You can now log in." });
});

module.exports = router;
