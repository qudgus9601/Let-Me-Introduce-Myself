const Project = require("../models/Project");

/**
 * 새로운 프로젝트를 작성합니다.
 */
const writeProject = async (req, res, next) => {
  try {
    const newProject = {
      ...req.body,
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

/**
 * 특정 프로젝트를 수정합니다.
 */
const updateProject = async (req, res, next) => {
  try {
    const updatedProject = { ...req.body };
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      { ...updatedProject }
    );
    res.json({ message: "ok", status: 200, projectInfo: project });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  writeProject,
  getProjects,
  getProjectById,
  deleteProjectById,
  incrementViewCount,
  updateProject,
};
