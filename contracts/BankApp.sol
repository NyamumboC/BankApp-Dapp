pragma solidity 0.8.16;

contract BankApp {

    address public manager;
    string name;
    event Register (address creator, uint256 accountId, uint256 timestamp);
    event Deposit (address sender, uint256 amount, uint256 timestamp);
    event Transfer (address sender, address receiver, uint256 amount);

     struct Account {
            uint256 id;
            string name;
            string kraPin;
            uint256 balance;
            bool status;
     }

     mapping(address => Account) accounts;
 
    // modifier isloggedin(address _user) {
        Account memory account = accounts [_user];
        if (!account.status) {
            revert("user not logged in");
            
        }
        _;
    }
    constructor (string memory _name) {
        //only run once
        manager = msg.sender;
        name = _name;
        
    }
    function register (
            address user,
            uint256 id,
            string memory _name,
            string memory kraPin,
            uint256 balance

     ) public returns (bool){
        require (msg.sender == manager, "send not manager");

        Account memory account = accounts [user];
        //check if account is created
        if (account.id !=0) {
            revert ("Account already exist");

        }
        account.id = id;
        account.name = _name;
        account.kraPin = kraPin;
        account.balance = balance;

        accounts[user] = account;
        // emit the event
        emit Register (msg.sender, id, block.timestamp);
        return true;

    }

    function login() public returns (bool) {
        address _user =msg.sender;
        Account storage account = accounts[_user];
        //check if user account exist. if not, revert with an error
        if (account.id == 0){
            revert("Account does not exist");
        }
        if (account.status){
            return true;
        }
            account.status =true;
        }

          function deposit (uint256 amount) public isloggedin (msg.sender) {
        Account memory account = accounts[msg.sender]; //copies the account  recordsfrom strorage to memory
        //check if user account exist. if not, revert with an error
       account.balance += amount;

       accounts [msg.sender] = account; //overrites the record in the storage location
       emit Deposit(msg.sender, amount, block.timestamp);
          }
       function balanceOf(address _user) public view isloggedin(msg.sender) returns (uint256){
        Account memory account = accounts [_user]; //copies the account  records from strorage to memory
         return account.balance;
           }
           function transfer (address _to, uint256 amount) 
           public isloggedin(msg.sender) {
            //logic goes here
            Account storage account0 =accounts[msg.sender]; //the sender
            Account storage account1 =accounts[_to]; //the receiver

            require (account0.balance >= 0, "insufficient balance");
            //check if the receiver account exists
            require (account1.id != 0, "Account does not exist");

            //transfer the amount
            account0.balance -= amount;
            account1.balance += amount;  

            emit Transfer(msg.sender, _to, amount);


           }
}
    