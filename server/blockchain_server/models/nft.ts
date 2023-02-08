import mongoose from "mongoose";

const NftSchema = new mongoose.Schema(
  {
    tokenId: { type: Number, default: 0, required: true },
    name: { type: String, required: true },
    owner: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Nft", NftSchema);
