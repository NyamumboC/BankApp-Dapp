const hre =require("hardhat");
//import the contract abi
const bankAppAbi =require("./abi/bankAppAbi");

async function main () {
  const signers =await hre.ethers.getSigners();
const contractAddress ="0xacE9acFDeCa7D678848DE82F4556c7c31C0327B0";
//metamask address
console.log("MyAddress!", account0);
//create an instance of the contract
const bankAppContract =new hre.ethers.Contract(contractAddress, bankAppAbi, signers [0].provider);

//login a new aacount
console.log("Login-Res:", await bankAppContract.connect(signers [0]).login());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
