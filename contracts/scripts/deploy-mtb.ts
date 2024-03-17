import { ethers } from "hardhat";
import { MTB, MTB__factory } from "../typechain-types";

/**
 * command: npx hardhat run scripts/deploy-mtb.ts --network tubenet
 */
async function main() {
  // Get the account to deploy the contract
  const [account_1] = await ethers.getSigners();

  console.log("Deploying MoneyTube token with the account:", account_1.address);

  const MoneyTubeFactory : MTB__factory= await ethers.getContractFactory("MTB", account_1);
  const initialSupply = ethers.parseEther("1000000"); 
  const moneyTube : MTB = await MoneyTubeFactory.deploy(initialSupply);

  console.log("MoneyTube token deployed at address:", await moneyTube.getAddress());
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
