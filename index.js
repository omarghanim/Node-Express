const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.json());

const hostname="localhost";
const port = 3000;
app.use(express.static("public"));
// app.use(function(req,res){                        //app.use((req,res)=>{the next code})
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader("Content-Type","text/html");
//   res.end("<h1>This is Express Server</h1>");
// })
app.all("/dishes",function(req,res,next){
  res.statusCode = 200 ;
  res.setHeader("Content-Type","text/html")
  next();
})
app.get("/dishes",function(req,res){
    res.end('Will send all the dishes to you!');
})
app.post("/dishes",function(req,res){
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);

})
app.put("/dishes",function(req,res){
  res.statusCode = 403 ;
  res.end('PUT operation not supported on /dishes');
})
app.delete("/dishes",function(req,res){
res.end("Deleting all dishes");
})


app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.listen(3000,function(req,res){
console.log("server running at https://"+hostname+":"+port);
})


// we can use this
