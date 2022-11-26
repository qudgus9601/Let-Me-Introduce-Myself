const express = require("express");
const authRouter = require("./auth");
const userRouter = require("./user");
const projectRouter = require("./project");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/projects", projectRouter);

module.exports = router;
