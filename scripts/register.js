const hre =require("hardhat");
//import the contract abi
const bankAppAbi =require("./abi/bankAppAbi");

async function main () {
  const account0 =signers[0].address;
  const account1 =signers[1].address;
  const signers =await hre.ethers.getSigners();
const contractAddress ="0xacE9acFDeCa7D678848DE82F4556c7c31C0327B0";
//metamask address
console.log("MyAddress!", account1);
//create an instance of the contract
const bankAppContract =new hre.ethers.Contract(contractAddress, bankAppAbi, signers [0].provider);

//register a new aacount
await bankAppContract.connect(signers[[0]]).register(account1, 1234, "John", "AOxxxxx", 0);
console.log('my address', signers[0].address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
