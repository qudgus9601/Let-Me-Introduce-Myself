const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");

/**
 * 이미지 파일을 업로드합니다.
 */
const uploadImage = (req, res, next) => {
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
 * 축소된 이미지 파일을 업로드합니다.
 */
const uploadResizedImage = (req, res) => {
  try {
    const file = req.file;
    sharp(file.path)
      .metadata()
      .then(({ width, height }) => {
        if ((width || height) > 1000) {
          sharp(file.path)
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
          sharp(file.path)
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
 * 특정 이미지를 출력합니다.
 */
const getImage = (req, res) => {
  const fileName = req.params.filename;
  fs.readFile(`./uploads/${fileName}`, function (err, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  });
};

module.exports = {
  uploadImage,
  uploadResizedImage,
  getImage,
  uploadThumbnail,
};
