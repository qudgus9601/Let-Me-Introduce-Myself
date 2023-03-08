import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Projects = () => {
  return (
    <>
      <section className="resume_section_header">Projects</section>

      <div className="resume_subtitle">
        {`자기소개 프로젝트 | 22.11 ~ 23.01`}
      </div>
      <div className="resume_explain color-black">
        주요 스택 : NodeJS, Solidity, MongoDB, Docker, AWS, ReactJS, CaverJS
      </div>
      <a
        className="resume_explain color-black"
        href="https://github.com/qudgus9601/Let-Me-Introduce-Myself"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub />
        {"\u00a0"}[ https://github.com/qudgus9601/Let-Me-Introduce-Myself ]
      </a>
      <div className="resume_explain">
        <ul>
          <li>{`NodeJs Auth, Project, Blockchain 서버 구현`}</li>
          <li>{`AWS EC2 배포, S3 배포, Docker Image 빌드`}</li>
          <li>{`React ui/ux 컴포넌트 작성`}</li>
        </ul>
      </div>

      <section className="resume_projects">
        <div className="resume_subtitle">
          {`DID를 활용한 인증서 발급 프로젝트 | 22.08 ~ 22.09`}
        </div>
        <div className="resume_explain color-black">
          주요 스택 : NodeJS, Solidity, MongoDB, Docker, AWS, ReactJS, CaverJS
        </div>
        <a
          className="resume_explain color-black"
          href="https://github.com/qudgus9601/DIDNOW"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub />
          {"\u00a0"}[ https://github.com/qudgus9601/DIDNOW ]
        </a>
        <div className="resume_explain">
          <ul>
            <li>DID 발급 과정 설계</li>
            <li>AWS EC2, Route53 을 통한 배포 참여</li>
            <li>ReactJS 를 이용한 화면 구현</li>
          </ul>
        </div>

        <div className="resume_subtitle">
          {`WEB 이외의 프로젝트 | 19.03 ~ 22.02`}
        </div>
        <div className="resume_explain color-black">
          Roblox Studio Place 제작, Processing을 통한 간단한 게임 제작,
          Arduino를 통한 방범장치 제작
        </div>
        <a
          className="resume_explain color-black"
          href="https://behoney.info/projects"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub />
          {"\u00a0"}[ https://behoney.info/projects ]
        </a>
      </section>
    </>
  );
};

export default Projects;
