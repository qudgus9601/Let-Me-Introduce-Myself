import "./styles/profile.css";
import metamaskLogo from "../img/metamask.webp";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { AiOutlineCopy } from "@react-icons/all-files/ai/AiOutlineCopy";
import etherLogo from "../img/ether.webp";
import { ethers } from "ethers";
import { useCallback, useState } from "react";

export const Profile = () => {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState("");
  const getBalance = useCallback(() => {
    const _getBalance = async () => {
      const gettedBalance = await library.getBalance(account);
      setBalance(ethers.utils.formatEther(gettedBalance));
    };
    _getBalance();
  }, [account, library]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const copyAddress = () => {
    window.navigator.clipboard.writeText(account.toString());
  };

  return (
    <div className="bc_profile">
      <img className="bc_profile_img" src={metamaskLogo} alt="" />
      <a
        className="bc_profile_title"
        target={"_blank"}
        href={`https://etherscan.io/address/${account}`}
        rel="noreferrer"
      >
        {`${account.substring(0, 6)}...${account.substring(
          account.length - 4
        )}`}{" "}
      </a>
      <AiOutlineCopy size={24} onClick={copyAddress} className="bc_copy" />

      <img className="bc_profile_ether" src={etherLogo} alt="" />
      <div className="bc_profile_balance">
        {balance || "0"}
        {" ETH"}
      </div>
      <div className="bc_profile_chain">{`NetWork : ${chainId}`}</div>
      <div className="bc_profile_chain">{`네트워크 변경`}</div>
    </div>
  );
};
