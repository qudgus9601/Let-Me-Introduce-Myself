import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav_slogan" to="/">
        Challenging Developer
      </Link>

      <Link className="nav_menu" to="/">
        HOME
      </Link>
      <Link className="nav_menu" to="/work">
        WORK
      </Link>
      <Link className="nav_menu" to="/signin">
        SIGNIN
      </Link>
    </div>
  );
};

export default Nav;
