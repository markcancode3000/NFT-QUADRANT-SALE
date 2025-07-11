const { expect } = require("chai");
     const { ethers } = require("hardhat");

     describe("NFTSaleContract", function () {
       let contract, artist, buyer1, buyer2;

       beforeEach(async function () {
         [artist, buyer1, buyer2] = await ethers.getSigners();
         const NFTSaleContract = await ethers.getContractFactory("NFTSaleContract");
         contract = await NFTSaleContract.deploy(artist.address);
         await contract.deployed();
       });

       it("should allow buyer to purchase an NFT", async function () {
         await contract.connect(buyer1).buyMicroNFT(1, { value: ethers.utils.parseEther("25000") });
         expect(await contract.ownerOf(1)).to.equal(buyer1.address);
         expect(await contract.isSold(1)).to.be.true;
         expect(await contract.totalSold()).to.equal(1);
       });

       it("should allow artist to withdraw funds after a sale", async function () {
         await contract.connect(buyer1).buyMicroNFT(1, { value: ethers.utils.parseEther("25000") });
         const initialBalance = await artist.getBalance();
         await contract.connect(artist).withdrawFunds();
         const finalBalance = await artist.getBalance();
         expect(finalBalance).to.be.above(initialBalance);
       });

       it("should restrict transfers until all NFTs are sold", async function () {
         await contract.connect(buyer1).buyMicroNFT(1, { value: ethers.utils.parseEther("25000") });
         await expect(contract.connect(buyer1).transferFrom(buyer1.address, buyer2.address, 1))
           .to.be.revertedWith("Secondary market not enabled");
       });

       it("should enable secondary market after all NFTs are sold", async function () {
         for (let i = 1; i <= 4; i++) {
           await contract.connect(buyer1).buyMicroNFT(i, { value: ethers.utils.parseEther("25000") });
         }
         expect(await contract.secondaryMarketEnabled()).to.be.true;
         await contract.connect(buyer1).transferFrom(buyer1.address, buyer2.address, 1);
         expect(await contract.ownerOf(1)).to.equal(buyer2.address);
       });

       it("should return correct royalty info", async function () {
         const [receiver, royaltyAmount] = await contract.royaltyInfo(1, ethers.utils.parseEther("100"));
         expect(receiver).to.equal(artist.address);
         expect(royaltyAmount).to.equal(ethers.utils.parseEther("10"));
       });
     });