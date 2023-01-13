import { Link } from "react-router-dom";
import "./styles/breadcrumb.css";

const Breadcrumb = ({ crumbs }) => {
  let path = "/";

  return (
    <header className="breadcrumb">
      <Link className="breadcrumb" to="/">
        Home{" "}
      </Link>
      &gt;{" "}
      {crumbs.map((e, idx) => {
        path = path.concat(`${e}/`);
        return idx === crumbs.length - 1 ? (
          <Link className="breadcrumb" to={path} key={idx}>
            {e.charAt(0).toUpperCase() + e.slice(1)}{" "}
          </Link>
        ) : (
          <Link className="breadcrumb" to={path} key={idx}>
            {e.charAt(0).toUpperCase() + e.slice(1)} &gt;{" "}
          </Link>
        );
      })}
    </header>
  );
};

export default Breadcrumb;
