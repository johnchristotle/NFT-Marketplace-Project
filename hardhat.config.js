require("@nomiclabs/hardhat-waffle");

const fs = require('fs');
 const privateKey = fs.readFileSync(".secret").toString().trim() || "";
 const infuraId = fs.readFileSync(".infuraId").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    /*mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }*/
     
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

