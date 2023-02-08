import express from "express";
import nftRouter from "./nft";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "👋 This Is Router Index" });
});

router.use("/nft", nftRouter);

export default router;
