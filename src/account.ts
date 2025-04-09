import { Transaction } from './transaction';

export class Account {
  private transactions: Transaction[] = new Array<Transaction>();

  deposit(number: number) {
    if (number < 0) {
      throw new Error('Deposit must be greater than 0');
    }
    this.transactions.push(
      new Transaction(
        number,
        new Intl.DateTimeFormat('de-DE').format(new Date())
      )
    );
  }

  printStatement(): string {
    let amount = 0;
    const lines = this.transactions.map((transaction) => {
      amount += transaction.amount;
      return `${transaction.date} | +${transaction.amount} | ${amount}`;
    });

    return lines.join('\n');
  }
}
