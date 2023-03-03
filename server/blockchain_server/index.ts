import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import router from "./routes/index";

const app = express();
process.env.NODE_ENV === "production"
  ? dotenv.config({ path: ".env.production" })
  : dotenv.config({ path: ".env.development" });
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "👋 This Is Blockchain Server" });
});

app.listen(process.env.SERVER_PORT, () => {});
