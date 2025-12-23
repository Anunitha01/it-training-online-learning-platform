const express = require("express");
const cors = require("cors");

const coursesRoute = require("./routes/courses");
const teamRoute = require("./routes/team");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/courses", coursesRoute);
app.use("/team", teamRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
