const express = require("express");
const authRouter = require("./auth");
const userRouter = require("./user");

// const testRouter = require("../moduleTest/multer-s3");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
// router.use("/s3", testRouter);

module.exports = router;
