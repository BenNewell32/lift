var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fs = require("fs");
var request = require("request");
var fetch = require("node-fetch");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var pickleballRouter = require("./routes/pickleball");
var bennybombsRouter = require("./routes/bennybombs");
var yanabearRouter = require("./routes/yanabear");
var protourRouter = require("./routes/protour");

var picklepodzRouter = require("./routes/picklepodz");
var projectsRouter = require("./routes/projects");
var liftInsightsRouter = require("./routes/liftinsights");
var addImagesRouter = require("./routes/addImages");
var postChallengerImagesRouter = require("./routes/postChallengerImages");
var postPremierImagesRouter = require("./routes/postPremierImages");

const puppeteer = require("puppeteer");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/pickleball", pickleballRouter);
app.use("/bennybombs", bennybombsRouter);
app.use("/yanabear", yanabearRouter);
app.use("/protour", protourRouter);

app.use("/picklepodz", picklepodzRouter);
app.use("/api", apiRouter);
app.use("/projects", projectsRouter);
app.use("/liftinsights", liftInsightsRouter);
app.use("/addImages", addImagesRouter);
app.use("/postChallengerImages", postChallengerImagesRouter);
app.use("/postPremierImages", postPremierImagesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
