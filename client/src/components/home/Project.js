import React from "react";
import { useNavigate } from "react-router-dom";
import didnow from "../../img/didnow.png";
import "./styles/project.css";
const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="project">
      <div className="project_header">
        <div className="project_header_title">
          <div className="project_header_title_name">DIDNOW</div>
          <div className="project_header_title_main">Project (Klaytn, DID)</div>
          <div className="project_header_title_main">
            BackEnd, SmartContract (22/08 - 22/09)
          </div>
        </div>
        <button
          className="project_header_detail"
          onClick={() => {
            navigate("/projects");
          }}
        >
          <span role="img" aria-label="project">
            📂
          </span>{" "}
          더 많은 프로젝트 보러 가기
        </button>
      </div>
      <div className="project_body">
        <img className="project_body_img" src={didnow} alt="" />
      </div>
    </div>
  );
};

export default Project;
