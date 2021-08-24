"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = express_1.Router();
router.get("/", controller_1.getUsers);
router.post("/", controller_1.postUser);
exports.default = router;
