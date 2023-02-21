class BankAccount {
  constructor() {
    this.transactions = [];
    this.balance = 0;
    this.date = new Date().toLocaleDateString('en-GB')
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      date: this.date,
      credit: amount, 
      debit: null, 
      balance: this.balance
    });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({
      date: this.date,
      credit: null, 
      debit: amount, 
      balance: this.balance
    });
  }

  printStatement() {
    if (this.transactions.length === 0) {
      console.log("No transactions recorded.")
    } else {
      console.log("date || credit || debit || balance");
      this.transactions.forEach((transaction) => {
        const date = transaction.date
        const credit = transaction.credit ? transaction.credit.toFixed(2) : "";
        const debit = transaction.debit ? transaction.debit.toFixed(2) : "";
        const balance = transaction.balance.toFixed(2);
        console.log(`${date} || ${credit} || ${debit} || ${balance}`);
      });
    }
  }
}


module.exports = BankAccount;
  
  // Example usage
//   const account = new BankAccount();
//   account.deposit(1000, "2023-01-10");
//   account.deposit(2000, "2023-01-13");
//   account.withdraw(500, "2023-01-14");
//   account.printStatement();
  