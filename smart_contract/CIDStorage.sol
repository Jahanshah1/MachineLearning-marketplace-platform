// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CIDStorage {
    mapping(address => string) private userCIDs;

    event CIDStored(address indexed user, string cid);

    function storeCID(string memory cid) public {
        userCIDs[msg.sender] = cid;
        emit CIDStored(msg.sender, cid);
    }

    function getCID(address user) public view returns (string memory) {
        return userCIDs[user];
    }
}

//Contract Address : 0x7d9c921230712d921f9A4d733965e5f1F0b42037
//link : https://mumbai.polygonscan.com/address/0x7d9c921230712d921f9a4d733965e5f1f0b42037