"use strict";

// load modules
const express = require("express");
const morgan = require("morgan");
const jsonParser = require("body-parser").json;
const mongoose = require("mongoose");
const searches = require("./searches");
const path = require("path");
const app = express();

//Mongoose connections
mongoose.connect(
  process.env.MONGOLAB_URI || "mongodb://localhost:27017/searches"
);
const db = mongoose.connection;

//DB shows error if there is a connection error.
db.on("error", function(err) {
  console.error("connection error:", err);
});

//DB shows successful connection upon opening.
db.once("open", function() {
  console.log("Database connection successful.");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

// set our port
app.set("port", process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan("dev"));
app.use(jsonParser());
app.use(express.static(path.join(__dirname, "/movie-searcher/build")));

// add additional routes here
app.use("/api/searches", searches);

// send a friendly greeting for the root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Search Results API"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/movie-searcher/build/index.html"));
});

// uncomment this route in order to test the global error handler
// app.get('/error', function (req, res) {
//   throw new Error('Test error');
// });

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found"
  });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
const server = app.listen(app.get("port"), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

module.exports = app;
