"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default
    .set("strictQuery", false)
    .connect(String(process.env.MONGO_URI))
    .then(function () {
    console.log("🍀 MongoDB Connected");
})
    .catch(function (err) { });
app.listen(process.env.SERVER_PORT, function () {
    console.log("📚 Blockchain Server Open");
});
