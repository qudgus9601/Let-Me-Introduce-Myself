import { Link } from "react-router-dom";
import "./styles/projectWrite.css";
import "./styles/projectWriteCkeditor.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ProjectWrite = () => {
  const [project, setProject] = useState({
    title: "",
    author: "",
    content: "",
    startDate: "",
    finishDate: "",
    teamMate: [
      {
        gender: "male",
        name: "안병현",
        github: "https://github.com/qudgus9601/",
      },
    ],
    desc: "",
    size: "",
    type: "",
    language: "",
    skill: "",
    enviroment: "",
  });

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    console.log(project);
  });
  useEffect(() => {
    setProject((prev) => {
      return { ...prev, author: user._id };
    });
  }, [user._id]);

  const addMember = () => {
    project.teamMate.push({ gender: "male", name: "", github: "" });
    setProject({ ...project });
  };

  const deleteMember = (e) => {
    project.teamMate.splice(e.target.id, 1);
    setProject({ ...project });
  };

  const changeValue = (e) => {
    setProject((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const changeMemberValue = (e, idx) => {
    project.teamMate[idx][e.target.id] = e.target.value;
    setProject({ ...project });
  };

  /**
   * 기술 스택을 작성합니다.
   * 각 기술은 공백으로 구분합니다.
   * 추후 onkeydown 도 활용하여 tags 형태로 만들 예정
   */
  const changeSkill = (e) => {
    const arr = e.target.value.split(" ");
    // 공백을 배열에서 제거
    const filteredArr = arr.filter((e) => {
      return e !== "";
    });

    setProject((prev) => {
      return {
        ...prev,
        skill: filteredArr,
      };
    });
  };

  return (
    <div className="project_write">
      <div className="breadcrumb">
        <Link className="breadcrumb" to="/">
          Home{" "}
        </Link>
        &gt;{" "}
        <Link className="breadcrumb" to="/projects">
          Projects{" "}
        </Link>
        &gt;{" "}
        <Link className="breadcrumb" to="/projects/write">
          Write{" "}
        </Link>
      </div>

      <input
        type="text"
        className="project_write_title"
        placeholder="제목을 입력해주세요."
        id="title"
        onChange={changeValue}
      />

      <div className="project_write_input_container_first">
        <div className="project_write_date_wrapper">
          <label className="project_write_label">Start Date</label>
          <input
            className="project_write_date"
            type="date"
            placeholder="시작일을 선택해주세요."
            onChange={changeValue}
            id="startDate"
          />
        </div>
        <div className="project_write_date_wrapper">
          <label className="project_write_label">Finish Date</label>
          <input
            className="project_write_date"
            type="date"
            onChange={changeValue}
            id="finishDate"
          />
        </div>

        <div className="project_write_type_wrapper">
          <label className="project_write_label">type</label>
          <input
            className="project_write_type"
            placeholder="프로젝트 타입"
            onChange={changeValue}
            id="type"
          />
        </div>
        <div className="project_write_skill_wrapper">
          <label className="project_write_label">skills</label>
          <input
            type="text"
            className="project_write_skill"
            placeholder="기술 스택"
            skill=""
            onChange={(e) => {
              changeSkill(e);
            }}
          />
        </div>
      </div>

      <div className="project_write_input_container_second">
        <div className="project_write_desc_wrapper">
          <label className="project_write_label">Desc</label>
          <input
            type="text"
            value={project.desc}
            placeholder="프로젝트 요약"
            id="desc"
            onChange={changeValue}
            className="project_write_desc"
          />
        </div>
        <div className="project_write_enviroment_wrapper">
          <label className="project_write_label">Enviroment</label>
          <select className="project_write_enviroment">
            <option>MacOS</option>
            <option>Windows</option>
            <option>Ubuntu</option>
            <option>Linux</option>
            <option>Unix</option>
            <option>E.T.C.</option>
          </select>
        </div>
        <div className="project_write_language_wrapper">
          <label className="project_write_label">language</label>
          <input
            className="project_write_language"
            type="text"
            value={project.language}
            placeholder="주요 언어"
            id="language"
            onChange={changeValue}
          />
        </div>
        <div className="project_write_size_wrapper">
          <label className="project_write_label">size</label>
          <select
            className="project_write_size"
            onChange={(e) => {
              project.size = e.target.value;
              setProject({ ...project });
            }}
          >
            <option value="" defaultValue={""}>
              프로젝트 규모
            </option>
            <option value="Toy">Toy</option>
            <option value="Side">Side</option>
            <option value="Capstone Design">Capstone Design</option>
          </select>
        </div>
      </div>

      <section className="lmim_ckeditor5_container">
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={(e, editor) => {
            project.content = editor.getData();
            setProject({ ...project });
          }}
        />
      </section>

      <div className="project_write_team_wrapper">
        <label className="project_write_label">Team</label>
        <div className="project_write_team">
          {project.teamMate.map((e, idx) => {
            return (
              <div className="project_write_mate" key={idx}>
                <label className="project_write_label">Mate {idx + 1}</label>
                <div className="project_write_mate_input_wrapper">
                  <label className="project_write_input_label">성별</label>
                  <button className="project_write_male_button">
                    <span role="img" aria-label="male">
                      🙍‍♂️
                    </span>
                  </button>
                  <button className="project_write_female_button">
                    <span role="img" aria-label="female">
                      🙍‍♀️
                    </span>
                  </button>
                  <label className="project_write_input_label">이름</label>
                  <input
                    className="project_write_input_text"
                    type="text"
                    value={e.name}
                    disabled={idx === 0 ? true : false}
                    onChange={(el) => {
                      changeMemberValue(el, idx);
                    }}
                    id="name"
                  />
                  <label className="project_write_input_label">
                    깃허브 주소
                  </label>
                  <input
                    className="project_write_input_github"
                    type="text"
                    value={e.github}
                    disabled={idx === 0 ? true : false}
                    onChange={(el) => {
                      changeMemberValue(el, idx);
                    }}
                    id="github"
                  />
                  {idx === 0 ? (
                    ""
                  ) : (
                    <button
                      className="project_write_input_delete_button"
                      id={idx}
                      onClick={(el) => {
                        deleteMember(el);
                      }}
                    >
                      삭제
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <div className="project_write_mate_plus_button_wrapper">
            <button
              onClick={() => {
                addMember();
              }}
              className="project_write_mate_plus_button"
            >
              팀원 추가
            </button>
          </div>
        </div>
      </div>

      <div className="project_write_complete_button_wrapper">
        <button className="project_write_complete_button">작성완료</button>
      </div>
    </div>
  );
};

export default ProjectWrite;
