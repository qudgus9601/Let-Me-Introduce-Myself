const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, default: null },
    username: { type: String, required: true },
    role: { type: Number, default: 0 },
    provider: { type: String, default: "local" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
