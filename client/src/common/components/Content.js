import Home from "../../pages/home/home";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "../../pages/signin/signIn";
import SignUp from "../../pages/signup/signUp";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/userSlice";
import axios from "axios";
import Projects from "../../pages/project/projects";
import TestPage from "../../pages/testpage/testPage";
import Resume from "../../pages/resume/resume";
import Blog from "../../pages/blog/blog";
import "./styles/content.css";
import Blockchain from "../../pages/blockchain/blockchain";

const Content = () => {
  // configure
  const navigator = useNavigate();
  const dispatch = useDispatch();

  // useRef

  // useEffect
  useEffect(() => {});
  useEffect(() => {
    // 초기값 설정
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_AUTH_SERVER}/api/v1/auth/check/accesstoken`,
      withCredentials: true,
    })
      .then((data) => {
        if (data.data?.message === "ok") {
          dispatch(login({ ...data.data.userInfo }));
        }
      })
      .catch((error) => {
        if (error.response.data.message === "Invalid Token") {
          // 만료된 토큰 메세지 모달 띄우기
          dispatch(logout());
          navigator("/signIn");
        } else {
          // 예상치 못한 오류 메세지 모달 띄우기
        }
      });
  }, [navigator, dispatch]);

  // useState

  return (
    <div className="content">
      <div className="content_container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/signin/*"
            element={
              <React.Fragment>
                <img
                  className="background_image"
                  src={
                    "https://lmim.s3.ap-northeast-2.amazonaws.com/static/signin_header.webp"
                  }
                  alt=""
                />
                <SignIn />
              </React.Fragment>
            }
          />
          <Route
            path="/signup"
            element={
              <React.Fragment>
                <img
                  className="background_image"
                  src={
                    "https://lmim.s3.ap-northeast-2.amazonaws.com/static/signin_header.webp"
                  }
                  alt=""
                />
                <SignUp />
              </React.Fragment>
            }
          />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blockchain/*" element={<Blockchain />} />
        </Routes>
      </div>
      <div className="margin_bottom"></div>
    </div>
  );
};

export default Content;
