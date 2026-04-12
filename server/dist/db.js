"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const main = async () => {
    await mongoose_1.default.connect("mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/Brainly");
    console.log("DB Connected Successfully");
};
exports.main = main;
//# sourceMappingURL=db.js.map