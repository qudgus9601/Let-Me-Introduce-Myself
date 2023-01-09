import React from "react";
import kakaoIcon from "../img/kakao_icon.png";
import googleIcon from "../img/google_icon.svg";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <>
      <Link to="/signin/local" className="signin_body_master">
        주인장과 친구들 입장
      </Link>

      <div className="signin_body_hr">
        <hr />
        <div className="signin_body_hr_title">또는</div>
      </div>
      <a
        href={`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/oauth/kakao`}
        className="signin_body_kakao"
      >
        <img className="signin_body_kakao_icon" src={kakaoIcon} alt="" />
        카카오 로그인
      </a>
      <a
        className="signin_body_google"
        href={`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/oauth/google`}
      >
        <img className="signin_body_google_icon" src={googleIcon} alt="" />
        구글 로그인
      </a>
    </>
  );
};

export default SignInButton;
