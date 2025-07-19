const { expect } = require("chai");
     const { ethers } = require("hardhat");

     describe("NFTSaleContract", function () {
       async function deployNFTSaleContractFixture() {
         const [owner] = await ethers.getSigners();
         const NFTSaleContract = await ethers.getContractFactory("NFTSaleContract");
         const nftSaleContract = await NFTSaleContract.deploy(owner.address);
         return { nftSaleContract, owner };
       }

       it("Should set the right owner and artist", async function () {
         const { nftSaleContract, owner } = await deployNFTSaleContractFixture();
         expect(await nftSaleContract.owner()).to.equal(owner.address);
         expect(await nftSaleContract.artist()).to.equal(owner.address);
       });

       it("Should mint an NFT to the specified address", async function () {
         const { nftSaleContract, owner } = await deployNFTSaleContractFixture();
         await nftSaleContract.mint(owner.address, 1);
         expect(await nftSaleContract.ownerOf(1)).to.equal(owner.address);
       });
     });