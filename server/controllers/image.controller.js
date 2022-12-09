const multer = require("multer");
const fs = require("fs");

/**
 * 이미지 파일을 업로드합니다.
 */
const uploadImage = (req, res) => {
  res.json({
    message: "ok",
    status: 200,
    fileName: req.file.filename,
  });
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
  getImage,
};
