const hre = require ("hardhat");

async function main() {
    //body
    const signers = await hre.ethers.getSigners();
    //console.log("Signers::", signers);
    const account0 =signers[0].address;
    const account1 =signers[1].address;


    const BankApp = await hre.ethers.getContractFactory ("BankApp");
    const bankApp = await BankApp.deploy ("Loibon");
    await bankApp.deployed ();
    //Account0
    await bankApp.register(account0, 1234, "John", "AOxxxxx", 0);
    //Account1
    await bankApp.register(account1, 1234, "Ein", "AO10xx", 10);
    //login the user
    await bankApp.connect(signers[0]).login();

    //deposit
    await bankApp.connect (signers[0]).deposit (1000);
    //check account0 balance 
    console.log(await bankApp.connect(signers   [0]).balanceOf (account0));

//transfer to account2
    await bankApp.connect (signers[0]) .transfer(account1, 20);
     //check account 1 balance
     console.log (await bankApp.connect (signers[0]).balanceOf (account1));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
