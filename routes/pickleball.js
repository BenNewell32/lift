var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  res.render("pickleball", {
    title: "Ben and Yana Pickleball",
  });
});

module.exports = router;
