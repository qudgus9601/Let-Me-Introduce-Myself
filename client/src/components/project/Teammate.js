import "./styles/teammate.css";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

const Teammate = ({ mate, idx }) => {
  console.log(mate);

  return (
    <div className="teammate">
      <header className="teammate_header">
        <img
          className="teammate_header_profile_image"
          src={mate.githubInfo?.avatar_url}
          alt=""
        />
      </header>
      <article className="teammate_content">
        <header className="teammate_content_header">
          <div className="teammate_content_name">
            {/* fix : 이 부분 팀장일 시 왕관 나오도록 해야함 */}
            <span role="img" aria-label="crown">
              👑
            </span>
            {` ${mate?.name}(${mate?.githubInfo?.name})`}
          </div>
        </header>
        <article className="teammate_content_mate_info">
          <div>Full Stack</div>
          <a
            className="teammate_content_mate_github_url"
            href={mate.github}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <AiFillGithub size={"1.5rem"} /> {mate.github}
          </a>
        </article>
      </article>
    </div>
  );
};

export default Teammate;
