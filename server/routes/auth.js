// 회원가입, 로그인만 다룸
const express = require("express");
const { signin } = require("../controllers/auth.controller");

const router = express.Router();

router.get("/signin", signin);

module.exports = router;
