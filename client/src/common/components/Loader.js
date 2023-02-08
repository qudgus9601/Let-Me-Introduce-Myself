import "./styles/loader.css";
import { useEffect } from "react";

export const Loader = ({ text }) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    return () => (body[0].style.overflow = "auto");
  });
  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-line-wrap">
          <div className="loader-line" />
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line" />
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line" />
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line" />
        </div>
        <div className="loader-line-wrap">
          <div className="loader-line" />
        </div>
      </div>
      <div className="loader-text">
        {text?.length > 0 ? `${text}...` : "로딩중..." || "로딩중..."}
      </div>
    </div>
  );
};
