"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const userMiddleware = (req, res, next) => {
    const { token } = req.cookies;
    if (!token)
        throw new Error("Token Doesn't exits !");
    const payload = jsonwebtoken_1.default.verify(token, config_1.JWT_PASSWORD);
    if (!payload)
        throw new Error("Id Doesn't exist !");
    // @ts-ignore
    req.userId = payload.id;
    next();
};
exports.userMiddleware = userMiddleware;
//# sourceMappingURL=middleware.js.map