var express = require('express');
var app = express();

let path = __dirname + "views/index.html";


console.log("Hello World");


app.get("/" , (req,res)=>{
  res.sendFile(path);
  

})

































 module.exports = app;
