import "./styles/launch.css";
import React from "react";

const checklist = [
  {
    name: "COMMON",
    child: [
      {
        name: "Upgradable Contract",
        checked: false,
      },
    ],
  },
  {
    name: "NFT",
    child: [
      {
        name: "NFT 란?",
        checked: true,
      },
      {
        name: "NFT 목록",
        checked: true,
      },
      {
        name: "NFT 민팅",
        checked: true,
      },
      {
        name: "내 NFT 목록",
        checked: true,
      },
      {
        name: "NFT 거래",
        checked: false,
      },
      {
        name: "NFT 전송",
        checked: false,
      },
    ],
  },
  {
    name: "DID",
    child: [
      {
        name: "DID 란?",
        checked: false,
      },
      {
        name: "DID 목록",
        checked: false,
      },
      {
        name: "DID 발급",
        checked: false,
      },
      {
        name: "DID 검증",
        checked: false,
      },
    ],
  },
  {
    name: "DAO",
    child: [
      {
        name: "DAO 란?",
        checked: false,
      },
      {
        name: "토큰 스왑",
        checked: false,
      },
    ],
  },
  {
    name: "GENERATIVE ART",
    child: [
      {
        name: "Generative Art 란?",
        checked: false,
      },
      {
        name: "Generative Art 발급",
        checked: false,
      },
    ],
  },
];
export const Launch = () => {
  return (
    <div className="blockchain_launch">
      <div className="blockchain_launch_title">
        🖐 이 페이지는 WEB3.0 런칭 페이지입니다.
      </div>
      <div className="blockchain_launch_subtitle">
        상단의 메뉴바엔 많은 기능이 있지만 현재로썬 NFT 와 관련된 기능만
        구현되어있습니다.
      </div>
      <div className="blockchain_launch_subtitle">
        시간을 내서 조금씩이라도 고도화를 진행중이니 너그러히 이해
        부탁드리겠습니다.
      </div>
      <br />
      <div className="blockchain_launch_title">📚 구현 및 예정 목록</div>
      <div className="blockchain_launch_checklist">
        {checklist.map((e, idx) => {
          return (
            <React.Fragment key={idx}>
              <div className="blockchain_launch_checklist_title">{e.name}</div>
              <ul>
                {e.child.map((el, idx) => {
                  return (
                    <li key={idx}>
                      <input
                        className="blockchain_launch_checkbox"
                        type={"checkbox"}
                        id={idx}
                        checked={el.checked}
                        disabled={true}
                      />
                      <label
                        className="blockchain_launch_checkbox_label"
                        htmlFor={idx}
                      >
                        {el.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
