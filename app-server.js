// server side file to run using node
// code express server here

//include express framework in the express variable
var express = require('express');

// create instance of express app by invoking the express variable
var app = express();

//tell the app to listen for requests at this port number
var PORT = 8080;

//on the express app instance use middleware express.static() to serve static files from the public directory
//pass through the folder path of the static files and bootstrap files
app.use(express.static('./public'));
// app.use(express.static('.node_modules/bootstrap/dist'));

//let user know a server is running
app.listen(PORT, function() {
  console.log("Polling server is running at http://localhost:" + PORT);
});
