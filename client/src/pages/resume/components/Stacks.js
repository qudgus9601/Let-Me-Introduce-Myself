const Stacks = () => {
  return (
    <>
      <section className="resume_section_header">STACKS</section>
      <section className="resume_stacks">
        {/* JavaScript Part */}
        <div className="resume_subtitle">
          <img
            src={"https://lmim.s3.ap-northeast-2.amazonaws.com/static/js.ico"}
            alt=""
            className="resume_icon"
          />
          JavaScript
        </div>
        <div className="resume_explain">
          ES6 이후의 문법을 숙지하고있습니다.
        </div>
        <div className="resume_explain">
          1년 이상 주요 언어로 사용하며 학습하였습니다.
        </div>

        {/* TypeScript Part */}
        <div className="resume_subtitle">
          <img
            src={"https://lmim.s3.ap-northeast-2.amazonaws.com/static/ts.ico"}
            alt=""
            className="resume_icon"
          />
          TypeScript
        </div>
        <div className="resume_explain">
          클론 코딩과 1회의 프로젝트를 통한 경험이 있습니다.
        </div>
        <div className="resume_explain">
          TypeScript 에 대한 관심을 가지고 꾸준히 새로운 정보에대해
          학습하고있습니다.
        </div>

        {/* NodeJS Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/nodejs.ico"
            }
            alt=""
            className="resume_icon"
          />
          NodeJS
        </div>
        <div className="resume_explain">
          기본적인 CRUD 부터 소셜로그인, 이미지 처리 등 다양한 API를 만들 수
          있습니다.
        </div>
        <div className="resume_explain">
          각종 API 들과 연동하는 작업을 하는데 무리가없습니다.
        </div>

        {/* NestJS Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/nestjs.ico"
            }
            alt=""
            className="resume_icon"
          />
          NestJS
        </div>
        <div className="resume_explain">
          NestJS를 통한 프로젝트 1회 및 클론코딩을 통한 프로젝트 1회 경험이
          있습니다.
        </div>
        {/* AWS Part */}
        <div className="resume_subtitle">
          <img
            src={"https://lmim.s3.ap-northeast-2.amazonaws.com/static/AWS.ico"}
            alt=""
            className="resume_icon back-white"
          />
          AWS
        </div>
        <div className="resume_explain">
          AWS의 S3, EC2, Route53, ACM, CloudFront 등을 사용해서 배포
          경험이있습니다.
        </div>

        <a
          className="resume_explain underline"
          href="https://behoney.info"
          target={"_blank"}
          rel="noreferrer"
        >
          🔗 https://behoney.info
        </a>

        {/* Docker Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/docker.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          DOCKER
        </div>
        <div className="resume_explain">
          dockerhub를 이용하여 서로 다른 환경에서도 배포하고 유지할 수 있습니다.
        </div>
        <div className="resume_explain">
          docker-compose를 이용해 복수개의 이미지를 사용한 어플리케이션을 정의할
          수 있습니다.
        </div>

        {/* DataBase Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/mongodb.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          MongoDB
        </div>
        <div className="resume_explain">
          학부수업과 3회이상의 프로젝트를 통한 경험이 있고 CRUD, 샤딩, 분산화
          등의 작업을 할 수 있습니다.
        </div>

        {/* DataBase Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/mysql.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/postgre.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          MySQL, Postgre
        </div>
        <div className="resume_explain">
          RDB에 대한 지식이 있으며 CRUD 작업이 가능합니다. JOIN 작업이
          가능합니다.
        </div>
        <div className="resume_explain">
          데이터아키텍처 준전문가(DASP) 자격증을 보유하고있습니다. (자격번호
          DAsP-519000022)
        </div>
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/solidity.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          Solidity
        </div>
        <div className="resume_explain">
          ERC-721, ERC-21, KIP-17 등 작성된 컨트랙트를 보고 활용해본 경험이
          있습니다.
        </div>

        {/* ReactJS Part */}
        <div className="resume_subtitle">
          <img
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/react.ico"
            }
            alt=""
            className="resume_icon back-white"
          />
          ReactJS
        </div>
        <div className="resume_explain">
          React를 3개 이상의 프로젝트에서 다뤄보아 FE와의 소통이 원활하게
          가능합니다.
        </div>
      </section>
    </>
  );
};

export default Stacks;
