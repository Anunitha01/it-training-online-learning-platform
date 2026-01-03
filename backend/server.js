const express = require("express");
const cors = require("cors");

const coursesRoute = require("./routes/courses");
const authRoute = require("./routes/auth");

const blogRoute = require("./routes/blog");
const faqRoute = require("./routes/faq");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/courses", coursesRoute);

app.use("/api/auth", authRoute);

app.use("/blog", blogRoute);
app.use("/faq", faqRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

