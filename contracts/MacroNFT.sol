// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     import "@rmrk-team/evm-contracts/contracts/RMRK/equippable/RMRKEquippable.sol";
     import "@openzeppelin/contracts/access/Ownable.sol";

     contract MacroNFT is RMRKEquippable, Ownable {
         constructor(address catalog, address microNFTContract)
             RMRKEquippable("MacroSunNFT", "MSNFT", catalog)
             Ownable(msg.sender)
         {
         }

         function mintMacroNFT(address to) public onlyOwner {
             uint256 tokenId = 1;
             _mint(to, tokenId);
         }
     }