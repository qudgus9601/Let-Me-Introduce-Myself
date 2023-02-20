import "./blockchain.css";
import React, { useState, useEffect } from "react";
import Did from "./components/Did";
import Nft from "./components/Nft";
import Ga from "./components/Generative-art";
import Dao from "./components/Dao";
import { ThemeBar } from "./components/Theme-bar";
import { Connect } from "./components/Connect";
import { Profile } from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { Define } from "./components/nft/Define";
import { List } from "./components/nft/List";
import { Launch } from "./components/Launch";
import { Mint } from "./components/nft/Mint";

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
              <Route path="/" element={<Launch />} />
              <Route path="/nft" element={<Nft />} />
              <Route path="/nft/define" element={<Define />} />
              <Route path="/nft/list" element={<List />} />
              <Route path="/nft/mint" element={<Mint />} />
              <Route path="/did" element={<Did />} />
              <Route path="/dao" element={<Dao />} />
              <Route path="/ga" element={<Ga />} />
            </Routes>
          </div>
        </>
      ) : (
        <React.Fragment>
          <img
            className="background_image"
            src={
              "https://lmim.s3.ap-northeast-2.amazonaws.com/static/wallet.webp"
            }
            alt=""
          />
          <Connect setIsConnect={setIsConnect} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Blockchain;
