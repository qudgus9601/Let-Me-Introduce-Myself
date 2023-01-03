// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConfig = require("./config/passport");
const session = require("express-session");

// config
const app = express();
dotenv.config();
mongoose
  .set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
  })
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
    origin: "http://localhost:3000",
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

app.get("/", (req, res) => {
  res.send("HELLO HONEY 🐝");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("Hello Honey 🐝");
});
