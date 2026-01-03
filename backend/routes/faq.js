const express = require("express");
const router = express.Router();
const faqData = require("../data/faq.json"); 

router.get("/", (req, res) => {
  res.json(faqData);
});

module.exports = router;
