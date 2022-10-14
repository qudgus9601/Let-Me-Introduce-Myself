// 유저 정보를 다룸
const express = require("express");
const user = require("../controllers/user.controller");

const router = express.Router();

router.post("/exist-email", user.findUserByEmail);

module.exports = router;
