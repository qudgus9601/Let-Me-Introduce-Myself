import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
        <div className="breadcrumb">
          <Link className="breadcrumb" to="/">
            Home{" "}
          </Link>
          &gt;{" "}
          <Link className="breadcrumb" to="/projects">
            Projects{" "}
          </Link>
          &gt;{" "}
          <Link
            className="breadcrumb"
            to={`/projects/${location.pathname.slice(10)}`}
          >
            {location.pathname.slice(10)}
          </Link>
        </div>

        <div className="project_detail_title">
          {project.title}
          <div className="project_detail_date">
            <div>{`( ${project.startDate.slice(
              0,
              10
            )} ~ ${project.finishDate.slice(0, 10)} )`}</div>
          </div>
        </div>
        <div>{`이 프로젝트는 ${project.teamMate.length} 명의 팀원이 ${(new Date(
          project.finishDate
        ) -
          new Date(project.startDate)) /
          24 /
          60 /
          60 /
          1000}일 동안 협업하여 만든 ${project.type} 프로젝트입니다.`}</div>
        <div> 자세한 사항은 아래를 참고해주세요.</div>
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
