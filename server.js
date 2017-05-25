var express= require ('express');
var app=express();
var ejs=require("ejs");
var fs=require("fs");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors = require('cors');
var path = require('path');

//route
const route=require('./routes/route')

//port
const port = 3000;

/*
//mongo connection
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',function(){
    console.log('connected to db 27017');
})

//on connection error
mongoose.connection.on('error',function(err){
  if(err){
    console.log('error connection db '+err);
  }
})
*/

//middleware
app.use(cors());

//bodyparser
app.use(bodyparser.json())

//static files
app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/api',route);


//testing server
/*app.get('/',function(req,res){
    res.render(__dirname+"/src/index.html");
})

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile)
*/
app.get('*',function (req, res) {
    res.res('index.html');
});

/*app.set('views',__dirname+'/client/src');*/

app.listen(port,function(){
    console.log("server started at port "+port)
})