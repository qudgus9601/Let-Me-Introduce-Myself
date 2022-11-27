// 유저 정보를 다룸
const express = require("express");
const project = require("../controllers/project.controller");

const router = express.Router();

router.post("/write", project.write);
router.get("/", project.getProjects);
router.get("/:id", project.getProjectById);

module.exports = router;
