require("@nomiclabs/hardhat-waffle");
     require("@nomicfoundation/hardhat-verify");
     require("dotenv").config();

     module.exports = {
       solidity: {
         compilers: [
           {
             version: "0.8.0",
             settings: {
               optimizer: {
                 enabled: true,
                 runs: 1000
               }
             }
           },
           {
             version: "0.8.21",
             settings: {
               optimizer: {
                 enabled: true,
                 runs: 1000
               }
             }
           },
           {
             version: "0.8.28",
             settings: {
               optimizer: {
                 enabled: true,
                 runs: 1000
               }
             }
           }
         ]
       },
       paths: {
         sources: "./contracts",
         artifacts: "./artifacts"
       },
       networks: {
         hardhat: {},
         sepolia: {
           url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.INFURA_API_KEY}`,
           accounts: [process.env.PRIVATE_KEY]
         },
         mainnet: {
           url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.INFURA_API_KEY}`,
           accounts: [process.env.PRIVATE_KEY]
         },
         polygon: {
           url: "https://polygon-rpc.com",
           accounts: [process.env.PRIVATE_KEY]
         }
       },
       etherscan: {
         apiKey: process.env.ETHERSCAN_API_KEY
       }
     };