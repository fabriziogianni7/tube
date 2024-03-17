
const { ethers } = require("hardhat");
import * as DBGODJson from "../artifacts/contracts/DBGod.sol/DBGod.json";
import * as TableJson from "../artifacts/contracts/Table.sol/Table.json";
import { DB, DBGod__factory, DBManager, DBManager__factory, DB__factory, Table, Table__factory } from "../typechain-types";
import { tableAttributes } from "./utils/tableAttributes";

/**
 * command: npx hardhat run scripts/get-deployed-dbs.ts --network calibnet
 */

async function main() {
    const [account_1] = await ethers.getSigners();

    const dbgodAddress = "0x95D8B3ec1F724785728e7c6D9b7645183f41094c";

    const dbGodContract = new ethers.Contract(dbgodAddress,DBGODJson.abi, account_1);

    const response = await dbGodContract.callDbManagerOnSubnet();
    console.log(response);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
