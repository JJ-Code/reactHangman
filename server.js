// React Server *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require('path');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 7080;

// Requiring our models for syncing
const db = require("./models");


// Use morgan logger for logging requests
app.use(logger("dev"));


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory
// Serve files from the public folder
//app.use(express.static(path.resolve(__dirname, 'client/build')));

// Add routes, both API and view
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactHangman", {
    useNewUrlParser: true
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
