const express = require("express");
const cors = require("cors");

// Existing routes
const coursesRoute = require("./routes/courses");
const teamRoute = require("./routes/team");

// New auth route
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Existing routes
app.use("/courses", coursesRoute);
app.use("/team", teamRoute);

// New auth routes
app.use("/api/auth", authRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
