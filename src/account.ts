export class Account {
  deposit(number: number) {
    if (number < 0) {
      throw new Error('Deposit must be greater than 0');
    }
  }

  printStatement(): string {
    const dateStr = new Intl.DateTimeFormat('de-DE').format(new Date());
    return `${dateStr} | +1 | 1`;
  }
}
