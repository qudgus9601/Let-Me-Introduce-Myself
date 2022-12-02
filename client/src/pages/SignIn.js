import "./styles/signin.css";
import headerImage from "../img/walkcat.gif";
import SignInButton from "../components/signin/SignInButton";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LocalSignIn from "../components/signin/LocalSignIn";
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
          <img className="signin_header_img" src={headerImage} alt="" />
        </div>
        <div className="signin_body">
          <Routes>
            <Route path="" element={<SignInButton />} />
            <Route path="local" element={<LocalSignIn />} />
          </Routes>
        </div>

        <div className="signin_body_signup_link">
          <Link to="/signup">계정이 없으신가요?</Link>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
