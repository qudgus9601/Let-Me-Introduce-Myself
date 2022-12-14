import React from "react";
import { Link } from "react-router-dom";

const Section4 = ({ userObj }) => {
  const goHome = () => {};
  return (
    <>
      <div className="signup_warning">
        <span
          className="signup_warning_symbol"
          role="img"
          aria-label="firework"
        >
          π
        </span>
        <span className="signup_warning_message">
          κ°μνμ§ λ§λΌκ³  νμ§λ§ κ°μν {userObj.username} λ
        </span>
        <span className="signup_warning_message">νμκ³Ό μ°λ €λ₯Ό νν©λλ€</span>
        <Link to="/" className="signup_warning_title" onClick={goHome}>
          λ©μΈνλ©΄μΌλ‘
        </Link>
      </div>
    </>
  );
};

export default Section4;
