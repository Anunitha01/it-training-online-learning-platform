const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/courses.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const courses = JSON.parse(data);

  console.log("COURSES COUNT FROM ROUTE:", courses.length);
  res.json(courses);
});

module.exports = router;
