import axios from "axios";
import { useRef, useEffect } from "react";

const Section3 = ({ userObj, changeUserObj, section, setSection }) => {
  // useRef
  const usernameInput = useRef();
  const button = useRef();
  const usernameRequire = useRef();

  // useEffect
  useEffect(() => {
    usernameInput.current.focus();
    button.current.disabled = true;
  }, []);

  /* */
  const changeName = (e) => {
    changeUserObj(e);
    if (/^[가-힣]{2,30}$/.test(e.target.value)) {
      usernameInput.current.style.border = "1px solid black";
      usernameRequire.current.style.display = "none";
      button.current.disabled = false;
    } else {
      usernameInput.current.style.border = "1px solid red";
      usernameRequire.current.style.display = "block";
      button.current.disabled = true;
    }
  };

  /* 
    dev: submit
    desc: 
      userObj를 종합하여 회원가입을 시도합니다.
  */
  const submit = async () => {
    try {
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/signup`,
        data: {
          ...userObj,
        },
      });
      if (data.status === 200) {
        setSection(section + 1);
      }
    } catch (error) {
      if (error.response.status === 409) {
      } else {
      }
    }
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

  // render
  return (
    <>
      <div className="signup_body_input">
        <div className="signup_body_input_title">🪪 이름</div>
        <input
          type="text"
          id="username"
          className="input"
          value={userObj.username}
          onChange={changeName}
          ref={usernameInput}
          onKeyDown={isEnter}
        />
        <div className="signup_body_input_require" ref={usernameRequire}>
          이름의 길이가 2-30글자여야 합니다.
        </div>
      </div>
      <button className="signup_body_button" onClick={submit} ref={button}>
        회원 가입완료
      </button>
    </>
  );
};

export default Section3;
