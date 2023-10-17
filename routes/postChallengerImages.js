var express = require("express");
var router = express.Router();

//adding images to app
const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//   cb(null,file.fieldname + '-' + Date.now() + '.jpg')
//   }
// })

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
  cb(null,'mlp2023.5.challenger.jpg')
  }
})

const upload = multer({
  storage: storage,
}).single('myImage2');

router.post("/", async function (req, res, next) {
  upload(req,res, (err) =>{
    if(err){
      res.render('index', 'failed');
    }
    else{
      console.log(req.file);
      res.send('test');
    }
  });
});

module.exports = router;

