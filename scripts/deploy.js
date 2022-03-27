const { task } = require("hardhat/config");
const { getAccount } = require("./helpers");

task("check-balance", "Prints out the balance of your account").setAction(async function (taskArguments, hre) {
    const account = getAccount();
    console.log(`Account balance for ${account.address}: ${await account.getBalance()}`);
});

task("deployERC20", "Deploys the ERC20Template.sol contract").setAction(async function (taskArguments, hre) {
    const contractFactory = await hre.ethers.getContractFactory("ERC20Template", getAccount());
    const erc20 = await contractFactory.deploy("ERC20 Token", "TT", 6, 10000000000, "0x2a17E171D110E8C62562F84837B1E3b55159b05B");
    console.log(`Contract deployed to address: ${erc20.address}`);
})

task("deployERC721", "Deploys the ERC721Template.sol contract").setAction(async function (taskArguments, hre) {
    const contractFactory = await hre.ethers.getContractFactory("ERC721Template", getAccount());
    const erc721 = await contractFactory.deploy("NFT Token", "NFT", 1, "0x2a17E171D110E8C62562F84837B1E3b55159b05B");
    console.log(`Contract deployed to address: ${erc721.address}`);
})