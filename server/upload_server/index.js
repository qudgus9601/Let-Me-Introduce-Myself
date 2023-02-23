// import
const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/.");
const cors = require("cors");
const { awsConfig } = require("./utils/aws");

// config
const app = express();

process.env.NODE_ENV === "production"
  ? require("dotenv").config({ path: ".env.production" })
  : require("dotenv").config({ path: ".env.development" });

awsConfig();

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
  res.send("This is Upload Server 🐝");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`🍀 Upload Server On ${process.env.SERVER_PORT}`);
});
