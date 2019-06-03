var http = require("http");
var express = require("express");
var app = express();
var morgan = require("morgan");
var mongoose = require("mongoose");

const uri = "mongodb://jogirajuvvsl:vzc92096@ds014388.mlab.com:14388/qnadatabase";

mongoose.connect(uri,   { useNewUrlParser: true },function(error) {
   if(error)
   {
     console.log(error);
   }else {
      console.log("connected to database");
   }
 });


// middleware
app.use(morgan('dev'));

app.get("/get",function(err,req,response){
   
   req.send("got get request");
});

app.listen(3000, function(err,req){
   if(err) throw err;
   console.log("Server at 3000");
});
// http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   // response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   // response.end('Hello World\n');
// }).listen(8081);

// Console will print the message

console.log("outside");