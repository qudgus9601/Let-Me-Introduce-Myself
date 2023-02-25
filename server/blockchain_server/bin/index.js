"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
console.log(process.env.NODE_ENV);
process.env.NODE_ENV === "production"
    ? dotenv_1.default.config({ path: ".env.production" })
    : dotenv_1.default.config({ path: ".env.development" });
console.log(process.env.CLIENT_URL);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/api/v1", index_1.default);
app.get("/", function (req, res) {
    res.status(200).json({ message: "👋 This Is Blockchain Server" });
});
app.listen(process.env.SERVER_PORT, function () {
    console.log("📚 Blockchain Server Open In " + process.env.SERVER_PORT);
});
