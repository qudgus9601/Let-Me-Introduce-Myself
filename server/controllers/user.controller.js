const User = require("../models/User");

/* 
  dev : Read a User
  desc : 유저 정보를 가져옵니다.
*/
const findUser = async (req, res, next) => {
  await User.findOne({ _id: req.params._id });
};

/* 
  dev : Read All User
  desc : 모든 유저정보를 가져옵니다.
*/

const findAllUser = async (req, res, next) => {
  await User.find();
};
/* 
  dev : Update a User
  desc : 특정 유저 정보 갱신
*/
const updateUser = async (req, res, next) => {
  await User.updateOne({ _id: req.params._id }, { $set: { ...req.body } });
};

/* 
  dev : Delete a User
  desc : 특정 유저 삭제
*/
const deleteUser = async (req, res, next) => {
  await User.deleteOne({ _id: req.params._id });
};

module.exports = {
  findUser,
  findAllUser,
  updateUser,
  deleteUser,
};
