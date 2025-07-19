// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.21;

     import "@openzeppelin/contracts/access/Ownable.sol";
     import "@rmrk-team/evm-contracts/contracts/RMRK/equippable/RMRKEquippable.sol";

     contract MacroNFT is RMRKEquippable, Ownable {
         constructor(address initialOwner)
             Ownable(initialOwner)
         {}

         function mint(address to, uint256 tokenId) public onlyOwner {
             _mint(to, tokenId, "");
         }
     }