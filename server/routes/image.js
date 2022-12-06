const express = require("express");
const image = require("../controllers/image.controller.js");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 파일이 업로드될 경로 설정
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // timestamp를 이용해 새로운 파일명 설정
    cb(null, decodeURI(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("hello image");
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "ok",
    status: 200,
    fileName: req.file.filename,
  });
});

router.get("/:filename", (req, res) => {
  console.log(req.params);
  const fileName = req.params.filename;

  fs.readFile(`./uploads/${fileName}`, function (err, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  });
});

module.exports = router;
