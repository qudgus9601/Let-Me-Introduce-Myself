import { ethers } from "hardhat";

async function main() {
  console.log("Deploy Contract Start");
  const LMIM = await ethers.getContractFactory("LMIM");
  const lmim = await LMIM.deploy("LetMeIntroduceMyself", "LMIM");

  await lmim.deployed();
  console.log("exampleERC721 deployed to: ", lmim.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
