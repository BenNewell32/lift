var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");
var CNPdata;

// PULL CNP DATA//
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Goto page
  await page.goto(
    "https://www.reservecnp.com/overland-park/pickleball-indoor-court/"
  );
  // Scroll down
  page.evaluate((_) => window.scrollBy(0, 1000));
  // Wait a bit
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // Get the src of the iframe
  CNPdata = await page.evaluate(`$("#id_tm").find("option").text()`);

  console.log(CNPdata);
  await browser.close();
})();
//////////////////

router.get("/", async function (req, res, next) {
  res.render("pickleball", {
    title: "Ben and Yana Pickleball",
    data: CNPdata,
  });
});

module.exports = router;
