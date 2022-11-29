import { Link } from "react-router-dom";
import "./styles/projectWrite.css";
import { useEffect, useState } from "react";

const ProjectWrite = () => {
  const [memberCount, setMemberCount] = useState(["1"]);

  useEffect(() => {});

  const addMember = () => {
    memberCount.push("1");
    setMemberCount([...memberCount]);
    console.log("add");
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
      />
      <div className="project_write_date_size_type_container">
        <div className="project_write_date_wrapper">
          <label className="project_write_label">Start Date</label>
          <input
            className="project_write_date"
            type="date"
            placeholder="시작일을 선택해주세요."
          />
        </div>
        <div className="project_write_date_wrapper">
          <label className="project_write_label">Finish Date</label>
          <input className="project_write_date" type="date" />
        </div>
        <div className="project_write_size_wrapper">
          <label className="project_write_label">size</label>
          <select className="project_write_size" onChange={""}>
            <option value="" selected>
              프로젝트 규모
            </option>
            <option value="Toy">Toy</option>
            <option value="Side">Side</option>
            <option value="Capstone Design">Capstone Design</option>
          </select>
        </div>
        <div className="project_write_type_wrapper">
          <label className="project_write_label">type</label>
          <input className="project_write_type" placeholder="프로젝트 타입" />
        </div>
        <div className="project_write_skill_wrapper">
          <label className="project_write_label">skills</label>
          <input
            type="text"
            className="project_write_skill"
            placeholder="기술 스택"
          />
        </div>
      </div>

      <div className="project_write_team_wrapper">
        <label className="project_write_label">Team</label>
        <div className="project_write_team">
          {memberCount.map((e, idx) => {
            return (
              <div className="project_write_mate" key={idx}>
                <label className="project_write_label">Mate {idx + 1}</label>
                <div className="project_write_mate_input_wrapper">
                  <label className="project_write_input_label">성별</label>
                  <button className="project_write_male_button">🙍‍♂️</button>
                  <button className="project_write_female_button">🙍‍♀️</button>
                  <label className="project_write_input_label">이름</label>
                  <input className="project_write_input_text" type="text" />
                  <label className="project_write_input_label">
                    깃허브 주소
                  </label>
                  <input className="project_write_input_github" type="text" />
                  <button className="project_write_input_delete_button">
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
          <div className="project_write_mate_plus_button_wrapper">
            <button
              onClick={() => {
                return addMember();
              }}
              className="project_write_mate_plus_button"
            >
              팀원 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWrite;
