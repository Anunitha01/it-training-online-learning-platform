const express = require("express");
const router = express.Router();
const team = require("../data/team.json");

router.get("/", (req, res) => {
  res.json(team);
});

module.exports = router;
