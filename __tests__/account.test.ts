import { Account } from '../src/account';

describe('Account', () => {
  it('should not throw when making a positive deposit', () => {
    const account = new Account();
    expect(() => {
      account.deposit(1);
    }).not.toThrow();
  });

  it('should throw when making a negative deposit', () => {
    const account = new Account();
    expect(() => {
      account.deposit(-1);
    }).toThrow();
  });

  it('should print correct statement after deposit of 1 unit on a given date', () => {
    const account = new Account();
    const mockDate = new Date('4.10.2025');
    jest.useFakeTimers().setSystemTime(mockDate);
    account.deposit(1);
    expect(account.printStatement()).toBe('10.4.2025 | +1 | 1');
    jest.useRealTimers();
  });

  it('should print correct statement after deposit of 5 units on a given date', () => {
    const account = new Account();
    const mockDate = new Date('4.10.2025');
    jest.useFakeTimers().setSystemTime(mockDate);
    account.deposit(5);
    expect(account.printStatement()).toBe('10.4.2025 | +5 | 5');
    jest.useRealTimers();
  });

  it('should print correct statement after two deposit of 1 unit each on a given date', () => {
    const account = new Account();
    const mockDate = new Date('4.10.2025');
    jest.useFakeTimers().setSystemTime(mockDate);
    account.deposit(1);
    account.deposit(1);
    expect(account.printStatement()).toBe(
      '10.4.2025 | +1 | 1\n10.4.2025 | +1 | 2'
    );
    jest.useRealTimers();
  });
});
