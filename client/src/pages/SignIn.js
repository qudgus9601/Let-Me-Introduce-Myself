import "./styles/signin.css";
import headerImage from "../img/walkcat.gif";
import kakaoIcon from "../img/kakao_icon.png";
import googleIcon from "../img/google_icon.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <section className="signin_container">
        <div className="signin_header">
          <img className="signin_header_img" src={headerImage} alt="" />
        </div>
        <div className="signin_body">
          <button className="signin_body_master">주인장과 친구들 입장</button>

          <div className="signin_body_hr">
            <hr />
            <div className="signin_body_hr_title">또는</div>
          </div>
          <button className="signin_body_kakao">
            <img className="signin_body_kakao_icon" src={kakaoIcon} alt="" />
            카카오 로그인
          </button>
          <button className="signin_body_google">
            <img className="signin_body_google_icon" src={googleIcon} alt="" />
            구글 로그인
          </button>
        </div>
        <div className="signin_body_signup_link">
          <Link to="/signup">계정이 없으신가요?</Link>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
