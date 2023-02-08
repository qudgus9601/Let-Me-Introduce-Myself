import "./styles/connect.css";
import { AiOutlineWallet } from "@react-icons/all-files/ai/AiOutlineWallet";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { metamaskConnector } from "../../../utils/metamask-connector";
import wallet from "../img/wallet.webp";
import metamask from "../img/metamask.webp";

export const Connect = ({ setIsConnect }) => {
  const { ethereum } = window;
  const { activate } = useWeb3React();

  useEffect(() => {});

  const connectMetamask = async () => {
    try {
      // 메타마스크 월렛이 설치가 되어있지 않다면
      if (!ethereum?.isMetaMask) {
        window.open(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
          "_blank"
        );
      } else {
        await activate(metamaskConnector);
        setIsConnect(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectKaikas = () => {
    try {
      console.log("현재 작업중...");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bc_connect">
      <div className="bc_connect_container">
        <div className="bc_left">
          <img className="bc_left_img" src={wallet} alt="" />
        </div>
        <div className="bc_right">
          <div className="bc_right_title">
            <AiOutlineWallet size={30} />
            {`\u00a0`}Connect Wallet
          </div>
          <div className="bc_right_button metamask" onClick={connectMetamask}>
            <img className="bc_right_logo" src={metamask} alt="" />
            METAMASK
          </div>
          <div className="bc_right_button kaikas" onClick={connectKaikas}>
            KAIKAS
          </div>
          <div className="bc_right_chrome_extension">
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko"
              target={"_blank"}
              rel="noreferrer"
            >
              확장 프로그램 설치
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
