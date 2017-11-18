var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});