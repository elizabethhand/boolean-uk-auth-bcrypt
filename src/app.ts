import express from "express";
import userrouter from "../src/resources/users/router"

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());


module.exports = app;
