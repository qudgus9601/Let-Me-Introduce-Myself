import "./home.css";
import React from "react";
import SelfIntroduce from "./components/SelfIntroduce";
import Project from "./components/Project";
import Resume from "./components/Resume";
import GoToTop from "../../common/components/GoToTop";
import Main from "./components/Main";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Main />
        <SelfIntroduce />
        <Project />
        <Resume />
        <GoToTop />
      </div>
    </div>
  );
};

export default Home;
