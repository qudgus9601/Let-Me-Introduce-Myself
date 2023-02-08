const multer = require("multer");

const localUpload = multer({
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

module.exports = localUpload;
