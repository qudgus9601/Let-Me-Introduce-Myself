import React from "react";
import "./styles/card.css";
import thumbnail from "../../img/didnow-icon.png";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  // navigation 초기화
  const navigate = useNavigate();

  /*
    desc: card 컴포넌트를 클릭 시 해당 프로젝트 페이지로 넘어갑니다.
  */
  const cardClick = (e) => {
    navigate(`/projects/${e.currentTarget.id}`);
  };

  /*
   desc: image를 키웁니다.
  */
  const imageScaleUp = (e) => {
    e.currentTarget.querySelector(".post_card_thumbnail").style.scale = "1.1";
    e.currentTarget.querySelector(".post_card_thumbnail").style.transition =
      "0.2s";
  };

  /*
   desc: image를 줄입니다.
  */
  const imageScaleDown = (e) => {
    e.currentTarget.querySelector(".post_card_thumbnail").style.scale = "1";
    e.currentTarget.querySelector(".post_card_thumbnail").style.transition =
      "0.2s";
  };

  console.log(data);
  return (
    <div
      className="post_card"
      onClick={cardClick}
      id={data._id}
      onMouseEnter={imageScaleUp}
      onMouseLeave={imageScaleDown}
    >
      <div className="post_card_grid">
        <div className="post_card_left">
          <img className="post_card_thumbnail" src={thumbnail} alt="" />
        </div>
        <div className="post_card_right">
          <div className="post_card_title">{data.title}</div>
          <div>
            {data.desc.length > 20 ? `${data.desc.slice(0, 20)}...` : data.desc}
          </div>
          <div>{data.size}</div>
          <div>{data.type} Project</div>
          <div>{data.language.map((e) => e)}</div>
          <div>
            🗓 {data.startDate.slice(0, 10)} ~ {data.finishDate.slice(0, 10)}
          </div>
          <div className="post_card_view_count">👁‍🗨 {data.viewCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
