var express = require('express');
var app = express();

let path = __dirname + "views/index.html";
console.log(path);

console.log("Hello World");


app.get("/" , (req,res)=>{
  
  res.send(__dirname);
  //res.sendFile(path);
  

})

































 module.exports = app;
