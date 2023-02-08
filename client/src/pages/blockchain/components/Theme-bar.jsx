import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubMenu } from "./Sub-menu";
export const ThemeBar = () => {
  const [selected, setSelected] = useState("nft");
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [hoverTheme, setHoverTheme] = useState("");

  const navigator = useNavigate();

  useEffect(() => {}, [selected]);
  useEffect(() => {});

  const selectTheme = (event) => {
    if (selected !== event.target.id) {
      document
        .querySelector(`#${selected}`)
        .classList.remove("blockchain_theme_selected");
      setSelected(event.target.id);
      // FIX : element 찾는게 아니라 location 기준으로 해야할듯 싶다.
      event.target.parentNode.parentElement.childNodes[0].classList.add(
        "blockchain_theme_selected"
      );
      navigator(`/blockchain/${event.target.id}`);
    }
  };
  return (
    <div className="blockchain_theme">
      <div
        className="blockchain_theme_button_container first"
        onMouseEnter={(e) => {
          setHoverTheme("nft");
          setIsSubMenuOpen(true);
        }}
        onMouseLeave={(e) => {
          setIsSubMenuOpen(false);
          setHoverTheme("");
        }}
      >
        <button
          className="blockchain_theme_button blockchain_theme_selected"
          id="nft"
        >
          NFT
        </button>
        {isSubMenuOpen && hoverTheme === "nft" ? (
          <SubMenu
            idName={"nft"}
            elements={["NFT 란", "NFT 목록", "NFT 민팅", "내 NFT"]}
            links={["define", "list", "mint", "mine"]}
            setIsSubMenuOpen={setIsSubMenuOpen}
            selectTheme={selectTheme}
          />
        ) : (
          ""
        )}
      </div>
      <div
        className="blockchain_theme_button_container second"
        onMouseEnter={(e) => {
          setIsSubMenuOpen(true);
          setHoverTheme("did");
        }}
        onMouseLeave={(e) => {
          setIsSubMenuOpen(false);
          setHoverTheme("");
        }}
      >
        <button className="blockchain_theme_button" id="did">
          DID
        </button>
        {isSubMenuOpen && hoverTheme === "did" ? (
          <SubMenu
            idName={"did"}
            elements={["DID 란", "DID 발급"]}
            links={["define", "issue"]}
            setIsSubMenuOpen={setIsSubMenuOpen}
            selectTheme={selectTheme}
          />
        ) : (
          ""
        )}
      </div>
      <div
        className="blockchain_theme_button_container third"
        onMouseEnter={(e) => {
          setIsSubMenuOpen(true);
          setHoverTheme("dao");
        }}
        onMouseLeave={(e) => {
          setIsSubMenuOpen(false);
          setHoverTheme("");
        }}
      >
        <button className="blockchain_theme_button" id="dao">
          DAO
        </button>
        {isSubMenuOpen && hoverTheme === "dao" ? (
          <SubMenu
            idName={"dao"}
            elements={["DAO 란", "토큰 스왑"]}
            links={["define", "swap"]}
            setIsSubMenuOpen={setIsSubMenuOpen}
            selectTheme={selectTheme}
          />
        ) : (
          ""
        )}
      </div>
      <div
        className="blockchain_theme_button_container fourth"
        onMouseEnter={(e) => {
          setIsSubMenuOpen(true);
          setHoverTheme("ga");
        }}
        onMouseLeave={(e) => {
          setIsSubMenuOpen(false);
          setHoverTheme("");
        }}
      >
        <button className="blockchain_theme_button" id="ga">
          Genrative Art
        </button>
        {isSubMenuOpen && hoverTheme === "ga" ? (
          <SubMenu
            idName={"ga"}
            elements={["Generative Art 란", "Generative Art 체험"]}
            links={["define", "issue"]}
            setIsSubMenuOpen={setIsSubMenuOpen}
            selectTheme={selectTheme}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
