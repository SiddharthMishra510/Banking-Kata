export class Transaction {
  public amount: number;
  public date: string;
  constructor(number: number, date: string) {
    this.amount = number;
    this.date = date;
  }
}
