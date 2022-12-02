import React, { useRef, useEffect, useState } from "react";

const Section2 = ({ userObj, changeUserObj, section, setSection }) => {
  // useRef
  const passwordInput = useRef();
  const passwordRequire = useRef();
  const passwordCheckInput = useRef();
  const passwordCheckRequire = useRef();
  const button = useRef();

  // useEffect
  useEffect(() => {
    passwordInput.current.focus();
    button.current.disabled = true;
  }, []);
  useEffect(() => {});

  // useState
  const [passwordCheck, setPasswordCheck] = useState("");

  /* 
    dev: Password onChange
    desc:
      - password 값을 입력 할 때마다 입력 값에 대해 검증합니다.
      - 검증 후 DOM의 스타일을 변경합니다.
  */
  const changePassword = (e) => {
    changeUserObj(e);
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        e.target.value
      )
    ) {
      passwordRequire.current.style.display = "none";
      passwordInput.current.style.border = "1px solid black";
    } else {
      passwordRequire.current.style.display = "block";
      passwordInput.current.style.border = "1px solid red";
    }
  };
  /* 
    dev: PasswordCheck onChange
    desc:
      - PasswordCheck 값을 입력 할 때마다 Password 와 비교합니다.
      - 검증 후 DOM의 스타일을 변경합니다.
  */
  const changePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    button.current.disabled = !(userObj.password === e.target.value);
    if (userObj.password === e.target.value) {
      passwordCheckInput.current.style.border = "1px solid black";
      passwordCheckRequire.current.style.display = "none";
    } else {
      passwordCheckRequire.current.style.display = "block";
      passwordCheckInput.current.style.border = "1px solid red";
    }
  };

  /* 
    dev: submit password
    desc: 
      - 검증을 시도합니다.
      - 검증 통과 시 다음페이지로 이동합니다.
  */
  const submit = () => {
    try {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          userObj.password
        )
      ) {
        if (userObj.password === passwordCheck) {
          setSection(section + 1);
        }
      }
    } catch (error) {}
  };

  /*
    dev: check Enter
    desc: 
      - 엔터를 누를 시 전송합니다.
  */
  const isEnter = (e) => {
    if (e.keyCode === 13) {
      submit();
    }
  };

  // render component
  return (
    <>
      <div className="signup_body_input">
        <div className="signup_body_input_title">
          <span role="img" aria-label="key">
            🔑
          </span>{" "}
          비밀번호
        </div>
        <input
          type="password"
          id="password"
          className="input"
          value={userObj.password}
          onChange={changePassword}
          ref={passwordInput}
          onKeyDown={isEnter}
        />
        <div
          className="signup_body_input_require"
          ref={passwordRequire}
        >{`영어, 숫자, 특수문자 (!@#$%^&)를 포함한 8-20글자여야합니다.`}</div>
        <div className="signup_body_input_title">
          <span role="img" aria-label="lock">
            🔐
          </span>{" "}
          비밀번호 확인
        </div>
        <input
          type="password"
          id="passwordCheck"
          className="input"
          value={passwordCheck}
          onChange={changePasswordCheck}
          ref={passwordCheckInput}
          onKeyDown={isEnter}
        />
        <div
          className="signup_body_input_require"
          ref={passwordCheckRequire}
        >{`비밀번호가 일치하지않습니다.`}</div>
      </div>
      <button className="signup_body_button" onClick={submit} ref={button}>
        다음 단계로
      </button>
    </>
  );
};

export default Section2;
