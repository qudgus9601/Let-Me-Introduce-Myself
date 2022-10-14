const crypto = require("node:crypto");

/*
  dev : scrypt password
  desc : scrypt를 이용한 password 암호화
         salt는 특정 환경변수로 특정 값을 지정해놨음
*/
const scryptPassword = async (plainPassword) => {
  return new Promise((res, rej) => {
    crypto.scrypt(plainPassword, process.env.SCRYPT_SALT, 64, (error, key) => {
      if (error) rej(error);
      return res(key.toString("base64"));
    });
  });
};

module.exports = {
  scryptPassword,
};
