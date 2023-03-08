// import
const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConfig = require("./utils/passport");
const session = require("express-session");

// config
const app = express();

process.env.NODE_ENV === "production"
  ? require("dotenv").config({ path: ".env.production" })
  : require("dotenv").config({ path: ".env.development" });

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
    origin: process.env.CLIENT_URL,
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

// Warning : Not Use memory store => resolve by save in Redis Store
app.use(passport.session());

// route
app.use("/api/v1", Router);

app.get("/", (req, res) => {
  res.send("This is Auth Server 🐝");
});

app.listen(process.env.SERVER_PORT, () => {});

module.exports = app;
