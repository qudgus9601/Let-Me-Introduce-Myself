import { Link } from "react-router-dom";

const Section4 = ({ userObj }) => {
  const goHome = () => {};
  return (
    <>
      <div className="signup_warning">
        <span className="signup_warning_symbol">🎉</span>
        <span className="signup_warning_message">
          가입하지 말라고 했지만 가입한 {userObj.username} 님
        </span>
        <span className="signup_warning_message">환영과 우려를 표합니다</span>
        <Link to="/" className="signup_warning_title" onClick={goHome}>
          메인화면으로
        </Link>
      </div>
    </>
  );
};

export default Section4;
