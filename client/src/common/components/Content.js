import Home from "../../pages/home/home";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "../../pages/signin/signIn";
import SignUp from "../../pages/signup/signUp";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import axios from "axios";
import Projects from "../../pages/project/projects";
import TestPage from "../../pages/testpage/testPage";
import "./styles/content.css";

const Content = () => {
  // configure
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useRef

  // useEffect
  useEffect(() => {});
  useEffect(() => {
    // 초기값 설정

    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/check/accesstoken`,
      withCredentials: true,
    })
      .then((data) => {
        dispatch(login({ isLogin: true, ...data.data.userInfo }));
      })
      .catch((error) => {
        if (error.response.data.message === "Invalid Token") {
          // 만료된 토큰 메세지 모달 띄우기
          navigate("/signIn");
        } else {
          // 예상치 못한 오류 메세지 모달 띄우기
        }
      });
  }, [navigate, dispatch]);

  // useState

  return (
    <div className="content">
      <div className="content_container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin/*" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
