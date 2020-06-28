const express = require("express");
const http = require("http");
const morgan = require("morgan");
const app =express();
const hostname="localhost";
const port = 3000;
app.use(express.static("public"));
app.use(function(req,res){                        //app.use((req,res)=>{the next code})
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type","text/html");
  res.end("<h1>This is Express Server</h1>");

})
app.listen(3000,function(req,res){
console.log("server running at https://"+hostname+":"+port);
})


// we can use this
