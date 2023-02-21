// signin , signup , update
const User = require("../models/User");
const encrypt = require("../utils/encrypt");
const jwt = require("jsonwebtoken");

/*
  desc : 자체적인 회원가입을 진행합니다.
*/
const signUp = async (req, res, next) => {
  try {
    // 이미 존재하는 유저인지 파악한다.
    // 존재시 409 ( 중복성 검사 또한 conflict 로 볼 수 있다고 한다. )
    // 없다면 가입 프로세스 진행
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).json({ message: "Already Exist Email" });
    } else {
      // 비밀번호 암호화
      const hashedPassword = await encrypt.scryptPassword(req.body.password);
      // User Schema를 따르는 User 객체 생성
      const newUser = new User({ ...req.body, password: hashedPassword });
      // User DB에 저장
      await newUser.save();

      res.status(200).json({ message: "ok" });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * 자체적인 로그인을 진행합니다.
 */
const signIn = async (req, res, next) => {
  try {
    // user 를 찾는다.
    // user password를 비교한다.
    // 유저가 존재하지않으면 400
    // 비밀번호가 틀리면 400
    // 로그인 완료시 쿠키 발급
    const user = await User.findOne(
      { email: req.body.email },
      { _id: 1, email: 1, password: 1, username: 1, role: 1 }
    );

    if (user) {
      if (user.password === (await encrypt.scryptPassword(req.body.password))) {
        const { password, ...rest } = user.toObject();
        const token = jwt.sign({ ...rest }, process.env.JWT_SECRET, {
          issuer: "BEHONEY",
          expiresIn: "7d",
        });
        res
          .cookie("AccessToken", token, {
            httpOnly: true,
            secure: false,
            maxAge: 60 * 60 * 24 * 7 * 1000,
          })
          .status(200)
          .json({
            message: "ok",
            userInfo: rest,
          });
      } else {
        res.status(400).json({ message: "Wrong Password" });
      }
    } else {
      res.status(400).json({ message: "Not Exist Email" });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * 쿠키에 담긴 AccessToken을 통해 유저 정보를 반환합니다.
 */
const getUserByAccessToken = (req, res, next) => {
  try {
    if (req.cookies.AccessToken) {
      jwt.verify(
        req.cookies.AccessToken,
        process.env.JWT_SECRET,
        (err, result) => {
          if (err) {
            res
              .status(403)
              .json({ message: "Invalid Token" })
              .clearCookie("AccessToken");
          } else {
            const { iat, exp, iss, ...rest } = result;
            res.status(200).json({ message: "ok", userInfo: rest });
          }
        }
      );
    } else {
      res.status(404).json({ message: "Need to SignIn" });
    }
  } catch (error) {
    res.status(400).json({ message: "Uncaught Error" });
  }
};

/**
 * 토큰을 만료시켜 로그아웃을 진행합니다.
 */
const logout = (req, res, next) => {
  try {
    res
      .status(200)
      .clearCookie("AccessToken")
      .json({ message: "Logout Success" });
  } catch (error) {
    next(error);
  }
};

/**
 * 카카오 로그인을 시도합니다.
 */
const signInByKakao = async (req, res, next) => {
  try {
    const user = { ...req.user };
    const { password, ...rest } = user;
    const token = jwt.sign({ ...rest }, process.env.JWT_SECRET, {
      issuer: "BEHONEY",
      expiresIn: "7d",
    });
    res
      .cookie("AccessToken", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7 * 1000,
      })
      .redirect("http://localhost:3000/");
  } catch (error) {}
};

const signInByGoogle = async (req, res, next) => {
  try {
    const user = { ...req.user };
    const { password, ...rest } = await user;
    const token = jwt.sign({ ...rest }, process.env.JWT_SECRET, {
      issuer: "BEHONEY",
      expiresIn: "7d",
    });
    res
      .cookie("AccessToken", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7 * 1000,
      })
      .redirect("http://localhost:3000/");
  } catch (error) {}
};

module.exports = {
  signIn,
  signUp,
  getUserByAccessToken,
  logout,
  signInByKakao,
  signInByGoogle,
};
