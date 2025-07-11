require("@nomicfoundation/hardhat-toolbox");

     module.exports = {
       solidity: "0.8.0",
       paths: {
         sources: "./contracts",
         artifacts: "./artifacts"
       },
       networks: {
         hardhat: {},
         sepolia: {
           url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
           accounts: ["0x71E3f9A2e9C3ccE5D9eD42442C02b24f76329b29"]
         },
         mainnet: {
           url: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
           accounts: ["0x71E3f9A2e9C3ccE5D9eD42442C02b24f76329b29"]
         },
         polygon: {
           url: "https://polygon-rpc.com",
           accounts: ["YOUR_PRIVATE_KEY"]
         }
       },
       etherscan: {
         apiKey: "0x71E3f9A2e9C3ccE5D9eD42442C02b24f76329b29"
       }
     };