import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Card from "../components/common/Card";
import "./styles/projects.css";
import ProjectWrite from "./projectWrite";
import ProjectUpdate from "./projectUpdate";
import axios from "axios";
import ProjectDetail from "./projectDetail";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { useSelector } from "react-redux";

const Projects = () => {
  const user = useSelector((state) => state.user);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {});
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const projects = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/projects`,
      withCredentials: true,
    });
    setProjectList(projects.data.projectsInfo);
  };

  return (
    <Routes>
      <Route
        exact
        path=""
        element={
          <>
            <div className="projects">
              <div className="projects_center">
                <div className="breadcrumb">
                  <Link className="breadcrumb" to="/">
                    Home{" "}
                  </Link>
                  &gt;{" "}
                  <Link className="breadcrumb" to="/projects">
                    Projects
                  </Link>
                </div>
                <div className="projects_action_menu">
                  <span>{"0" && `Total : ${projectList.length} Projects`}</span>
                  {/* 어드민만 풀어주기 */}
                  <span>
                    {user.isLogin ? (
                      <Link to="/projects/write">
                        <FaPen />
                      </Link>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <div className="projects_center_wrapper">
                  {projectList &&
                    projectList.map((e, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          <div>
                            <div className="projects_post_card_container">
                              <Card data={e} />
                            </div>
                          </div>
                          {idx % 2 === 0 ? <div key={idx}></div> : ""}
                        </React.Fragment>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        }
      />
      <Route exact path="/write" element={<ProjectWrite />} />
      <Route exact path="/write/:id" element={<ProjectUpdate />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Projects;
