const express = require("express");
const image = require("../controllers/image.controller.js");
const uploadToS3 = require("../utils/upload-s3.js");
const localUpload = require("../utils/upload-local.js");
const router = express.Router();

router.post(
  "/upload/local",
  localUpload.single("image"),
  image.uploadResizedImageToLocal
);
router.post(
  "/upload/local/thumbnail",
  localUpload.single("image"),
  image.uploadThumbnail
);

router.get("/:filename", image.getImage);

router.post("/upload/s3", uploadToS3.single("image"), image.uploadImageToS3);

router.post(
  "/upload/thumbnail/s3",
  uploadToS3.single("image"),
  image.uploadThumbnailImageToS3
);

module.exports = router;
