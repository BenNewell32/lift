var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  res.render("picklepodz", {
    title: "Custom Podz",
    // data: CNPdata,
  });
});

module.exports = router;
