const express=require('express')
const app = express();
const multer = require('multer');
const http = require('http');


// Multer diskStorage Defination
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/uploads');
  },
  filename: function (req, file, cb) {
  	name=file.originalname;
  	arr=name.split('.');
  	extn=arr[arr.length-1];
    cb(null, file.fieldname + '-' + Date.now()+'.'+extn)
  }
});

var upload = multer({ storage: storage }).single('resume');

app.post('/resumeupload', function (req, res) {
   upload(req, res, function (err) {
    if (err) {
      res.send("error"+err);
      return
    }
    res.send("file upload success");
    // Everything went fine
  })
})