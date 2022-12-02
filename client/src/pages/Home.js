import "./style.css";
import React from "react";
import SelfIntroduce from "../components/home/SelfIntroduce";
import Project from "../components/home/Project";
import Resume from "../components/home/Resume";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_main">
          <article className="home_main_desc">
            <div>Hi, I'm ByeongHyeonAn.</div>
            <div>
              <span className="font_main_color">Challenging</span> based in
            </div>
            <div>Seoul, Republic of South Korea</div>
          </article>
        </div>
        <SelfIntroduce />
        <Project />
        <Resume />
        <div className="home_gotop"></div>
      </div>
    </div>
  );
};

export default Home;
