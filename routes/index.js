var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Lift LLC" });
});

module.exports = router;
