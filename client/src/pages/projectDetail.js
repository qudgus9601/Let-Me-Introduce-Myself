import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/projectDetail.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import Breadcrumb from "../components/common/Breadcrumb";
import Teammate from "../components/project/Teammate";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";

const ProjectDetail = () => {
  // location 초기화
  const location = useLocation();

  // useState
  const [project, setProject] = useState({});

  /**
   * Github에서 팀원들의 정보를 받아옵니다.
   * project 상태에 데이터를 입력합니다.
   */
  const getGithubInfo = (project) => {
    const arr = [];
    project?.data?.projectInfo?.teamMate?.map(async (e) => {
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

  /**
   * 조회수를 증가시킵니다.
   */
  const incrementViewCount = (project) => {
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/projects/${project.data.projectInfo._id}`,
      withCredentials: true,
    })
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  /*
   * 프로젝트를 삭제합니다.
   */
  const deleteProject = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/projects/${project._id}`,
      withCredentials: true,
    })
      .then((data) => {
        window.location.replace("/projects");
      })
      .catch((error) => {
        console.log(error);
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
      }).then((project) => {
        setProject(project.data?.projectInfo);
        incrementViewCount(project);
        getGithubInfo(project);
      });
    };

    // 호출 섹션
    getProject();
  }, [location.pathname]);

  // 렌더링 섹션
  return (
    <div className="project_detail">
      <div className="project_detail_container">
        <Breadcrumb crumbs={["projects", location.pathname.slice(10)]} />

        {/* FIX : flex box 수정하기 */}
        <div className="project_detail_title_container">
          <div className="project_detail_title">
            <div className="project_detail_title_date_wrapper">
              <span className="project_detail_title_wrapper">
                {project?.title}
              </span>
              <div className="project_detail_date">
                <div>{`( ${project?.startDate?.slice(
                  0,
                  10
                )} ~ ${project?.finishDate?.slice(0, 10)} )`}</div>
              </div>
            </div>
            <div className="project_detail_title_buttons">
              <div className="project_detail_title_buttons_container">
                <span className="project_detail_title_button">
                  <AiOutlineEye />
                  {`\u00a0`}
                  {project.viewCount + 1}
                </span>
                <span className="pointer project_detail_title_button">
                  <FaPen />
                </span>
                <span className="pointer project_detail_title_button">
                  <FaTrashAlt onClick={deleteProject} />
                </span>
              </div>
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
            {project?.teamMate?.map((e, idx) => {
              return <Teammate mate={e} idx={idx} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
