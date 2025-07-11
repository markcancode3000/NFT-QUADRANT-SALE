// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
     import "@openzeppelin/contracts/access/Ownable.sol";
     import "@openzeppelin/contracts/utils/Counters.sol";

     contract NFTSaleContract is ERC721, Ownable {
         using Counters for Counters.Counter;
         Counters.Counter private _tokenIds;

         uint256 public constant NFT_PRICE = 25000 ether;
         uint256 public constant TOTAL_NFTS = 4;
         address public artist;
         mapping(uint256 => bool) public isSold;
         uint256 public totalSold;
         bool public secondaryMarketEnabled;

         constructor(address _artist) ERC721("QuadrantNFT", "QNFT") Ownable(msg.sender) {
             artist = _artist;
             _tokenIds.increment();
         }

         function buyMicroNFT(uint256 tokenId) public payable {
             require(tokenId >= 1 && tokenId <= TOTAL_NFTS, "Invalid token ID");
             require(!isSold[tokenId], "NFT already sold");
             require(msg.value == NFT_PRICE, "Incorrect price");
             require(!secondaryMarketEnabled, "Primary sale phase ended");

             isSold[tokenId] = true;
             totalSold++;
             _mint(msg.sender, tokenId);

             if (totalSold == TOTAL_NFTS) {
                 secondaryMarketEnabled = true;
             }
         }

         function withdrawFunds() public onlyOwner {
             uint256 balance = address(this).balance;
             require(balance > 0, "No funds to withdraw");
             payable(artist).transfer(balance);
         }

         function transferFrom(address from, address to, uint256 tokenId) public override {
             require(secondaryMarketEnabled, "Secondary market not enabled");
             super.transferFrom(from, to, tokenId);
         }

         function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public override {
             require(secondaryMarketEnabled, "Secondary market not enabled");
             super.safeTransferFrom(from, to, tokenId, data);
         }

         function royaltyInfo(uint256, uint256 _salePrice) external view returns (address receiver, uint256 royaltyAmount) {
             return (artist, (_salePrice * 1000) / 10000);
         }
     }