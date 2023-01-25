import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/sub-menu.css";

export const SubMenu = ({
  setIsSubMenuOpen,
  elements,
  links,
  idName,
  selectTheme,
}) => {
  const navigation = useNavigate();
  return (
    <div
      onMouseEnter={(e) => {
        setIsSubMenuOpen(true);
      }}
    >
      {elements?.map((el, idx) => {
        return (
          <button
            id={idName}
            className="blockchain_theme_button"
            key={idx}
            onClick={(e) => {
              selectTheme(e);
              navigation(`/blockchain/${idName}/${links[idx]}`);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};
