const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Route to get courses
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/courses.json");

  // Asynchronous file reading
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).json({ error: "Failed to read courses data." });
    }

    try {
      const courses = JSON.parse(data); // Parse the JSON data
      console.log("COURSES COUNT FROM ROUTE:", courses.length); // For debugging
      res.json(courses); // Send the courses data
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return res.status(500).json({ error: "Failed to parse courses data." });
    }
  });
});

module.exports = router;

