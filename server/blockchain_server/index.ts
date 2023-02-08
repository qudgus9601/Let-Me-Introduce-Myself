import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import session from "express-session";
import fs from "fs";
import https from "https";

import router from "./routes/index";

const app = express();
dotenv.config();

mongoose
  .set("strictQuery", false)
  .connect(String(process.env.MONGO_URI))
  .then(() => {
    console.log("🍀 MongoDB Connected");
  })
  .catch((err) => {});

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

app.use("/api/v1", router);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    app.get("/", (req, res) => {
      res.status(200).json({ message: "👋 This Is Blockchain Server" });
    })
  )
  .listen(process.env.SERVER_PORT, () => {
    console.log("📚 Blockchain Server Open In " + process.env.SERVER_PORT);
  });
