// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     import "@rmrk-team/evm-contracts/contracts/RMRK/catalog/RMRKCatalog.sol";

     contract Catalog is RMRKCatalog {
         constructor() RMRKCatalog("QuadrantCatalog", "QCAT") {
             _addPart(1, Part({itemType: "slot", z: 0, equippableRefs: [], main: true}));
             _addPart(2, Part({itemType: "slot", z: 1, equippableRefs: [], main: true}));
             _addPart(3, Part({itemType: "slot", z: 2, equippableRefs: [], main: true}));
             _addPart(4, Part({itemType: "slot", z: 3, equippableRefs: [], main: true}));
         }
     }