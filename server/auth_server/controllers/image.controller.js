const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");
const AWS = require("../utils/aws");
require("dotenv").config();

/**
 * @deprecated *
 * 이미지 파일을 로컬 저장소에 업로드합니다.
 */
const uploadImageToLocal = (req, res, next) => {
  try {
    const upload = multer({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          // 파일이 업로드될 경로 설정
          cb(null, "uploads/");
        },
        filename: (req, file, cb) => {
          // timestamp를 이용해 새로운 파일명 설정
          cb(
            null,
            decodeURI(
              `${new Date().valueOf()}.${file.originalname.split(".").pop()}`
            )
          );
        },
      }),
    });

    upload.single("image");
  } catch (error) {}
};

/**
 * @deprecated *
 * 축소된 이미지 파일을 로컬 저장소에 업로드합니다.
 */
const uploadResizedImageToLocal = (req, res) => {
  try {
    const file = req.file;
    console.log(file);
    sharp(file.path)
      .metadata()
      .then(({ width, height }) => {
        if ((width || height) > 1000) {
          sharp(file.path, { animated: true, limitInputPixels: false })
            .resize(Math.round(width * 0.5))
            .withMetadata()
            .toFile(
              `uploads/resized-${file.filename.split(".")[0]}.webp`,
              (err, info) => {
                if (err) throw err;
                res.json({
                  message: "ok",
                  status: 200,
                  fileName: `resized-${file.filename.split(".")[0]}.webp`,
                });
              }
            );
        } else {
          sharp(file.path, { animated: true, limitInputPixels: false })
            .withMetadata()
            .toFile(
              `uploads/${file.filename.split(".")[0]}.webp`,
              (err, info) => {
                if (err) throw err;
                res.json({
                  message: "ok",
                  status: 200,
                  fileName: `${file.filename.split(".")[0]}.webp`,
                });
              }
            );
        }
      });
  } catch (error) {
    res.json({
      message: "fail",
      status: 400,
    });
  }
};

/**
 * @deprecated *
 * 썸네일 이미지 파일을 업로드합니다.
 */
const uploadThumbnail = async (req, res) => {
  try {
    const file = req.file;
    sharp(file.path)
      .metadata()
      .then(({ width }) => {
        sharp(file.path)
          .resize({ width: Math.round(width * 0.5) })
          .withMetadata()
          .toFile(
            `uploads/thumbnail-${file.filename.split(".")[0]}.webp`,
            (err, info) => {
              if (err) throw err;
              res.json({
                message: "ok",
                status: 200,
                fileName: `thumbnail-${file.filename.split(".")[0]}.webp`,
              });
            }
          );
      });
  } catch (error) {
    res.json({ message: "fail", status: 400 });
  }
};

/**
 * @deprecated
 * 특정 로컬 저장소의 이미지를 출력합니다.
 */
const getImage = (req, res) => {
  const fileName = req.params.filename;
  fs.readFile(`./uploads/${fileName}`, function (err, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  });
};

/**
 * 이미지를 S3에 저장합니다.
 */
const uploadImageToS3 = async (req, res, next) => {
  const s3 = new AWS.S3();
  const file = await s3
    .getObject({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: req.file.key,
    })
    .promise();
  const buffer = await sharp(file.Body, {
    animated: true,
    limitInputPixels: false,
  })
    .rotate()
    .webp({ lossless: true })
    .toBuffer();
  await s3
    .putObject({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `resized/resized-${
        req.file.key.split("/").pop().split(".")[0]
      }.webp`,
      ACL: "public-read",
      Body: buffer,
    })
    .promise()
    .then(() => {
      res.json({
        message: "ok",
        status: 200,
        fileURL: `https://${process.env.AWS_S3_BUCKET}.s3.${
          process.env.AWS_S3_REGION
        }.amazonaws.com/resized/resized-${
          req.file.key.split("/").pop().split(".")[0]
        }.webp`,
      });
    });
};

/**
 * 썸네일 이미지를 S3에 업로드 합니다.
 */
const uploadThumbnailImageToS3 = async (req, res, next) => {
  const s3 = new AWS.S3();
  const file = await s3
    .getObject({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: req.file.key,
    })
    .promise();
  const buffer = await sharp(file.Body, {
    animated: true,
    limitInputPixels: false,
  })
    .rotate()
    .resize({ width: 300 })
    .webp({ lossless: true })
    .toBuffer();

  await s3
    .putObject({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `thumbnail/resized-${
        req.file.key.split("/").pop().split(".")[0]
      }.webp`,
      ACL: "public-read",
      Body: buffer,
    })
    .promise()
    .then(() => {
      res.json({
        message: "ok",
        status: 200,
        fileURL: `https://${process.env.AWS_S3_BUCKET}.s3.${
          process.env.AWS_S3_REGION
        }.amazonaws.com/thumbnail/resized-${
          req.file.key.split("/").pop().split(".")[0]
        }.webp`,
      });
    });
};

const onlyUploadToS3 = async (req, res, next) => {
  console.log(req.file.location);
  res.json({
    message: "ok",
    status: 200,
    // fileURL: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/original/${req.file.key}`,
    fileURL: req.file.location,
  });
};

module.exports = {
  uploadImageToLocal,
  uploadResizedImageToLocal,
  getImage,
  uploadThumbnail,
  uploadImageToS3,
  uploadThumbnailImageToS3,
  onlyUploadToS3,
};
