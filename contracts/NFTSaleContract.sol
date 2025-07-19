// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.21;

     import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
     import "@openzeppelin/contracts/access/Ownable.sol";

     contract NFTSaleContract is ERC721, Ownable {
         address public artist;

         constructor(address initialOwner)
             ERC721("QuadrantNFT", "QNFT")
             Ownable(initialOwner)
         {
             artist = initialOwner;
         }

         function mint(address to, uint256 tokenId) public onlyOwner {
             _mint(to, tokenId);
         }
     }