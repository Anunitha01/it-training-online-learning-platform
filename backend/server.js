const express = require("express");
const cors = require("cors");

const coursesRoute = require("./routes/courses");
const faqRoute = require("./routes/faq");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// API routes
app.use("/courses", coursesRoute);
app.use("/faq", faqRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});