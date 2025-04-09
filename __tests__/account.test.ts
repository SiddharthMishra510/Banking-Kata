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
});
