const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    thumbnail: { type: String, required: true },
    content: { type: Text, required: true },
    notice: { type: Boolean, default: false },
    startDate: { type: Date, required: true },
    finishDate: { type: Date },
    viewCount: { type: Number, default: 0 },
    teamMate: { type: Array, default: ["안병현"] },
    desc: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", WorkSchema);
