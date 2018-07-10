var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var fetch = require('node-fetch');
var request = require('request');
var projects = [];

// function beginScrape(){
// }

  router.get('/', function(req, res, next) {
    // beginScrape();
    setTimeout(()=>{res.send(projects)},3000);
  })

module.exports = router;
