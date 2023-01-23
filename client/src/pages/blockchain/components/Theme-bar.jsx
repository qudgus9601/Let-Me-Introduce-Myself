import { useState, useEffect } from "react";
export const ThemeBar = ({ changeTheme }) => {
  const [selected, setSelected] = useState("nft");

  useEffect(() => {}, [selected]);

  const selectTheme = (e) => {
    if (selected !== e.target.id) {
      const selector = `#${selected}`;
      document.querySelector(selector).classList = ["blockchain_theme_button"];
      setSelected(e.target.id);
      e.target.classList.add("blockchain_theme_selected");
      changeTheme(e);
    }
  };

  return (
    <div className="blockchain_theme">
      <button
        className="blockchain_theme_button blockchain_theme_selected"
        id="nft"
        onClick={(e) => {
          selectTheme(e);
        }}
      >
        NFT
      </button>
      <button
        className="blockchain_theme_button"
        id="did"
        onClick={(e) => {
          selectTheme(e);
        }}
      >
        DID
      </button>
      <button
        className="blockchain_theme_button"
        id="dao"
        onClick={(e) => {
          selectTheme(e);
        }}
      >
        DAO
      </button>
      <button
        className="blockchain_theme_button"
        id="ga"
        onClick={(e) => {
          selectTheme(e);
        }}
      >
        Genrative Art
      </button>
    </div>
  );
};
