import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/projectDetail.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import Breadcrumb from "../components/common/Breadcrumb";
import Teammate from "../components/project/Teammate";

const ProjectDetail = () => {
  // location 초기화
  const location = useLocation();

  // useState
  const [project, setProject] = useState({});

  /**
   * Github에서 팀원들의 정보를 받아옵니다.
   * project 상태에 데이터를 입력합니다.
   */
  const getGithubInfo = (data) => {
    const arr = [];
    data?.data?.projectInfo?.teamMate?.map(async (e) => {
      await axios({
        method: "GET",
        url: `https://api.github.com/users/${e.github.slice(19, -1)}`,
      })
        .then((data) => {
          e = { ...e, githubInfo: data.data };
          arr.push(e);
          setProject((prev) => {
            return {
              ...prev,
              teamMate: arr,
            };
          });
        })
        .catch((error) => {
          e = { ...e, githubInfo: {} };
          arr.push(e);
          setProject((prev) => {
            return {
              ...prev,
              teamMate: arr,
            };
          });
        });
    });
  };

  // useEffect
  useEffect(() => {});

  useEffect(() => {
    /**
     * 프로젝트 초기값을 받아옵니다.
     */
    const getProject = () => {
      axios({
        method: "GET",
        url: `${
          process.env.REACT_APP_SERVER_URL
        }/api/v1/projects/${location.pathname.slice(10)}`,
        withCredentials: true,
      }).then((data) => {
        setProject(data?.data?.projectInfo);
        getGithubInfo(data);
      });
    };

    // 호출 섹션
    getProject();
  }, [location.pathname]);

  return (
    <div className="project_detail">
      <div className="project_detail_container">
        <Breadcrumb crumbs={["projects", location.pathname.slice(10)]} />

        <div className="project_detail_title_container">
          <div className="project_detail_title">
            {project?.title}

            <div className="project_detail_date">
              <div>{`( ${project?.startDate?.slice(
                0,
                10
              )} ~ ${project?.finishDate?.slice(0, 10)} )`}</div>
            </div>
          </div>
        </div>

        <div className="project_detail_desc_container">
          <div className="project_detail_subtitle">
            <span className="emoji" role="img" aria-label="project_summary">
              📘{" "}
            </span>
            프로젝트 요약
          </div>
          <div className="project_detail_desc">
            <div>{project?.desc}</div>
            <div>{`${project?.size} 프로젝트 규모의 ${project?.type} 이며`}</div>
            <div>{`${project?.teamMate?.length} 명의 팀원이 ${
              (new Date(project?.finishDate) - new Date(project?.startDate)) /
              86400000
            } 일간 제작하였습니다.`}</div>
          </div>
        </div>

        <div className="project_detail_content">
          <div className="project_detail_subtitle">
            <span className="emoji" role="img" aria-label="project_summary">
              📖{" "}
            </span>
            프로젝트 세부내용
          </div>
          {project?.content && <Viewer initialValue={project?.content} />}
        </div>

        <div className="project_detail_content">
          <div className="project_detail_subtitle">
            <span className="emoji" role="img" aria-label="project_summary">
              🧑🏻‍💻{" "}
            </span>
            프로젝트 참여인원
          </div>
          <div className="project_detail_team">
            {<div></div> &&
              project?.teamMate?.map((e, idx) => {
                return <Teammate mate={e} idx={idx} key={idx} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
