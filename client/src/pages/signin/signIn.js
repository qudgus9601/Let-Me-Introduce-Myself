import "./signin.css";
import SignInButton from "./components/SignInButton";
import { Routes, Route, useNavigate } from "react-router-dom";
import LocalSignIn from "./components/LocalSignIn";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SignIn = () => {
  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {});
  useEffect(() => {
    if (userInfo.isLogin) {
      navigate("/");
    }
  }, [userInfo.isLogin, navigate]);

  return (
    <div className="signin">
      <section className="signin_container">
        <div className="signin_header">
          <img
            className="signin_header_img"
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/signin_header.webp"
            }
            alt=""
          />
        </div>
        <div className="signin_body">
          <Routes>
            <Route path="" element={<SignInButton />} />
            <Route path="local" element={<LocalSignIn />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
