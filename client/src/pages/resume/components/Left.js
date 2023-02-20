import "./styles/resumeleft.css";
import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { IoMdJournal } from "@react-icons/all-files/io/IoMdJournal";
import { AiFillChrome } from "@react-icons/all-files/ai/AiFillChrome";

const Left = () => {
  return (
    <div className="resume_left">
      {/* Profile Part */}
      <div className="resume_left_profile">
        <img
          className="resume_profile_image"
          src={
            "https://lmim.s3.ap-northeast-2.amazonaws.com/static/IDPhoto.webp"
          }
          alt=""
        />
      </div>
      <div className="resume_left_name">안병현</div>
      <div className="resume_left_dept">Blockchain & Back End Developer</div>

      {/* Certificate Part */}
      <div className="resume_left_contact">
        <header className="resume_left_contact_header">Certificate</header>
        <ul>
          <li> - 정보처리기사(필기) [21.03]</li>
          <li> - SQLD [20.06]</li>
          <li> - 네트워크 관리사 2급 [19.06]</li>
          <li> - 워드프로세서 1급 [19.05]</li>
          <li> - 정보처리기능사 [17.04]</li>
          <li> - 태권도 4단 [11.04]</li>
          <li> - 운전면허 1종 보통 [14.02]</li>
        </ul>
      </div>

      {/* Competition Part */}
      <div className="resume_left_contact">
        <header className="resume_left_contact_header">Competition</header>
        <ul>
          <li>1. 교내 프로젝트 경진대회 [21.11]</li>
          <li className="font-small color-gray"> - Roblox Studio Place 제작</li>
          <li className="font-small color-gray"> - 오픈버스 기업 협업 </li>
          <li className="font-small color-gray"> - 최종 6위 (16개팀)</li>

          <br />
          <li>2. KLAYMAKER 2022 [22.10]</li>
          <li className="font-small color-gray"> - 사회문제 해결 분야 지원</li>
          <li className="font-small color-gray">
            {" "}
            - DID 발급을 통한 인증서 사이트 제작
          </li>
          <li className="font-small color-gray"> - 2차 서류 탈락</li>
        </ul>
      </div>
      {/* Contact Part */}
      <div className="resume_left_contact">
        <header className="resume_left_contact_header">CONTACT</header>
        <ul>
          <li>
            <HiPhone />
            {`\u00a0`}
            010-3135-5189
          </li>
          <li>
            <BiMailSend size={24} />
            {`\u00a0`}
            dev.behoney@gmail.com
          </li>
          <li>
            <FaGithub />
            {"\u00a0"}
            github.com/qudgus9601
          </li>
          <li>
            <IoMdJournal />
            {"\u00a0"}
            behoney.tistory.com
          </li>
          <li>
            <AiFillChrome />
            {"\u00a0"}
            behoney.info
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
