"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const express = require("express");
const router = express();
router.post('/login', controller_1.loginUser);
exports.default = router;
