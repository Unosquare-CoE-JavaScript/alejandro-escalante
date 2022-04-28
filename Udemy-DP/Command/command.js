// A command is an object that represent
// an instrucion to perform a particular action

let Action = Object.freeze({
    deposit: 0,
    withdraw: 1
  });
  
  class Command
  {
    constructor(action, amount) {
      this.action = action;
      this.amount = amount;
      this.success = false;
    }
  }
  
  class Account
  {
    constructor() {
      this.balance = 0;
    }
  
    process(cmd) {
      switch(cmd.action) {
          case Action.deposit:
              this.balance += cmd.amount;
              cmd.success = true;
              break;
          case Action.withdraw:
              cmd.success = false;
              if(this.balance > cmd.amount){
                  this.balance -= cmd.amount;
                  cmd.success = true;
              }
              break;
      }
    }
  }

  const account = new Account();

  console.log(account.balance); // 0
  account.process(new Command(0,250)); // Adding 250 to our balance
  console.log(account.balance); // 250
  account.process(new Command(1,50)); // Withdrawing 50
  console.log(account.balance); // 200