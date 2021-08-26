"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET;
function createToken(payload) {
    const token = jsonwebtoken_1.default.sign(payload, secret);
    console.log("TOKEN", token);
}
exports.createToken = createToken;
function validateToken(token) {
    const validated = jsonwebtoken_1.default.verify(token, secret);
}
exports.validateToken = validateToken;
