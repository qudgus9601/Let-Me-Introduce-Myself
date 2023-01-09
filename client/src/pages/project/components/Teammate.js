import "./styles/teammate.css";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import github_default_image from "../img/github_default.png";

const Teammate = ({ mate, idx }) => {
  return (
    <div className="teammate">
      <header className="teammate_header">
        <img
          className="teammate_header_profile_image"
          src={mate.githubInfo?.avatar_url || github_default_image}
          alt=""
        />
      </header>
      <article className="teammate_content">
        <header className="teammate_content_header">
          <div className="teammate_content_name">
            {/* fix : 이 부분 팀장일 시 왕관 나오도록 해야함 */}
            <span role="img" aria-label="crown">
              {mate.isLeader === true ? "👑" : "😎"}
            </span>
            {` ${mate?.name || "이름"}(${
              mate?.githubInfo?.name || "계정 없음"
            })`}
          </div>
        </header>
        <article className="teammate_content_mate_info">
          <div className="teammate_content_mate_position">
            {"Full Stack" || "포지션"}
          </div>
          <a
            className="teammate_content_mate_github_url"
            href={mate.github || "https://github.com/"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <AiFillGithub size={"1.5rem"} /> {mate.github || "깃허브 계정 없음"}
          </a>
        </article>
      </article>
    </div>
  );
};

export default Teammate;
