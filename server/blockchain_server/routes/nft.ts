import express, { Request, Response } from "express";
import nftController from "../controllers/nft.controller";

const router = express.Router();

// SSE Open
router.get("/mintsse", nftController.mintSse);

// (req: Request, res: Response) =>
router.post("/mint", nftController.mint);
router.get("/token/:tokenId", nftController.getNftInfo);
router.get("/list", nftController.getAllNft);

export default router;
