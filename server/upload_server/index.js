// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const Router = require("./routes/.");
const cors = require("cors");
dotenv.config();
// config
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// route
app.use("/api/v1", Router);

app.get("/", (req, res) => {
  res.send("This is Upload Server 🐝");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🍀 Upload Server On ${process.env.SERVER_PORT}`);
});
