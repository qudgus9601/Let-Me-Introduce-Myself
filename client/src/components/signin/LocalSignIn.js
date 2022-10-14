import "./styles/localSignIn.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const LocalSignIn = () => {
  // config
  const navigate = useNavigate();
  // useRef
  const emailInput = useRef();
  const emailRequire = useRef();
  const passwordInput = useRef();
  const passwordRequire = useRef();

  // useEffect
  // before render
  useEffect(() => {
    emailInput.current.focus();
  }, []);

  // re-render
  useEffect(() => {});

  //useState
  const [userDto, setUserDto] = useState({
    email: "",
    password: "",
  });

  //useDispatch
  const dispatch = useDispatch();

  /* 
    desc:
      - 엔터 키 입력을 확인합니다.
  */
  const isEnter = (e) => {
    if (e.keyCode === 13) {
      signIn();
    }
  };

  /* 
    desc:
      - 서버로 로그인 요청을 보냅니다.
  */
  const signIn = async () => {
    try {
      if (!/^(.){8,30}$/.test(userDto.email)) {
        emailInput.current.style.border = "1px solid red";
        emailRequire.current.style.display = "block";
      } else if (!/^(.){8,20}$/.test(userDto.password)) {
        passwordInput.current.style.border = "1px solid red";
        passwordRequire.current.style.display = "block";
      } else {
        const data = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/signin`,
          data: { ...userDto },
          withCredentials: true,
        });

        const userInfo = data.data.userInfo;
        if (data.status === 200) {
          dispatch(login({ ...userInfo, isLogin: true }));
          navigate("/");
        } else {
        }
      }
    } catch (error) {}
  };

  /* 
    desc:
      - 입력값에 따라 상태를 변화시킵니다.
  */
  const changeInput = (e) => {
    setUserDto((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });

    if (e.target.id === "email") {
      if (/^(.){8,30}$/.test(e.target.value)) {
        emailInput.current.style.border = "1px solid black";
        emailRequire.current.style.display = "none";
      } else {
        emailInput.current.style.border = "1px solid red";
        emailRequire.current.style.display = "block";
      }
    } else if (e.target.id === "password") {
      if (/^(.){8,20}$/.test(e.target.value)) {
        passwordInput.current.style.border = "1px solid black";
        passwordRequire.current.style.display = "none";
      } else {
        passwordInput.current.style.border = "1px solid red";
        passwordRequire.current.style.display = "block";
      }
    }
  };

  return (
    <div className="signin_local">
      <div className="signin_local_title">🙋 로그인</div>
      <label className="singin_local_label" htmlFor="email">
        이메일
      </label>
      <input
        className="signin_local_input"
        type="text"
        id="email"
        value={userDto.email}
        onChange={changeInput}
        onKeyDown={isEnter}
        ref={emailInput}
      />
      <div className="signin_local_require" ref={emailRequire}>
        8-30글자로 입력해주세요.
      </div>
      <label className="singin_local_label" htmlFor="password">
        비밀번호
      </label>
      <input
        className="signin_local_input"
        type="password"
        id="password"
        value={userDto.password}
        onChange={changeInput}
        onKeyDown={isEnter}
        ref={passwordInput}
      />
      <div className="signin_local_require" ref={passwordRequire}>
        8-20글자로 입력해주세요.
      </div>
      <button className="signin_local_submit" onClick={signIn}>
        로그인
      </button>
    </div>
  );
};

export default LocalSignIn;
