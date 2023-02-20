import "./signup.css";
import React, { useState, useEffect } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const SignUp = () => {
  // re-rendering
  useEffect(() => {});

  // before render
  useEffect(() => {}, []);

  // 진행중인 Section에 따라 페이지 렌더링
  const [section, setSection] = useState(1);
  // input 을 처리
  const [userObj, setUserObj] = useState({
    email: "",
    username: "",
    password: "",
  });

  // input change handler
  const changeUserObj = (e) => {
    setUserObj((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  // rendering
  return (
    <div className="signin">
      <section className="signin_container">
        <div className="signin_header">
          <img
            className="signin_header_img"
            src={"https://lmim.s3.ap-northeast-2.amazonaws.com/static/nope.gif"}
            alt=""
          />
        </div>
        <div className="signup_body">
          <div>
            <span
              className="signup_deprecated spin"
              role="img"
              aria-label="forbidden"
            >
              🚫
            </span>
            {`\u00a0`}Deprecated!!! 당장은 보안이 허술하니 가입하지마세요!
          </div>
          {section === 1 && (
            <Section1
              userObj={userObj}
              changeUserObj={changeUserObj}
              section={section}
              setSection={setSection}
            />
          )}
          {section === 2 && (
            <Section2
              userObj={userObj}
              changeUserObj={changeUserObj}
              section={section}
              setSection={setSection}
            />
          )}
          {section === 3 && (
            <Section3
              userObj={userObj}
              changeUserObj={changeUserObj}
              section={section}
              setSection={setSection}
            />
          )}
          {section === 4 && <Section4 userObj={userObj} />}
        </div>
      </section>
    </div>
  );
};

export default SignUp;
