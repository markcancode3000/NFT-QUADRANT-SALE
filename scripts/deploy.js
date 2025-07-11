const { ethers } = require("hardhat");

     async function main() {
       const [deployer] = await ethers.getSigners();
       const artistAddress = "YOUR_ARTIST_ADDRESS"; // Replace with your wallet address

       const Catalog = await ethers.getContractFactory("Catalog");
       const catalog = await Catalog.deploy();
       await catalog.deployed();
       console.log("Catalog deployed to:", catalog.address);

       const NFTSaleContract = await ethers.getContractFactory("NFTSaleContract");
       const saleContract = await NFTSaleContract.deploy(artistAddress);
       await saleContract.deployed();
       console.log("Sale Contract deployed to:", saleContract.address);

       const MacroNFT = await ethers.getContractFactory("MacroNFT");
       const macroNFT = await MacroNFT.deploy(catalog.address, saleContract.address);
       await macroNFT.deployed();
       console.log("Macro NFT deployed to:", macroNFT.address);
     }

     main().catch((error) => {
       console.error(error);
       process.exitCode = 1);
     });