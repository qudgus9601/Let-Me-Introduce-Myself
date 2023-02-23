import "./styles/mint.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage } from "@react-icons/all-files/bs/BsImage";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import LMIM from "../../../../contracts/LMIM.json";
import { Loader } from "../../../../common/components/Loader.js";

export const Mint = () => {
  const file = useRef();
  const [nftImage, setNftImage] = useState("");
  const { account } = useWeb3React();
  const [metadata, setMetadata] = useState({
    minter: account,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [processing, setProcessing] = useState("");
  const navigator = useNavigate();

  useEffect(() => {});

  const failed = () => {
    setProcessing("민팅중에 문제가 발생했습니다.");
    setTimeout(() => {
      console.log("1초 뒤");
      setIsLoading(false);
      setProcessing("");
    }, 1000);
  };
  const submit = async () => {
    try {
      setIsLoading(true);
      const web3 = new Web3(window.ethereum);
      const account = await web3.eth.requestAccounts();
      const sender = account[0];
      setProcessing("지갑 연결중");
      const lmim = new web3.eth.Contract(
        LMIM.abi,
        process.env.REACT_APP_CONTRACT_LMIM_ADDRESS
      );
      setProcessing("서버에 요청을 보내는중입니다.");
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BLOCKCHAIN_SERVER}/api/v1/nft/mint`,
        data: { ...metadata },
        withCredentials: true,
      });

      if (data.data.status === 200) {
        try {
          setProcessing("서명 요청중");
          const mintData = await lmim.methods
            .mint(sender, data.data.data.metadataURI)
            .send({
              from: sender,
              gasPrice: "1000000000",
              gas: 1000000,
            });

          if (!!mintData.blockHash) {
            console.log(mintData);
            setProcessing("민팅 완료");
            setTimeout(() => {
              setIsLoading(false);
              navigator("/blockchain/nft/list");
            }, 200);
          }
        } catch (error) {
          failed();
        }
      } else {
        failed();
      }
    } catch (error) {
      failed();
    }
  };

  const onChangeInput = (e) => {
    setMetadata((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const uploadImage = (e) => {
    const blob = e.target.files[0];
    if (!!e.target.value) {
      const imageData = new FormData();
      const file = new File([blob], `${encodeURI(blob.name)}`, {
        type: blob.type,
      });
      imageData.append("image", file);
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_UPLOAD_SERVER}/api/v1/image/upload/only/s3`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: imageData,
        withCredentials: true,
      })
        .then((data) => {
          setNftImage(data.data.fileURL);
          setMetadata((prev) => {
            return { ...prev, imageURI: data.data.fileURL };
          });
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="bc_mint">
      {isLoading ? <Loader text={processing} /> : ""}
      <div className="bc_mint_container">
        <section className="bc_mint_first_section">
          <div className="bc_mint_left">
            <div className="bc_mint_left_title">NFT 민팅하기</div>
            <div className="bc_mint_left_subtitle">{`지원 가능한 파일형식 ( jpeg, jpg, webp, png, bmp ) 최대 크기 10MB`}</div>
            <div
              className="bc_mint_file_select"
              onClick={() => {
                file.current.click();
              }}
            >
              {!!nftImage ? (
                <img className="bc_mint_nft_image" src={nftImage} alt="" />
              ) : (
                <BsImage />
              )}
            </div>
            <input
              type="file"
              className="bc_mint_file_input"
              ref={file}
              onChange={uploadImage}
            />
          </div>
          <div className="bc_mint_right">
            <label className="bc_mint_right_title" htmlFor="name">
              이름
            </label>
            <label className="bc_mint_right_subtitle" htmlFor="name">
              NFT 의 이름을 지정합니다.
            </label>
            <input
              type="text"
              className="bc_mint_right_input"
              id="name"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />

            <label className="bc_mint_right_title" htmlFor="description">
              설명
            </label>
            <label className="bc_mint_right_subtitle" htmlFor="description">
              이 NFT 를 간단하게 소개해주세요.
            </label>
            <input
              type="text"
              className="bc_mint_right_input"
              id="description"
              onChange={(e) => {
                onChangeInput(e);
              }}
            />

            <label className="bc_mint_right_title" htmlFor="network">
              네트워크
            </label>
            <label className="bc_mint_right_subtitle" htmlFor="network">
              배포될 네트워크를 선택해주세요.
            </label>
            <select type="text" className="bc_mint_right_input" id="network">
              <option value={1}>Goerli - Ethereum TestNet</option>
              <option value={2}>Sepolia - Ethereum TestNet (Not Yet)</option>
              <option value={3}>Mainnet - Ethereum MainNet (Not Yet)</option>
            </select>

            <label className="bc_mint_right_title" htmlFor="collection">
              컬렉션
            </label>
            <label className="bc_mint_right_subtitle" htmlFor="collection">
              민팅 될 컬렉션을 선택해주세요.
            </label>
            <select type="text" className="bc_mint_right_input" id="collection">
              <option value={1}>
                {`LMIM (${process.env.REACT_APP_CONTRACT_LMIM_ADDRESS})`}
              </option>
            </select>
            <button className="bc_mint_right_button" onClick={submit}>
              민팅
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
