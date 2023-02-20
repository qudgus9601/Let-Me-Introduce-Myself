import "./styles/profile.css";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { AiOutlineCopy } from "@react-icons/all-files/ai/AiOutlineCopy";
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

  // enum 이 없어서 임시방편이랄까
  const Network = {
    1: "Mainnet",
    5: "Goerli",
    11155111: "Sepolia",
  };

  const switchNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x5" }],
    });
  };
  return (
    <div className="bc_profile">
      <img
        className="bc_profile_img"
        src={
          "https://lmim.s3.ap-northeast-2.amazonaws.com/static/metamask.webp"
        }
        alt=""
      />
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

      <img
        className="bc_profile_ether"
        src={"https://lmim.s3.ap-northeast-2.amazonaws.com/static/ether.webp"}
        alt=""
      />
      <div className="bc_profile_balance">
        {Math.floor(balance * 1000) / 1000 || "0"}
        {" ETH"}
      </div>
      <div className="bc_profile_chain">
        <div>{`Current NetWork : ${Network[chainId] || "Localhost"}`}</div>
        <div>
          <div className="bc_profile_chain_alert" onClick={switchNetwork}>
            {chainId !== 5 ? "⛔️ Goerli Network 에서만 작동합니다." : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
