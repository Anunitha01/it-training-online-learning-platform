const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const blogPath = path.join(__dirname, "../data/blog.json");

// GET all blogs
router.get("/", (req, res) => {
  fs.readFile(blogPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Oops! Something went wrong.Failed to load blogs" });
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
