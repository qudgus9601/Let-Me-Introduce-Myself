const express = require("express");
const image = require("../controllers/image.controller.js");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 파일이 업로드될 경로 설정
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // timestamp를 이용해 새로운 파일명 설정
    cb(null, decodeURI(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("hello image");
});

router.post("/upload", upload.single("image"), image.uploadImage);

router.get("/:filename", image.getImage);

module.exports = router;
