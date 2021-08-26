"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsers = void 0;
const authgenerator_1 = require("../utils/authgenerator");
function loginUsers(req, res, next) {
    const token = req.cookies.token;
    const userData = token && authgenerator_1.validateToken(token);
    console.log("userData", userData);
    if (userData != null) {
        req.currentUser = userData;
        next();
    }
    else {
        res
            .status(401)
            .json({ err: "You need to be logged in to access this data" });
    }
}
exports.loginUsers = loginUsers;
