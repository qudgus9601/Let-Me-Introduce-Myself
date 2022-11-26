import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../components/common/Card";
import FilterMenu from "../components/project/FilterMenu";
import "./styles/projects.css";
import WriteProject from "./writeProject";
import axios from "axios";

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
    <div className="projects">
      <Routes>
        <Route
          exact
          path=""
          element={
            <>
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
            </>
          }
        />
        <Route path="/write" element={<WriteProject />} />
      </Routes>
    </div>
  );
};

export default Projects;
