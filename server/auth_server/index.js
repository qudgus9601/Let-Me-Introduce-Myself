// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConfig = require("./utils/passport");
const session = require("express-session");
const https = require("https");
const fs = require("fs");

// config
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((err) => {});
app.use(passport.initialize());
passportConfig();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
  })
);
app.use(passport.session());

// route
app.use("/api/v1", Router);

// https로 서버를 엽니다.
https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    app.get("/", (req, res) => {
      res.send("HELLO HONEY 🐝");
    })
  )
  .listen(process.env.SERVER_PORT, () => {
    console.log("🍀 Server Listening");
    console.log("🐝 Hello HoneyB");
  });
