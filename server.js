// dependencies
var express = require('express');
var path = ('path');

// set up express app;
var app = express();
var port = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// data