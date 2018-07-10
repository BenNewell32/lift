var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var request = require('request');
var fetch = require('node-fetch');

// function fetchProjects(){
// }


router.get('/', function(req, res, next) {
    setTimeout(()=>{
        res.render('projects', { 
            title: 'Projects', 
            projects: allProjects 
        })
    },3000)
})
module.exports = router;
