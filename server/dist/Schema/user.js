"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 10,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 20,
    }
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.js.map