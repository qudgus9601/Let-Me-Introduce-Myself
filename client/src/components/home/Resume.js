import "./styles/resume.css";
import pdfIcon from "../../img/pdf_ico.svg";

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume_header">
        <div className="resume_header_title">Resume</div>
        <button className="resume_header_pdf_button">
          <img className="resume_header_pdf_icon" src={pdfIcon} alt="" />
          {`\u00A0 PDF로 발급`}
        </button>
      </header>
      <section className="resume_section">
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Education</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  삼육대학교 ( Samyook University )
                </div>
                <div className="resume_section_factor_article_desc">
                  {`Computer & Mechatronics - Computer Science`}
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>교내 공모전 1회</li>
                    <li>캡스톤 디자인 4회 모든회차 팀장</li>
                    <li>CS 및 다양한 프로그래밍 언어 학습</li>
                  </ul>
                </div>
              </span>
              <span>Mar 2020 - Aug 2022 졸업</span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  코드스테이츠 ( Code States )
                </div>
                <div className="resume_section_factor_article_desc">
                  {`Blockchain Engineering Bootcamp 05기`}
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>블록체인 프로젝트 3회</li>
                    <li>Solidity 학습</li>
                    <li>블록체인 이론 학습</li>
                    <li>ReactJS, NodeJS 기반의 풀스택 학습</li>
                  </ul>
                </div>
              </span>
              <span>Apr 2022 - Oct 2022 수료</span>
            </div>

            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  서일대학 ( Seoil University )
                </div>
                <div className="resume_section_factor_article_desc">
                  Computer Software
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>교내 성적 장학금 2회</li>
                    <li>학과대표 2회</li>
                  </ul>
                </div>
              </span>
              <span>Mar 2014 - Sep 2019 자퇴</span>
            </div>
          </div>
        </article>
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Front-End</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_stack_container">
              <span>
                <div className="resume_section_factor_article_title">
                  LANGUAGE
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  FrameWork
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>ReactJS</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  Library
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Redux</li>
                    <li>Antd</li>
                    <li>BootStrap</li>
                    <li>WEB3.0</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  Mock-Up
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Figma</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </article>
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Back-End</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_stack_container">
              <span>
                <div className="resume_section_factor_article_title">
                  LANGUAGE
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  FrameWork
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>NestJS</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  DataBase
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>PostgreSql</li>
                    <li>IPFS</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  Deploy
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Docker</li>
                    <li>AWS EC2</li>
                    <li>AWS Route53</li>
                    <li>AWS CERTIFICATE MANAGER</li>
                    <li>Github Action</li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_stack_container">
              <span>
                <div className="resume_section_factor_article_title">
                  Skills
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Jwt Token</li>
                    <li>{`Access & Refresh Token`}</li>
                    <li>Social Login</li>
                    <li>Bearer Token</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">{`\u00a0`}</div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Streaming</li>
                    <li>Socket Communication</li>
                    <li>RESTful API</li>
                    <li>Replica Set</li>
                    <li>ORM</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  {`\u00a0`}
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Testing</li>
                    <li>StressTest</li>
                    <li>MSA</li>
                    <li>MVC</li>
                    <li>MSVC</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  {`\u00a0`}
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Load Balancing</li>
                    <li>Zero DownTime Deployment</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </article>
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Smart-Contract</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_stack_container">
              <span>
                <div className="resume_section_factor_article_title">
                  LANGUAGE
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Solidity</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  FrameWork
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>GANACHE</li>
                    <li>Truffle</li>
                    <li>Remix IDE</li>
                    <li>Klaytn IDE</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  Library
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>WEB3.0</li>
                    <li>OpenZeppelin</li>
                    <li>CaverJS</li>
                    <li>Infura</li>
                  </ul>
                </div>
              </span>
              <span>
                <div className="resume_section_factor_article_title">
                  Network
                </div>
                <div className="resume_section_factor_article_list">
                  <ul>
                    <li>Ethereum</li>
                    <li>Klaytn</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Resume;
