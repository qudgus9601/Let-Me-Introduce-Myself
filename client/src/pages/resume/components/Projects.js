import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Projects = () => {
  return (
    <>
      <section className="resume_section_header">Projects</section>
      <section className="resume_projects">
        <div className="resume_subtitle">
          {`DID를 활용한 인증서 발급 프로젝트 | 22.08 ~ 22.09`}
        </div>
        <div className="resume_explain color-black">
          주요 스택 : ReactJS, NodeJS, CaverJS, Solidity, MongoDB, Docker, AWS
        </div>
        <div className="resume_explain color-black">
          <FaGithub />
          {"\u00a0"}[ https://github.com/qudgus9601/DIDNOW ]
        </div>
        <div className="resume_explain">
          <ul>
            <li>DID 발급 과정 설계</li>
            <li>AWS EC2, Route53 을 통한 배포 참여</li>
            <li>ReactJS 를 이용한 화면 구현</li>
            <li>라이브러리를 통한 DID 프린팅</li>
          </ul>
        </div>

        <div className="resume_subtitle">
          {`나의 포트폴리오 및 블로깅 프로젝트 | 22.11 ~ 23.01`}
        </div>
        <div className="resume_explain color-black">
          주요 스택 : ReactJS, NodeJS, CaverJS, Solidity, MongoDB, Docker, AWS
        </div>
        <div className="resume_explain color-black">
          <FaGithub />
          {"\u00a0"}[ https://github.com/qudgus9601/Let-Me-Introduce-Myself ]
        </div>
        <div className="resume_explain">
          <ul>
            <li>{`모든 과정 1인 작업 [디자인 작성, 과정 설계, 기능 구현, 프로젝트 배포]`}</li>
          </ul>
        </div>

        <div className="resume_subtitle">
          {`그 외의 WEB 외 소규모 프로젝트 4회 | 19.03 ~ 22.02`}
        </div>
        <div className="resume_explain color-black">
          주요 범주 : Roblox Studio, Processing, Arduino
        </div>
        <div className="resume_explain color-black">
          <FaGithub />
          {"\u00a0"}[ https://behoney.info/projects ]
        </div>
      </section>
    </>
  );
};

export default Projects;
