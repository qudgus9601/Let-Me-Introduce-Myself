"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var express_session_1 = __importDefault(require("express-session"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default
    .set("strictQuery", false)
    .connect(String(process.env.MONGO_URI))
    .then(function () {
    console.log("🍀 MongoDB Connected");
})
    .catch(function (err) { });
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
}));
app.use("/api/v1", index_1.default);
app.get("/", function (req, res) {
    res.status(200).json({ message: "👋 This Is Blockchain Server" });
});
app.listen(process.env.SERVER_PORT, function () {
    console.log("📚 Blockchain Server Open In " + process.env.SERVER_PORT);
});
