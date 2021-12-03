"use strict";

// import required modules
var express = require('express');

var cors = require('cors'); // create the app and router


var app = express();
var router = express.Router(); // import db connection

var createConnection = require('./db/connection'); // constant variables


var port = 5000; // middlewares

app.use(cors()); // route to get all the tools in the database

router.get('/tools', function (req, res) {
  var conn = createConnection();
  var Select_All_Tools_Query = 'SELECT * FROM tools';
  conn.query(Select_All_Tools_Query, function (err, rows) {
    if (err) throw err; //could be tools: rows

    res.json({
      data: rows
    });
  });
  conn.end();
}); // route to get all the users

router.get('/users', function (req, res) {
  var conn = createConnection(); // query to get all the users

  var query = 'SELECT * FROM users;';
  conn.query(query, function (err, rows) {
    if (err) throw err;
    res.json({
      data: rows
    });
  });
  conn.end();
}); // query to get all the companies

router.get('/companies', function (req, res) {
  var conn = createConnection();
  var query = 'SELECT * FROM companies;';
  conn.query(query, function (err, rows) {
    if (err) throw err;
    res.json({
      data: rows
    });
  });
  conn.end();
}); // enable app to use the router

app.use('/', router); // start the app

app.listen(port); // message that the server started successfully

console.log("express server started at http://localhost:".concat(port, "/"));