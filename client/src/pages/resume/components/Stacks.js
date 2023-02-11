import js from "../img/js.ico";
import ts from "../img/ts.ico";
import reactIcon from "../img/react.ico";
import nestjsIcon from "../img/nestjs.ico";
import nodeJSIcon from "../img/nodejs.ico";
import AWSIcon from "../img/AWS.ico";
import dockerIcon from "../img/docker.ico";
import mongoIcon from "../img/mongodb.ico";
import mysqlIcon from "../img/mysql.ico";
import postgreIcon from "../img/postgre.ico";
import graphqlIcon from "../img/graphql.ico";
import solidityIcon from "../img/solidity.ico";

const Stacks = () => {
  return (
    <>
      <section className="resume_section_header">STACKS</section>
      <section className="resume_stacks">
        {/* JavaScript Part */}
        <div className="resume_subtitle">
          <img src={js} alt="" className="resume_icon" />
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
          <img src={ts} alt="" className="resume_icon" />
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
          <img src={nodeJSIcon} alt="" className="resume_icon" />
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
          <img src={nestjsIcon} alt="" className="resume_icon" />
          NestJS
        </div>
        <div className="resume_explain">
          NestJS를 통한 프로젝트, 클론코딩을 경험했습니다.
        </div>
        {/* AWS Part */}
        <div className="resume_subtitle">
          <img src={AWSIcon} alt="" className="resume_icon back-white" />
          AWS
        </div>
        <div className="resume_explain">
          AWS의 S3, EC2, Route53, ACM 을 사용해봤습니다.
        </div>
        <div className="resume_explain">
          Docker의 이미지를 통해서 EC2에 실제 서비스를 배포 할 수 있습니다.
        </div>

        {/* Docker Part */}
        <div className="resume_subtitle">
          <img src={dockerIcon} alt="" className="resume_icon back-white" />
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
          <img src={mongoIcon} alt="" className="resume_icon back-white" />
          MongoDB
        </div>
        <div className="resume_explain">
          수차례 경험이 있고, Master Slave에 대해 이해하고 있으며 CRUD 를
          수월하게 작업 할 수 있습니다.
        </div>

        {/* DataBase Part */}
        <div className="resume_subtitle">
          <img src={mysqlIcon} alt="" className="resume_icon back-white" />
          <img src={postgreIcon} alt="" className="resume_icon back-white" />
          MySQL, Postgre
        </div>
        <div className="resume_explain">
          RDB에 대한 기본적인 지식이 있으며 CRUD 작업이 가능합니다. JOIN 작업이
          가능합니다.
        </div>
        <div className="resume_subtitle">
          <img src={solidityIcon} alt="" className="resume_icon back-white" />
          Solidity
        </div>
        <div className="resume_explain">
          ERC-721, ERC-21, KIP-17 등 작성된 컨트랙트를 보고 활용해본 경험이
          있습니다.
        </div>

        {/* ReactJS Part */}
        <div className="resume_subtitle">
          <img src={reactIcon} alt="" className="resume_icon back-white" />
          ReactJS
        </div>
        <div className="resume_explain">
          React를 3개 이상의 프로젝트에서 다뤄보아 FE와의 소통이 원활하게
          가능합니다.
        </div>

        {/* GraphQL Part */}
        <div className="resume_subtitle">
          <img src={graphqlIcon} alt="" className="resume_icon back-white" />
          Graphql
        </div>
        <div className="resume_explain">
          클론코딩을 통해 GQL에 대한 경험을 해보아서 FE와 소통이 원활하게
          가능합니다.
        </div>
      </section>
    </>
  );
};

export default Stacks;
