"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import userrouter from "../"
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express_1.default();
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
module.exports = app;
