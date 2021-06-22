var express = require('express');
var app = express();

let path = __dirname + "/views/index.html";
console.log(path);

console.log("Hello World");


app.get("/" , (req,res)=>{
  
  res.sendfile(path);
  //res.sendFile(path);
  

})

































 module.exports = app;
