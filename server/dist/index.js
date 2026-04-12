"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("./Schema/user");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("./config/config");
const content_1 = require("./Schema/content");
const middleware_1 = require("./middleware/middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        await user_1.User.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "user signup successfully"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "user already exits !"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existingUser = await user_1.User.findOne({ username, password });
        if (!existingUser) {
            return res.status(403).json({
                message: "Invalid Credentials"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, config_1.JWT_PASSWORD);
        res.cookie("token", token);
        res.status(200).json({
            message: "Signin Successfully"
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Unknown error occurred"
        });
    }
});
app.post("/api/v1/content", middleware_1.userMiddleware, async (req, res) => {
    try {
        const type = req.body.type;
        const title = req.body.title;
        const link = req.body.link;
        await content_1.contentModel.create({
            type,
            title,
            link,
            // @ts-ignore
            userId: req.userId,
            tags: []
        });
        res.status(200).json({
            message: "Content Added Successfully"
        });
    }
    catch (e) {
        res.send(403).json({
            message: "Invalid Content"
        });
    }
});
app.get("/api/v1/content", () => {
});
app.delete("/api/v1/content", () => {
});
app.post("/api/v1/brain/share", () => {
});
app.get("/api/v1/brain/:shareLink", () => {
});
(0, db_1.main)().then(() => {
    app.listen(3000, () => {
        console.log("Server Started On Port : 3000");
    });
}).catch((e) => {
    console.log("Error : " + e);
});
//# sourceMappingURL=index.js.map