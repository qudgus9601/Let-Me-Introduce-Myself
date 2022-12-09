import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Nav = () => {
  const user = useSelector((state) => state.user);

  const logout = () => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/logout`,
      withCredentials: true,
    });
    window.location.replace("/");
  };
  return (
    <div className="nav">
      <div className="nav_slogan">
        <Link to="/">Challenging Developer</Link>
      </div>

      <Link className="nav_menu" to="/">
        HOME
      </Link>
      <Link className="nav_menu" to="/projects">
        PROJECT
      </Link>
      {user.isLogin ? (
        <button className="nav_menu" onClick={logout}>
          LOGOUT
        </button>
      ) : (
        <Link className="nav_menu" to="/signin">
          SIGNIN
        </Link>
      )}
    </div>
  );
};

export default Nav;
