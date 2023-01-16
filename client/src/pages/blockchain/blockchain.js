import "./blockchain.css";
import { useState } from "react";
import Did from "./components/Did";
import Nft from "./components/Nft";
import Ga from "./components/Generative-art";
import Dao from "./components/Dao";

const Blockchain = () => {
  const [theme, setTheme] = useState();

  const changeTheme = (e) => {
    setTheme(e.target.id);
  };
  return (
    <div className="blockchain">
      <div className="blockchain_theme">
        <button
          className="blockchain_theme_button"
          id="nft"
          onClick={(e) => {
            changeTheme(e);
          }}
        >
          NFT
        </button>
        <button
          className="blockchain_theme_button"
          id="did"
          onClick={(e) => {
            changeTheme(e);
          }}
        >
          DID
        </button>
        <button
          className="blockchain_theme_button"
          id="dao"
          onClick={(e) => {
            changeTheme(e);
          }}
        >
          DAO
        </button>
        <button
          className="blockchain_theme_button"
          id="ga"
          onClick={(e) => {
            changeTheme(e);
          }}
        >
          Genrative Art
        </button>
      </div>
      <div className="blockchain_container">
        {theme === "nft" ? (
          <Nft />
        ) : theme === "did" ? (
          <Did />
        ) : theme === "dao" ? (
          <Dao />
        ) : theme === "ga" ? (
          <Ga />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Blockchain;
