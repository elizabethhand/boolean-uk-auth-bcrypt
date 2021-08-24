import express from "express";
import userrouter from "./resources/users/router"

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/users", userrouter)

app.all("*", (req, res) => {
    res.status(404).json("No route match");
});


module.exports = app;
