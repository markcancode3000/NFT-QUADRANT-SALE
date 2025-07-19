// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.21;

     import "@rmrk-team/evm-contracts/contracts/RMRK/catalog/RMRKCatalog.sol";

     contract Catalog is RMRKCatalog {
         constructor() RMRKCatalog("QuadrantCatalog", "QCAT") {
             _addPart(IntakeStruct(1, Part({itemType: ItemType.Slot, z: 0, equippable: new address[](0), metadataURI: ""})));
             _addPart(IntakeStruct(2, Part({itemType: ItemType.Slot, z: 1, equippable: new address[](0), metadataURI: ""})));
             _addPart(IntakeStruct(3, Part({itemType: ItemType.Slot, z: 2, equippable: new address[](0), metadataURI: ""})));
             _addPart(IntakeStruct(4, Part({itemType: ItemType.Slot, z: 3, equippable: new address[](0), metadataURI: ""})));
         }
     }