import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Card from "../../common/components/Card";
import "./projects.css";
import ProjectWrite from "./components/projectWrite";
import ProjectUpdate from "./components/projectUpdate";
import axios from "axios";
import ProjectDetail from "./components/projectDetail";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { useSelector } from "react-redux";
import Loading from "../../common/components/Loading";
import Breadcrumb from "../../common/components/Breadcrumb";

const Projects = () => {
  const user = useSelector((state) => state.user);

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(isLoading);
    console.log(projectList);
  });
  useEffect(() => {
    setIsLoading(true);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const projects = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/projects`,
      withCredentials: true,
    });
    setProjectList(projects.data.projectsInfo);
    setIsLoading(false);
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
                <Breadcrumb crumbs={["Projects"]} />
                {isLoading ? (
                  <Loading title={"프로젝트 로딩 중"} />
                ) : (
                  <>
                    <div className="projects_action_menu">
                      <span>
                        {"0" && `Total : ${projectList.length} Projects`}
                      </span>
                      {/* 어드민만 풀어주기 */}
                      <span>
                        {user.isLogin && user.role === 1 ? (
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
                              <div className="projects_post_card_container">
                                <Card data={e} />
                              </div>

                              {idx % 2 === 0 ? <div key={idx}></div> : ""}
                            </React.Fragment>
                          );
                        })}
                    </div>
                  </>
                )}
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
