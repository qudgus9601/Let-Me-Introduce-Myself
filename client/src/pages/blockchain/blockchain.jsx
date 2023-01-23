import "./blockchain.css";
import { useState } from "react";
import Did from "./components/Did";
import Nft from "./components/Nft";
import Ga from "./components/Generative-art";
import Dao from "./components/Dao";
import { ThemeBar } from "./components/Theme-bar";
import { Connect } from "./components/Connect";
import { useEffect } from "react";
import { Profile } from "./components/Profile";
import { SubMenuBar } from "./components/Sub-menu-bar";

const Blockchain = () => {
  const [theme, setTheme] = useState();
  const [isConnect, setIsConnect] = useState(false);

  const changeTheme = (e) => {
    setTheme(e.target.id);
  };

  useEffect(() => {}, []);

  useEffect(() => {});

  return (
    <div className="blockchain">
      {isConnect ? (
        <>
          <Profile />
          <ThemeBar changeTheme={changeTheme} />
          <SubMenuBar />
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
        </>
      ) : (
        <Connect setIsConnect={setIsConnect} />
      )}
    </div>
  );
};

export default Blockchain;
