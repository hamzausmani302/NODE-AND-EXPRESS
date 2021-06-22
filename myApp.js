var express = require('express');
var app = express();

let path = __dirname + "/views/index.html";
let csspath = __dirname + "/public/";



console.log(csspath);

app.use("/public" , express.static(csspath));


app.get("/" , (req,res)=>{
  
  res.sendFile(path);
  //res.sendFile(path);
  

})


































 module.exports = app;
