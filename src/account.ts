import { Transaction } from './transaction';

export class Account {
  private transaction!: Transaction;

  deposit(number: number) {
    if (number < 0) {
      throw new Error('Deposit must be greater than 0');
    }
    this.transaction = new Transaction(number);
  }

  printStatement(): string {
    const dateStr = new Intl.DateTimeFormat('de-DE').format(new Date());
    return `${dateStr} | +${this.transaction.amount} | ${this.transaction.amount}`;
  }
}
