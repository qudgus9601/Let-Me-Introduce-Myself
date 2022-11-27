import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/projectDetail.css";

const ProjectDetail = () => {
  // location 초기화
  const location = useLocation();

  // useState
  const [project, setProject] = useState({
    title: "",
    content: "",
    startDate: "",
    finishDate: "",
    teamMate: [],
    language: [],
    skill: [],
    enviroment: [],
  });

  // useEffect
  useEffect(() => {
    console.log(project);
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `${
        process.env.REACT_APP_SERVER_URL
      }/api/v1/projects/${location.pathname.slice(10)}`,
      withCredentials: true,
    }).then((data) => {
      setProject(data.data.projectInfo[0]);
    });
  }, [location.pathname]);

  return (
    <div className="project_detail">
      <div className="project_detail_container">
        <div>{project.title}</div>
        <div>{project.content}</div>
        <div>{project.startDate.slice(0, 10)}</div>
        <div>{project.finishDate.slice(0, 10)}</div>
        <div>
          {project.teamMate.map((e) => {
            return e;
          })}
        </div>
        <div>
          {project.language.map((e) => {
            return (
              <img
                src={require(`../img/${e}_logo.png`)}
                alt={`${e}`}
                width="100"
                key={e}
              />
            );
          })}
        </div>
        <div>
          {project.skill.map((e) => {
            return e;
          })}
        </div>
        <div>
          {project.enviroment.map((e) => {
            return e;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
