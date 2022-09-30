import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_slogan">
        <Link to="/">Challenging Developer</Link>
      </div>
      <div className="nav_menu">HOME</div>
      <div className="nav_menu">WORK</div>
      <div className="nav_menu">LOGIN</div>
    </div>
  );
};

export default Nav;
