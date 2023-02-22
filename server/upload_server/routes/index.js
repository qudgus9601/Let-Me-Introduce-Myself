const express = require("express");
const imageRouter = require("./image");
// const testRouter = require("../moduleTest/multer-s3");

const router = express.Router();

router.use("/image", imageRouter);
// router.use("/s3", testRouter);

module.exports = router;
