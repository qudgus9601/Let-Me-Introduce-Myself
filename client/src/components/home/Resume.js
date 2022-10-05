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
                  <ul className="list_style_disc">
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
                  <ul className="list_style_disc">
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
                  <ul className="list_style_disc">
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
                    <li>PDF</li>
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
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Study</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  한번에 끝내는 NodeJS 웹프로그래밍 초격차 패키지 Online
                </div>
                <div className="resume_section_factor_article_desc">
                  패스트 캠퍼스
                </div>
                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>NodeJS로 전반적인 웹프로그래밍에 대해 학습했습니다.</li>
                    <li>Stream을 다루는 방법을 배웠습니다.</li>
                    <li>ES6문법에 대해 학습했습니다.</li>
                  </ul>
                </div>
              </span>
              <span>Jul 2021</span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  우버이츠 클론코딩
                </div>
                <div className="resume_section_factor_article_desc">
                  Nomadcoders
                </div>
                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>NestJS에 대해 경험했습니다.</li>
                    <li>MVC 패턴에 대해 학습했습니다.</li>
                    <li>Client 와 Server에 대한 개념을 명확히 하였습니다.</li>
                  </ul>
                </div>
              </span>
              <span>Feb 2022</span>
            </div>
          </div>
        </article>

        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Interesting</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  근본적인 원리에 대해 생각하는걸 좋아합니다.
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>
                      저는 어떠한 기계들을 볼 때 어떻게 이게 가능한지에 대해
                      생각해봅니다.
                    </li>
                    <li>
                      라이브러리를 최소한으로 사용하여 직접적인 원리를 공부한 후
                      라이브러리를 사용합니다.
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  내가 가진 지식을 다른사람에게 알려주는 것을 좋아합니다.
                </div>
                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>
                      감사합니다 한마디에 신나서 더 알려주려고 관련된 공부를 더
                      해서 알려줍니다.
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  아이덴티티를 중요시 여깁니다.
                </div>
                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>
                      자신의 생각 없이 남들것을 따라하는것 좋아하지않습니다.
                    </li>
                    <li>깃허브 잔디심기 싫어합니다.</li>
                    <li>클론코딩 좋아하지않습니다.</li>
                    <li>내가 직접 생각해서 만든 무언가에 애착이 강합니다.</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </article>

        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Strength</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  어느환경에서든 적응이 빠릅니다.
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>
                      서비스직에서 장기간 아르바이트를 경험하였어서 다양한
                      성격의 사람들을 만나왔습니다.
                    </li>
                    <li>
                      서일대학에서 과대표를 2회 경험하였고 조교실에서도 근무한
                      경험이 있습니다.
                    </li>
                    <li>
                      삼육대학교에서 캡스톤 디자인을 여러차례 진행했고 모든
                      프로젝트에서 팀장을 맡아 팀내 소통을 이끌었습니다.
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  스트레스 관리가 철저합니다.
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>
                      극한의 상황에 처해봤지만 어떤 일이든 결국 하나하나 하면
                      풀린다는 생각으로 스트레스를 받지 않았습니다.
                    </li>
                    <li>
                      업무가 많은 상황에서는 큰 단위로 스케줄부터 빠르게 짜고
                      행동하기에 쌓여있는 업무에 대한 스트레스를 덜 받습니다.
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </article>
        <article className="resume_section_factor">
          <div className="resume_section_factor_title">Certificate</div>
          <div className="resume_section_factor_article">
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  정보처리기사 (필기)
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>23년 1회차 실기 응시 예정입니다.</li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  DAsP ( 데이터텍쳐 준 전문가 )
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>주관 : 데이터자격검정</li>
                    <li>취득일 : 2020.12.24</li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  네트워크 관리사 2급
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>주관 : 한국정보통신자격협회</li>
                    <li>취득일 : 2019.08.20</li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="resume_section_factor_article_container">
              <span>
                <div className="resume_section_factor_article_title">
                  운전면허 1종 보통
                </div>

                <div className="resume_section_factor_article_list">
                  <ul className="list_style_disc">
                    <li>주관 : 도로교통공단</li>
                    <li>취득일 : 2014.11.00</li>
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
