// 회원가입, 로그인만 다룸
const express = require("express");
const auth = require("../controllers/auth.controller");
const passport = require("passport");

const router = express.Router();

router.post("/signin", auth.signIn);
router.post("/signup", auth.signUp);
router.get("/logout", auth.logout);
router.get("/check/accesstoken", auth.getUserByAccessToken);
router.get("/oauth/kakao", passport.authenticate("kakao"));
router.get(
  "/oauth/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  auth.signInByKakao
);

module.exports = router;
