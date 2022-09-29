// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Router = require("./routes/.");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

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
app.use(express.json());

// route
app.use("/api/v1", Router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server listening on ${process.env.SERVER_PORT}`);
});
