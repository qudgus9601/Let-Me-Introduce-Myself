// import
const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");
const cors = require("cors");

// config
const app = express();

process.env.NODE_ENV === "production"
  ? require("dotenv").config({ path: ".env.production" })
  : require("dotenv").config({ path: ".env.development" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((err) => {});

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// route
app.use("/api/v1", Router);

app.get("/", (req, res) => {
  res.send("This is Project Server 🐝");
});

app.listen(process.env.SERVER_PORT, () => {});
