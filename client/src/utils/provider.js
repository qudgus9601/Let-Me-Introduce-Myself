import { Web3Provider } from "@ethersproject/providers";

export function getProvider(provider) {
  const web3provider = new Web3Provider(provider);
  web3provider.pollingInterval = 1000;
  return web3provider;
}
