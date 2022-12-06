const Project = require("../models/Project");

/**
 * 새로운 프로젝트를 작성합니다.
 */
const write = async (req, res, next) => {
  try {
    const newProject = {
      ...req.body,
      thumbnail: `${req.body.title}-thumbnail.png`,
    };
    const project = await Project.create(newProject);
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

/**
 * 모든 프로젝트 목록을 받아옵니다.
 */
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json({ message: "ok", status: 200, projectsInfo: projects });
  } catch (error) {
    next(error);
  }
};

/**
 * 특정 프로젝트 정보를 받아옵니다.
 */
const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.find({ _id: req.params.id });
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  write,
  getProjects,
  getProjectById,
};
