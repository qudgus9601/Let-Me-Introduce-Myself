import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../components/common/Card";
import FilterMenu from "../components/project/FilterMenu";
import "./styles/projects.css";
import WriteProject from "./writeProject";
import axios from "axios";
import ProjectDetail from "./projectDetail";

const Projects = () => {
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
              <div className="projects_left">
                <FilterMenu setProjectList={setProjectList} />
              </div>
              <div className="projects_center">
                <div>{"0" && projectList.length}개</div>
                <div className="projects_center_wrapper">
                  {projectList &&
                    projectList.map((e, idx) => {
                      return (
                        <div key={idx} className="projects_post_card_container">
                          <Card data={e} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        }
      />
      <Route path="/write" element={<WriteProject />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Projects;
