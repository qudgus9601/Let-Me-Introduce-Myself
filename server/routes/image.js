const express = require("express");
const image = require("../controllers/image.controller.js");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello image");
});

router.post("/profile", upload.single("avatar"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

module.exports = router;
