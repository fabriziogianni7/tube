// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MTB is ERC20 {
    constructor(uint256 initialSupply) ERC20("MoneyTube", "MTB") {
        _mint(msg.sender, initialSupply);
    }
}
