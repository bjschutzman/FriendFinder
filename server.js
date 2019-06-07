// dependencies
var express = require('express');
var path = require('path');


// set up express app;
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.use(express.static('app/public'));
// router

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

// Listener
// starts server

app.listen(PORT, function(){
    console.log('App Listening on PORT ' + PORT);
})