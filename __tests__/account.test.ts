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
});
