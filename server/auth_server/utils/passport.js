const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const { scryptPassword } = require("../utils/encrypt");

/*
  카카오 계정을 통한 로그인을 진행합니다.
*/

const passportConfig = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: `${process.env.SERVER_URL}/api/v1/auth/oauth/kakao/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const findUser = await User.findOne({
            email: profile._json.kakao_account.email,
          });
          const user = {
            email: profile._json.kakao_account.email,
            username: profile.username,
            provider: profile.provider,
          };
          if (findUser) {
            return done(null, findUser);
          } else {
            const newUser = await User.create({
              ...user,
              password: await scryptPassword(new Date().valueOf().toString()),
            });
            return done(null, newUser.toObject());
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );

  /**
   * 구글 로그인
   */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/v1/auth/oauth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const findUser = await User.findOne({
            email: profile._json.email,
          });
          const user = {
            email: profile._json.email,
            username: profile._json.name,
            provider: profile.provider,
          };

          if (findUser) {
            return done(null, findUser);
          } else {
            const newUser = await User.create({
              ...user,
              password: await scryptPassword(new Date().valueOf().toString()),
            });
            return done(null, newUser.toObject());
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  /**
   * 로컬 로그인
   */
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportConfig;
