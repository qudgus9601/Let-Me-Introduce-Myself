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
import { Route, Routes } from "react-router-dom";
import { Define } from "./components/nft/Define";
import { List } from "./components/nft/List";

const Blockchain = () => {
  const [isConnect, setIsConnect] = useState(false);
  useEffect(() => {}, []);
  useEffect(() => {});

  return (
    <div className="blockchain">
      {isConnect ? (
        <>
          <Profile />
          <ThemeBar />

          <div className="blockchain_container">
            <Routes>
              <Route path="/nft" element={<Nft />}></Route>
              <Route path="/nft/define" element={<Define />}></Route>
              <Route path="/nft/list" element={<List />}></Route>
              <Route path="/did" element={<Did />}></Route>
              <Route path="/dao" element={<Dao />}></Route>
              <Route path="/ga" element={<Ga />}></Route>
            </Routes>
          </div>
        </>
      ) : (
        <Connect setIsConnect={setIsConnect} />
      )}
    </div>
  );
};

export default Blockchain;