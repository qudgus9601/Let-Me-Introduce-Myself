import React from "react";
import "./styles/footer.css";
import footerLogo from "../img/behoney_logo.png";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { BiMessageRounded } from "@react-icons/all-files/bi/BiMessageRounded";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_title">
            <img className="footer_logo" src={footerLogo} alt="logo"></img>
          </div>
          <div className="footer_menu">
            <div className="footer_menu_section">
              <div className="footer_menu_section_title">Dev Info</div>
              <ul>
                <li>
                  <a
                    href="https://github.com/qudgus9601"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <AiFillGithub color="white" size={"0.9rem"} />
                    {`\u00a0Github`}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_menu_section">
              <div className="footer_menu_section_title">SNS</div>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/b_hyunnie"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <AiOutlineInstagram color="white" size={"0.9rem"} />
                    {`\u00a0Instagram`}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/byunghyun.ahn.3"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <AiFillFacebook color="white" size={"0.9rem"} />
                    {`\u00a0Facebook`}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_menu_section">
              <div className="footer_menu_section_title">Contact</div>
              <ul>
                <li>
                  <a href="tel:010-3135-5189">
                    <BiPhoneCall color="white" size="0.9rem" />
                    {`\u00a0010-3135-5189`}
                  </a>
                </li>
                <li>
                  <a href="mailto:dev.behoney@gmail.com">
                    <AiOutlineMail color="white" size="0.9rem" />
                    {`\u00a0dev.behoney@gmail.com`}
                  </a>
                </li>
                <li>
                  <a
                    href="http://qr.kakao.com/talk/g53d.S6NJXka_ZQ9Jbc77WDQNtA-"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <BiMessageRounded color="white" size={"0.9rem"} />
                    {`\u00a0dev.behyunnie`}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_menu_copyright">
              <div>모바일 화면은 작성중입니다.</div>
              <div>맥북 에어 13인치를 기준으로 작성하였습니다.</div>
              <div>Copyright 2022. 안병현 all rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
