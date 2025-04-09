import { Transaction } from './transaction';

export class Transactions {
  private transactions: Transaction[] = [];

  public add(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  public print(): string {
    let amount = 0;
    const lines = this.transactions.map((transaction) => {
      amount += transaction.amount;
      return `${transaction.date} | +${transaction.amount} | ${amount}`;
    });

    return lines.join('\n');
  }
}
