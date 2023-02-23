// 유저 정보를 다룸
const express = require("express");
const project = require("../controllers/project.controller");

const router = express.Router();

router.post("/write", project.writeProject);
router.get("/", project.getProjects);
router.get("/:id", project.getProjectById);
router.put("/write/:id", project.updateProject);
router.delete("/:id", project.deleteProjectById);
router.put("/:id", project.incrementViewCount);

module.exports = router;
