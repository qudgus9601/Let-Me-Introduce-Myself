const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../models/User");

/*
  desc : 카카오 계정을 통한 로그인을 진행합니다.
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
            where: { email: profile._json.kakao_account.email },
          });
          const user = {
            email: profile._json.kakao_account.email,
            username: profile.username,
            provider: profile.provider,
            accessToken: accessToken,
          };

          if (findUser) {
            return done(null, user);
          } else {
            User.create(user);
          }
        } catch (error) {
          done(error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportConfig;
