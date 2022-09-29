const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    parent: { type: Array, required: true, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
