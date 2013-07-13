var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var test = "Hello World new thing through var!";

var data = fs.readFileSync("index.html", "utf8");
test=data.toString();


app.get('/', function(request, response) {
  response.send(test);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});