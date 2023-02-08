import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const Private_Key = process.env.MY_SECRET_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.MY_QUICKNODE_URL,
      accounts: [`0x${Private_Key}`],
    },
  },
};

export default config;
