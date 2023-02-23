const express = require("express");
const projectRouter = require("./project");
// const testRouter = require("../moduleTest/multer-s3");

const router = express.Router();

router.use("/projects", projectRouter);
// router.use("/s3", testRouter);

module.exports = router;
