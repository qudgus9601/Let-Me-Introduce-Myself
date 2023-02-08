const User = require("../models/User");
/**
  해당 이메일로 가입한 유저가 있는지 체크합니다.
*/
const isAlreadyUseEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(409).json({ message: "already exist email" });
    } else {
      res.status(200).json({ message: "ok" });
    }
  } catch (error) {
    next(error);
  }
};

/**
 *
 */
const findUserByEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(200).json({ messgae: "Find User Succeed", data: user });
    } else {
      res.status(400).json({ message: "Not Exist User" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAlreadyUseEmail,
  findUserByEmail,
};
