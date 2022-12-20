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
    const project = await Project.findOne({ _id: req.params.id });
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

/**
 * 특정 프로젝트를 삭제합니다.
 */
const deleteProjectById = async (req, res, next) => {
  try {
    const project = await Project.deleteOne({ _id: req.params.id });
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

/**
 * 특정 프로젝트의 조회수를 늘립니다.
 */
const incrementViewCount = async (req, res, next) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { viewCount: 1 } }
    );
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  write,
  getProjects,
  getProjectById,
  deleteProjectById,
  incrementViewCount,
};
