require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
  hardhat: {},
  mumbai: {
  url: "https://polygon-mumbai.g.alchemy.com/v2/2VxYC98gSVNI-7BHjykpR_x3X3Ly1Nrz",
  accounts: ["542120ffadbef7acada8b581d1012fa5f7bcde1b7080bcbfb948d1bca7b2256f"],
  chainId: 80001,
  },
}, 
  solidity: "0.8.16",
};
