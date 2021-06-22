var express = require('express');
var app = express();

let path = __dirname + "/views/index.html";
let csspath = __dirname + "/public";
;


console.log(path);

console.log("Hello World");

app.use("/public" ,express.static(csspath) );


app.get("/" , (req,res)=>{
  
  res.sendfile(path);
  //res.sendFile(path);
  

})

































 module.exports = app;
