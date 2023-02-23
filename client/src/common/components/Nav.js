import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./styles/nav.css";

const Nav = () => {
  const user = useSelector((state) => state.user);

  const logout = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_AUTH_SERVER}/api/v1/auth/logout`,
      withCredentials: true,
    }).catch((error) => {});
    window.location.replace("/");
  };
  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_left">
          <div className="nav_slogan">
            <Link to="/">Challenging Developer</Link>
          </div>
        </div>

        <div className="nav_right">
          {/* <Link className="nav_menu" to="/">
            HOME
          </Link> */}
          <Link className="nav_menu" to="/projects">
            PROJECT
          </Link>
          <Link className="nav_menu" to="/resume">
            RESUME
          </Link>
          {/* <Link className="nav_menu" to="/blog">
            BLOG
          </Link> */}
          <Link className="nav_menu" to="/blockchain">
            WEB3.0
          </Link>

          {user.isLogin ? (
            <Link className="nav_menu" onClick={logout}>
              LOGOUT
            </Link>
          ) : (
            <Link className="nav_menu" to="/signin">
              SIGNIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
