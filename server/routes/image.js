const express = require("express");
const image = require("../controllers/image.controller.js");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // 파일이 업로드될 경로 설정
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      // timestamp를 이용해 새로운 파일명 설정
      cb(
        null,
        decodeURI(
          `${new Date().valueOf()}.${file.originalname.split(".").pop()}`
        )
      );
    },
  }),
});

router.post("/upload", upload.single("image"), image.uploadResizedImage);
router.post("/upload/thumbnail", upload.single("image"), image.uploadThumbnail);
router.get("/:filename", image.getImage);

module.exports = router;
