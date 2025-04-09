import { Transaction } from './transaction';
import { Transactions } from './transactions';

export class Account {
  private transactions: Transactions;

  constructor() {
    this.transactions = new Transactions();
  }

  deposit(number: number) {
    if (number < 0) {
      throw new Error('Deposit must be greater than 0');
    }
    this.transactions.add(
      new Transaction(
        number,
        new Intl.DateTimeFormat('de-DE').format(new Date())
      )
    );
  }

  printStatement(): string {
    return this.transactions.print();
  }
}
