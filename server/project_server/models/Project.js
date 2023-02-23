const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    thumbnail: { type: String, required: true },
    content: { type: String, required: true },
    startDate: { type: Date, required: true },
    finishDate: { type: Date },
    viewCount: { type: Number, default: 0 },
    teamMate: { type: Array, default: ["안병현"] },
    desc: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
    language: { type: Array, required: true },
    skill: { type: Array, required: true },
    enviroment: { type: Array, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
