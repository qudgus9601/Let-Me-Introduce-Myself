// 회원가입, 로그인만 다룸
const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

module.exports = router;
