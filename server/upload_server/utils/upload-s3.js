const { AWS } = require("./aws");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

const s3 = new AWS.S3();
const uploadToS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read",
    key: function (req, file, cb) {
      cb(
        null,
        `original/${new Date().valueOf()}-${decodeURI(file.originalname)}`
      );
    },
  }),
  limits: {
    fileSize: 1000 * 1000 * 10,
  },
});

module.exports = uploadToS3;
