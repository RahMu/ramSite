/* Import required libraries */
var app = require('express')();
var server = require('http').Server(app);
var serveStatic = require('serve-static');
var path = require('path');

/* External definitions */

/* Variables */
var port = 3001;

// Initialize server
console.log("Starting server...");
app.use(serveStatic("public"));
app.get('/', function(req, res) {
  console.log("Sending index");
  res.sendFile(path.join(__dirname, "public/html", "index.html"));
});

server.listen(port);
console.log("Server started on port: " + port);
