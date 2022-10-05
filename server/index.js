// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");

// config
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🍀 MONGO DB CONNECTED COMPLETE");
  })
  .catch((err) => {
    console.log(err);
  });

// app use
app.use(morgan("dev"));

// route
app.use("/api/v1", Router);

app.get("/", (req, res) => {
  res.send("EC2 SERVER!!");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server listening on ${process.env.SERVER_PORT}`);
});
