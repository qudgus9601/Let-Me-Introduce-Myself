import React, { useRef, useEffect } from "react";
import axios from "axios";

const Section1 = ({ userObj, changeUserObj, section, setSection }) => {
  // useRef
  const input = useRef();
  const button = useRef();
  const require = useRef();
  const message = useRef();

  // useEffect
  useEffect(() => {
    input.current.focus();
    button.current.disabled = true;
  }, []);
  useEffect(() => {});

  /* 
    dev: email onChange
    desc:
      - 이메일 값을 입력 할 때마다 입력 값에 대해 검증합니다.
      - 검증 후 DOM의 스타일을 변경합니다.
  */
  const changeEmail = (e) => {
    changeUserObj(e);
    const el = e.target;

    if (
      !/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/i.test(el.value)
    ) {
      el.style.border = "1px solid red";
      require.current.style.display = "block";
      button.current.disabled = true;
      message.current.style.display = "none";
    } else {
      el.style.border = "1px solid black";
      require.current.style.display = "none";
      button.current.disabled = false;
      message.current.style.display = "none";
    }
  };

  /*
    dev: submit email
    desc: 
      - 검증을 시도합니다.
      - 검증 통과 시 다음페이지로 이동합니다.
  */
  const submit = async () => {
    try {
      if (
        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/i.test(
          userObj.email
        )
      ) {
        const data = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_AUTH_SERVER}/api/v1/user/exist-email`,
          data: {
            email: userObj.email,
          },
          withCredentials: true,
        });
        if (data.status === 200) {
          setSection(section + 1);
        }
      } else {
      }
    } catch (error) {
      if (error.response.status === 409) {
        input.current.style.border = "1px solid red";
        message.current.style.display = "block";
      } else {
      }
    }
  };

  /*
    dev: Keydown enter action
    desc: 
      - enter 를 눌렀을경우의 action을 취한다.
  */
  const isEnter = (e) => {
    if (e.keyCode === 13) {
      submit();
    }
  };

  return (
    <>
      <div className="signup_body_input">
        <label className="signup_body_input_title" htmlFor="email">
          <span role="img" aria-label="post">
            📮
          </span>{" "}
          이메일
        </label>
        <input
          type="text"
          id="email"
          className="input"
          value={userObj.email}
          onChange={changeEmail}
          ref={input}
          onKeyDown={isEnter}
        />
        <div className="signup_body_input_require" ref={require}>
          이메일 형식이 올바르지 않습니다.
        </div>
        <div className="signup_body_input_message" ref={message}>
          이미 존재하는 메일입니다.
        </div>
      </div>
      <button className="signup_body_button" onClick={submit} ref={button}>
        다음 단계로
      </button>
    </>
  );
};

export default Section1;
