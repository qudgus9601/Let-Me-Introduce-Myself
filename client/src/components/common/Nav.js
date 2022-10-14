import "./style.css";
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
      <Link className="nav_slogan" to="/">
        Challenging Developer
      </Link>

      <Link className="nav_menu" to="/">
        HOME
      </Link>
      <Link className="nav_menu" to="/work">
        WORK
      </Link>
      {user.isLogin ? (
        <button className="nav_menu" onClick={logout}>
          Logout
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
