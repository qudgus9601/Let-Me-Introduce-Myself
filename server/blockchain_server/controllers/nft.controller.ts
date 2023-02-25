import pinataSDK from "@pinata/sdk";
import Web3 from "web3";
import LMIM from "../contracts/LMIM.json";
import { Request, Response } from "express";
import events from "events";
import fetch from "node-fetch";

const eventEmitter = new events.EventEmitter();
/**
 * NFT 를 Mint 합니다.
 *
 * req.body {
 *   minter : mint한 주소
 *   name : NFT 명
 *   description : NFT 상세설명
 *   imageURI : NFT 에 들어갈 이미지 위치
 * }
 */
const mint = async (req: Request, res: Response) => {
  // 사용자로부터 값을 받아온다.
  // 피나타와 연결하여 메타데이터를 업로드한다.
  // 컨트랙트에 접근하여 민팅 함수를 호출한다.
  // 민팅 됐는지 확인
  // 응답 객체 작성
  try {
    const pinata = new pinataSDK(
      process.env.PINATA_API_KEY,
      process.env.PINATA_API_SECRET_KEY
    );

    const body = {
      ...req.body,
    };
    const options = {
      pinataMetadata: {
        name: `${req.body.name}.json`,
      },
      pinataPinOptions: {
        cidVersion: 1,
      },
    };

    const pinnedDataCID = await pinata.pinJSONToIPFS(body, options);
    // eventEmitter.emit("pinningData", {
    //   metadataURI: `https://gateway.pinanta.cloud/ipfs/${pinnedDataCID.IpfsHash}`,
    // });

    if (!!pinnedDataCID) {
      // eventEmitter.emit("connectContract");
      // eventEmitter.emit("mint");
      // if (!!data) {
      //   res.json({ status: 200, message: "Mint Nft Succeded" });
      // }
      res.json({
        status: 200,
        message: "Pinning Metadata Succeded",
        data: {
          metadataURI: `https://gateway.pinata.cloud/ipfs/${pinnedDataCID.IpfsHash}`,
        },
      });
    } else {
      res.json({
        status: 500,
        message: "Mint Nft Failed",
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: "Mint Nft Failed",
    });
  }
};

const getNftInfo = async (req: any, res: any) => {
  try {
    const web3 = new Web3(String(process.env.QUICKNODE_RPC_URL));
    const lmim = new web3.eth.Contract(
      LMIM.abi as any,
      process.env.CONTRACT_LMIM_ADDRESS
    );
    const metadataURI = await lmim.methods.tokenInfo(req.params.tokenId).call();

    const metadata = await (await fetch(metadataURI)).json();

    if (!!metadata) {
      res.json({
        status: 200,
        message: { ...metadata },
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: "Failed",
    });
  }
};

const getAllNft = async (req: Request, res: Response) => {
  try {
    const web3 = new Web3(String(process.env.QUICKNODE_RPC_URL));

    const lmim = new web3.eth.Contract(
      LMIM.abi as any,
      process.env.CONTRACT_LMIM_ADDRESS
    );

    const client_url = String(process.env.CLIENT_URL);
    res
      .setHeader("Access-Control-Allow-Origin", client_url)
      .setHeader("Access-Controll-Allow-Credentials", "true")
      .setHeader("Content-Type", "text/event-stream")
      .setHeader("Connection", "keep-alive")
      .setHeader("Cache-Control", "no-cache");

    const totalSupply = await lmim.methods.totalSupply().call();

    for (let i = 1; i <= totalSupply; i++) {
      const tokenInfo = await lmim.methods.tokenInfo(i).call();
      const metadata = JSON.stringify(await (await fetch(tokenInfo)).json());
      if (!!metadata) {
        res.status(200).write("data:" + metadata + "\n\n");
        if (i == totalSupply) {
          res.emit("close");
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const mintSse = async (req: Request, res: Response) => {
  res
    .setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    .setHeader("Access-Controll-Allow-Credentials", "true")
    .setHeader("Content-Type", "text/event-stream")
    .setHeader("Connection", "keep-alive")
    .setHeader("Cache-Control", "no-cache");

  type Message = {
    message: string;
    order: number;
    success: boolean;
    data: any;
  };

  const message = (message: Message) => {
    return res.write(`data:${JSON.stringify({ ...message })}\n\n`);
  };

  // 피나타 마치고 응답
  eventEmitter.on("pinningData", (data) => {
    message({
      message: "PINATA에 업로드 되었습니다.",
      order: 1,
      success: true,
      data: { ...data },
    });
  });

  // 컨트랙트 연결 응답
  eventEmitter.on("connectContract", () => {
    message({
      message: "Contract와 연결되었습니다.",
      order: 2,
      success: true,
      data: {},
    });
  });

  // 민팅완료 응답
  eventEmitter.on("mint", () => {
    message({
      message: "Mint 서명 요청중.",
      order: 3,
      success: true,
      data: {},
    });
  });
};

export default {
  mint,
  getNftInfo,
  getAllNft,
  mintSse,
};
