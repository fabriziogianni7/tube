# Tube Subnet
Tube is an experimental project that attempts to create an on chain DB using IPC from Filecoin.

## How Does It Work?
We deployed a Subnet (**Tube Subnet**) from testnet calibration network on our virtual machine, you can connect to it and play with our contracts!

On Calibnet, We deployed [`DBGod.sol`](https://github.com/fabriziogianni7/tube/blob/main/contracts/contracts/DBGod.sol).

On Tube Subnet, we Deployed [`DBManager.sol`](https://github.com/fabriziogianni7/tube/blob/main/contracts/contracts/DBManager.sol).

This contract is responsible for creating Databases, [`DB.sol`](https://github.com/fabriziogianni7/tube/blob/main/contracts/contracts/DB.sol).

Both contract use [_Clone pattern_](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Clones.sol) to generate respectively new DBs and new Tables ([`Table.sol`](https://github.com/fabriziogianni7/tube/blob/main/contracts/contracts/Table.sol)), so this operation will be less expensive.
Calling `DBGod.sol`, users can make queries on the DB stored on Tube Subnet.

We also deployed an ERC20 token in the subnet to be used as a main ERC20 token called [`MoneyTube`](https://github.com/fabriziogianni7/tube/blob/main/contracts/contracts/MTB.sol)

## Testing
We tested our contracts, check it out: [test folder](https://github.com/fabriziogianni7/tube/tree/main/contracts/test)
## Deploying
check out the deploy script, to run them, just add a .env with `ACCOUNT_PK` with your private key: [deploy script](https://github.com/fabriziogianni7/tube/tree/main/contracts/test)

## Subnet
TUBE SUBNET RPC: `http://139.185.43.199:8545`
CHAIN ID: `3830613802618472`

## Contracts
**MONEYTUBE ERC20**: `0x4E22FB13733fcF8C025946A8FE22289A7C6316AB`

**DB MANAGER ADDRESS**: `0xDe626931837a3d4Effd17Eb359DC3Bd51061d307`

**DB ADDRESS**: `0x7DCD1635c7fB57a1bDa3b50D79E7910833a9fec4`

**TABLE ADDRESS**: `0xdEaf47941Ea4a48650159110B4559C784C4E9290`

**DBGOD**: [`0x95D8B3ec1F724785728e7c6D9b7645183f41094c`](https://calibration.filfox.info/en/address/0x95D8B3ec1F724785728e7c6D9b7645183f41094c)
